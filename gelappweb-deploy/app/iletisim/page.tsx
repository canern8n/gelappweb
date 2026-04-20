import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'İletişim — GelApp',
  description:
    'GelApp ile iletişime geçin. Destek, iş birliği veya geri bildirim için bize ulaşın.',
  path: '/iletisim',
});

export default function IletisimPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'İletişim' }]} />

      <h1 className="section-title mt-2">İletişim</h1>
      <p className="section-subtitle">
        Sorularınız, geri bildirimleriniz veya iş birliği teklifleriniz için bize ulaşabilirsiniz.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="card p-6 flex gap-4 items-start">
          <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
            <Mail size={20} className="text-primary-600" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">E-posta</h2>
            <a
              href="mailto:destek@gelapp.com.tr"
              className="text-primary-600 text-sm hover:underline"
            >
              destek@gelapp.com.tr
            </a>
            <p className="text-gray-500 text-xs mt-1">Genel destek ve sorular</p>
          </div>
        </div>

        <div className="card p-6 flex gap-4 items-start">
          <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
            <MessageCircle size={20} className="text-primary-600" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">Uygulama Desteği</h2>
            <p className="text-gray-600 text-sm">Uygulama içi destek merkezi</p>
            <p className="text-gray-500 text-xs mt-1">Uygulamamızdan 7/24 ulaşabilirsiniz</p>
          </div>
        </div>

        <div className="card p-6 flex gap-4 items-start">
          <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
            <MapPin size={20} className="text-primary-600" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-1">Adres</h2>
            <p className="text-gray-600 text-sm">Türkiye</p>
          </div>
        </div>
      </div>

      {/* mailto form — no backend */}
      <div className="card p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
        <form
          action="mailto:destek@gelapp.com.tr"
          method="get"
          encType="text/plain"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ad Soyad
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Adınız Soyadınız"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ornek@email.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="body"
              rows={5}
              placeholder="Mesajınızı buraya yazın…"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-400 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full justify-center"
          >
            Gönder
          </button>
          <p className="text-xs text-gray-400 text-center">
            Bu form, e-posta istemcinizi açar. Alternatif olarak doğrudan{' '}
            <a href="mailto:destek@gelapp.com.tr" className="text-primary-600 underline">
              destek@gelapp.com.tr
            </a>{' '}
            adresine e-posta gönderebilirsiniz.
          </p>
        </form>
      </div>
    </div>
  );
}
