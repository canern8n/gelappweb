import type { Metadata } from 'next';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { buildMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE_URL } from '@/lib/seo';
import {
  Sparkles, Wrench, Truck, BookOpen, Heart, Scissors,
  Home, Camera, Activity, Package,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles, Wrench, Truck, BookOpen, Heart, Scissors,
  Home, Camera, Activity, Package,
};

export const metadata: Metadata = buildMetadata({
  title: 'Tüm Hizmet Kategorileri — GelApp',
  description:
    'Temizlik, tadilat, nakliyat, özel ders, psikolog ve daha fazlası. GelApp\'te 10 ana kategoride ustayı bul, teklif al.',
  path: '/hizmetler',
});

export default function HizmetlerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: 'Hizmetler', url: `${SITE_URL}/hizmetler` },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetler' }]} />

        <h1 className="section-title">Tüm Hizmet Kategorileri</h1>
        <p className="section-subtitle">
          İhtiyacınız olan hizmet kategorisini seçin, size en yakın ustalardan teklif alın.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? Wrench;
            return (
              <Link
                key={cat.slug}
                href={`/hizmetler/${cat.slug}`}
                className="card p-6 flex gap-4 items-start hover:border-primary-200"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-primary-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900 mb-1">{cat.name}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{cat.shortDesc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.subCategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub.slug}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg"
                      >
                        {sub.name}
                      </span>
                    ))}
                    {cat.subCategories.length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{cat.subCategories.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
