import Link from 'next/link';
import type { Metadata } from 'next';
import { CATEGORIES } from '@/data/categories';
import { CITIES } from '@/data/cities';
import { buildMetadata } from '@/lib/seo';
import HowItWorks from '@/components/HowItWorks';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import CategorySearch from '@/components/CategorySearch';
import {
  Sparkles, Wrench, Truck, BookOpen, Heart, Scissors,
  Home, Camera, Activity, Package, ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'GelApp — Güvenilir Yerel Hizmet Platformu',
  description:
    'Temizlik, tadilat, nakliyat ve daha fazlası için güvenilir ustayı GelApp\'te bul. Teklif al, karşılaştır, işi yaptır.',
  path: '/',
});

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles, Wrench, Truck, BookOpen, Heart, Scissors,
  Home, Camera, Activity, Package,
};

const POPULAR_CITIES = ['istanbul', 'ankara', 'izmir', 'bursa', 'antalya', 'adana', 'konya', 'gaziantep'];

export default function HomePage() {
  const popularCities = CITIES.filter((c) => POPULAR_CITIES.includes(c.slug));

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Güvenilir Ustayı{' '}
            <span className="text-primary-600">Kapına Getir</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Temizlik, tadilat, nakliyat ve onlarca hizmet kategorisinde
            referanslı ustalara anında ulaş. Teklif al, karşılaştır, işi yaptır.
          </p>

          {/* Category search dropdown */}
          <CategorySearch />

          <div className="mt-8">
            <AppDownloadButtons className="justify-center" />
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Ücretsiz · 10.000+ kayıtlı usta · Türkiye geneli
          </p>
        </div>
      </section>

      {/* ── KATEGORİLER ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title text-center">Hizmet Kategorileri</h2>
          <p className="section-subtitle text-center">
            İhtiyacın olan hizmeti bul, dakikalar içinde teklif al
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.icon] ?? Wrench;
              return (
                <Link
                  key={cat.slug}
                  href={`/hizmetler/${cat.slug}`}
                  className="card p-5 flex flex-col items-center text-center gap-3 hover:border-primary-200"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-primary-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{cat.name}</span>
                  <span className="text-xs text-gray-500 leading-relaxed">{cat.shortDesc}</span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/hizmetler" className="btn-primary">
              Tüm Hizmetleri Gör <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NASIL ÇALIŞIR ── */}
      <HowItWorks />

      {/* ── NEDEN GELAPP ── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title text-center">Neden GelApp?</h2>
          <p className="section-subtitle text-center">Binlerce kullanıcının tercih ettiği platform</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🔒', title: 'Güvenilir Ustalar', desc: 'Kimlik doğrulamalı, değerlendirmeli usta profilleri.' },
              { emoji: '💬', title: 'Hızlı Teklif', desc: 'Birden fazla ustadan kısa sürede teklif alın.' },
              { emoji: '⭐', title: 'Şeffaf Değerlendirme', desc: 'Gerçek kullanıcı yorumlarıyla bilinçli karar verin.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPÜLER ŞEHİRLER ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title text-center">Popüler Şehirlerde Usta Bul</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl hover:border-primary-300 hover:text-primary-600 transition-colors shadow-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP DOWNLOAD ── */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen İndir, Ücretsiz Kullan
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            App Store ve Google Play&apos;de ücretsiz. Birkaç dakikada ilk teklifini al.
          </p>
          <AppDownloadButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
