# Portfolio — I Komang Swastika Adnyana

Website portofolio pribadi yang dibangun dengan **Next.js 14** (App Router) dan **Tailwind CSS**.

## ✨ Fitur

- 🌗 Dark mode / Light mode (otomatis detect preferensi sistem)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scroll animations (Intersection Observer)
- 🎨 Clean minimalist design dengan DM Serif Display + DM Sans
- 4 Section: Hero, About, Skills, Contact

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Tambahkan foto profil

Salin file `foto_saya.jpeg` ke folder `public/`:

```
public/
  foto_saya.jpeg
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk production

```bash
npm run build
npm run start
```

## 📁 Struktur Project

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout dengan ThemeProvider
│   └── page.tsx          # Halaman utama
├── components/
│   ├── ThemeProvider.tsx # Dark/light mode context
│   ├── Navbar.tsx        # Navigasi + theme toggle
│   ├── Hero.tsx          # Section 1: Hero
│   ├── About.tsx         # Section 2: About
│   ├── Skills.tsx        # Section 3: Skills
│   └── Contact.tsx       # Section 4: Contact
├── public/
│   └── foto_saya.jpeg    # Foto profil (tambahkan manual)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🎨 Kustomisasi

Edit data di masing-masing komponen:
- **Hero.tsx** — nama, tagline, CTA buttons
- **About.tsx** — bio, stats (NIM, jurusan, dll)
- **Skills.tsx** — skill list, level, deskripsi
- **Contact.tsx** — email, GitHub, info kampus

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: DM Serif Display + DM Sans + JetBrains Mono (Google Fonts)
- **Language**: TypeScript
