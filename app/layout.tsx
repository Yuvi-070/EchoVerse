import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "ECHO-VERSE — Techno Blog for Builders",
  description:
    "An open-source, anonymous techno blog where developers share practical engineering stories, tutorials, and community insights. No login required.",
  keywords: [
    "tech blog",
    "programming",
    "web development",
    "open source",
    "anonymous blog",
    "developer community",
  ],
  authors: [{ name: "Yuvraj Tale" }],
  openGraph: {
    title: "ECHO-VERSE — Techno Blog for Builders",
    description:
      "An open-source, anonymous techno blog. Read and publish engineering stories without signing up.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
