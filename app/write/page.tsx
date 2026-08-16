"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { categories } from "../data/categories";
import { saveUserPost, type Post } from "../data/posts";
import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "@uiw/react-md-editor/markdown-editor.css";
import "prismjs/themes/prism-okaidia.css";

type AiAction = "title" | "excerpt" | "tags" | "polish";

const AI_LABELS: Record<AiAction, string> = {
  title: "Suggest Title",
  excerpt: "Generate Excerpt",
  tags: "Suggest Tags",
  polish: "Polish Content",
};

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("programming");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(["tech", "open-source"]);
  const [preview, setPreview] = useState(false);
  const [published, setPublished] = useState(false);
  const [aiBusy, setAiBusy] = useState<AiAction | null>(null);
  const [aiError, setAiError] = useState("");

  const runAi = async (action: AiAction) => {
    setAiError("");
    if (action === "excerpt" && !content.trim()) {
      setAiError("Write some article content first so Nemotron can summarize it.");
      return;
    }
    if (action === "polish" && !content.trim()) {
      setAiError("Write some article content first so Nemotron can polish it.");
      return;
    }
    setAiBusy(action);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, title, excerpt, category, content }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "AI request failed");

      if (action === "title") setTitle(data.result.trim().replace(/^["']|["']$/g, "").slice(0, 100));
      if (action === "excerpt") setExcerpt(data.result.trim().slice(0, 200));
      if (action === "polish") setContent(data.result.trim());
      if (action === "tags") {
        const clean = Array.isArray(data.tags) ? data.tags : [];
        setTags((prev) => {
          const merged = [...prev, ...clean.filter((t: string) => !prev.includes(t))];
          return merged.slice(0, 8);
        });
      }
    } catch (err) {
      setAiError((err as Error).message);
    } finally {
      setAiBusy(null);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const trimmed = tagInput.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
      if (trimmed && !tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-") + "-" + Date.now().toString().slice(-4);

    const wordCount = content.trim().split(/\s+/).length;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 200));

    const newPost: Post = {
      id: Date.now().toString(),
      slug,
      title: title.trim(),
      category,
      author: "Anonymous",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: `${readTimeMins} min read`,
      excerpt: excerpt.trim() || content.trim().slice(0, 140) + "...",
      content: content.trim(),
      tags: tags.length > 0 ? tags : ["anonymous"],
    };

    saveUserPost(newPost);
    setPublished(true);

    setTimeout(() => {
      router.push(`/blog/${slug}`);
    }, 1500);
  };

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap">
        <header className="mb-xl text-center">
          <div className="eyebrow">✦ Open & Anonymous</div>
          <h1>Publish a Techno Article</h1>
          <p className="text-secondary" style={{ maxWidth: "700px", margin: "0.5rem auto 0" }}>
            No signup, no tracking. Write your technical findings, tutorials, or engineering thoughts and publish instantly to EchoVerse.
          </p>
        </header>

        {published ? (
          <div className="card text-center py-xl mx-auto" style={{ maxWidth: "600px" }}>
            <span style={{ fontSize: "3rem" }}>⚡</span>
            <h2 className="mt-3">Article Published Anonymously!</h2>
            <p>Redirecting to your new post...</p>
          </div>
        ) : (
          <div className="grid" style={{ gridTemplateColumns: "320px 1fr", gap: "var(--space-xl)", alignItems: "start" }}>
            {/* Sticky Meta Panel */}
            <aside className="card p-lg" style={{ position: "sticky", top: "88px" }}>
              <div className="ai-copilot mb-lg">
                <div className="ai-copilot-head mb-md">
                  <span className="ai-copilot-badge">✦</span>
                  <div>
                    <strong>Nemotron 3 Ultra Copilot</strong>
                    <span className="text-muted">Powered by NVIDIA</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-sm">
                  {(["title", "excerpt", "tags", "polish"] as AiAction[]).map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="btn btn-ghost w-100"
                      onClick={() => runAi(action)}
                      disabled={aiBusy !== null}
                    >
                      {aiBusy === action ? "✦ Thinking..." : `✨ ${AI_LABELS[action]}`}
                    </button>
                  ))}
                </div>
                {aiError && <p className="ai-copilot-error">{aiError}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>{cat.icon} {cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Tags</label>
                <div className="tags-input d-flex flex-wrap gap-sm p-sm" style={{ background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)" }}>
                  {tags.map((t) => (
                    <span key={t} className="tag-chip">{t}<button type="button" onClick={() => removeTag(t)}>×</button></span>
                  ))}
                  <input type="text" placeholder="Add tag..." value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={handleAddTag} style={{ background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", flex: 1, minWidth: "80px" }} />
                </div>
              </div>

              <div className="mt-xl pt-lg" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div className="font-mono text-xs text-dim mb-sm">PUBLISH CHECKLIST</div>
                <ul className="text-sm" style={{ color: "var(--text-secondary)", paddingLeft: "1rem" }}>
                  <li>Title is clear</li>
                  <li>Content has headings</li>
                  <li>Tags added</li>
                  <li>Anonymous by default</li>
                </ul>
              </div>
            </aside>

            {/* Editor Column */}
            <div>
              <div className="d-flex justify-content-between gap-2 mb-3">
                <button type="button" className={`btn ${!preview ? "btn-primary" : "btn-ghost"}`} onClick={() => setPreview(false)}>✏️ Editor</button>
                <button type="button" className={`btn ${preview ? "btn-primary" : "btn-ghost"}`} onClick={() => setPreview(true)}>👁️ Live Preview</button>
              </div>

            {!preview ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Article Title</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., Why We Switched from REST to gRPC in Production"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={100}
                    required
                  />
                  <div className="char-count">{title.length}/100</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Short Summary (Excerpt)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Brief 1-2 sentence preview for the card view..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    maxLength={200}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Article Body (Markdown)</label>
                  <div className="md-editor-wrapper">
                    <MDEditor
                      value={content}
                      // @ts-expect-error - MDEditor onChange type is complex but works at runtime
                      onChange={(v: string) => setContent(v)}
                      height="400px"
                      preview="live"
                      // @ts-expect-error - commands type is complex but works at runtime
                      commands={[
                        "undo",
                        "redo",
                        "|",
                        "heading",
                        "bold",
                        "italic",
                        "strikethrough",
                        "code",
                        "code-block",
                        "|",
                        "quote",
                        "unordered-list",
                        "ordered-list",
                        "task",
                        "|",
                        "link",
                        "image",
                        "table",
                        "|",
                        "preview",
                        "fullscreen",
                      ] as string[]}
                      textareaProps={{
                        placeholder: "Write your article in Markdown. Use ## for headings, ``` for code blocks, - for lists...",
                        spellCheck: true,
                      }}
                      previewProps={{
                        component: "div",
                        className: "md-preview-content",
                      }}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="text-muted" style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)" }}>
                    ✍ Author: Anonymous
                  </span>
                  <button type="submit" className="btn btn-magenta">
                    ✦ Publish Anonymously
                  </button>
                </div>
              </form>
            ) : (
              /* Preview Mode */
              <div className="write-preview">
                <div className="mb-2">
                  <span className="tag">#{category}</span>
                </div>
                <h2>{title || "Untitled Article"}</h2>
                <p className="text-muted" style={{ fontSize: "0.85rem" }}>
                  By Anonymous · Just now
                </p>

                <hr style={{ borderColor: "var(--border-color)", margin: "1.5rem 0" }} />

                <div className="article-body md-preview-content">
                  {content ? (
                    <MarkdownPreview
                      source={content}
                      className="md-preview-content"
                    />
                  ) : (
                    <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                      Nothing written yet. Switch back to the Editor tab to start typing...
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
