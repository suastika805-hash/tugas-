"use client";

import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    label: "Email",
    value: "suastika805@gmail.com",
    href: "mailto:suastika805@gmail.com",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/swastika",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: "Kampus",
    value: "Primakara University, Bali",
    href: "https://primakara.ac.id",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-32 bg-page border-t border-line" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            03 / Contact
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Heading */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl text-fg leading-tight mb-6">
              Mari kita
              <br />
              <span className="italic text-accent">terhubung</span>
            </h2>
            <p className="text-muted leading-relaxed max-w-md mb-8">
              Saya terbuka untuk diskusi, kolaborasi proyek, atau sekadar ngobrol tentang teknologi. Jangan ragu untuk menghubungi saya!
            </p>

            {/* Big email button */}
            <a
              href="mailto:suastika805@gmail.com"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-display text-2xl text-fg group-hover:text-accent transition-colors">
                suastika805@gmail.com
              </span>
              <svg
                className="text-accent group-hover:translate-x-1 transition-transform"
                width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right: Contact cards */}
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border border-line bg-subtle hover:border-accent/40 hover:bg-subtle/80 transition-all duration-300 group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl border border-line flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/30 transition-colors flex-shrink-0">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted font-mono mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-fg truncate">{c.value}</p>
                </div>
                <svg
                  className="ml-auto text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0"
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 mt-24 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted font-mono">
          © 2024 I Komang Swastika Adnyana
        </p>
        <p className="text-xs text-muted">
          Built with <span className="text-accent">Next.js</span> & <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </section>
  );
}
