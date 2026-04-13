"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "NIM", value: "2401020075" },
    { label: "Jurusan", value: "Teknik Informatika" },
    { label: "Kampus", value: "Primakara University" },
    { label: "Status", value: "Aktif" },
  ];

  return (
    <section id="about" className="py-32 bg-page border-t border-line" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            01 / About
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo + info card */}
          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Photo placeholder with elegant frame */}
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border border-line bg-subtle">
                {/* Using the uploaded photo via img tag */}
                <img
                  src="/foto_saya.jpeg"
                  alt="I Komang Swastika Adnyana"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Initials fallback overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl text-muted opacity-30">KS</span>
                </div>
              </div>
              {/* Decorative dot */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-accent" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-4 rounded-xl bg-subtle border border-line transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <p className="text-xs text-muted mb-1 font-mono">{s.label}</p>
                  <p className="text-sm font-medium text-fg">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-4xl sm:text-5xl text-fg leading-tight mb-8">
              Seorang developer
              <br />
              <span className="italic text-accent">yang penasaran</span>
            </h2>

            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                Halo! Saya <strong className="text-fg font-medium">Komang Swastika</strong>, mahasiswa Teknik Informatika semester awal di Primakara University, Bali. Saya memiliki ketertarikan mendalam pada pengembangan web dan teknologi informasi.
              </p>
              <p>
                Perjalanan saya di dunia teknologi dimulai dari rasa ingin tahu tentang bagaimana sebuah website bekerja. Kini saya terus belajar dan mengasah kemampuan dalam membangun antarmuka yang bersih, fungsional, dan ramah pengguna.
              </p>
              <p>
                Saya percaya bahwa kode yang baik adalah seni — sebuah perpaduan antara logika yang kuat dan estetika yang tepat.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:suastika805@gmail.com"
              className="inline-flex items-center gap-2 mt-8 text-sm text-accent hover:opacity-70 transition-opacity font-mono"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              suastika805@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
