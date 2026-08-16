"use client";

import { useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

const faqs = [
  {
    q: "How does anonymous posting work?",
    a: "No registration or login is required. When you write a post on the /write page, it is assigned an anonymous author badge and stored locally on your device or in our public collection.",
  },
  {
    q: "Can I edit or delete a post I published?",
    a: "Posts published in your browser session are saved in your local storage. You can delete or clear your local storage to remove local drafts anytime.",
  },
  {
    q: "Is EchoVerse open source?",
    a: "Yes! EchoVerse is completely open source under the MIT license. You can view the repository on GitHub, submit issues, or create pull requests.",
  },
  {
    q: "What topics are welcome on EchoVerse?",
    a: "We welcome all technical topics: AI/ML, Web Development, DevOps, Cybersecurity, Systems Programming (Rust/Go/C++), Database Architecture, and Open Source walkthroughs.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    email: "",
    topic: "General Feedback",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="site-shell" id="top">
      <SiteNav />

      <main className="container section-gap" style={{ maxWidth: "860px" }}>
        <header className="mb-4 text-center">
          <div className="eyebrow">GET IN TOUCH</div>
          <h1>Contact & Community</h1>
          <p className="text-secondary">
            Have an idea, bug report, feature suggestion, or collaboration inquiry? Reach out to the EchoVerse maintainer.
          </p>
        </header>

        {submitted ? (
          <div className="contact-card text-center py-5">
            <span style={{ fontSize: "3rem" }}>✉️</span>
            <h2 className="mt-3">Message Received!</h2>
            <p className="text-secondary">
              Thank you for reaching out. We appreciate your feedback and contributions to EchoVerse.
            </p>
            <button
              className="btn btn-outline mt-3"
              onClick={() => {
                setSubmitted(false);
                setForm({ email: "", topic: "General Feedback", message: "" });
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="contact-card mb-5">
            <h2>Send a Message</h2>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Fill out the form below to drop us a note directly.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email">Your Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="developer@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="topic">Topic / Category</label>
                <select
                  id="topic"
                  className="form-select"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                >
                  <option>General Feedback</option>
                  <option>Bug Report / Site Issue</option>
                  <option>Feature Suggestion</option>
                  <option>Open Source Collaboration</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  rows={4}
                  placeholder="Elaborate your concern or idea in detail..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button className="btn btn-primary" type="submit">
                ⚡ Send Message
              </button>
            </form>
          </div>
        )}

        {/* FAQs */}
        <section className="mt-5">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common queries about posting, open-source, and platform policy.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="faq-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
