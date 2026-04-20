import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES, getCityBySlug } from '@/data/cities';
import { CATEGORIES } from '@/data/categories';
import { buildMetadata, cityLocative, SITE_URL } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import Breadcrumb from '@/components/Breadcrumb';
import {
  Sparkles, Wrench, Truck, BookOpen, Heart, Scissors,
  Home, Camera, Activity, Package,
} from 'lucide-react';

// Known static paths to avoid conflicts
const STATIC_PATHS = new Set([
  'hizmetler', 'rehber', 'hakkimizda', 'iletisim', 'indir',
  'kvkk', 'kullanim-kosullari', 'cerez-politikasi',
]);

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles, Wrench, Truck, BookOpen, Heart, Scissors,
  Home, Camera, Activity, Package,
};

interface Props {
  params: { sehir: string };
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ sehir: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (STATIC_PATHS.has(params.sehir)) return {};
  const city = getCityBySlug(params.sehir);
  if (!city) return {};
  return buildMetadata({
    title: `${city.name} Usta & Hizmet — GelApp`,
    description: `${city.name} için güvenilir ustalar GelApp\'te. Temizlik, tadilat, nakliyat ve daha fazlası için ${cityLocative(city.name)} usta bul.`,
    path: `/${city.slug}`,
  });
}

export default function SehirPage({ params }: Props) {
  if (STATIC_PATHS.has(params.sehir)) notFound();
  const city = getCityBySlug(params.sehir);
  if (!city) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: city.name, url: `${SITE_URL}/${city.slug}` },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: city.name }]} />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          {cityLocative(city.name)} Güvenilir Ustalar — GelApp
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          {city.name} genelinde hizmet veren temizlik, tadilat, nakliyat ve daha onlarca
          kategoride referanslı ustaları GelApp&apos;te bulun. Teklif alın, karşılaştırın.
        </p>

        {/* Kategori grid */}
        <h2 className="text-xl font-semibold text-gray-900 mb-5">
          {city.name}&apos;de Hizmet Kategorileri
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? Wrench;
            return (
              <Link
                key={cat.slug}
                href={`/${city.slug}/${cat.slug}`}
                className="card p-4 flex flex-col items-center text-center gap-2 hover:border-primary-200"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Icon size={18} className="text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-800">{cat.name}</span>
              </Link>
            );
          })}
        </div>

        {/* App CTA */}
        <div className="bg-primary-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            {city.name}&apos;de Usta Bul
          </h2>
          <p className="text-primary-100 mb-6">
            GelApp&apos;i indir, {cityLocative(city.name)} en yakın ustadan teklif al.
          </p>
          <AppDownloadButtons className="justify-center" />
        </div>
      </div>
    </>
  );
}
