import Link from 'next/link';

export default function AppDownloadButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Link
        href="/indir"
        className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <div className="text-xs opacity-70">İndir</div>
          <div className="font-semibold text-sm">App Store</div>
        </div>
      </Link>

      <Link
        href="/indir"
        className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
          <path d="M3.18 23.76c.3.17.65.19.97.07L14.39 12 3.18 .17C2.85.05 2.5.07 2.2.25 1.61.6 1.25 1.26 1.25 2v20c0 .74.36 1.4.95 1.75zM16.18 10.23l2.51-2.51L6.27.28C6 .12 5.7.05 5.41.06l10.77 10.17zM21.38 10.7l-2.99-1.7-2.82 2.82 2.82 2.82 3.02-1.72c.86-.48.86-1.74-.03-2.22zM5.41 23.94c.29.01.59-.06.86-.22L18.69 16.3l-2.51-2.51L5.41 23.94z" />
        </svg>
        <div>
          <div className="text-xs opacity-70">İndir</div>
          <div className="font-semibold text-sm">Google Play</div>
        </div>
      </Link>
    </div>
  );
}
