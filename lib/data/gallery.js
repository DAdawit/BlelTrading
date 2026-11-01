// Single source of truth for gallery items. Category is a machine key used
// for filtering (unchanged across languages); captions are bilingual.
// Category display labels are translated via GALLERY_CATEGORY_UI_KEY below,
// reusing the same ui.category* strings as the product catalog.

export const GALLERY_ITEMS = [
  // Coffee items
  { id: 601, type: "image", category: "Coffee", src: "/gallary/coffee1.jpg", caption: { en: "Ethiopian Specialty Arabica Coffee Beans", ar: "حبوب قهوة أرابيكا الإثيوبية المختصة" } },
  { id: 602, type: "image", category: "Coffee", src: "/gallary/coffee2.jpg", caption: { en: "Sun-Drying Ethiopian Coffee Cherries", ar: "تجفيف كرز القهوة الإثيوبية تحت أشعة الشمس" } },
  { id: 603, type: "image", category: "Coffee", src: "/gallary/coffee3.jpg", caption: { en: "Hand-Sorted Grade 1 Green Coffee Lots", ar: "دفعات البن الأخضر درجة أولى مفروزة يدويًا" } },
  { id: 604, type: "image", category: "Coffee", src: "/gallary/coffee4.jpg", caption: { en: "Washed Ethiopian Highlands Coffee Selection", ar: "تشكيلة قهوة مرتفعات إثيوبيا المغسولة" } },
  { id: 605, type: "image", category: "Coffee", src: "/gallary/coffee5.jpg", caption: { en: "Specialty Roasted Ethiopian Coffee Profile", ar: "حبوب قهوة إثيوبية محمصة بجودة عالية" } },
  { id: 606, type: "image", category: "Coffee", src: "/gallary/coffee6.jpg", caption: { en: "Premium Export Arabica Ready for Shipment", ar: "قهوة أرابيكا ممتازة مجهزة لشحن التصدير" } },

  // Livestock items (images + real videos from Blel export operations)
  { id: 101, type: "image", category: "Livestock", src: "/gallary/cow1.jpg", caption: { en: "Ethiopian Boran Cattle — Live Export Herd", ar: "أبقار بوران الإثيوبية — قطيع التصدير الحي" } },
  { id: 102, type: "image", category: "Livestock", src: "/gallary/cow2.jpg", caption: { en: "Selected Boran Cattle for Global Shipment", ar: "أبقار بوران مختارة للشحن والتصدير" } },
  { id: 103, type: "image", category: "Livestock", src: "/gallary/cow3.jpg", caption: { en: "Pasture-Raised Cattle in Ethiopian Rangelands", ar: "أبقار ترعى في المراعي الطبيعية الإثيوبية" } },
  { id: 104, type: "image", category: "Livestock", src: "/gallary/sheep1.jpg", caption: { en: "Somali & Blackhead Persian Sheep Selection", ar: "تشكيلة من الأغنام الصومالية وسوداء الرأس" } },
  { id: 105, type: "video", category: "Livestock", src: "/gallary/sheepv1.mp4", poster: "/gallary/sheep1.jpg", caption: { en: "Live Export Sheep Yard Inspection (Part 1)", ar: "فحص قطيع الأغنام الحية للتصدير (فيديو 1)" } },
  { id: 106, type: "video", category: "Livestock", src: "/gallary/sheepv2.mp4", poster: "/gallary/sheep1.jpg", caption: { en: "Live Export Sheep Health & Sorting (Part 2)", ar: "فرز وفحص صحة أغنام التصدير (فيديو 2)" } },
  { id: 107, type: "video", category: "Livestock", src: "/gallary/sheepv3.mp4", poster: "/gallary/sheep1.jpg", caption: { en: "Export Sheep Conditioning & Feeding (Part 3)", ar: "تغذية ورعاية أغنام التصدير (فيديو 3)" } },
  { id: 108, type: "video", category: "Livestock", src: "/gallary/goatv1.mp4", poster: "/gallary/sheep1.jpg", caption: { en: "Export-Grade Live Goats Inspection", ar: "فحص وتجهيز الماعز الحي للتصدير (فيديو 1)" } },
  { id: 109, type: "image", category: "Livestock", src: "/gallary/camel1.jpg", caption: { en: "Ethiopian Pastoral Dromedary Camels", ar: "إبل دروميداري رعوية إثيوبية" } },
  { id: 110, type: "video", category: "Livestock", src: "/gallary/camelv1.mp4", poster: "/gallary/camel1.jpg", caption: { en: "Pastoral Dromedary Camels Field Selection (Part 1)", ar: "اختيار الإبل الرعوية من الميدان (فيديو 1)" } },
  { id: 111, type: "video", category: "Livestock", src: "/gallary/camelv2.mp4", poster: "/gallary/camel1.jpg", caption: { en: "Export Camels Quarantine & Preparation (Part 2)", ar: "تجهيز وحجر الإبل للتصدير (فيديو 2)" } },

  // Pulses
  { id: 201, type: "image", category: "Pulses", src: "/gallary/chickpeas kabuli.jpg", caption: { en: "Kabuli Chickpeas (Shimbra) — Export Quality", ar: "حمص كابولي إثيوبي (شيمبرا) — جودة تصدير" } },
  { id: 202, type: "image", category: "Pulses", src: "/gallary/chickpeas desi.jpg", caption: { en: "Desi Chickpeas (Shimbra) — Machine Cleaned", ar: "حمص ديسي إثيوبي (شيمبرا) — منظف آليًا" } },
  { id: 203, type: "image", category: "Pulses", src: "/gallary/Haricot-beans.jpg", caption: { en: "Ethiopian Haricot Beans (Common Beans)", ar: "الفاصوليا الإثيوبية (فوليا)" } },
  { id: 204, type: "image", category: "Pulses", src: "/gallary/green Mung.jpg", caption: { en: "Green Mung Beans (Masho) — Drought Resilient", ar: "الماش الأخضر الإثيوبي (ماشو)" } },
  { id: 205, type: "image", category: "Pulses", src: "/gallary/soy beans.jpg", caption: { en: "Non-GMO Ethiopian Soya Beans", ar: "فول الصويا الإثيوبي غير المعدل وراثيًا" } },

  // Oil Seeds
  { id: 301, type: "image", category: "Oil Seeds", src: "/gallary/Sesame Seed.jpg", caption: { en: "White Sesame Seeds (Selit) — Humera & Metema Grade", ar: "بذور السمسم الأبيض (سليط) — درجة هوميرا وميتيما" } },

  // Grains
  { id: 401, type: "image", category: "Grains", src: "/gallary/Sorghum.jpg", caption: { en: "Ethiopian Sorghum Grain (Mashilla)", ar: "حبوب الذرة الرفيعة الإثيوبية (ماشيلا)" } },
  { id: 402, type: "image", category: "Grains", src: "/gallary/Maize.jpg", caption: { en: "Ethiopian Maize (Bekolo) — Sun Dried", ar: "الذرة الإثيوبية (بيكولو) — مجففة بالشمس" } },

  // Spices & Resins
  { id: 501, type: "image", category: "Spices", src: "/gallary/Black seed.jpg", caption: { en: "Ethiopian Black Seed (Tikur Azmud / Nigella Sativa)", ar: "الحبة السوداء الإثيوبية (تيكور أزمود)" } },
  { id: 503, type: "image", category: "Spices", src: "/gallary/ethiopianCardamomMain.jpg", caption: { en: "Ethiopian Cardamom (Korerima) — Sun-Dried Pods", ar: "الهيل الإثيوبي (كوريريما) — قرون مجففة بالشمس" } },
  { id: 504, type: "image", category: "Spices", src: "/gallary/ethiopianCardamom.jpg", caption: { en: "Selected Ethiopian Korerima (Black Cardamom)", ar: "كوريريما إثيوبية مختارة (هيل أسود)" } },
  { id: 505, type: "image", category: "Spices", src: "/gallary/ethiopianCardamom1.jpg", caption: { en: "Harvested Korerima Pods from Southwestern Forests", ar: "قرون كوريريما محصودة من غابات جنوب غرب إثيوبيا" } },
  { id: 506, type: "image", category: "Spices", src: "/gallary/ethiopianCardamom2.jpg", caption: { en: "Export-Graded Ethiopian Cardamom Seeds", ar: "بذور الهيل الإثيوبي المفروزة للتصدير" } },
];

export const GALLERY_TABS = ["All", "Coffee", "Livestock", "Pulses", "Oil Seeds", "Grains", "Spices", "Videos"];

export const GALLERY_CATEGORY_UI_KEY = {
  All: "all",
  Coffee: "categoryCoffee",
  Livestock: "categoryLivestock",
  Pulses: "categoryPulses",
  "Oil Seeds": "categoryOilSeeds",
  Grains: "categoryGrains",
  Spices: "categorySpices",
  Videos: "categoryVideos",
};
