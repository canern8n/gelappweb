import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = buildMetadata({
  title: 'Çerez Politikası — GelApp',
  description: 'GelApp çerez politikası. Hangi çerezleri kullandığımız ve nasıl yönetebileceğiniz hakkında bilgi.',
  path: '/cerez-politikasi',
});

export default function CerezPolitikasiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Çerez Politikası' }]} />

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 my-6 text-sm text-yellow-800">
        ⚠️ <strong>Örnek Metin:</strong> Bu sayfa taslak içerik barındırmaktadır. Yayına
        çıkmadan önce bir hukuk danışmanına onaylatılması zorunludur.
      </div>

      <h1 className="section-title mt-2">Çerez Politikası</h1>
      <p className="text-gray-500 text-sm mb-8">Son güncelleme: Nisan 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900 mt-6">Çerez Nedir?</h2>
        <p>
          Çerezler, web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır.
          Web sitelerinin daha iyi çalışmasını ve deneyiminizin iyileştirilmesini sağlarlar.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">Kullandığımız Çerez Türleri</h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Zorunlu Çerezler</h3>
            <p className="text-gray-500">
              Sitenin temel işlevleri için gereklidir. Bu çerezler olmadan site düzgün çalışmaz.
              Kullanıcı onayı gerekmez.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Analitik Çerezler</h3>
            <p className="text-gray-500">
              Ziyaretçi sayısı ve davranışları hakkında anonim istatistik toplamak için
              kullanılır (ör. Google Analytics).
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Tercih Çerezleri</h3>
            <p className="text-gray-500">
              Dil tercihi gibi kişiselleştirme ayarlarını hatırlamak için kullanılır.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mt-6">Çerezleri Nasıl Yönetebilirsiniz?</h2>
        <p>
          Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilir veya silebilirsiniz.
          Ancak bu durumda sitenin bazı özellikleri çalışmayabilir.
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Chrome: Ayarlar → Gizlilik → Çerezler</li>
          <li>Firefox: Tercihler → Gizlilik → Çerezler</li>
          <li>Safari: Tercihler → Gizlilik</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">İletişim</h2>
        <p>
          Çerez politikamız hakkında sorularınız için{' '}
          <a href="mailto:destek@gelapp.com.tr" className="text-primary-600 underline">
            destek@gelapp.com.tr
          </a>{' '}
          adresine yazabilirsiniz.
        </p>
      </div>
    </div>
  );
}
