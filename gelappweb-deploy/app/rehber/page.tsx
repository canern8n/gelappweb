import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import { Calendar, ChevronRight } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'Rehber — Ev Hizmetleri Blogu | GelApp',
  description:
    'Ev hizmetleri, nakliyat, temizlik ve daha fazlası hakkında pratik rehberler ve ipuçları. GelApp Blog.',
  path: '/rehber',
});

export default function RehberPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: 'Rehber', url: `${SITE_URL}/rehber` },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Rehber' }]} />

        <h1 className="section-title">Rehber & Blog</h1>
        <p className="section-subtitle">
          Ev hizmetleri hakkında pratik bilgiler, karşılaştırmalar ve ipuçları.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/rehber/${post.slug}`} className="card p-5 group">
              <div className="flex items-center gap-2 text-xs text-primary-600 font-medium mb-2">
                <span className="bg-primary-50 px-2 py-1 rounded-lg">{post.category}</span>
              </div>
              <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('tr-TR', {
                    day: 'numeric', month: 'long', year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1 text-primary-600 font-medium">
                  Oku <ChevronRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
