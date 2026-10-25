// Single source of truth for gallery items. Category is a machine key used
// for filtering (unchanged across languages); captions are bilingual.
// Category display labels are translated via GALLERY_CATEGORY_UI_KEY below,
// reusing the same ui.category* strings as the product catalog.

export const GALLERY_ITEMS = [
  { id: 1, type: "image", category: "Coffee", src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop", caption: { en: "Sorting washed Arabica lots", ar: "فرز دفعات الأرابيكا المغسولة" } },
  { id: 2, type: "image", category: "Coffee", src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop", caption: { en: "Sun-drying beds, Sidamo", ar: "أسرّة التجفيف الشمسي، سيدامو" } },
  { id: 3, type: "image", category: "Pulses", src: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=1000&auto=format&fit=crop", caption: { en: "Cleaned red kidney beans", ar: "فاصوليا حمراء منظفة" } },
  { id: 4, type: "image", category: "Oil Seeds", src: "https://images.unsplash.com/photo-1615485500704-8e990f9900f4?q=80&w=1000&auto=format&fit=crop", caption: { en: "White sesame, export grade", ar: "سمسم أبيض بجودة التصدير" } },
  { id: 5, type: "image", category: "Spices", src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop", caption: { en: "Stone-milled berbere", ar: "بربري مطحون بالحجر" } },
  { id: 6, type: "image", category: "Coffee", src: "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1000&auto=format&fit=crop", caption: { en: "Cupping table, Addis Ababa", ar: "طاولة تذوق القهوة، أديس أبابا" } },
  { id: 7, type: "image", category: "Oil Seeds", src: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1000&auto=format&fit=crop", caption: { en: "Niger seed intake", ar: "استلام بذور النايجر" } },
  { id: 8, type: "image", category: "Pulses", src: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1000&auto=format&fit=crop", caption: { en: "Kabuli chickpeas, hand-picked", ar: "حمص كابولي، منتقى يدويًا" } },
  { id: 9, type: "image", category: "Spices", src: "https://images.unsplash.com/photo-1599909533144-e8fef60a9c33?q=80&w=1000&auto=format&fit=crop", caption: { en: "Dried korarima pods", ar: "قرون الكورريما المجففة" } },
  { id: 10, type: "video", category: "Videos", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop", caption: { en: "Inside the packing house", ar: "داخل منشأة التعبئة" } },
  { id: 11, type: "image", category: "Coffee", src: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?q=80&w=1000&auto=format&fit=crop", caption: { en: "Green bean warehouse", ar: "مستودع البن الأخضر" } },
  { id: 12, type: "video", category: "Videos", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=1000&auto=format&fit=crop", caption: { en: "Container loading, Djibouti port", ar: "تحميل الحاويات، ميناء جيبوتي" } },
  { id: 13, type: "image", category: "Grains", src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop", caption: { en: "Red sorghum, screened and bagged", ar: "ذرة رفيعة حمراء، مغربلة ومعبأة" } },
  { id: 14, type: "image", category: "Spices", src: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop", caption: { en: "Turmeric root before milling", ar: "جذر الكركم قبل الطحن" } },
  { id: 15, type: "image", category: "Pulses", src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop", caption: { en: "Mung beans, sun-dried", ar: "الماش، مجفف بالشمس" } },
  { id: 16, type: "image", category: "Coffee", src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop", caption: { en: "Raised drying beds at sunrise", ar: "أسرّة التجفيف المرتفعة عند الشروق" } },
  { id: 17, type: "image", category: "Herbs", src: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=1000&auto=format&fit=crop", caption: { en: "Tenadam bundled for drying", ar: "تينادام مربوط للتجفيف" } },
  { id: 18, type: "image", category: "Oil Seeds", src: "https://images.unsplash.com/photo-1615485500704-8e990f9900f4?q=80&w=1000&auto=format&fit=crop", caption: { en: "Sesame ready for bagging", ar: "سمسم جاهز للتعبئة" } },
];

export const GALLERY_TABS = ["All", "Coffee", "Pulses", "Oil Seeds", "Spices", "Grains", "Herbs", "Videos"];

export const GALLERY_CATEGORY_UI_KEY = {
  All: "all",
  Coffee: "categoryCoffee",
  Pulses: "categoryPulses",
  "Oil Seeds": "categoryOilSeeds",
  Spices: "categorySpices",
  Grains: "categoryGrains",
  Herbs: "categoryHerbs",
  Videos: "categoryVideos",
};
