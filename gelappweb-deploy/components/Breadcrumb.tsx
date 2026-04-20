import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500 py-4 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={14} className="text-gray-400" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-primary-600 transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
