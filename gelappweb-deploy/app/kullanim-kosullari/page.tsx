import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'Kullanım Koşulları — GelApp',
  description: 'GelApp platform kullanım koşulları ve hizmet sözleşmesi.',
  path: '/kullanim-kosullari',
});

export default function KullanimKosullariPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Kullanım Koşulları' }]} />

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 my-6 text-sm text-yellow-800">
        ⚠️ <strong>Örnek Metin:</strong> Bu sayfa taslak içerik barındırmaktadır. Yayına
        çıkmadan önce bir hukuk danışmanına onaylatılması zorunludur.
      </div>

      <h1 className="section-title mt-2">Kullanım Koşulları</h1>
      <p className="text-gray-500 text-sm mb-8">Son güncelleme: Nisan 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900 mt-6">1. Kabul</h2>
        <p>
          GelApp uygulamasını veya web sitesini kullanarak bu Kullanım Koşullarını
          kabul etmiş sayılırsınız.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">2. Hizmet Tanımı</h2>
        <p>
          GelApp, hizmet arayanlar ile hizmet sağlayıcıları buluşturan bir aracı
          platformdur. GelApp, taraflar arasındaki hizmet sözleşmesinin doğrudan
          tarafı değildir.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">3. Kullanıcı Yükümlülükleri</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Platforma doğru ve güncel bilgilerle kayıt olmak</li>
          <li>Platformu yalnızca yasal amaçlarla kullanmak</li>
          <li>Diğer kullanıcıların haklarına saygı göstermek</li>
          <li>Platform kurallarına uymak</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">4. Fikri Mülkiyet</h2>
        <p>
          GelApp markası, logosu ve uygulama içerikleri şirkete aittir ve izinsiz
          kullanılamaz.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">5. Sorumluluk Sınırlaması</h2>
        <p>
          GelApp, hizmet sağlayıcılar tarafından sunulan hizmetlerin kalitesi,
          güvenliği veya hukuka uygunluğundan sorumlu tutulamaz.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">6. Değişiklikler</h2>
        <p>
          GelApp bu koşulları önceden haber vermeksizin değiştirme hakkını saklı
          tutar. Değişiklikler yayımlandığı tarihte yürürlüğe girer.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">7. Uygulanacak Hukuk</h2>
        <p>
          Bu sözleşme Türkiye Cumhuriyeti hukukuna tabidir. Anlaşmazlıklarda
          İstanbul mahkemeleri yetkilidir.
        </p>
      </div>
    </div>
  );
}
