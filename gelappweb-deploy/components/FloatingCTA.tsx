import Link from 'next/link';
import { Download } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop: floating button bottom-right */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <Link
          href="/indir"
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg transition-colors"
        >
          <Download size={18} />
          App&apos;i İndir
        </Link>
      </div>

      {/* Mobile: full-width bar at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3">
        <Link
          href="/indir"
          className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition-colors w-full"
        >
          <Download size={18} />
          Uygulamayı Ücretsiz İndir
        </Link>
      </div>
    </>
  );
}
