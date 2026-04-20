import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import AppDownloadButtons from '@/components/AppDownloadButtons';

export const metadata: Metadata = buildMetadata({
  title: 'Hakkımızda — GelApp',
  description:
    'GelApp nedir? Nasıl çalışır? Misyonumuz, vizyonumuz ve ekibimiz hakkında bilgi edinin.',
  path: '/hakkimizda',
});

export default function HakkimizdaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hakkımızda' }]} />

      <h1 className="section-title mt-2">Hakkımızda</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          <strong>GelApp</strong>, Türkiye&apos;nin güvenilir yerel hizmet pazaryeridir.
          Ev sahiplerini ihtiyaç duydukları hizmetler için doğru ustalarla buluşturmak
          amacıyla kurulduk.
        </p>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Misyonumuz</h2>
          <p>
            Hizmet arayanların güvenilir uzmanlara kolayca ulaşmasını sağlamak;
            ustalara ise yeni müşteriler kazanmaları için dijital bir platform sunmak.
            Temizlik, tadilat, nakliyat, özel ders gibi günlük yaşamın temel
            ihtiyaçlarını tek platformda çözüyoruz.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Vizyonumuz</h2>
          <p>
            Türkiye&apos;nin her şehrinde, her ilçesinde yerel hizmet ekonomisini
            dijitalleştirmek ve hem hizmet alanların hem de hizmet verenlerin hayatını
            kolaylaştırmak.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Nasıl Çalışıyoruz?</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Kullanıcılar ihtiyaç duydukları hizmet için talep oluşturur.</li>
            <li>Bölgedeki ustalar talebe teklif sunar.</li>
            <li>Kullanıcı teklifleri karşılaştırır ve en uygun ustayı seçer.</li>
            <li>Usta kapıya gelir, iş tamamlanır.</li>
            <li>Her iki taraf birbirini değerlendirir.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Neden GelApp?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              { emoji: '🔐', title: 'Kimlik Doğrulamalı Ustalar', desc: 'Platforma kayıt olan tüm usta adayları kimlik doğrulama sürecinden geçer.' },
              { emoji: '⭐', title: 'Şeffaf Değerlendirmeler', desc: 'Gerçek kullanıcı yorumları ve puanları ile bilinçli seçim yapın.' },
              { emoji: '💬', title: 'Hızlı İletişim', desc: 'Usta ile uygulama içi mesajlaşma ile anında iletişim kurun.' },
              { emoji: '🇹🇷', title: 'Türkiye Geneli', desc: '81 ilde hizmet veren ustalar GelApp\'te bir araya geliyor.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-4">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-600 rounded-2xl p-8 text-white text-center mt-10">
          <h2 className="text-2xl font-bold mb-3">GelApp&apos;i Hemen İndirin</h2>
          <p className="text-primary-100 mb-6">Ücretsiz, hızlı, güvenilir.</p>
          <AppDownloadButtons className="justify-center" />
        </div>
      </div>
    </div>
  );
}
