# Portfolio — I Komang Swastika Adnyana

Website portofolio pribadi yang dibangun dengan **Next.js 14** (App Router) dan **Tailwind CSS**.

🔗 **Live Demo**: [portfolio-puce-eight-71.vercel.app](https://portfolio-puce-eight-71.vercel.app/)

## Fitur

- Dark mode / Light mode (otomatis detect preferensi sistem)
- Responsive untuk tampilan mobile, tablet, dan desktop
- Smooth scroll animations (Intersection Observer)
- Multi-page navigation menggunakan `next/link`
- Dynamic route untuk halaman detail proyek (`/projects/[slug]`)
- Form kontak dengan validasi client-side
- Data statis dari file JSON lokal (`/data/`)

## Struktur Halaman

| Halaman | Route | Keterangan |
|---|---|---|
| Home | `/` | Hero, About, Skills, Projects, Contact |
| About | `/about` | Profil lengkap & daftar skill |
| Projects | `/projects` | Daftar semua proyek |
| Project Detail | `/projects/[slug]` | Detail tiap proyek (dynamic route) |
| Contact | `/contact` | Form kontak dengan validasi |

## Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/suastika805-hash/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Tambahkan foto profil

Salin file `foto_saya.jpeg` ke folder `public/`:

```
public/
  foto_saya.jpeg
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 5. Build untuk production

```bash
npm run build
npm run start
```

## Struktur Project

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                  # Halaman utama (Home)
│   ├── about/
│   │   └── page.tsx              # Halaman About
│   ├── projects/
│   │   ├── page.tsx              # Daftar proyek
│   │   └── [slug]/
│   │       └── page.tsx          # Detail proyek (dynamic route)
│   └── contact/
│       └── page.tsx              # Halaman Contact
├── components/
│   ├── ThemeProvider.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/
│   ├── projects.json             # Data proyek statis
│   └── skills.json               # Data skill statis
└── public/
    └── foto_saya.jpeg
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: DM Serif Display + DM Sans + JetBrains Mono
- **Deploy**: Vercel
