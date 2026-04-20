# GelApp Web — Next.js 14 SEO Sitesi

Türkiye'nin güvenilir yerel hizmet platformu **GelApp**'in tanıtım ve SEO web sitesi.  
Stack: **Next.js 14 App Router · TypeScript · Tailwind CSS · Vercel**

---

## ⚡ Hızlı Başlangıç

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusu
npm run dev
# → http://localhost:3000

# Üretim build
npm run build
npm run start
```

---

## 🚀 Vercel Deploy

1. [vercel.com](https://vercel.com) → **New Project**
2. Bu repoyu import et
3. **Framework Preset:** Next.js (otomatik algılanır)
4. **Build Command:** `next build` (varsayılan)
5. **Output Directory:** `.next` (varsayılan)
6. **Deploy** — `vercel.json` gerekmez, sıfır config

### Domain Ayarı

Vercel dashboard → Project → Settings → Domains → `gelapp.com.tr` ekle.

---

## 📁 Proje Yapısı

```
D:/gelappweb/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer + FloatingCTA)
│   ├── page.tsx                # Ana sayfa (/)
│   ├── robots.ts               # /robots.txt (otomatik)
│   ├── sitemap.ts              # /sitemap.xml (otomatik, 958+ URL)
│   ├── hizmetler/
│   │   ├── page.tsx            # /hizmetler — tüm kategoriler
│   │   └── [kategori]/
│   │       ├── page.tsx        # /hizmetler/[kategori]
│   │       └── [alt]/
│   │           └── page.tsx    # /hizmetler/[kategori]/[alt]
│   ├── [sehir]/
│   │   ├── page.tsx            # /[sehir] — şehir landing page
│   │   └── [kategori]/
│   │       └── page.tsx        # /[sehir]/[kategori] — 810 programatik sayfa
│   ├── rehber/
│   │   ├── page.tsx            # /rehber — blog index
│   │   └── [slug]/
│   │       └── page.tsx        # /rehber/[slug] — blog yazısı
│   ├── hakkimizda/page.tsx
│   ├── iletisim/page.tsx
│   ├── indir/page.tsx
│   ├── kvkk/page.tsx
│   ├── kullanim-kosullari/page.tsx
│   └── cerez-politikasi/page.tsx
├── components/
│   ├── Header.tsx              # Sticky header + mobile menu
│   ├── Footer.tsx              # Sitewide footer
│   ├── FloatingCTA.tsx         # Sabit "App'i İndir" butonu
│   ├── JsonLd.tsx              # Schema.org bileşenleri
│   ├── AppDownloadButtons.tsx  # App Store + Google Play butonları
│   ├── CategorySearch.tsx      # Hero dropdown (client component)
│   ├── HowItWorks.tsx          # 3 adım bölümü
│   ├── FaqSection.tsx          # Accordion SSS (client component)
│   └── Breadcrumb.tsx          # Breadcrumb navigasyonu
├── data/
│   ├── categories.ts           # 10 kategori + alt kategoriler + FAQ
│   ├── cities.ts               # 81 il (slug + plaka)
│   └── blog-posts.ts           # 6 blog yazısı (800-1200 kelime)
└── lib/
    └── seo.ts                  # Metadata helpers + cityLocative()
```

---

## 🗺️ URL Yapısı ve Sayfa Sayıları

| Rota | Sayfa Sayısı |
|---|---|
| `/` ana sayfa | 1 |
| `/hizmetler` + `/hizmetler/[kategori]` | 11 |
| `/hizmetler/[kategori]/[alt]` | ~42 |
| `/[sehir]` (81 il) | 81 |
| `/[sehir]/[kategori]` (81 × 10) | **810** |
| `/rehber` + `/rehber/[slug]` | 7 |
| Statik sayfalar | 6 |
| **Toplam** | **~958** |

Sitemap: `https://gelapp.com.tr/sitemap.xml`

---

## 🔧 İçerik Güncelleme

### Yeni kategori eklemek

1. `data/categories.ts` → `CATEGORIES` dizisine yeni obje ekle
2. `components/Header.tsx` otomatik güncellenir (CATEGORIES'den okur)
3. Build → Yeni kategorinin tüm şehir×kategori kombinasyonları otomatik üretilir

### Yeni il eklemek

`data/cities.ts` → `CITIES` dizisine `{ name, slug, plate }` ekle.

### Yeni blog yazısı eklemek

`data/blog-posts.ts` → `BLOG_POSTS` dizisine yeni obje ekle.  
`content` alanı basit Markdown destekler: `## Başlık`, `### Alt`, `- liste`, `**kalın**`, `[link](url)`.

### Site URL'sini değiştirmek

`lib/seo.ts` → `SITE_URL` sabitini güncelle.

---

## 🎨 Tasarım Sistemi

| Token | Değer |
|---|---|
| Primary | `#EA580C` (orange-600) |
| Font | Inter (Google Fonts, `swap`) |
| Border radius | 12-16px (`rounded-xl` / `rounded-2xl`) |
| Card component | `.card` — `bg-white rounded-2xl border border-gray-100 shadow-sm` |

---

## 📊 SEO Özellikleri

- ✅ `generateStaticParams` → tüm sayfalar build time'da SSG
- ✅ `app/sitemap.ts` → otomatik `/sitemap.xml` (958+ URL)
- ✅ `app/robots.ts` → otomatik `/robots.txt`
- ✅ `buildMetadata()` → her sayfada `title` + `description` + `canonical` + OG + Twitter
- ✅ JSON-LD: `Organization`, `WebSite`, `Service`, `LocalBusiness`, `FAQPage`, `Article`, `BreadcrumbList`
- ✅ `cityLocative()` → Türkçe iyelik eki (İstanbul'da, Ankara'da…)
- ✅ `next/font` Inter (swap strategy, CLS sıfır)
- ✅ `next/image` WebP/AVIF otomatik

---

## ⚠️ Yasal Uyarı

`/kvkk`, `/kullanim-kosullari` ve `/cerez-politikasi` sayfaları **ÖRNEK/TASLAK** içerik barındırmaktadır.  
**Yayına çıkmadan önce bu metinlerin bir hukuk danışmanı tarafından onaylanması zorunludur.**

---

## 📦 Bağımlılıklar

| Paket | Amaç |
|---|---|
| `next@14` | Framework |
| `lucide-react` | İkonlar |
| `next-sitemap` | (kurulu, sitemap app router ile yapılıyor) |
| `tailwindcss` | Stil |
| `typescript` | Tip güvenliği |
"# gelappweb" 
