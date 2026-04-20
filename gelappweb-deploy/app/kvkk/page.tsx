import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'KVKK Aydınlatma Metni — GelApp',
  description: 'GelApp kişisel verilerin korunması kanunu (KVKK) aydınlatma metni.',
  path: '/kvkk',
  noIndex: false,
});

export default function KvkkPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'KVKK Aydınlatma' }]} />

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 my-6 text-sm text-yellow-800">
        ⚠️ <strong>Örnek Metin:</strong> Bu sayfa taslak içerik barındırmaktadır. Yayına
        çıkmadan önce bir hukuk danışmanına onaylatılması zorunludur.
      </div>

      <h1 className="section-title mt-2">KVKK Aydınlatma Metni</h1>
      <p className="text-gray-500 text-sm mb-8">Son güncelleme: Nisan 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <p>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
          (&quot;KVKK&quot;) kapsamında GelApp (&quot;Şirket&quot;) tarafından
          hazırlanmıştır.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">1. Veri Sorumlusu</h2>
        <p>GelApp, KVKK kapsamında veri sorumlusu sıfatıyla hareket etmektedir.</p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">2. İşlenen Kişisel Veriler</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Ad, soyad, e-posta adresi, telefon numarası</li>
          <li>Konum bilgisi (hizmet eşleştirmesi için)</li>
          <li>Cihaz ve uygulama kullanım verileri</li>
          <li>Uygulama içi mesajlaşma içerikleri</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">3. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Hizmet sağlayıcı ve kullanıcı eşleştirmesi</li>
          <li>Güvenlik ve kimlik doğrulama</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>Hizmet kalitesinin artırılması</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">4. Kişisel Verilerin Aktarımı</h2>
        <p>
          Kişisel verileriniz, KVKK&apos;da öngörülen istisnalar ve hükümler
          çerçevesinde; altyapı hizmet sağlayıcıları, ödeme kuruluşları ve
          yasal mercilerle paylaşılabilir.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">5. Haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içi veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
          <li>KVKK&apos;nın 7. maddesi çerçevesinde silinmesini ya da yok edilmesini isteme</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">6. İletişim</h2>
        <p>
          Haklarınız kapsamındaki taleplerinizi{' '}
          <a href="mailto:kvkk@gelapp.com.tr" className="text-primary-600 underline">
            kvkk@gelapp.com.tr
          </a>{' '}
          adresine iletebilirsiniz.
        </p>
      </div>
    </div>
  );
}
