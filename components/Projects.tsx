"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-secondary)]"
    >
      <div className="max-w-5xl mx-auto">
        <p
          className={`text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          03 / Projects
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Proyek yang saya kerjakan
          </h2>
          <Link
            href="/projects"
            className={`text-sm font-mono text-[var(--accent)] hover:underline whitespace-nowrap transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Lihat semua →
          </Link>
        </div>
        <p
          className={`text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Kumpulan proyek yang saya bangun untuk mengasah kemampuan dan
          menyelesaikan masalah nyata.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-full border ${
                    project.status === "Completed"
                      ? "text-green-500 border-green-500 border-opacity-30 bg-green-500 bg-opacity-10"
                      : "text-[var(--accent)] border-[var(--accent)] border-opacity-30 bg-[var(--accent)] bg-opacity-10"
                  }`}
                >
                  {project.status === "Completed" ? "✓ Selesai" : "⟳ Ongoing"}
                </span>
              </div>

              <h3 className="font-serif text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-1">
                {project.name}
              </h3>
              <p className="text-xs font-mono text-[var(--accent)] mb-3">
                {project.tagline}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="text-xs font-mono text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Lihat Detail →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
