import type { Metadata } from 'next';

export const SITE_URL = 'https://gelapp.com.tr';
export const SITE_NAME = 'GelApp';
export const SITE_DESCRIPTION =
  'Türkiye\'nin güvenilir yerel hizmet platformu. Temizlik, tadilat, nakliyat ve daha fazlası için ustayı GelApp\'te bul.';

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const shortTitle = title.length > 60 ? title.slice(0, 57) + '...' : title;
  const shortDesc =
    description.length > 155 ? description.slice(0, 152) + '...' : description;

  return {
    title: shortTitle,
    description: shortDesc,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: shortTitle,
      description: shortDesc,
      url,
      siteName: SITE_NAME,
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: shortTitle,
      description: shortDesc,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildCityServiceTitle(cityName: string, categoryName: string) {
  return `${cityName}'de ${categoryName} — Güvenilir Ustalar GelApp'te`;
}

export function buildCityServiceDescription(
  cityName: string,
  categoryName: string
) {
  const base = `${cityName} için güvenilir ${categoryName.toLowerCase()} ustası arıyorsanız GelApp'te hızlıca teklif alın. ${cityName}'deki ${categoryName.toLowerCase()} ustasını GelApp'te bul.`;
  return base.length > 155 ? base.slice(0, 152) + '...' : base;
}

export function buildCategoryTitle(categoryName: string) {
  return `${categoryName} Hizmeti — Güvenilir Ustalar | GelApp`;
}

export function buildCategoryDescription(categoryName: string, desc: string) {
  const full = `${desc.slice(0, 100)} GelApp'te ${categoryName.toLowerCase()} ustasını bul.`;
  return full.length > 155 ? full.slice(0, 152) + '...' : full;
}

// Turkish locale-aware possessive suffix for city names
// e.g. İstanbul → İstanbul'da, Ankara → Ankara'da, İzmir → İzmir'de
export function cityLocative(name: string): string {
  const lastVowelMap: Record<string, string> = {
    a: 'da', ı: 'da', o: 'da', u: 'da',
    e: 'de', i: 'de', ö: 'de', ü: 'de',
  };
  const vowels = 'aeıioöuüAEIİOÖUÜ';
  let lastVowel = 'a';
  for (const ch of name) {
    if (vowels.includes(ch)) lastVowel = ch.toLowerCase();
  }
  const suffix = lastVowelMap[lastVowel] ?? 'da';
  // Proper nouns take apostrophe before suffix
  return `${name}'${suffix}`;
}
