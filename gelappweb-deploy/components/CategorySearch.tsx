'use client';

import { Search, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { useRouter } from 'next/navigation';

export default function CategorySearch() {
  const router = useRouter();

  return (
    <div className="max-w-lg mx-auto relative">
      <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 shadow-sm focus-within:border-primary-400 transition-colors">
        <Search size={20} className="text-gray-400 shrink-0" />
        <select
          className="flex-1 bg-transparent outline-none text-gray-700 text-base cursor-pointer appearance-none"
          onChange={(e) => {
            if (e.target.value) router.push(`/hizmetler/${e.target.value}`);
          }}
          defaultValue=""
          aria-label="Hizmet kategorisi seç"
        >
          <option value="" disabled>Hizmet kategorisi seç…</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
          ))}
        </select>
        <ChevronRight size={18} className="text-gray-400 shrink-0" />
      </div>
    </div>
  );
}
