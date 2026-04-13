import Link from "next/link";
import { Metadata } from "next";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
  title: "Proyek — I Komang Swastika Adnyana",
  description: "Daftar proyek yang telah saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 mb-8"
          >
            ← Kembali ke Home
          </Link>
          <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4">
            Proyek
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Yang saya bangun
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Kumpulan proyek yang saya kerjakan selama belajar pemrograman web.
            Setiap proyek adalah langkah nyata dalam perjalanan belajar saya.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
            >
              {/* Icon & Status */}
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

              {/* Title */}
              <h2 className="font-serif text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-1">
                {project.name}
              </h2>
              <p className="text-xs font-mono text-[var(--accent)] mb-3">
                {project.tagline}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs font-mono text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Lihat Detail →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
