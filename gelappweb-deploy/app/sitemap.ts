import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { CATEGORIES } from '@/data/categories';
import { CITIES } from '@/data/cities';
import { BLOG_POSTS } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/hizmetler`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/rehber`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/indir`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/kvkk`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/kullanim-kosullari`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/cerez-politikasi`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/hizmetler/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const subCategoryPages: MetadataRoute.Sitemap = CATEGORIES.flatMap((cat) =>
    cat.subCategories.map((sub) => ({
      url: `${SITE_URL}/hizmetler/${cat.slug}/${sub.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  );

  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${SITE_URL}/${city.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 81 cities × 10 categories = 810 pages
  const cityServicePages: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    CATEGORIES.map((cat) => ({
      url: `${SITE_URL}/${city.slug}/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  );

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/rehber/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...subCategoryPages,
    ...cityPages,
    ...cityServicePages,
    ...blogPages,
  ];
}
