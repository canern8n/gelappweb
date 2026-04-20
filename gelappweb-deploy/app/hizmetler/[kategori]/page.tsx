import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import { buildMetadata, buildCategoryTitle, buildCategoryDescription, SITE_URL } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import HowItWorks from '@/components/HowItWorks';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import Breadcrumb from '@/components/Breadcrumb';
import { CheckCircle, ChevronRight } from 'lucide-react';

interface Props {
  params: { kategori: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ kategori: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.kategori);
  if (!cat) return {};
  return buildMetadata({
    title: buildCategoryTitle(cat.name),
    description: buildCategoryDescription(cat.name, cat.description),
    path: `/hizmetler/${cat.slug}`,
  });
}

export default function KategoriPage({ params }: Props) {
  const cat = getCategoryBySlug(params.kategori);
  if (!cat) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: 'Hizmetler', url: `${SITE_URL}/hizmetler` },
          { name: cat.name, url: `${SITE_URL}/hizmetler/${cat.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`${cat.name} Hizmeti`}
        description={cat.description}
        url={`${SITE_URL}/hizmetler/${cat.slug}`}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Hizmetler', href: '/hizmetler' },
            { name: cat.name },
          ]}
        />

        {/* Hero */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          {cat.name} Hizmeti — Güvenilir Ustalar GelApp&apos;te
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{cat.description}</p>

        {/* Alt kategoriler */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Alt Kategoriler</h2>
          <div className="flex flex-wrap gap-2">
            {cat.subCategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/hizmetler/${cat.slug}/${sub.slug}`}
                className="bg-primary-50 text-primary-700 text-sm font-medium px-4 py-2 rounded-xl hover:bg-primary-100 transition-colors"
              >
                {sub.name} <ChevronRight size={14} className="inline" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bu hizmet neleri kapsar */}
        <div className="card p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {cat.name} Hizmeti Neleri Kapsar?
          </h2>
          <ul className="space-y-3">
            {cat.useCases.map((uc, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary-600 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{uc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nasıl çalışır */}
        <HowItWorks />

        {/* App CTA */}
        <div className="bg-primary-50 rounded-2xl p-8 text-center my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Hemen {cat.name} Ustası Bul
          </h2>
          <p className="text-gray-600 mb-6">
            GelApp&apos;i indir, talebini oluştur ve birden fazla ustadan teklif al.
          </p>
          <AppDownloadButtons className="justify-center" />
        </div>

        {/* FAQ */}
        <FaqSection faq={cat.faq} />
      </div>
    </>
  );
}
