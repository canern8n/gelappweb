export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  shortDesc: string;
  useCases: string[];
  faq: { q: string; a: string }[];
  subCategories: SubCategory[];
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Temizlik',
    slug: 'temizlik',
    icon: 'Sparkles',
    shortDesc: 'Ev, ofis ve araç temizliği için güvenilir ustalar',
    description:
      'Evden ofise, halıdan koltuk yıkamaya kadar tüm temizlik hizmetlerinde deneyimli ve referanslı ustalarla tanışın. GelApp üzerinden kolayca istek oluşturun, size özel teklif alın.',
    useCases: [
      'Taşınma öncesi veya sonrası derinlemesine temizlik',
      'Haftalık veya aylık düzenli ev temizliği',
      'Ofis ve işyeri periyodik temizliği',
      'Halı, koltuk ve perde yıkama',
      'Cam ve cephe temizliği',
      'Kiracı çıkış temizliği',
    ],
    faq: [
      {
        q: 'Temizlik ücreti nasıl belirlenir?',
        a: 'Ustalar metrekare, hizmet türü ve bölgeye göre size özel teklif verir. GelApp\'te sabit fiyat yoktur.',
      },
      {
        q: 'Temizlik malzemeleri usta tarafından mı getirilir?',
        a: 'Çoğu usta kendi malzemesiyle gelir; ancak ilan detayını okuyarak ya da usta ile doğrudan iletişime geçerek netleştirebilirsiniz.',
      },
      {
        q: 'Evim temizlenirken evde bulunmam şart mı?',
        a: 'Tercih size kalmış. Çoğu müşteri anahtarı bırakarak dışarı çıkar. Usta ile önceden anlaşmanızı öneririz.',
      },
      {
        q: 'Temizlik kalitesi beğenmediysem ne yapabilirim?',
        a: 'GelApp üzerinden usta hakkında değerlendirme bırakabilir ve destek ekibimizle iletişime geçebilirsiniz.',
      },
    ],
    subCategories: [
      { name: 'Ev Temizliği', slug: 'ev-temizligi' },
      { name: 'Ofis Temizliği', slug: 'ofis-temizligi' },
      { name: 'Cam Silme', slug: 'cam-silme' },
      { name: 'Halı Yıkama', slug: 'hali-yikama' },
      { name: 'Koltuk Yıkama', slug: 'koltuk-yikama' },
    ],
  },
  {
    id: 2,
    name: 'Tadilat & Tamir',
    slug: 'tadilat-tamir',
    icon: 'Wrench',
    shortDesc: 'Elektrik, tesisat, boyacı ve usta hizmetleri',
    description:
      'Elektrik arızasından boya badanaya, tesisattan marangozluğa kadar evinizin her türlü tamir ve tadilat ihtiyacı için yetenekli ustalar GelApp\'te. Tek platform, tüm çözümler.',
    useCases: [
      'Elektrik pano ve devre arızaları',
      'Su kaçağı, tesisat tamiri',
      'İç ve dış cephe boya badana',
      'Kapı-pencere doğrama ve marangoz işleri',
      'Çamaşır makinesi, bulaşık makinesi tamiri',
      'Banyo ve mutfak tadilatı',
    ],
    faq: [
      {
        q: 'Tadilat ne kadar sürer?',
        a: 'Süre işin kapsamına göre değişir. Usta size ziyaret sonrası net tarih ve süre bildirir.',
      },
      {
        q: 'Malzeme bedeli dahil mi?',
        a: 'Genellikle işçilik teklif edilir, malzeme ayrıca belirlenir. Ustanızla önceden netleştirin.',
      },
      {
        q: 'Acil elektrik arızasında ne yapmalıyım?',
        a: 'GelApp\'te "Acil" seçeneğiyle talep oluşturabilir, müsait ustaları hızlıca görebilirsiniz.',
      },
      {
        q: 'Birden fazla işi aynı ustaya yaptırabilir miyim?',
        a: 'Evet. Ustanın hizmet listesine bakarak hangi işleri yaptırdığını görebilir, birden fazla işi tek talep altında belirtebilirsiniz.',
      },
    ],
    subCategories: [
      { name: 'Elektrikçi', slug: 'elektricki' },
      { name: 'Tesisatçı', slug: 'tesisatci' },
      { name: 'Boyacı', slug: 'boyaci' },
      { name: 'Marangoz', slug: 'marangoz' },
      { name: 'Beyaz Eşya Tamiri', slug: 'beyaz-esya-tamiri' },
    ],
  },
  {
    id: 3,
    name: 'Nakliyat',
    slug: 'nakliyat',
    icon: 'Truck',
    shortDesc: 'Evden eve, şehirlerarası ve ofis taşıma hizmetleri',
    description:
      'Taşınma stresini GelApp\'e bırakın. Evden eve, ofis taşıma ya da parça eşya nakliyesi için profesyonel ve sigortalı nakliyatçılarla kolayca iletişime geçin.',
    useCases: [
      'Şehir içi ev taşıma',
      'Şehirlerarası nakliyat',
      'Ofis ve işyeri taşıma',
      'Tek parça büyük eşya taşıma',
      'Asansörlü nakliyat hizmeti',
      'Depolama ve ambalajlama',
    ],
    faq: [
      {
        q: 'Nakliyat fiyatı nasıl hesaplanır?',
        a: 'Mesafe, eşya miktarı, kat sayısı ve asansör durumuna göre usta size özel fiyat teklifi sunar.',
      },
      {
        q: 'Eşyalar taşıma sırasında zarar görürse ne olur?',
        a: 'Sigortası olan ustayı tercih edebilirsiniz. Usta profili ve ilanında sigorta bilgisini görebilirsiniz.',
      },
      {
        q: 'Taşınma günü saatini değiştirebilir miyim?',
        a: 'Usta ile iletişim kurarak randevu değişikliği talep edebilirsiniz.',
      },
      {
        q: 'Parça eşya nakliyatı için de teklif alabilir miyim?',
        a: 'Evet, tek mobilya veya beyaz eşya gibi parça taşıma talepleri için de usta bulabilirsiniz.',
      },
    ],
    subCategories: [
      { name: 'Evden Eve Nakliyat', slug: 'evden-eve-nakliyat' },
      { name: 'Şehirlerarası Nakliyat', slug: 'sehirlerarasi-nakliyat' },
      { name: 'Ofis Nakliyat', slug: 'ofis-nakliyat' },
      { name: 'Parça Eşya', slug: 'parca-esya' },
    ],
  },
  {
    id: 4,
    name: 'Özel Ders',
    slug: 'ozel-ders',
    icon: 'BookOpen',
    shortDesc: 'YKS, LGS, matematik, dil ve müzik dersleri',
    description:
      'Çocuğunuz için birebir destek mi arıyorsunuz? GelApp\'te matematik, İngilizce, YKS, LGS, müzik ve kodlama alanlarında uzman öğretmenler sizi bekliyor. Online ya da yüz yüze tercih edin.',
    useCases: [
      'YKS ve LGS sınav hazırlığı',
      'Matematik ve fen bilimleri desteği',
      'İngilizce konuşma ve gramer pratikleri',
      'Müzik aleti öğrenme',
      'Kodlama ve yazılım eğitimi',
      'İlkokul ve ortaokul genel ders desteği',
    ],
    faq: [
      {
        q: 'Online özel ders verilebiliyor mu?',
        a: 'Evet, birçok öğretmen online ders seçeneği sunmaktadır. İlan detayında görebilirsiniz.',
      },
      {
        q: 'Ders ücreti saatlik mi belirlenir?',
        a: 'Öğretmenler size özel teklif sunar. Saatlik ya da paket şeklinde anlaşabilirsiniz.',
      },
      {
        q: 'Öğretmenin deneyimini nasıl görebilirim?',
        a: 'GelApp\'te öğretmenin eğitim geçmişi, uzmanlık alanları ve önceki değerlendirmeleri profilde yer alır.',
      },
      {
        q: 'Deneme dersi alabilir miyim?',
        a: 'Bazı öğretmenler deneme dersi sunar; bu bilgiyi ilan ya da doğrudan mesaj üzerinden öğrenebilirsiniz.',
      },
    ],
    subCategories: [
      { name: 'Matematik', slug: 'matematik' },
      { name: 'İngilizce', slug: 'ingilizce' },
      { name: 'YKS', slug: 'yks' },
      { name: 'LGS', slug: 'lgs' },
      { name: 'Müzik', slug: 'muzik' },
      { name: 'Kodlama', slug: 'kodlama' },
    ],
  },
  {
    id: 5,
    name: 'Psikolog & Terapi',
    slug: 'psikolog',
    icon: 'Heart',
    shortDesc: 'Online ve yüz yüze psikolojik destek hizmetleri',
    description:
      'Bireysel terapi, çift danışmanlığı veya çocuk psikolojisi için uzman psikologlarla buluşun. GelApp\'te lisanslı terapistleri kolayca bulabilir, online veya yüz yüze randevu oluşturabilirsiniz.',
    useCases: [
      'Bireysel psikolojik destek ve terapi',
      'Çift ilişki danışmanlığı',
      'Çocuk ve ergen psikolojisi',
      'Aile terapisi ve danışmanlık',
      'Kaygı bozukluğu ve depresyon desteği',
      'Online terapi seansları',
    ],
    faq: [
      {
        q: 'Online terapi yüz yüze kadar etkili midir?',
        a: 'Birçok araştırma online terapinin pek çok durum için yüz yüze terapi kadar etkili olduğunu göstermektedir.',
      },
      {
        q: 'Psikolog ve psikiyatrist arasındaki fark nedir?',
        a: 'Psikologlar terapi ve psikolojik destek sağlar; psikiyatristler tıp doktoru olup ilaç yazabilir. GelApp\'te psikologlar bulabilirsiniz.',
      },
      {
        q: 'Seans ücretleri nasıl belirlenir?',
        a: 'Her psikolog kendi ücretini belirler ve size özel teklif sunar.',
      },
      {
        q: 'Bilgilerimin gizliliği güvence altında mı?',
        a: 'GelApp KVKK kapsamında verilerinizi korur. Terapistler de etik kurallar çerçevesinde gizlilik yükümlülüğü altındadır.',
      },
    ],
    subCategories: [
      { name: 'Online Terapi', slug: 'online-terapi' },
      { name: 'Çift Terapisi', slug: 'cift-terapisi' },
      { name: 'Çocuk Psikoloğu', slug: 'cocuk-psikologu' },
      { name: 'Aile Danışmanı', slug: 'aile-danismani' },
    ],
  },
  {
    id: 6,
    name: 'Güzellik & Bakım',
    slug: 'guzellik-bakim',
    icon: 'Scissors',
    shortDesc: 'Evde kuaför, manikür, masaj ve cilt bakımı',
    description:
      'Güzellik salonuna gitmeye vaktiniz yok mu? GelApp ile evde kuaför, manikür-pedikür, masaj ve cilt bakımı hizmetlerini kapınıza getirin. Randevu almak hiç bu kadar kolay olmamıştı.',
    useCases: [
      'Evde saç kesimi ve saç boyama',
      'Manikür ve pedikür hizmeti',
      'Gevşeme ve sporcu masajı',
      'Yüz ve cilt bakımı',
      'Gelin saçı ve makyajı',
      'Kaş ve kirpik uygulamaları',
    ],
    faq: [
      {
        q: 'Evde kuaför güvenli midir?',
        a: 'GelApp\'teki tüm hizmet sağlayıcılar profil ve değerlendirme sistemiyle denetlenir. Yorumları okuyarak güvende olabilirsiniz.',
      },
      {
        q: 'Gerekli ekipman usta tarafından mı getirilir?',
        a: 'Evet, çoğu güzellik uzmanı kendi ekipmanıyla gelir. İlan detayında belirtilir.',
      },
      {
        q: 'Fiyatlar nasıl belirlenir?',
        a: 'Her uzman kendi fiyatını belirler ve size özel teklif sunar.',
      },
      {
        q: 'İptal veya randevu değişikliği yapabilir miyim?',
        a: 'Evet, uygulama üzerinden usta ile iletişime geçerek randevunuzu düzenleyebilirsiniz.',
      },
    ],
    subCategories: [
      { name: 'Evde Kuaför', slug: 'evde-kuafor' },
      { name: 'Manikür-Pedikür', slug: 'manikur-pedikur' },
      { name: 'Masaj', slug: 'masaj' },
      { name: 'Cilt Bakımı', slug: 'cilt-bakimi' },
    ],
  },
  {
    id: 7,
    name: 'Ev Bakımı',
    slug: 'ev-bakimi',
    icon: 'Home',
    shortDesc: 'Bahçe, klima, kombi ve böcek ilaçlama hizmetleri',
    description:
      'Evinizin bakımını ihmal etmeyin. Bahçıvanlıktan klima temizliğine, kombi bakımından böcek ilaçlamaya kadar tüm ev bakım hizmetleri için GelApp\'te uzman bulun.',
    useCases: [
      'Bahçe düzenleme ve çim biçme',
      'Klima bakım ve temizliği',
      'Kombi bakım ve servisi',
      'Böcek ve haşere ilaçlaması',
      'Su deposu ve tank temizliği',
      'Çatı ve oluk temizliği',
    ],
    faq: [
      {
        q: 'Klima bakımı ne sıklıkla yapılmalı?',
        a: 'Yılda en az bir kez, tercihen yaz başında klima filtresi ve bakımının yapılması önerilir.',
      },
      {
        q: 'Böcek ilaçlamasının aile ve evcil hayvanlara etkisi var mı?',
        a: 'Güvenilir ustalar çevre dostu ve güvenli ürünler kullanır. Uygulama sonrası havalandırma süresi konusunda bilgi alın.',
      },
      {
        q: 'Bahçe düzenlemesi için tasarım desteği alabilir miyim?',
        a: 'Bazı bahçıvanlar tasarım önerisi de sunar. İlan ve usta profili inceleyebilirsiniz.',
      },
      {
        q: 'Kombi bakımı zorunlu mudur?',
        a: 'Kış sezonu öncesi yıllık bakım hem güvenlik hem verimlilik açısından önemlidir.',
      },
    ],
    subCategories: [
      { name: 'Bahçıvanlık', slug: 'bahcivanlik' },
      { name: 'Böcek İlaçlama', slug: 'bocek-ilacalama' },
      { name: 'Klima Servisi', slug: 'klima-servisi' },
      { name: 'Kombi Servisi', slug: 'kombi-servisi' },
    ],
  },
  {
    id: 8,
    name: 'Etkinlik',
    slug: 'etkinlik',
    icon: 'Camera',
    shortDesc: 'Fotoğrafçı, DJ, animatör ve catering hizmetleri',
    description:
      'Düğün, doğum günü ya da kurumsal etkinliğiniz için profesyonel hizmet alın. GelApp\'te fotoğrafçı, DJ, animatör ve catering hizmetleri için teklifler alın, karşılaştırın.',
    useCases: [
      'Düğün ve nişan fotoğrafçılığı',
      'Doğum günü organizasyonu ve animasyon',
      'Kurumsal etkinlik organizasyonu',
      'DJ ve müzik sistemi kiralama',
      'Catering ve ikram hizmetleri',
      'Bebek şekeri ve organizasyon süslemeleri',
    ],
    faq: [
      {
        q: 'Fotoğrafçı ne zaman tutmalıyım?',
        a: 'Popüler tarihler için en az 2-3 ay öncesinden rezervasyon yapmanızı öneririz.',
      },
      {
        q: 'Etkinlik iptalinde ücret iadesi var mı?',
        a: 'İptal politikası her ustanın ilanında belirtilmiştir. Önceden netleştirmenizi öneririz.',
      },
      {
        q: 'Catering hizmeti hangi menü seçeneklerini sunuyor?',
        a: 'Menü ve porsiyon tercihleri usta ile özel olarak belirlenir. Teklif aşamasında detayları paylaşın.',
      },
      {
        q: 'Küçük etkinlikler için de usta bulabilir miyim?',
        a: 'Evet, ev partisi ya da küçük organizasyonlar için de ustaların büyük çoğunluğu hizmet vermektedir.',
      },
    ],
    subCategories: [
      { name: 'Fotoğrafçı', slug: 'fotografci' },
      { name: 'DJ', slug: 'dj' },
      { name: 'Animatör', slug: 'animator' },
      { name: 'Catering', slug: 'catering' },
    ],
  },
  {
    id: 9,
    name: 'Sağlık',
    slug: 'saglik',
    icon: 'Activity',
    shortDesc: 'Diyetisyen, fizyoterapist ve hemşirelik hizmetleri',
    description:
      'Sağlığınıza yönelik profesyonel destek için GelApp\'te diyetisyen, fizyoterapist ve hemşirelik hizmetlerini keşfedin. Evde ya da online randevu seçenekleriyle kolayca başlayın.',
    useCases: [
      'Kilo yönetimi ve beslenme planı',
      'Sporcu ve rehabilitasyon fizyoterapisi',
      'Evde hemşirelik bakımı',
      'Yaşlı bakım ve refakatçilik',
      'Enjeksiyon ve serum uygulaması',
      'Post-op ev bakımı',
    ],
    faq: [
      {
        q: 'Diyetisyen randevusuna doktor sevkine gerek var mı?',
        a: 'Hayır, GelApp üzerinden doğrudan randevu oluşturabilirsiniz.',
      },
      {
        q: 'Fizyoterapist evde seans yapıyor mu?',
        a: 'Evet, birçok fizyoterapist ev ziyareti seçeneği sunar. İlan detayını kontrol edin.',
      },
      {
        q: 'Hemşirelik hizmetleri hangi işlemleri kapsar?',
        a: 'Pansuman, enjeksiyon, tansiyon ölçümü, hasta takibi gibi temel bakım hizmetleri verilmektedir.',
      },
      {
        q: 'Sağlık uzmanlarının lisanslarını nasıl doğrulayabilirim?',
        a: 'GelApp kimlik doğrulama sürecinden geçen uzmanlar profillerinde onay rozeti taşır.',
      },
    ],
    subCategories: [
      { name: 'Diyetisyen', slug: 'diyetisyen' },
      { name: 'Fizyoterapist', slug: 'fizyoterapist' },
      { name: 'Hemşirelik Hizmetleri', slug: 'hemsirelik-hizmetleri' },
    ],
  },
  {
    id: 10,
    name: 'Lojistik',
    slug: 'lojistik',
    icon: 'Package',
    shortDesc: 'Kurye, depolama ve paketleme hizmetleri',
    description:
      'İş yeriniz veya kişisel ihtiyaçlarınız için kurye, depolama ve profesyonel paketleme hizmetlerine GelApp üzerinden kolayca ulaşın. Güvenilir ve hızlı teslimat için en yakın uzmanı bulun.',
    useCases: [
      'Aynı gün şehir içi kurye',
      'E-ticaret iade ve gönderi işlemleri',
      'Kısa veya uzun süreli depolama',
      'Taşınma öncesi profesyonel paketleme',
      'Bölgeler arası kargo',
      'Özel ve hassas ürün taşıma',
    ],
    faq: [
      {
        q: 'Kurye ne kadar sürede teslim eder?',
        a: 'Şehir içi teslimatlar genellikle aynı gün veya birkaç saat içinde tamamlanır. Detay ustaya göre değişir.',
      },
      {
        q: 'Depolama hizmetinde minimum süre var mı?',
        a: 'Süre usta veya şirkete göre değişir. Kısa süreli depolama seçenekleri de mevcuttur.',
      },
      {
        q: 'Hassas veya kırılgan eşyalar için paketleme yapılıyor mu?',
        a: 'Evet, özellikle sanat eseri, elektronik veya antika gibi hassas ürünler için profesyonel paketleme talep edebilirsiniz.',
      },
      {
        q: 'Kurye sigortası var mı?',
        a: 'Bazı kurye hizmetleri sigorta kapsamı sunar. Anlaşmadan önce usta ile netleştirin.',
      },
    ],
    subCategories: [
      { name: 'Kurye', slug: 'kurye' },
      { name: 'Depolama', slug: 'depolama' },
      { name: 'Paketleme', slug: 'paketleme' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubCategoryBySlug(catSlug: string, altSlug: string) {
  const cat = getCategoryBySlug(catSlug);
  if (!cat) return undefined;
  const sub = cat.subCategories.find((s) => s.slug === altSlug);
  return sub ? { category: cat, subCategory: sub } : undefined;
}
