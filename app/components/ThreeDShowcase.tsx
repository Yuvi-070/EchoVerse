"use client";

import type { CSSProperties } from "react";

const highlights = [
  { title: "Live Trend Radar", text: "Track hot topics across frontend, AI, cloud, and product engineering." },
  { title: "Learning Paths", text: "Follow curated journeys from beginner concepts to production practices." },
  { title: "Creator Spotlight", text: "Discover contributors and community projects worth watching." },
];

export default function ThreeDShowcase() {
  return (
    <section className="container my-4">
      <div className="three-d-grid">
        <div className="three-d-cube-card">
          <div className="cube-loader" aria-hidden="true">
            <div className="cube-top" />
            <div className="cube-wrapper">
              <span style={{ "--i": 0 } as CSSProperties} className="cube-span" />
              <span style={{ "--i": 1 } as CSSProperties} className="cube-span" />
              <span style={{ "--i": 2 } as CSSProperties} className="cube-span" />
              <span style={{ "--i": 3 } as CSSProperties} className="cube-span" />
            </div>
          </div>
          <p className="cube-label">3D Tech Pulse</p>
        </div>
        <div className="feature-stack">
          {highlights.map((item, index) => (
            <article className="feature-layer" key={item.title} style={{ "--layer": index } as CSSProperties}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
