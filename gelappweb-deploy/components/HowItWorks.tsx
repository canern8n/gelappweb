import { Download, Search, Star } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Uygulamayı İndir',
    desc: 'GelApp\'i App Store veya Google Play\'den ücretsiz indir.',
  },
  {
    icon: Search,
    title: 'Hizmet Seç ve Teklif Al',
    desc: 'İhtiyacın olan hizmeti seç, talep oluştur ve birden fazla ustadan teklif al.',
  },
  {
    icon: Star,
    title: 'Usta Gelsin, İş Bitsin',
    desc: 'Beğendiğin ustayı seç, randevunu ayarla. Usta kapına gelsin.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
          GelApp Nasıl Çalışır?
        </h2>
        <p className="text-gray-500 text-center mb-12">3 adımda istediğin ustaya ulaş</p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <step.icon className="text-primary-600" size={28} />
              </div>
              <div className="text-xs font-bold text-primary-600 mb-1">ADIM {i + 1}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
