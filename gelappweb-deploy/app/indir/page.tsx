import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import AppDownloadButtons from '@/components/AppDownloadButtons';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: "GelApp'i İndir — App Store & Google Play",
  description:
    "GelApp'i App Store veya Google Play'den ücretsiz indirin. Güvenilir usta bulmak artık çok kolay.",
  path: '/indir',
});

const features = [
  'Binlerce kategoride hizmet',
  'Kimlik doğrulamalı ustalar',
  'Gerçek kullanıcı yorumları',
  'Kolay randevu ve teklif sistemi',
  'Türkiye genelinde 81 ilde hizmet',
  'Ücretsiz indirme ve kullanım',
];

export default function IndirPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center">
      <div className="max-w-4xl mx-auto px-4 py-10 w-full">
        <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: "Uygulamayı İndir" }]} />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              GelApp&apos;i{' '}
              <span className="text-primary-600">Ücretsiz</span>{' '}
              İndir
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Temizlik, tadilat, nakliyat ve daha onlarca hizmet kategorisinde
              güvenilir ustaları dakikalar içinde bul. Tek uygulama, tüm çözümler.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary-600 shrink-0" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <AppDownloadButtons />
          </div>

          {/* App mockup placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-56 h-96 bg-gradient-to-br from-primary-600 to-orange-400 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-5xl font-bold mb-2">
                  <span className="text-white">Gel</span>App
                </div>
                <div className="text-primary-100 text-sm">Usta bul, işi yaptır</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
