import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, getSubCategoryBySlug } from '@/data/categories';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import Breadcrumb from '@/components/Breadcrumb';
import { CheckCircle } from 'lucide-react';

interface Props {
  params: { kategori: string; alt: string };
}

export async function generateStaticParams() {
  const params: { kategori: string; alt: string }[] = [];
  CATEGORIES.forEach((cat) => {
    cat.subCategories.forEach((sub) => {
      params.push({ kategori: cat.slug, alt: sub.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = getSubCategoryBySlug(params.kategori, params.alt);
  if (!result) return {};
  const { category, subCategory } = result;
  return buildMetadata({
    title: `${subCategory.name} — ${category.name} | GelApp`,
    description: `${subCategory.name} için güvenilir ustayı GelApp\'te bul. ${category.name} kategorisinde ${subCategory.name} hizmeti için teklif al.`,
    path: `/hizmetler/${category.slug}/${subCategory.slug}`,
  });
}

export default function AltKategoriPage({ params }: Props) {
  const result = getSubCategoryBySlug(params.kategori, params.alt);
  if (!result) notFound();

  const { category: cat, subCategory: sub } = result;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: 'Hizmetler', url: `${SITE_URL}/hizmetler` },
          { name: cat.name, url: `${SITE_URL}/hizmetler/${cat.slug}` },
          { name: sub.name, url: `${SITE_URL}/hizmetler/${cat.slug}/${sub.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={sub.name}
        description={`${sub.name} hizmeti için güvenilir uzmanlar GelApp\'te. ${cat.name} kategorisinde ${sub.name}.`}
        url={`${SITE_URL}/hizmetler/${cat.slug}/${sub.slug}`}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Hizmetler', href: '/hizmetler' },
            { name: cat.name, href: `/hizmetler/${cat.slug}` },
            { name: sub.name },
          ]}
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          {sub.name} — Güvenilir Ustalar GelApp&apos;te
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {sub.name} hizmeti için deneyimli ve referanslı ustaları GelApp üzerinden bulun.
          Talebinizi oluşturun, birden fazla ustadan teklif alın ve en uygununu seçin.
        </p>

        {/* Hizmet kapsamı */}
        <div className="card p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {sub.name} Hizmeti Neleri Kapsar?
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

        {/* GelApp CTA */}
        <div className="bg-primary-50 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {sub.name} Ustası Bul
          </h2>
          <p className="text-gray-600 mb-6">
            Uygulamayı indir, talebini oluştur, hızlıca teklif al.
          </p>
          <AppDownloadButtons className="justify-center" />
        </div>

        {/* Diğer alt kategoriler */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            {cat.name} Kategorisindeki Diğer Hizmetler
          </h2>
          <div className="flex flex-wrap gap-2">
            {cat.subCategories
              .filter((s) => s.slug !== sub.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${cat.slug}/${s.slug}`}
                  className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>

        {/* FAQ */}
        <FaqSection faq={cat.faq} />
      </div>
    </>
  );
}
