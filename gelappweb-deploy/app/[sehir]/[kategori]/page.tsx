import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES, getCityBySlug } from '@/data/cities';
import { CATEGORIES, getCategoryBySlug } from '@/data/categories';
import {
  buildMetadata,
  buildCityServiceTitle,
  buildCityServiceDescription,
  cityLocative,
  SITE_URL,
} from '@/lib/seo';
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
  ServiceJsonLd,
  FaqJsonLd,
} from '@/components/JsonLd';
import FaqSection from '@/components/FaqSection';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import Breadcrumb from '@/components/Breadcrumb';
import { CheckCircle, Download } from 'lucide-react';

interface Props {
  params: { sehir: string; kategori: string };
}

export async function generateStaticParams() {
  const params: { sehir: string; kategori: string }[] = [];
  CITIES.forEach((city) => {
    CATEGORIES.forEach((cat) => {
      params.push({ sehir: city.slug, kategori: cat.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.sehir);
  const cat = getCategoryBySlug(params.kategori);
  if (!city || !cat) return {};
  return buildMetadata({
    title: buildCityServiceTitle(city.name, cat.name),
    description: buildCityServiceDescription(city.name, cat.name),
    path: `/${city.slug}/${cat.slug}`,
  });
}

export default function SehirKategoriPage({ params }: Props) {
  const city = getCityBySlug(params.sehir);
  const cat = getCategoryBySlug(params.kategori);
  if (!city || !cat) notFound();

  const locative = cityLocative(city.name);
  const pageUrl = `${SITE_URL}/${city.slug}/${cat.slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: city.name, url: `${SITE_URL}/${city.slug}` },
          { name: cat.name, url: pageUrl },
        ]}
      />
      <LocalBusinessJsonLd
        name={`${city.name} ${cat.name} Ustası — GelApp`}
        description={buildCityServiceDescription(city.name, cat.name)}
        cityName={city.name}
        url={pageUrl}
      />
      <ServiceJsonLd
        name={`${city.name} ${cat.name}`}
        description={cat.description}
        url={pageUrl}
      />
      <FaqJsonLd faq={cat.faq} />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: city.name, href: `/${city.slug}` },
            { name: cat.name },
          ]}
        />

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-5">
          {locative} {cat.name} — Güvenilir Ustalar GelApp&apos;te
        </h1>

        {/* Giriş paragrafı */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {locative} {cat.name.toLowerCase()} hizmeti arıyorsanız doğru yerdesiniz.
          GelApp, {city.name} genelinde hizmet veren deneyimli ve referanslı{' '}
          {cat.name.toLowerCase()} ustalarını tek platformda buluşturuyor.
          Talebinizi oluşturun, birden fazla ustadan teklif alın ve size en uygun{' '}
          {cat.name.toLowerCase()} uzmanını seçin. {city.name}&apos;de{' '}
          {cat.name.toLowerCase()} işlerinizi güvenle yaptırmak artık çok kolay.
        </p>

        {/* Bu hizmet neleri kapsar */}
        <div className="card p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {locative} {cat.name} Hizmeti Neleri Kapsar?
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

        {/* GelApp nasıl çalışır */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            GelApp&apos;te {city.name} {cat.name} Ustası Nasıl Bulurum?
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Uygulamayı İndir', desc: 'App Store veya Google Play\'den ücretsiz indir.' },
              { step: '2', title: 'Talep Oluştur', desc: `${locative} ${cat.name.toLowerCase()} ihtiyacını anlat, teklif al.` },
              { step: '3', title: 'Usta Gelsin', desc: 'En uygun ustayı seç, randevunu ayarla.' },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-5">
                <div className="text-2xl font-bold text-primary-600 mb-2">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App CTA inline */}
        <div className="bg-primary-50 rounded-2xl p-8 text-center mb-10 border border-primary-100">
          <Download size={32} className="text-primary-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {locative} {cat.name} Ustasını Hemen Bul
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            GelApp&apos;i indir, {city.name} bölgesindeki ustalardan teklif al.
          </p>
          <AppDownloadButtons className="justify-center" />
        </div>

        {/* Alt kategoriler */}
        {cat.subCategories.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {cat.name} Alt Kategorileri
            </h2>
            <div className="flex flex-wrap gap-2">
              {cat.subCategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/hizmetler/${cat.slug}/${sub.slug}`}
                  className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-xl hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <FaqSection faq={cat.faq} />

        {/* Diğer şehirler */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Diğer Şehirlerde {cat.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {CITIES.filter((c) => c.slug !== city.slug)
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}/${cat.slug}`}
                  className="bg-gray-100 text-gray-600 text-sm px-3 py-1.5 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
