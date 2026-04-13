import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import skillsData from "@/data/skills.json";

export const metadata: Metadata = {
  title: "About — I Komang Swastika Adnyana",
  description:
    "Mahasiswa Teknik Informatika di Primakara University, Bali.",
};

// Server Component — no "use client"
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 mb-10"
        >
          ← Kembali ke Home
        </Link>

        {/* Profile */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
              Seorang anak IT yang penasaran
            </h1>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Halo! Saya <strong className="text-[var(--text-primary)]">Komang Swastika</strong>,
              mahasiswa Teknik Informatika semester 4 di Primakara University, Bali.
              Saya memiliki ketertarikan mendalam pada pengembangan web dan teknologi informasi.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Perjalanan saya di dunia teknologi dimulai dari rasa ingin tahu tentang
              bagaimana sebuah website bekerja. Kini saya terus belajar dan mengasah
              kemampuan dalam membangun antarmuka yang bersih, fungsional, dan ramah pengguna.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Saya percaya bahwa kode yang baik adalah seni — sebuah perpaduan antara
              logika yang kuat dan estetika yang tepat.
            </p>
          </div>

          {/* Photo + Stats */}
          <div className="space-y-6">
            <div className="relative w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/foto_saya.jpeg"
                alt="I Komang Swastika Adnyana"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "NIM", value: "2401020075" },
                { label: "Jurusan", value: "Teknik Informatika" },
                { label: "Kampus", value: "Primakara University" },
                { label: "Status", value: "Aktif" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)]"
                >
                  <p className="text-xs font-mono text-[var(--accent)] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-[var(--text-primary)] font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills dari JSON */}
        <div>
          <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-10">
            Teknologi yang saya kuasai
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]"
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
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-[var(--accent)] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
