// Single source of truth for product data. Imported by FeaturedProducts
// (home page) and ProductsExplorer (products page). Bilingual: name,
// description and category label all carry { en, ar } pairs.

export const PRODUCTS = [
  {
    id: 1,
    name: { en: "Yirgacheffe Arabica Coffee", ar: "قهوة يرغاتشيف أرابيكا" },
    product_code: "BL-CF-001",
    category: "Coffee",
    description: {
      en: "Washed Grade 1 beans from the Yirgacheffe highlands — bright, floral, citrus-forward cupping notes prized by specialty roasters.",
      ar: "حبوب مغسولة درجة أولى من مرتفعات يرغاتشيف — نكهات زاهية وزهرية وحمضية يقدّرها محمصو القهوة المختصة.",
    },
    price: 6.8,
    discount: 0,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: { en: "Sidamo Natural Coffee", ar: "قهوة سيدامو الطبيعية" },
    product_code: "BL-CF-002",
    category: "Coffee",
    description: {
      en: "Sun-dried natural process, full body with berry and wine-like character. Grade 2, hand-sorted.",
      ar: "معالجة طبيعية مجففة بالشمس، قوام غني بطابع التوت والنبيذ. درجة ثانية، مفروزة يدويًا.",
    },
    price: 6.2,
    discount: 10,
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: { en: "White Sesame Seeds", ar: "بذور السمسم الأبيض" },
    product_code: "BL-OS-011",
    category: "Oil Seeds",
    description: {
      en: "Humera-origin whitish sesame, 99% purity, low FFA — a benchmark grade for tahini and oil pressing.",
      ar: "سمسم أبيض من أصل هوميرا، نقاء 99%، حموضة منخفضة — درجة مرجعية للطحينة وعصر الزيت.",
    },
    price: 1.9,
    discount: 0,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: { en: "Red Kidney Beans", ar: "الفاصوليا الحمراء" },
    product_code: "BL-PL-021",
    category: "Pulses",
    description: {
      en: "Machine-cleaned, uniform sizing, moisture-controlled for long shelf life during ocean freight.",
      ar: "منظفة آليًا، أحجام موحدة، رطوبة مضبوطة لعمر تخزيني طويل أثناء الشحن البحري.",
    },
    price: 1.35,
    discount: 0,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: { en: "Berbere Spice Blend", ar: "خلطة توابل البربري" },
    product_code: "BL-SP-031",
    category: "Spices",
    description: {
      en: "Traditional Ethiopian chili-forward blend, stone-milled in small batches to preserve aromatic oils.",
      ar: "خلطة إثيوبية تقليدية غنية بالفلفل الحار، مطحونة بالحجر على دفعات صغيرة للحفاظ على الزيوت العطرية.",
    },
    price: 4.4,
    discount: 15,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: { en: "White Teff Grain", ar: "حبوب التيف الأبيض" },
    product_code: "BL-GR-041",
    category: "Grains",
    description: {
      en: "Gluten-free ancient grain, fine-milled or whole — the foundation of injera, in export-grade cleanliness.",
      ar: "حبة قديمة خالية من الغلوتين، مطحونة ناعمة أو كاملة — أساس الإنجيرا، بنظافة بمستوى التصدير.",
    },
    price: 2.1,
    discount: 0,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: { en: "Dried Korarima (False Cardamom)", ar: "كورريما مجففة (هيل إثيوبي)" },
    product_code: "BL-HB-051",
    category: "Herbs",
    description: {
      en: "Ethiopian cardamom relative used across regional cuisine and traditional coffee ceremonies.",
      ar: "نبتة تشبه الهيل تُستخدم في المطبخ الإقليمي وطقوس تحضير القهوة التقليدية.",
    },
    price: 9.5,
    discount: 0,
    image: "https://images.unsplash.com/photo-1599909533144-e8fef60a9c33?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: { en: "Chickpeas — Kabuli", ar: "الحمص — كابولي" },
    product_code: "BL-PL-022",
    category: "Pulses",
    description: {
      en: "Large-caliber Kabuli chickpeas, hand-picked, ideal for hummus and roasting markets.",
      ar: "حمص كابولي كبير الحجم، منتقى يدويًا، مثالي لأسواق الحمص والتحميص.",
    },
    price: 1.6,
    discount: 0,
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    name: { en: "Niger Seed (Nug)", ar: "بذور النايجر (نوغ)" },
    product_code: "BL-OS-012",
    category: "Oil Seeds",
    description: {
      en: "High-oil-content niger seed, a leading Ethiopian export crop for birdseed and edible-oil markets.",
      ar: "بذور نايجر عالية المحتوى الزيتي، محصول تصدير إثيوبي رائد لأسواق أعلاف الطيور والزيوت الصالحة للأكل.",
    },
    price: 1.75,
    discount: 5,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: { en: "Limu Arabica Coffee", ar: "قهوة ليمو أرابيكا" },
    product_code: "BL-CF-003",
    category: "Coffee",
    description: {
      en: "Semi-washed Grade 2 lot from the Limu zone — balanced acidity, spicy undertone, a reliable house-blend base.",
      ar: "دفعة درجة ثانية شبه مغسولة من منطقة ليمو — حموضة متوازنة ولمسة توابل، أساس موثوق للخلطات.",
    },
    price: 5.9,
    discount: 0,
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    name: { en: "Green Mung Beans", ar: "الماش الأخضر" },
    product_code: "BL-PL-023",
    category: "Pulses",
    description: {
      en: "Small, uniform mung beans, sun-dried and machine-sorted — popular for sprouting and dal markets.",
      ar: "حبوب ماش صغيرة موحدة الحجم، مجففة بالشمس ومفروزة آليًا — رائجة لأسواق الإنبات والعدس المهروس.",
    },
    price: 1.45,
    discount: 0,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    name: { en: "Ground Turmeric", ar: "الكركم المطحون" },
    product_code: "BL-SP-032",
    category: "Spices",
    description: {
      en: "High-curcumin turmeric root, dried and stone-ground for deep color and shelf-stable aroma.",
      ar: "جذر كركم عالي الكركمين، مجفف ومطحون بالحجر للحصول على لون عميق ورائحة ثابتة.",
    },
    price: 3.1,
    discount: 8,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    name: { en: "Red Sorghum", ar: "الذرة الرفيعة الحمراء" },
    product_code: "BL-GR-042",
    category: "Grains",
    description: {
      en: "Drought-resilient red sorghum, cleaned and screened — a staple export grain for food and feed markets.",
      ar: "ذرة رفيعة حمراء مقاومة للجفاف، منظفة ومغربلة — حبة تصدير أساسية لأسواق الغذاء والعلف.",
    },
    price: 0.95,
    discount: 0,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    name: { en: "Dried Rue (Tenadam)", ar: "السذاب المجفف (تينادام)" },
    product_code: "BL-HB-052",
    category: "Herbs",
    description: {
      en: "Aromatic herb traditional in Ethiopian coffee ceremonies, air-dried to preserve its sharp, resinous scent.",
      ar: "عشبة عطرية تقليدية في طقوس القهوة الإثيوبية، مجففة بالهواء للحفاظ على رائحتها الحادة والراتنجية.",
    },
    price: 7.2,
    discount: 0,
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    name: { en: "Whole Cumin Seed", ar: "بذور الكمون الكاملة" },
    product_code: "BL-SP-033",
    category: "Spices",
    description: {
      en: "Sun-dried cumin, hand-cleaned to remove chaff, with a strong essential-oil content for export-grade aroma.",
      ar: "كمون مجفف بالشمس، منظف يدويًا لإزالة القشور، بمحتوى عالٍ من الزيوت الأساسية لرائحة بمستوى التصدير.",
    },
    price: 4.0,
    discount: 0,
    image: "https://images.unsplash.com/photo-1600326145359-3a44909d1a39?q=80&w=1200&auto=format&fit=crop",
  },
];

export const FEATURED_IDS = [1, 2, 3, 5, 6, 9];

// Machine-facing category keys used for filtering/matching (unchanged
// across languages) mapped to their display translation key in utils/data.js
export const CATEGORIES = ["Coffee", "Pulses", "Oil Seeds", "Spices", "Grains", "Herbs"];

export const CATEGORY_UI_KEY = {
  Coffee: "categoryCoffee",
  Pulses: "categoryPulses",
  "Oil Seeds": "categoryOilSeeds",
  Spices: "categorySpices",
  Grains: "categoryGrains",
  Herbs: "categoryHerbs",
};
