"use client";

import { useEffect, useRef, useState } from "react";
import skillsData from "@/data/skills.json";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)]"
    >
      <div className="max-w-5xl mx-auto">
        <p
          className={`text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          02 / Skills
        </p>
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Teknologi yang saya kuasai
        </h2>
        <p
          className={`text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Sekumpulan tools dan teknologi yang saya gunakan dalam membangun
          proyek-proyek web. Saya terus belajar dan mengeksplorasi hal-hal baru.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {skillsData.map((skill, i) => (
            <div
              key={skill.name}
              className={`p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-mono text-sm text-[var(--text-primary)]">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[var(--accent)]">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full bg-[var(--accent)] rounded-full transition-all duration-1000 ${
                    visible ? "" : "!w-0"
                  }`}
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${500 + i * 80}ms`,
                  }}
                />
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
