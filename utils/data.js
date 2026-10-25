// utils/data.js
//
// Single source of truth for every piece of copy on the site, in both
// English and Arabic. Components never hardcode text — they pull a node
// from `content` (or a short key from `ui`) and pass it through
// `languageTranslate(language, node)`.
//
// NOTE: Arabic strings here are a solid first pass (formal Modern Standard
// Arabic) written to unblock development — have a native speaker /
// professional translator proof them before this goes live.

// ---------------------------------------------------------------------------
// Short, reusable UI strings (buttons, labels, nav items, form fields).
// Referenced by *string key*: languageTranslate(language, "orderNow")
// ---------------------------------------------------------------------------
export const ui = {
  // Language switcher
  selectLanguage: { en: "Language", ar: "اللغة" },
  english: { en: "English", ar: "الإنجليزية" },
  arabic: { en: "Arabic", ar: "العربية" },

  // Nav
  navHome: { en: "Home", ar: "الرئيسية" },
  navAbout: { en: "About Us", ar: "من نحن" },
  navProducts: { en: "Products", ar: "المنتجات" },
  navGallery: { en: "Gallery", ar: "معرض الصور" },
  navContact: { en: "Contact Us", ar: "اتصل بنا" },
  brandTag: { en: "Export Co.", ar: "شركة تصدير" },
  motto: { en: "Excellence Without Compromise", ar: "التميز بلا مساومة" },

  // Generic buttons / labels
  orderNow: { en: "Order Now", ar: "اطلب الآن" },
  viewAllProducts: { en: "View All Products", ar: "عرض جميع المنتجات" },
  viewFullGallery: { en: "View Full Gallery", ar: "عرض المعرض الكامل" },
  learnMore: { en: "Learn More", ar: "اعرف المزيد" },
  contactUs: { en: "Contact Us", ar: "اتصل بنا" },
  requestQuotation: { en: "Request Quotation", ar: "اطلب عرض سعر" },
  browseProducts: { en: "Browse Products", ar: "تصفح المنتجات" },
  backToHome: { en: "Back to Home", ar: "العودة إلى الرئيسية" },
  close: { en: "Close", ar: "إغلاق" },
  sendInquiry: { en: "Send Inquiry", ar: "إرسال الاستفسار" },
  all: { en: "All", ar: "الكل" },

  // Products page
  searchPlaceholder: { en: "Search by name or product code…", ar: "ابحث بالاسم أو رمز المنتج…" },
  noProductsFound: {
    en: "No products match that search. Try a different name or code.",
    ar: "لا توجد منتجات مطابقة لهذا البحث. جرّب اسمًا أو رمزًا مختلفًا.",
  },
  perUnit: { en: "kg", ar: "كجم" },

  // Product detail page
  backToCatalog: { en: "Back to Catalog", ar: "العودة إلى الكتالوج" },
  overview: { en: "Overview", ar: "نظرة عامة" },
  quotationLabel: { en: "Quotation", ar: "عرض السعر" },
  incotermsLabel: { en: "Incoterms: FOB", ar: "شروط التجارة: FOB" },
  exportReady: { en: "Export Ready", ar: "جاهز للتصدير" },
  secureExportProcessing: { en: "Secure Export Processing", ar: "معالجة تصدير آمنة" },
  discountOff: { en: "OFF", ar: "خصم" },
  finalPricingNote: {
    en: "Final pricing may vary based on exact volume and destination port.",
    ar: "قد يختلف السعر النهائي حسب الكمية الدقيقة وميناء الوجهة.",
  },
  specOrigin: { en: "Origin", ar: "المنشأ" },
  specCategory: { en: "Category", ar: "الفئة" },
  specCode: { en: "Product Code", ar: "رمز المنتج" },
  specGrade: { en: "Export Grade", ar: "درجة التصدير" },
  originValue: { en: "Addis Ababa, Ethiopia", ar: "أديس أبابا، إثيوبيا" },
  gradeValue: { en: "Premium / Grade 1", ar: "ممتاز / الدرجة الأولى" },
  productNotFound: { en: "Product Not Found", ar: "المنتج غير موجود" },

  // Order summary (contact page)
  orderSummaryTitle: { en: "Order Summary", ar: "ملخص الطلب" },
  orderProduct: { en: "Product", ar: "المنتج" },
  orderCode: { en: "Product Code", ar: "رمز المنتج" },
  orderPrice: { en: "Price", ar: "السعر" },
  orderDiscount: { en: "Discount", ar: "الخصم" },
  discountNone: { en: "None", ar: "لا يوجد" },

  // Contact form fields
  formFullName: { en: "Full Name", ar: "الاسم الكامل" },
  formCompany: { en: "Company Name", ar: "اسم الشركة" },
  formCountry: { en: "Country", ar: "الدولة" },
  formEmail: { en: "Email", ar: "البريد الإلكتروني" },
  formPhone: { en: "Phone", ar: "الهاتف" },
  formSubject: { en: "Subject", ar: "الموضوع" },
  labelPhone: { en: "Phone", ar: "الهاتف" },
  labelEmail: { en: "Email", ar: "البريد الإلكتروني" },
  labelAddress: { en: "Address", ar: "العنوان" },
  formMessage: { en: "Message", ar: "الرسالة" },
  formMessagePlaceholder: {
    en: "Tell us about your target volume, destination port, and timeline…",
    ar: "أخبرنا عن الكمية المستهدفة، ميناء الوجهة، والجدول الزمني…",
  },
  formSuccessTitle: { en: "Inquiry received", ar: "تم استلام الاستفسار" },
  formSuccessBody: {
    en: "Thank you — our export team will reach out within one business day.",
    ar: "شكرًا لك — سيتواصل معك فريق التصدير لدينا خلال يوم عمل واحد.",
  },

  // Footer
  footerQuickLinks: { en: "Quick Links", ar: "روابط سريعة" },
  footerCategories: { en: "Categories", ar: "الفئات" },
  footerContact: { en: "Contact", ar: "تواصل معنا" },
  footerDesignedBy: {
    en: "Designed for international trade, built in Addis Ababa.",
    ar: "مصمم للتجارة الدولية، صُنع في أديس أبابا.",
  },

  // Categories (shared by product filters, gallery tabs, category cards)
  categoryCoffee: { en: "Coffee", ar: "القهوة" },
  categoryPulses: { en: "Pulses", ar: "البقوليات" },
  categoryOilSeeds: { en: "Oil Seeds", ar: "البذور الزيتية" },
  categorySpices: { en: "Spices", ar: "التوابل" },
  categoryGrains: { en: "Grains", ar: "الحبوب" },
  categoryHerbs: { en: "Herbs", ar: "الأعشاب" },
  categoryVideos: { en: "Videos", ar: "الفيديوهات" },
};

