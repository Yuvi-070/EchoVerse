"use client";

import { useEffect, useState, useRef } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const headingsRef = useRef<Heading[]>([]);

useEffect(() => {
    const headingsArray = Array.from(
      document.querySelectorAll(".article-body h2, .article-body h3")
    ).map((el, index) => {
      const id = `heading-${index}`;
      if (!el.id) el.id = id;
      return {
        id,
        text: el.textContent || "",
        level: parseInt(el.tagName[1]),
      };
    });
    headingsRef.current = headingsArray;
  }, []);

  useEffect(() => {
    setHeadings(headingsRef.current);
  }, []);

  useEffect(() => {
    const headingsForObserver = headingsRef.current;
    const handleScroll = () => {
      const article = document.querySelector(".article-body");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const articleHeight = rect.height;

      const scrollTop = -rect.top;
      const maxScroll = articleHeight - viewportHeight;
      const progressPercent = Math.max(0, Math.min(100, (scrollTop / maxScroll) * 100));
      setProgress(progressPercent);

      let currentActive = "";
      const observerOptions = {
        root: null,
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
          }
        });
        setActiveId(currentActive);
      }, observerOptions);

      headingsForObserver.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, headings, activeId };
}

export default function ReadingProgress() {
  const { progress, headings, activeId } = useReadingProgress();

  if (headings.length === 0) return null;

  return (
    <>
      <div
        className="reading-progress"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div className="reading-progress-track" aria-hidden="true">
          <div
            className="reading-progress-fill"
            style={{ width: `${progress}%` }}
          >
            <span className="progress-glow" aria-hidden="true" />
          </div>
        </div>
        <div className="reading-progress-marker" style={{ left: `${progress}%` }} aria-hidden="true">
          <span className="marker-dot" />
          <span className="marker-value">{Math.round(progress)}%</span>
        </div>
      </div>

      <aside className="toc-sidebar" aria-label="Table of Contents">
        <div className="toc-header">
          <h4 className="toc-title">On this page</h4>
          <span className="toc-count">{headings.length} sections</span>
        </div>
        <nav className="toc-nav">
          <ul className="toc-list" role="list">
            {headings.map((h) => (
              <li key={h.id} className={`toc-item level-${h.level} ${activeId === h.id ? "active" : ""}`}>
                <a
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(h.id);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                      history.pushState(null, "", `#${h.id}`);
                    }
                  }}
                  className="toc-link"
                  aria-current={activeId === h.id ? ("true" as const) : undefined}
                >
                  <span className="toc-bullet" aria-hidden="true">
                    <span className="toc-bullet-inner" />
                  </span>
                  <span className="toc-text">{h.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}