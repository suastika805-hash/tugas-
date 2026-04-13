"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi.";
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!form.message.trim()) newErrors.message = "Pesan wajib diisi.";
    else if (form.message.trim().length < 10)
      newErrors.message = "Pesan minimal 10 karakter.";
    return newErrors;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

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

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
              Mari kita terhubung
            </h1>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Saya terbuka untuk diskusi, kolaborasi proyek, atau sekadar
              ngobrol tentang teknologi. Jangan ragu untuk menghubungi saya!
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "Email",
                  value: "suastika805@gmail.com",
                  href: "mailto:suastika805@gmail.com",
                  icon: "✉️",
                },
                {
                  label: "GitHub",
                  value: "github.com/suastika805-hash",
                  href: "https://github.com/suastika805-hash",
                  icon: "🐙",
                },
                {
                  label: "Kampus",
                  value: "Primakara University, Bali",
                  href: "https://primakara.ac.id",
                  icon: "🎓",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-all duration-200 group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-mono text-[var(--accent)]">
                      {item.label}
                    </p>
                    <p className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl mb-4 block">✅</span>
                <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-2">
                  Pesan Terkirim!
                </h2>
                <p className="text-[var(--text-secondary)] text-sm">
                  Terima kasih sudah menghubungi saya. Saya akan membalas
                  secepatnya.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 text-xs font-mono text-[var(--accent)] hover:underline"
                >
                  Kirim pesan lagi
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                  Kirim Pesan
                </h2>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama kamu"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent)] transition-colors duration-200 ${
                      errors.name ? "border-red-500" : "border-[var(--border)]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@kamu.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent)] transition-colors duration-200 ${
                      errors.email
                        ? "border-red-500"
                        : "border-[var(--border)]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tulis pesanmu di sini..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-[var(--bg-primary)] border text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-[var(--border)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-mono hover:opacity-90 active:scale-95 transition-all duration-200"
                >
                  Kirim Pesan →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
