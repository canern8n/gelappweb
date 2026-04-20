import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-white text-2xl font-bold">
            <span className="text-primary-600">Gel</span>App
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            Türkiye&apos;nin güvenilir yerel hizmet platformu. Ustayı bul, işi yaptır.
          </p>
          <div className="flex gap-3 mt-5">
            <Link
              href="/indir"
              className="bg-primary-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-primary-700 transition-colors"
            >
              App Store
            </Link>
            <Link
              href="/indir"
              className="bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-gray-600 transition-colors"
            >
              Google Play
            </Link>
          </div>
        </div>

        {/* Hizmetler */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Hizmetler</h3>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/hizmetler/${cat.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Şirket */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Şirket</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/hakkimizda" className="hover:text-white transition-colors">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-white transition-colors">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/rehber" className="hover:text-white transition-colors">
                Rehber
              </Link>
            </li>
            <li>
              <Link href="/indir" className="hover:text-white transition-colors">
                Uygulamayı İndir
              </Link>
            </li>
          </ul>
        </div>

        {/* Yasal */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Yasal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/kvkk" className="hover:text-white transition-colors">
                KVKK Aydınlatma
              </Link>
            </li>
            <li>
              <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
            </li>
            <li>
              <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs py-5 text-gray-500">
        © {new Date().getFullYear()} GelApp. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
