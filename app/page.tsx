"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const target = "Where Words Resonate and Stories Reverberate";

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const type = setInterval(() => {
        i += 1;
        setText(target.slice(0, i));
        if (i >= target.length) clearInterval(type);
      }, 40);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="top" className="landing-shell">
      <div className="animation09">
        <div className="container card visible landing-card" id="main">
          <div className="wrap">
            <div className="terminal">
              <hgroup className="head">
                <p className="title">ECHO-VERSE</p>
              </hgroup>
              <div className="body">
                <pre className="pre">
                  <code>-&nbsp;</code>
                  <code>npx&nbsp;</code>
                  <code className="cmd">{text}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center my-4 landing-actions">
        <p className="landing-copy">Where words resonate and stories reverberate.</p>
        <Link className="btn btn-primary mx-2" href="/main">
          Enter Blog
        </Link>
        <Link className="btn btn-outline-light mx-2" href="/about">
          About
        </Link>
      </div>
    </main>
  );
}
