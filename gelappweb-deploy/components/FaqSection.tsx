'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection({ faq }: { faq: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
