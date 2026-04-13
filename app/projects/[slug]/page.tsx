import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import projectsData from "@/data/projects.json";

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata per project
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Proyek Tidak Ditemukan" };
  return {
    title: `${project.name} — I Komang Swastika Adnyana`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 mb-10"
        >
          ← Kembali ke Proyek
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{project.icon}</span>
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                project.status === "Completed"
                  ? "text-green-500 border-green-500 border-opacity-30 bg-green-500 bg-opacity-10"
                  : "text-[var(--accent)] border-[var(--accent)] border-opacity-30 bg-[var(--accent)] bg-opacity-10"
              }`}
            >
              {project.status === "Completed" ? "✓ Selesai" : "⟳ In Progress"}
            </span>
          </div>

          <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-2">
            {project.tagline}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
            {project.name}
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
          <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-sm font-mono bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
            Keunggulan
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[var(--accent)] font-mono mt-0.5">→</span>
                <span className="text-[var(--text-secondary)]">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
            Fitur Utama
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]"
              >
                <h3 className="font-mono text-sm text-[var(--text-primary)] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm font-mono text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-mono hover:opacity-90 transition-opacity duration-200"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
