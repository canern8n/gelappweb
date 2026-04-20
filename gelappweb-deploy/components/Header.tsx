'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <span className="text-primary-600">Gel</span>
          <span>App</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/hizmetler" className="hover:text-primary-600 transition-colors">
            Hizmetler
          </Link>
          <Link href="/rehber" className="hover:text-primary-600 transition-colors">
            Rehber
          </Link>
          <Link href="/hakkimizda" className="hover:text-primary-600 transition-colors">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="hover:text-primary-600 transition-colors">
            İletişim
          </Link>
          <Link
            href="/indir"
            className="ml-2 bg-primary-600 text-white px-4 py-2 rounded-xl hover:bg-primary-700 transition-colors"
          >
            Uygulamayı İndir
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Menüyü aç"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link
            href="/hizmetler"
            onClick={() => setOpen(false)}
            className="block py-2 text-gray-700 font-medium hover:text-primary-600"
          >
            Hizmetler
          </Link>
          <div className="pl-3 space-y-1">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/hizmetler/${cat.slug}`}
                onClick={() => setOpen(false)}
                className="block py-1 text-sm text-gray-500 hover:text-primary-600"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <Link
            href="/rehber"
            onClick={() => setOpen(false)}
            className="block py-2 text-gray-700 font-medium hover:text-primary-600"
          >
            Rehber
          </Link>
          <Link
            href="/hakkimizda"
            onClick={() => setOpen(false)}
            className="block py-2 text-gray-700 font-medium hover:text-primary-600"
          >
            Hakkımızda
          </Link>
          <Link
            href="/iletisim"
            onClick={() => setOpen(false)}
            className="block py-2 text-gray-700 font-medium hover:text-primary-600"
          >
            İletişim
          </Link>
          <Link
            href="/indir"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            Uygulamayı İndir
          </Link>
        </div>
      )}
    </header>
  );
}