// ---------------------------------------------------------------------------
// Full page content. Referenced by passing the node itself:
// languageTranslate(language, content.pages.home.hero.title)
// ---------------------------------------------------------------------------
export const content = {
  commone: {
    companyInfo: {
      companyName: { en: "Blel Trading", ar: "بلل تريدينغ" },
      address: { en: "Bole Road, Addis Ababa, Ethiopia", ar: "طريق بولي، أديس أبابا، إثيوبيا" },
      phone: { en: "+251 911 000 000", ar: "+251 911 000 000" },
      email: { en: "export@blel.com", ar: "export@blel.com" },
      description: {
        en: "A trusted Ethiopian trading company connecting local agricultural producers with international markets.",
        ar: "شركة تجارية إثيوبية موثوقة تربط المنتجين الزراعيين المحليين بالأسواق الدولية.",
      },
    },
    officeHours: {
      title: { en: "Office Hours", ar: "ساعات العمل" },
      rows: [
        { day: { en: "Monday – Friday", ar: "الإثنين – الجمعة" }, time: { en: "8:00 – 18:00 EAT", ar: "8:00 – 18:00 بتوقيت شرق أفريقيا" } },
        { day: { en: "Saturday", ar: "السبت" }, time: { en: "9:00 – 13:00 EAT", ar: "9:00 – 13:00 بتوقيت شرق أفريقيا" } },
        { day: { en: "Sunday", ar: "الأحد" }, time: { en: "Closed", ar: "مغلق" } },
      ],
    },
    // Shared six-step export process, reused on Home and About
    processSteps: [
      { title: { en: "Sourcing", ar: "التوريد" } },
      { title: { en: "Quality Inspection", ar: "فحص الجودة" } },
      { title: { en: "Cleaning & Grading", ar: "التنظيف والتصنيف" } },
      { title: { en: "Packaging", ar: "التعبئة والتغليف" } },
      { title: { en: "Export Documentation", ar: "وثائق التصدير" } },
      { title: { en: "Global Delivery", ar: "التسليم العالمي" } },
    ],
    founderMessage: {
      eyebrow: { en: "Founder Message", ar: "كلمة المؤسس" },
      name: { en: "Elias Mendaye", ar: "إلياس منداي" },
      role: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
      body: {
        en: "At BLEL, we believe that every successful partnership is built on trust, integrity, and excellence. Our vision is to connect markets, create opportunities, and deliver value through dependable trading solutions that exceed expectations. We are committed to building lasting relationships with our clients and partners by providing quality products, reliable service, and uncompromising professionalism. As we grow, our promise remains the same: to conduct every business relationship with honesty, respect, and a relentless pursuit of excellence. Thank you for placing your trust in BLEL. We look forward to growing together.",
        ar: "في بلل، نؤمن بأن كل شراكة ناجحة تُبنى على الثقة والنزاهة والتميز. رؤيتنا هي ربط الأسواق، وخلق الفرص، وتقديم القيمة من خلال حلول تجارية موثوقة تفوق التوقعات. نحن ملتزمون ببناء علاقات دائمة مع عملائنا وشركائنا من خلال تقديم منتجات عالية الجودة، وخدمة موثوقة، ومهنية لا تقبل المساومة. ومع نمونا، يبقى وعدنا كما هو: إدارة كل علاقة عمل بصدق واحترام وسعي دؤوب نحو التميز. شكرًا لكم على وضع ثقتكم في بلل. نتطلع إلى النمو معًا.",
      },
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
  },

  pages: {
    home: {
      hero: {
        eyebrow: { en: "Addis Ababa → 20+ Countries", ar: "أديس أبابا ← أكثر من 20 دولة" },
        title: { en: "Exporting Ethiopia's Finest Products to the World", ar: "نصدّر أجود المنتجات الإثيوبية إلى العالم" },
        subtitle: {
          en: "From highland coffee cherries to stone-milled spice, every lot that leaves our warehouse carries a documented trail of quality — inspected, graded, and shipped by a team that has done this for a decade.",
          ar: "من ثمار القهوة الجبلية إلى التوابل المطحونة بالحجر، كل شحنة تغادر مستودعنا تحمل سجلًا موثقًا للجودة — يتم فحصها وتصنيفها وشحنها من قبل فريق يعمل في هذا المجال منذ عقد من الزمن.",
        },
        ctaPrimary: { en: "Explore Products", ar: "استكشف المنتجات" },
        ctaSecondary: { en: "Contact Us", ar: "اتصل بنا" },
        stats: [
          { value: { en: "20+", ar: "+20" }, label: { en: "Countries Served", ar: "دولة نخدمها" } },
          { value: { en: "150+", ar: "+150" }, label: { en: "Products Exported", ar: "منتج مُصدَّر" } },
          { value: { en: "10+", ar: "+10" }, label: { en: "Years Experience", ar: "سنوات خبرة" } },
        ],
      },
      whyChooseUs: {
        eyebrow: { en: "Why Blel", ar: "لماذا بلل" },
        title: { en: "Built for buyers who can't afford surprises", ar: "صُممت لأجل المشترين الذين لا يحتملون المفاجآت" },
        reasons: [
          { icon: "fa-award", title: { en: "Premium Quality", ar: "جودة فائقة" }, copy: { en: "Hand-graded lots, moisture-tested and cupped before a single sack is sealed.", ar: "دفعات مصنّفة يدويًا، مختبرة الرطوبة ومذوّقة قبل ختم أي كيس." } },
          { icon: "fa-globe", title: { en: "International Standards", ar: "معايير دولية" }, copy: { en: "Documentation, phytosanitary certificates and packaging aligned to import regulations in every market we serve.", ar: "وثائق وشهادات صحة نباتية وتغليف متوافق مع أنظمة الاستيراد في كل سوق نخدمه." } },
          { icon: "fa-handshake", title: { en: "Trusted Export Partner", ar: "شريك تصدير موثوق" }, copy: { en: "A decade of repeat relationships with roasters, distributors and importers across five continents.", ar: "عقد من العلاقات المتكررة مع المحمصات والموزعين والمستوردين عبر خمس قارات." } },
          { icon: "fa-truck-fast", title: { en: "Fast Delivery", ar: "توصيل سريع" }, copy: { en: "Direct routing through Djibouti port keeps lead times short and predictable.", ar: "التوجيه المباشر عبر ميناء جيبوتي يحافظ على أوقات تسليم قصيرة ويمكن التنبؤ بها." } },
          { icon: "fa-tags", title: { en: "Competitive Pricing", ar: "أسعار تنافسية" }, copy: { en: "Direct-from-source sourcing removes the middlemen that inflate landed cost.", ar: "التوريد المباشر من المصدر يزيل الوسطاء الذين يرفعون التكلفة النهائية." } },
          { icon: "fa-leaf", title: { en: "Sustainable Sourcing", ar: "توريد مستدام" }, copy: { en: "Long-term partnerships with smallholder cooperatives who share in export value.", ar: "شراكات طويلة الأمد مع تعاونيات صغار المزارعين الذين يشاركون في قيمة التصدير." } },
        ],
      },
      featuredProducts: {
        eyebrow: { en: "Featured Lots", ar: "دفعات مميزة" },
        title: { en: "This season's export-ready selection", ar: "تشكيلة هذا الموسم الجاهزة للتصدير" },
      },
      categories: {
        eyebrow: { en: "Categories", ar: "الفئات" },
        title: { en: "Six commodity lines, one manifest", ar: "ستة خطوط سلعية، بيان شحن واحد" },
      },
      companyHighlights: {
        eyebrow: { en: "Who We Are", ar: "من نحن" },
        title: { en: "Rooted in Ethiopian soil, built for global trade", ar: "متجذرون في التربة الإثيوبية، مبنيون للتجارة العالمية" },
        badge: { en: "Certified", ar: "معتمد" },
        badgeCopy: { en: "Every shipment traceable to origin farm and lot number.", ar: "كل شحنة يمكن تتبعها إلى المزرعة الأصلية ورقم الدفعة." },
        pillars: [
          { icon: "fa-bullseye", title: { en: "Mission", ar: "المهمة" }, copy: { en: "To connect Ethiopian producers directly with international buyers through transparent, quality-first trade.", ar: "ربط المنتجين الإثيوبيين مباشرة بالمشترين الدوليين من خلال تجارة شفافة تضع الجودة أولاً." } },
          { icon: "fa-eye", title: { en: "Vision", ar: "الرؤية" }, copy: { en: "To be Ethiopia's most trusted name in agricultural export within a decade.", ar: "أن نكون الاسم الأكثر ثقة في التصدير الزراعي الإثيوبي خلال عقد من الزمن." } },
          { icon: "fa-seedling", title: { en: "Values", ar: "القيم" }, copy: { en: "Integrity, traceability, and fair value returned to the farmers we work with.", ar: "النزاهة، وإمكانية التتبع، والقيمة العادلة التي تعود إلى المزارعين الذين نعمل معهم." } },
        ],
      },
      galleryPreview: { eyebrow: { en: "From the Field", ar: "من الحقل" }, title: { en: "Gallery", ar: "معرض الصور" } },
      businessProcess: { eyebrow: { en: "How An Order Ships", ar: "كيف يتم شحن الطلب" }, title: { en: "From sourcing to global delivery", ar: "من التوريد إلى التسليم العالمي" } },
      testimonials: {
        eyebrow: { en: "Buyers Say", ar: "يقول المشترون" },
        title: { en: "Trusted across the world", ar: "موثوقون حول العالم" },
        items: [
          { quote: { en: "Consistent grading and on-time shipping every quarter. Blel's paperwork alone saves us days at customs.", ar: "تصنيف ثابت وشحن في الموعد كل ربع سنة. أوراق بلل وحدها توفر لنا أيامًا في الجمارك." }, name: { en: "Lars Jensen", ar: "لارس جينسن" }, org: { en: "Nordic Roasters — Denmark", ar: "نورديك روسترز — الدنمارك" } },
          { quote: { en: "The sesame lots arrive exactly as sampled — a rare thing in this trade. We've never had to reject a shipment.", ar: "دفعات السمسم تصل تمامًا كما في العينات — أمر نادر في هذه التجارة. لم نضطر يومًا لرفض شحنة." }, name: { en: "Mei Ling Tan", ar: "ميي لينغ تان" }, org: { en: "Golden Harvest Foods — Singapore", ar: "غولدن هارفست فودز — سنغافورة" } },
          { quote: { en: "Their team walked us through certification requirements for the EU market step by step. Genuinely responsive.", ar: "رافقنا فريقهم خطوة بخطوة عبر متطلبات الشهادات لسوق الاتحاد الأوروبي. استجابة حقيقية." }, name: { en: "Amara Osei", ar: "أمارا أوسي" }, org: { en: "Osei Import & Trade — Netherlands", ar: "أوسي للاستيراد والتجارة — هولندا" } },
        ],
      },
      cta: {
        title: { en: "Ready to Import Ethiopian Products?", ar: "هل أنت مستعد لاستيراد المنتجات الإثيوبية؟" },
        subtitle: { en: "Tell us your volumes and destination port — we'll send a formal quotation within one business day.", ar: "أخبرنا بالكميات وميناء الوجهة — سنرسل لك عرض سعر رسمي خلال يوم عمل واحد." },
      },
    },

    about: {
      hero: {
        eyebrow: { en: "Our Story", ar: "قصتنا" },
        title: { en: "A decade of moving Ethiopia's harvest to the world", ar: "عقد من نقل المحصول الإثيوبي إلى العالم" },
        description: {
          en: "BLEL Trading PLC is a trusted Ethiopian trading company dedicated to connecting local agricultural producers with international markets. We specialize in the export of high-quality grains and pulses, delivering products that meet global standards while creating lasting value for our customers and partners. Our export portfolio includes green mung beans, chickpeas, sesame seeds, lentils, and a variety of other agricultural commodities sourced from reliable producers across Ethiopia. Every product is carefully selected, processed and handled to ensure consistent quality, freshness, and traceability. In addition to grains we export salt and cattle.",
          ar: "بلل تريدينغ ش.م.م هي شركة تجارية إثيوبية موثوقة مكرّسة لربط المنتجين الزراعيين المحليين بالأسواق الدولية. نحن متخصصون في تصدير الحبوب والبقوليات عالية الجودة، ونقدم منتجات تلبي المعايير العالمية مع خلق قيمة دائمة لعملائنا وشركائنا. تشمل محفظة صادراتنا الماش الأخضر والحمص وبذور السمسم والعدس ومجموعة متنوعة من السلع الزراعية الأخرى التي يتم توريدها من منتجين موثوقين في جميع أنحاء إثيوبيا. يتم اختيار كل منتج ومعالجته والتعامل معه بعناية لضمان جودة ثابتة ونضارة وإمكانية تتبع. بالإضافة إلى الحبوب، نصدّر الملح والماشية.",
        },
      },
      story: {
        eyebrow: { en: "Since 2015", ar: "منذ 2015" },
        title: { en: "From a single desk in Addis Ababa", ar: "من مكتب واحد في أديس أبابا" },
        paragraph1: {
          en: "Blel started as a two-person trading desk connecting a handful of highland coffee farmers with a single European roaster. The first shipment — four hundred kilos of washed Yirgacheffe — went out in a rented pickup truck bound for Djibouti port.",
          ar: "بدأت بلل كمكتب تجاري من شخصين يربط عددًا قليلًا من مزارعي القهوة الجبلية بمحمصة أوروبية واحدة. الشحنة الأولى — أربعمائة كيلوغرام من قهوة يرغاتشيف المغسولة — خرجت في شاحنة صغيرة مستأجرة متجهة إلى ميناء جيبوتي.",
        },
        paragraph2: {
          en: "Ten years on, that same attention to the paper trail — grading sheets, lot numbers, phytosanitary certificates — now follows every container we load, across six commodity lines and more than twenty destination countries.",
          ar: "بعد عشر سنوات، لا يزال هذا الاهتمام بالسجل الورقي — أوراق التصنيف، أرقام الدفعات، شهادات الصحة النباتية — يرافق كل حاوية نُحمّلها، عبر ستة خطوط سلعية وأكثر من عشرين دولة وجهة.",
        },
      },
      mission: {
        eyebrow: { en: "Our Mission", ar: "مهمتنا" },
        body: {
          en: "Our mission is to connect Ethiopia's rich agricultural resources with global markets by supplying premium-quality products that meet international standards. We are committed to sourcing responsibly, maintaining strict quality control, and delivering every shipment with reliability and professionalism. Through ethical business practices, customer-focused service, and long-term partnerships, we strive to create sustainable value for our clients, suppliers, and stakeholders. By continuously improving our operations and embracing innovation, we aim to contribute to the growth of Ethiopia's export sector while earning the trust of customers around the world.",
          ar: "مهمتنا هي ربط موارد إثيوبيا الزراعية الغنية بالأسواق العالمية من خلال توريد منتجات ممتازة الجودة تلبي المعايير الدولية. نحن ملتزمون بالتوريد المسؤول، والحفاظ على رقابة صارمة على الجودة، وتسليم كل شحنة بموثوقية واحترافية. من خلال ممارسات تجارية أخلاقية، وخدمة تركز على العميل، وشراكات طويلة الأمد، نسعى إلى خلق قيمة مستدامة لعملائنا ومورّدينا وأصحاب المصلحة. من خلال التحسين المستمر لعملياتنا واحتضان الابتكار، نهدف إلى المساهمة في نمو قطاع التصدير الإثيوبي مع كسب ثقة العملاء حول العالم.",
        },
      },
      vision: {
        eyebrow: { en: "Our Vision", ar: "رؤيتنا" },
        body: {
          en: "Our vision is to become one of Ethiopia's most respected and internationally recognized import and export companies, known for excellence, integrity, and dependable service. We aspire to be the preferred global partner for high-quality Ethiopian agricultural products by consistently exceeding customer expectations and building lasting relationships across international markets. As we grow, we envision expanding our product portfolio, strengthening our global presence, and promoting Ethiopia as a trusted source of premium agricultural commodities. Through innovation, sustainability, and an unwavering commitment to quality, we seek to create a lasting impact on the communities we serve and the markets we reach.",
          ar: "رؤيتنا هي أن نصبح واحدة من أكثر شركات الاستيراد والتصدير احترامًا واعترافًا دوليًا في إثيوبيا، معروفة بالتميز والنزاهة والخدمة الموثوقة. نطمح لأن نكون الشريك العالمي المفضل للمنتجات الزراعية الإثيوبية عالية الجودة من خلال تجاوز توقعات العملاء باستمرار وبناء علاقات دائمة عبر الأسواق الدولية. ومع نمونا، نتطلع إلى توسيع محفظة منتجاتنا، وتعزيز حضورنا العالمي، والترويج لإثيوبيا كمصدر موثوق للسلع الزراعية الممتازة. من خلال الابتكار والاستدامة والالتزام الثابت بالجودة، نسعى إلى خلق أثر دائم في المجتمعات التي نخدمها والأسواق التي نصل إليها.",
        },
      },
      values: {
        eyebrow: { en: "What Drives Us", ar: "ما الذي يحركنا" },
        title: { en: "Core Values", ar: "القيم الأساسية" },
        items: [
          { en: "Integrity", ar: "النزاهة" },
          { en: "Excellence", ar: "التميز" },
          { en: "Quality", ar: "الجودة" },
          { en: "Reliability", ar: "الموثوقية" },
          { en: "Customer Focus", ar: "التركيز على العميل" },
          { en: "Sustainability", ar: "الاستدامة" },
        ],
      },
      process: { eyebrow: { en: "Our Process", ar: "عمليتنا" }, title: { en: "From sourcing to global delivery", ar: "من التوريد إلى التسليم العالمي" } },
      whyChoose: {
        eyebrow: { en: "Why Choose Us", ar: "لماذا تختارنا" },
        title: { en: "What sets BLEL apart", ar: "ما الذي يميز بلل" },
        items: [
          { icon: "fa-award", en: "Premium Quality Products", ar: "منتجات بجودة ممتازة" },
          { icon: "fa-globe", en: "International Export Standards", ar: "معايير تصدير دولية" },
          { icon: "fa-seedling", en: "Reliable Sourcing", ar: "توريد موثوق" },
          { icon: "fa-truck-fast", en: "Timely Delivery", ar: "تسليم في الوقت المحدد" },
          { icon: "fa-tags", en: "Competitive Pricing", ar: "أسعار تنافسية" },
          { icon: "fa-handshake", en: "Long-Term Partnerships", ar: "شراكات طويلة الأمد" },
        ],
      },
      exportMarkets: {
        eyebrow: { en: "Export Markets", ar: "أسواق التصدير" },
        title: { en: "Shipping to five continents", ar: "نشحن إلى خمس قارات" },
        description: {
          en: "Our current buyer network spans Northern Europe, the Gulf, East Asia, and North America, with growing demand from West Africa and South America.",
          ar: "تمتد شبكة مشترينا الحالية عبر شمال أوروبا والخليج وشرق آسيا وأمريكا الشمالية، مع طلب متزايد من غرب أفريقيا وأمريكا الجنوبية.",
        },
        markets: [
          { en: "Europe", ar: "أوروبا" },
          { en: "Middle East", ar: "الشرق الأوسط" },
          { en: "East Asia", ar: "شرق آسيا" },
          { en: "North America", ar: "أمريكا الشمالية" },
          { en: "West Africa", ar: "غرب أفريقيا" },
        ],
        stats: [
          { value: { en: "20+", ar: "+20" }, label: { en: "Countries Served", ar: "دولة نخدمها" } },
          { value: { en: "150+", ar: "+150" }, label: { en: "Products Exported", ar: "منتج مُصدَّر" } },
          { value: { en: "10+", ar: "+10" }, label: { en: "Years Experience", ar: "سنوات خبرة" } },
          { value: { en: "500+", ar: "+500" }, label: { en: "Partner Farmers", ar: "مزارع شريك" } },
        ],
      },
      team: {
        eyebrow: { en: "Our Team", ar: "فريقنا" },
        title: { en: "The people behind the paperwork", ar: "الأشخاص وراء الأوراق" },
        members: [
          { name: { en: "Selam Tesfaye", ar: "سلام تسفاي" }, role: { en: "Managing Director", ar: "المديرة العامة" } },
          { name: { en: "Dawit Alemu", ar: "داويت ألمو" }, role: { en: "Head of Quality Control", ar: "رئيس مراقبة الجودة" } },
          { name: { en: "Hana Girma", ar: "هنا غيرما" }, role: { en: "Logistics & Documentation", ar: "اللوجستيات والتوثيق" } },
          { name: { en: "Yonas Bekele", ar: "يوناس بكلي" }, role: { en: "International Sales", ar: "المبيعات الدولية" } },
        ],
      },
      cta: { title: { en: "Want to work with a partner who documents everything?", ar: "هل تريد العمل مع شريك يوثّق كل شيء؟" } },
    },

    products: {
      hero: {
        eyebrow: { en: "Catalog", ar: "الكتالوج" },
        title: { en: "Export-Ready Products", ar: "منتجات جاهزة للتصدير" },
        subtitle: { en: "Every listing carries a lot code you can quote directly in your purchase order.", ar: "كل منتج يحمل رمز دفعة يمكنك إدراجه مباشرة في أمر الشراء الخاص بك." },
      },
      cta: {
        title: { en: "Can't find what you're sourcing?", ar: "لم تجد ما تبحث عنه؟" },
        subtitle: { en: "We source beyond this catalog on request — send us your specification and target volume.", ar: "نقوم بالتوريد خارج هذا الكتالوج عند الطلب — أرسل لنا مواصفاتك والكمية المستهدفة." },
      },
    },

    gallery: {
      hero: {
        eyebrow: { en: "In Pictures", ar: "بالصور" },
        title: { en: "The Gallery", ar: "معرض الصور" },
        subtitle: { en: "From cupping tables in Addis Ababa to container loading at Djibouti port.", ar: "من طاولات تذوق القهوة في أديس أبابا إلى تحميل الحاويات في ميناء جيبوتي." },
      },
    },

    contact: {
      hero: {
        eyebrow: { en: "Get In Touch", ar: "تواصل معنا" },
        title: { en: "Contact Us", ar: "اتصل بنا" },
        subtitle: { en: "Send your inquiry and a member of our export team will reply within one business day.", ar: "أرسل استفسارك وسيرد عليك أحد أعضاء فريق التصدير خلال يوم عمل واحد." },
      },
      form: { title: { en: "Send an Inquiry", ar: "إرسال استفسار" } },
      map: { title: { en: "Blel office location map", ar: "خريطة موقع مكتب بلل" } },
      thankYou: {
        title: { en: "Thank You", ar: "شكرًا لكم" },
        body: {
          en: "Thank you for choosing BLEL trading. We sincerely appreciate your trust and the opportunity to serve you. Our commitment is to provide premium-quality agricultural products, dependable service, and timely delivery while maintaining the highest standards of professionalism and integrity. We assure you that every product is carefully sourced, inspected, and handled to meet international quality standards. With BLEL, you can expect transparency, consistency, and a reliable partnership focused on your long-term success. We look forward to building a lasting relationship and growing together.",
          ar: "شكرًا لاختياركم بلل تريدينغ. نقدّر بصدق ثقتكم والفرصة لخدمتكم. التزامنا هو تقديم منتجات زراعية بجودة ممتازة، وخدمة موثوقة، وتسليم في الوقت المحدد مع الحفاظ على أعلى معايير الاحترافية والنزاهة. نؤكد لكم أن كل منتج يتم توريده وفحصه ومعالجته بعناية لتلبية معايير الجودة الدولية. مع بلل، يمكنكم توقع الشفافية والاتساق وشراكة موثوقة تركز على نجاحكم على المدى الطويل. نتطلع إلى بناء علاقة دائمة والنمو معًا.",
        },
      },
    },
  },
};

// ---------------------------------------------------------------------------
// Translate helper.
//
// Accepts EITHER:
//   1. A string key into `ui`         → languageTranslate(lang, "orderNow")
//   2. A translation node itself       → languageTranslate(lang, content.pages.home.hero.title)
//      (any object shaped like { en: "...", ar: "..." })
//
// Falls back to English, then an empty string, so a missing Arabic entry
// never renders "undefined" in the UI.
// ---------------------------------------------------------------------------
export function languageTranslate(lang, keyOrNode) {
  if (!keyOrNode) return "";

  const node = typeof keyOrNode === "string" ? ui[keyOrNode] : keyOrNode;
  if (!node) return "";

  return node[lang] ?? node.en ?? "";
}

export const LANGUAGES = [
  { value: "en", dir: "ltr" },
  { value: "ar", dir: "rtl" },
];
