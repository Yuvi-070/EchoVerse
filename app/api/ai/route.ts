import { NextRequest, NextResponse } from "next/server";

const NVIDIA_ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions";
const MODEL = "nvidia/nemotron-3-ultra-550b-a55b";

const MAX_TOKENS: Record<AiAction, number> = {
  title: 256,
  excerpt: 256,
  tags: 256,
  polish: 4096,
};

export type AiAction = "title" | "excerpt" | "tags" | "polish";

interface AiRequestBody {
  action: AiAction;
  title?: string;
  excerpt?: string;
  category?: string;
  content?: string;
}

function buildPrompt(body: AiRequestBody): string {
  const { action, title, excerpt, category, content } = body;
  const topic = title || content?.trim().slice(0, 1500);

  switch (action) {
    case "title":
      return `You are a technical writing assistant for EchoVerse, an anonymous engineering blog.
Given the article details below, suggest ONE catchy, precise technical article title (max 70 characters). No quotes, no numbering, no markdown.
Category: ${category ?? "unspecified"}
Context: ${topic ?? "none provided"}`;
    case "excerpt":
      return `You are a technical writing assistant for EchoVerse, an anonymous engineering blog.
Write a 1-2 sentence excerpt (max 200 characters) that teases the article below without giving away the conclusion. Plain text only.
Title: ${title ?? "Untitled"}
Excerpt draft: ${excerpt ?? "none"}
Article:
${content ?? ""}`;
    case "tags":
      return `You are a technical writing assistant for EchoVerse. Suggest exactly 5 short hashtag tags for the article below that best fit its technical topics.
Return ONLY the tags as lowercase kebab-case words separated by commas. No bullets, no numbers, no explanation.
Category: ${category ?? "unspecified"}
Article:
${content ?? topic ?? ""}`;
    case "polish":
      return `You are a technical writing assistant for EchoVerse, an anonymous engineering blog.
Polish the article below: improve clarity, flow, and technical precision. Keep the author's meaning, structure, facts, and code references intact. Preserve blank-line paragraph separations and "## " section headings. Do not add opinions or fabricated details.
Article:
${content ?? ""}`;
  }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.NVIDIA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NVIDIA_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  let body: AiRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const action = body.action;
  if (!MAX_TOKENS[action]) {
    return NextResponse.json({ error: "Unsupported AI action." }, { status: 400 });
  }

  const prompt = buildPrompt(body);

  try {
    const response = await fetch(NVIDIA_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: "You are a precise, concise technical writing assistant." },
          { role: "user", content: prompt },
        ],
        max_tokens: MAX_TOKENS[action],
        temperature: action === "polish" ? 0.3 : 0.7,
        chat_template_kwargs: { enable_thinking: false, force_nonempty_content: true },
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { error: `NVIDIA API error (${response.status}): ${detail}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text: string = data?.choices?.[0]?.message?.content?.trim() ?? "";

    if (!text) {
      return NextResponse.json({ error: "Nemotron returned an empty response." }, { status: 502 });
    }

    if (action === "tags") {
      const tags = text
        .split(",")
        .map((t) => t.trim().toLowerCase().replace(/^#/, "").replace(/[^a-z0-9-]/g, ""))
        .filter(Boolean);
      return NextResponse.json({ result: text, tags });
    }

    return NextResponse.json({ result: text });
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to reach NVIDIA API: ${(err as Error).message}` },
      { status: 502 }
    );
  }
}
