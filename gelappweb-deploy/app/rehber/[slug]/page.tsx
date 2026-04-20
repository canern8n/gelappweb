import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import Breadcrumb from '@/components/Breadcrumb';
import { Calendar, User, ChevronRight } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/rehber/${post.slug}`,
  });
}

// Very simple markdown-like renderer (h2/h3/p/li/strong)
function renderContent(md: string) {
  const lines = md.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key} className="list-disc list-inside space-y-1.5 text-gray-700 my-4 pl-2">
          {listBuffer.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed">{item.replace(/\*\*(.*?)\*\*/g, '$1')}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  lines.forEach((line, i) => {
    const key = `line-${i}`;
    if (line.startsWith('## ')) {
      flushList(`list-${i}`);
      elements.push(<h2 key={key} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      flushList(`list-${i}`);
      elements.push(<h3 key={key} className="text-lg font-semibold text-gray-900 mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
    } else if (line.startsWith('|')) {
      flushList(`list-${i}`);
    } else if (line.trim() === '') {
      flushList(`list-${i}`);
    } else {
      flushList(`list-${i}`);
      // Process inline bold and links
      const processed = line
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 underline">$1</a>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      elements.push(
        <p key={key} className="text-gray-700 leading-relaxed my-3 text-base"
           dangerouslySetInnerHTML={{ __html: processed }} />
      );
    }
  });
  flushList('final');
  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}/rehber/${post.slug}`;
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: 'Rehber', url: `${SITE_URL}/rehber` },
          { name: post.title, url: pageUrl },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={pageUrl}
        datePublished={post.date}
        author={post.author}
      />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb
          items={[
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Rehber', href: '/rehber' },
            { name: post.category, href: '/rehber' },
          ]}
        />

        <div className="mt-2 mb-6">
          <span className="text-xs font-semibold bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-gray-500 text-lg mb-6">{post.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 border-b border-gray-100 pb-6 mb-6">
          <span className="flex items-center gap-1.5">
            <User size={14} /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('tr-TR', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </span>
        </div>

        {/* Inline App CTA #1 */}
        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-sm">GelApp&apos;te usta bul</p>
            <p className="text-gray-500 text-xs mt-0.5">
              {post.category} için güvenilir ustayı hemen keşfet.
            </p>
          </div>
          <Link
            href="/indir"
            className="shrink-0 bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors"
          >
            İndir
          </Link>
        </div>

        {/* Article content */}
        <article className="prose-sm max-w-none">
          {renderContent(post.content)}
        </article>

        {/* Inline App CTA #2 */}
        <div className="bg-primary-600 rounded-2xl p-8 text-white text-center mt-10">
          <h2 className="text-xl font-bold mb-3">Usta Arıyorsanız GelApp&apos;te Bulun</h2>
          <p className="text-primary-100 text-sm mb-5">
            Ücretsiz indir, teklif al, işi yaptır.
          </p>
          <AppDownloadButtons className="justify-center" />
        </div>

        {/* Diğer yazılar */}
        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 mb-5">Diğer Yazılar</h2>
            <div className="space-y-4">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/rehber/${p.slug}`} className="card p-4 flex items-center justify-between group">
                  <div>
                    <span className="text-xs text-primary-600 font-medium">{p.category}</span>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5 group-hover:text-primary-600 transition-colors">
                      {p.title}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
