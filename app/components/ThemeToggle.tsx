"use client";

import { useTheme } from "./ThemeProvider";
import type { Theme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; label: string; icon: React.ReactNode; short: string }[] = [
    { value: "light", label: "Light", short: "LGT",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
    },
    { value: "dark", label: "Dark", short: "DRK",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    },
    { value: "system", label: "System", short: "SYS",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    },
  ];

  return (
    <div className="theme-toggle" role="group" aria-label="Theme selector">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`theme-toggle-btn ${theme === opt.value ? "active" : ""}`}
          onClick={() => setTheme(opt.value)}
          aria-pressed={theme === opt.value}
          title={opt.label}
          aria-label={opt.label}
        >
          <span className="theme-icon" aria-hidden="true">{opt.icon}</span>
          <span className="theme-short">{opt.short}</span>
          <span className="theme-indicator" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}