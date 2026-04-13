"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-page"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-[0.06] dark:opacity-[0.08] blur-3xl"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-subtle text-xs text-muted mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for collaboration
        </div>

        {/* Name heading */}
        <h1
          className={`font-display text-5xl sm:text-7xl lg:text-8xl text-fg leading-[0.95] mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          I Komang
          <br />
          <span className="text-accent italic">Swastika</span>
          <br />
          Adnyana
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl text-muted max-w-lg leading-relaxed mb-12 font-body transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Mahasiswa Teknik Informatika di{" "}
          <span className="text-fg font-medium">Primakara University</span>.
          Membangun web yang fungsional dan estetis
          <span className="font-mono text-accent ml-1">
            {cursor ? "_" : " "}
          </span>
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fg text-bg text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: "var(--bg)" }}
          >
            Hubungi Saya
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-sm text-muted hover:text-fg hover:border-fg transition-colors"
          >
            Lihat Profil
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-6 flex items-center gap-3 text-xs text-muted transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="w-px h-8 bg-border" />
            <span className="w-px h-4 bg-border opacity-50" />
          </div>
          Scroll
        </div>
      </div>
    </section>
  );
}
