// Single source of truth for product data. Imported by FeaturedProducts
// (home page) and ProductsExplorer (products page). Bilingual: name,
// description, harvesting places, origin and category label all carry { en, ar } pairs.

export const PRODUCTS = [
  {
    id: 1,
    name: {
      en: "Ethiopian Black Seed (Tikur Azmud)",
      ar: "الحبة السوداء الإثيوبية (تيكور أزمود)",
    },
    product_code: "BL-SP-010",
    category: "Spices",
    description: {
      en: "In Ethiopia, black seed—locally known as \"Tikur Azmud\" (ትቁር አዝሙድ) and botanically classified as Nigella sativa (black cumin)—is a highly valued annual herbaceous plant. It is widely used across the country to flavor food (such as stews, soups, and breads) and for its extensive traditional medicinal benefits.",
      ar: "في إثيوبيا، تُعرف الحبة السوداء محليًا باسم \"تيكور أزمود\" (ትቁር አዝሙድ) وتُصنف نباتيًا كحبة البركة (Nigella sativa). وهي نبتة عشبية سنوية عالية القيمة، تُستخدم على نطاق واسع في إثيوبيا لإضفاء النكهة على الأطعمة (مثل اليخنات والحساء والخبز) ولفوائدها الطبية والتقليدية الواسعة.",
    },
    harvesting_places: {
      en: "Amhara (South Gondar, South Wollo) — Oromia (Bale, Arsi, North & West Shewa, Jimma, Illubabor)",
      ar: "أمهرة (جنوب غوندار، جنوب ولو) — أوروميا (بالي، أرسي، شمال وغرب شيوا، جيما، إيلوبابور)",
    },
    origin: {
      en: "Amhara & Oromia, Ethiopia",
      ar: "أمهرة وأوروميا، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/Black seed.jpg",
  },
  {
    id: 2,
    name: {
      en: "Ethiopian Sesame Seeds (Selit)",
      ar: "بذور السمسم الإثيوبي (سليط)",
    },
    product_code: "BL-OS-011",
    category: "Oil Seeds",
    description: {
      en: "In Ethiopia, sesame seeds—locally known as \"Selit\" (ሰሊጥ) and scientifically named Sesamum indicum L.—are the crown jewel of the country's oilseed sector. Ranking as one of Ethiopia's top agricultural export earners, Ethiopian sesame is globally celebrated for its high nutritional value, exceptional oil content, and distinctively sweet, nutty aroma.",
      ar: "في إثيوبيا، يُعد السمسم—المعروف محليًا باسم \"سليط\" (ሰሊጥ) وعلميًا باسم Sesamum indicum L.—جوهرة تاج قطاع البذور الزيتية وأحد أهم مصادر الدخل التصديري، ويشتهر عالميًا بمحتواه الزيتي الاستثنائي ورائحته العطرية المميزة.",
    },
    harvesting_places: {
      en: "Tigray (Kafta Humera, Wolkait, Tselemt) — Amhara (Metema, Quara, Tach Armachiho, Abrehajira) — Oromia (East & West Wollega) — Benishangul-Gumuz (Asosa & Kamashi)",
      ar: "تيغراي (كافتا هوميرا، ولكايت، تسيلمت) — أمهرة (ميتيما، كوارا، تاش أرماشيهو، أبريهاجيرا) — أوروميا (شرق وغرب ووليغا) — بني شنقول-قماز (أصوسا وكاماتشي)",
    },
    origin: {
      en: "Humera, Metema & Wollega, Ethiopia",
      ar: "هوميرا، ميتيما وووليغا، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/Sesame Seed.jpg",
  },
  {
    id: 3,
    name: {
      en: "Ethiopian Soya Beans",
      ar: "فول الصويا الإثيوبي",
    },
    product_code: "BL-PL-024",
    category: "Pulses",
    description: {
      en: "In Ethiopia, soybeans—locally known as \"Soya Bean\" (ሶያ ቢን) and scientifically named Glycine max (L.) Merrill—are a highly strategic crop. They are rapidly expanding due to their dual value as a nutrient-dense food source, a raw material for edible oil and animal feed processing factories, and a natural soil fertilizer via nitrogen fixation.",
      ar: "في إثيوبيا، يُعد فول الصويا—المعروف محليًا باسم \"صويا بين\" (ሶያ ቢን) وعلميًا باسم Glycine max (L.) Merrill—محصولاً استراتيجيًا ينمو بسرعة لقيمته المزدوجة كمصدر غذائي غني بالعناصر، ومادة خام لمصانع الزيوت النباتية والأعلاف، وسماد طبيعي للتربة.",
    },
    harvesting_places: {
      en: "Oromia (Buno Bedele, Illubabor, Wollega, Jimma) — Amhara (West Gojjam, Awi Zone) — Benishangul-Gumuz (Asosa, Kamashi)",
      ar: "أوروميا (بونو بيديلي، إيلوبابور، ووليغا، جيما) — أمهرة (غرب غوجام، أوي) — بني شنقول-قماز (أصوسا، كاماتشي)",
    },
    origin: {
      en: "Oromia & Amhara, Ethiopia",
      ar: "أوروميا وأمهرة، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/soy beans.jpg",
  },
  {
    id: 4,
    name: {
      en: "Ethiopian Haricot Beans (Common Beans)",
      ar: "الفاصوليا الإثيوبية (فوليا)",
    },
    product_code: "BL-PL-021",
    category: "Pulses",
    description: {
      en: "In Ethiopia, haricot beans—commonly referred to as common beans (ፎሊያ) and scientifically named Phaseolus vulgaris L.—are one of the country's most critical pulse crops. They serve a dual purpose as a vital source of protein for domestic consumption and a top-tier agricultural cash crop for international export.",
      ar: "في إثيوبيا، تُعد الفاصوليا—المعروفة محليًا باسم \"فوليا\" (ፎሊያ) وعلميًا باسم Phaseolus vulgaris L.—واحدة من أهم محاصيل البقوليات، وتوفر مصدرًا حيويًا للبروتين ومحصولاً نقديًا من الدرجة الأولى للتصدير الدولي.",
    },
    harvesting_places: {
      en: "Oromia (East & West Hararghe, East Shewa Rift Valley, Buno Bedele, West Guji) — Amhara (West Gojjam, Awi Zone, North & South Wollo) — Benishangul-Gumuz (Asosa) — Southern & Central Ethiopia (Wolaita, Sidama Zone, Gamo Gofa, Alaba)",
      ar: "أوروميا (شرق وغرب هررغي، شرق شيوا، بونو بيديلي، غرب غوجي) — أمهرة (غرب غوجام، أوي، شمال وجنوب ولو) — بني شنقول-قماز (أصوسا) — جنوب ووسط إثيوبيا (ولايتا، سيداما، غامو غوفا، ألابا)",
    },
    origin: {
      en: "Rift Valley & Central Highlands, Ethiopia",
      ar: "وادي الصدع والمرتفعات الوسطى، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/Haricot-beans.jpg",
  },
  {
    id: 5,
    name: {
      en: "Kabuli Chickpeas (Shimbra)",
      ar: "حمص كابولي إثيوبي (شيمبرا)",
    },
    product_code: "BL-PL-022",
    category: "Pulses",
    description: {
      en: "In Ethiopia, chickpeas—locally known as \"Shimbra\" (ሽምብራ) and botanically named Cicer arietinum L.—are one of the country's most vital pulse crops. Ethiopia is the largest producer of chickpeas in Africa. The crop plays a massive role in national food security, domestic cuisine (especially the staple dish Shiro Wot), and agricultural export revenue.",
      ar: "في إثيوبيا، يُعد الحمص—المعروف محليًا باسم \"شيمبرا\" (ሽምብራ) ونباتيًا باسم Cicer arietinum L.—من أهم محاصيل البقوليات. وتعتبر إثيوبيا أكبر منتج للحمص في أفريقيا، ويلعب المحصول دورًا رئيسيًا في الأمن الغذائي والمطبخ الإثيوبي وعائدات التصدير.",
    },
    harvesting_places: {
      en: "Oromia (East Shewa, West Shewa, Arsi, Bale) — Amhara (North & South Gondar, East & West Gojjam, North Shewa, South Wollo)",
      ar: "أوروميا (شرق وغرب شيوا، أرسي، بالي) — أمهرة (شمال وجنوب غوندار، شرق وغرب غوجام، شمال شيوا، جنوب ولو)",
    },
    origin: {
      en: "Gojjam, Gondar & Shewa, Ethiopia",
      ar: "غوجام، غوندار وشيوا، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/chickpeas kabuli.jpg",
  },
  {
    id: 6,
    name: {
      en: "Desi Chickpeas (Shimbra)",
      ar: "حمص ديسي إثيوبي (شيمبرا)",
    },
    product_code: "BL-PL-025",
    category: "Pulses",
    description: {
      en: "In Ethiopia, chickpeas—locally known as \"Shimbra\" (ሽምብራ) and botanically named Cicer arietinum L.—are one of the country's most vital pulse crops. Ethiopia is the largest producer of chickpeas in Africa. The Desi variety is recognized by its smaller size, angular shape, high fiber, and rich flavor, widely sought after for export processing.",
      ar: "في إثيوبيا، يُعد حمص ديسي—المعروف محليًا باسم \"شيمبرا\" (ሽምብራ)—محصولاً بقوليًا حيويًا غنيًا بالألياف والبروتين، ويتميز بحجمه الأصغر ونكهته الغنية وقدرته الممتازة على الحفظ والتصدير.",
    },
    harvesting_places: {
      en: "Oromia (East Shewa, West Shewa, Arsi, Bale) — Amhara (North & South Gondar, East & West Gojjam, North Shewa, South Wollo)",
      ar: "أوروميا (شرق وغرب شيوا، أرسي، بالي) — أمهرة (شمال وجنوب غوندار، شرق وغرب غوجام، شمال شيوا، جنوب ولو)",
    },
    origin: {
      en: "Amhara & Oromia, Ethiopia",
      ar: "أمهرة وأوروميا، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/chickpeas desi.jpg",
  },
  {
    id: 7,
    name: {
      en: "Green Mung Beans (Masho)",
      ar: "الماش الأخضر الإثيوبي (ماشو)",
    },
    product_code: "BL-PL-023",
    category: "Pulses",
    description: {
      en: "In Ethiopia, green mung beans—locally known as \"Masho\" (ማሾ) and botanically classified as Vigna radiata L.—are a fast-emerging pulse crop. Known as a \"short-season crop,\" they are highly valued for their drought tolerance and ability to thrive in dry, marginal lowland environments.",
      ar: "في إثيوبيا، يُعد الماش الأخضر—المعروف محليًا باسم \"ماشو\" (ማሾ) ونباتيًا باسم Vigna radiata L.—محصولاً ناشئًا سريع النمو ومقاومًا للجفاف، ينمو بنجاح في البيئات المنخفضة الجافة وله طلب متزايد في أسواق التصدير.",
    },
    harvesting_places: {
      en: "Amhara (North Shewa: Shewa Robit, Debre Sina; South Wollo) — Benishangul-Gumuz (Asosa & Kamashi) — Oromia & Southern Rift Valley (Rift Valley Fringes, Omo River Valley)",
      ar: "أمهرة (شمال شيوا: شيوا روبيت، ديبري سينا؛ جنوب ولو) — بني شنقول-قماز (أصوسا وكاماتشي) — أوروميا ووادي الصدع الإفريقي (أطراف الوادي، وادي نهر أومو)",
    },
    origin: {
      en: "Shewa Robit & Lowland Rift Valley, Ethiopia",
      ar: "شيوا روبيت ووادي الصدع المنخفض، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/green Mung.jpg",
  },
  {
    id: 8,
    name: {
      en: "Ethiopian Sorghum (Mashilla)",
      ar: "الذرة الرفيعة الإثيوبية (ماشيلا)",
    },
    product_code: "BL-GR-042",
    category: "Grains",
    description: {
      en: "In Ethiopia, sorghum—locally known as \"Mashilla\" (ማሽላ) and botanically named Sorghum bicolor (L.) Moench—is a highly critical indigenous cereal crop. Ethiopia is widely recognized as the primary center of origin and evolutionary diversification for sorghum. Ranking as the country’s fourth most produced cereal crop, it acts as a cornerstone for food security in arid environments and is the second most preferred grain after teff for making premium-quality injera.",
      ar: "في إثيوبيا، تُعد الذرة الرفيعة—المعروفة محليًا باسم \"ماشيلا\" (ማሽላ) وعلميًا باسم Sorghum bicolor (L.) Moench—محصول حبوب أصيل وحيوي، وتعتبر إثيوبيا مركز المنشأ الرئيسي له عالميًا. رابع أكثر الحبوب إنتاجًا في البلاد، وأساس لصناعة الإنجيرا الفاخرة بعد التيف.",
    },
    harvesting_places: {
      en: "Tigray (Raya Azebo) — Amhara (North & South Wollo, West Gondar) — Oromia (East & West Hararghe, West Shewa, Jimma) — Benishangul-Gumuz (Metekel)",
      ar: "تيغراي (رايا أزيبو) — أمهرة (شمال وجنوب ولو، غرب غوندار) — أوروميا (شرق وغرب هررغي، غرب شيوا، جيما) — بني شنقول-قماز (ميتيكل)",
    },
    origin: {
      en: "Raya Azebo, Wollo & Gondar, Ethiopia",
      ar: "رايا أزيبو، ولو وغوندار، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/Sorghum.jpg",
  },
  {
    id: 9,
    name: {
      en: "Ethiopian Maize (Bekolo)",
      ar: "الذرة الإثيوبية (بيكولو)",
    },
    product_code: "BL-GR-043",
    category: "Grains",
    description: {
      en: "In Ethiopia, maize—locally known as \"Bekolo\" (በቆሎ) and scientifically named Zea mays L.—is the country's most vital cereal crop in terms of both total production volume and land coverage. It serves as the primary caloric backbone for smallholder farming families and has increasingly evolved into a major commercial crop for local agro-processors, starch manufacturers, and animal feed factories.",
      ar: "في إثيوبيا، تُعد الذرة—المعروفة محليًا باسم \"بيكولو\" (በቆሎ) وعلميًا باسم Zea mays L.—أهم محصول حبوب في البلاد من حيث إجمالي حجم الإنتاج والمساحة، وتشكل عماد الأمن الغذائي ومحصولاً تجاريًا أساسيًا للأعلاف والصناعات الغذائية والتصدير.",
    },
    harvesting_places: {
      en: "Oromia (East & West Wollega, Buno Bedele, Illubabor, Jimma) — Amhara (West & East Gojjam, Awi) — Benishangul-Gumuz (Metekel, Asosa) — Southern & Central Ethiopia (Wolaita, Gamo, Hadiya, Gurage, Sidama)",
      ar: "أوروميا (شرق وغرب ووليغا، بونو بيديلي، إيلوبابور، جيما) — أمهرة (غرب وشرق غوجام، أوي) — بني شنقول-قماز (ميتيكل، أصوسا) — جنوب ووسط إثيوبيا (ولايتا، غامو، هاديا، غوراغي، سيداما)",
    },
    origin: {
      en: "Wollega, Gojjam & Jimma, Ethiopia",
      ar: "ووليغا، غوجام وجيما، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/Maize.jpg",
  },
  {
    id: 12,
    name: {
      en: "Ethiopian Live Cattle",
      ar: "الأبقار الإثيوبية الحية",
    },
    product_code: "BL-LS-001",
    category: "Livestock",
    description: {
      en: "Prime pasture-raised Boran beef cattle, renowned for lean yield, climate resilience, and disease tolerance. Certified under veterinary quarantine standards for live international export.",
      ar: "أبقار لحوم بوران ممتازة ترعى في المراعي الطبيعية، معروفة بإنتاجية اللحم الخالي من الدهون وتحمل المناخ ومقاومة الأمراض. معتمدة ومفحوصة بيطريًا للتصدير الدولي الحي.",
    },
    harvesting_places: {
      en: "Borena Zone and Southern Pastoral Rangelands, Ethiopia",
      ar: "منطقة بورينا والمراعي الجنوبية الرعوية، إثيوبيا",
    },
    origin: {
      en: "Borena Zone, Ethiopia",
      ar: "منطقة بورينا، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/cow1.jpg",
  },
  {
    id: 13,
    name: {
      en: "Somali & Blackhead Persian Sheep",
      ar: "أغنام صومالية وسوداء الرأس حية",
    },
    product_code: "BL-LS-002",
    category: "Livestock",
    description: {
      en: "Fat-tailed export sheep selected for healthy weight and tender meat quality. Vaccinated and certified under international veterinary standards for Gulf and regional markets.",
      ar: "أغنام تصدير ذات إلية دهنية مختارة للأوزان الصحية وجودة اللحم الطري. محصنة ومعتمدة وفقًا للمعايير البيطرية الدولية لأسواق الخليج والمنطقة.",
    },
    harvesting_places: {
      en: "Eastern Pastoral Lowlands & Somali Region, Ethiopia",
      ar: "السهول الرعوية الشرقية والمنطقة الصومالية، إثيوبيا",
    },
    origin: {
      en: "Eastern Pastoral Lowlands, Ethiopia",
      ar: "السهول الرعوية الشرقية، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/sheep1.jpg",
  },
  {
    id: 14,
    name: {
      en: "Ethiopian Pastoral Dromedary Camels",
      ar: "إبل دروميداري إثيوبية حية",
    },
    product_code: "BL-LS-003",
    category: "Livestock",
    description: {
      en: "Hardy, healthy one-humped dromedaries sourced from pastoral communities in eastern Ethiopia. Suitable for meat, milk, and breeding, with full export health clearance.",
      ar: "إبل وحيدة السنام قوية وصحية مصدرها المجتمعات الرعوية في شرق إثيوبيا. مناسبة للحوم والحليب والتربية مع شهادات صحية كاملة للتصدير.",
    },
    harvesting_places: {
      en: "Afar and Somali Pastoral Zones, Eastern Ethiopia",
      ar: "مناطق عفر والصومال الرعوية، شرق إثيوبيا",
    },
    origin: {
      en: "Afar & Somali Lowlands, Ethiopia",
      ar: "سهول عفر والصومال، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/camel1.jpg",
  },
  {
    id: 15,
    name: {
      en: "Yirgacheffe Arabica Coffee",
      ar: "قهوة يرغاتشيف أرابيكا",
    },
    product_code: "BL-CF-001",
    category: "Coffee",
    description: {
      en: "Washed Grade 1 beans from the Yirgacheffe highlands — bright, floral, citrus-forward cupping notes prized by specialty roasters worldwide.",
      ar: "حبوب مغسولة درجة أولى من مرتفعات يرغاتشيف — نكهات زاهية وزهرية وحمضية يقدّرها محمصو القهوة المختصة حول العالم.",
    },
    harvesting_places: {
      en: "Gedeo Zone, Yirgacheffe Highlands, Southern Ethiopia",
      ar: "منطقة غيديو، مرتفعات يرغاتشيف، جنوب إثيوبيا",
    },
    origin: {
      en: "Yirgacheffe, Ethiopia",
      ar: "يرغاتشيف، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/coffee1.jpg",
  },
  {
    id: 16,
    name: {
      en: "Sidamo Natural Coffee",
      ar: "قهوة سيدامو الطبيعية",
    },
    product_code: "BL-CF-002",
    category: "Coffee",
    description: {
      en: "Sun-dried natural process, full body with berry and wine-like character. Grade 2, hand-sorted for uniform moisture and zero defect tolerance.",
      ar: "معالجة طبيعية مجففة بالشمس، قوام غني بطابع التوت، درجة ثانية مفروزة يدويًا بنظافة تامة للتصدير.",
    },
    harvesting_places: {
      en: "Sidama Regional State, Southern Ethiopia",
      ar: "إقليم سيداما، جنوب إثيوبيا",
    },
    origin: {
      en: "Sidama, Ethiopia",
      ar: "سيداما، إثيوبيا",
    },
    price: 0,
    discount: 0,
    image: "/gallary/coffee3.jpg",
  },
  {
    id: 18,
    name: {
      en: "Ethiopian Cardamom (Korerima)",
      ar: "الهيل الإثيوبي (كوريريما)",
    },
    product_code: "BL-SP-012",
    category: "Spices",
    description: {
      en: "Korerima (ኮረሪማ) is a traditional Ethiopian spice obtained from the seeds of a plant in the ginger family. It is widely used in Ethiopian cooking, spice blends, and traditional hot beverages, imparting a rich, aromatic, and comforting herbal aroma.",
      ar: "كوريريما (ኮረሪማ) هو نوع من التوابل الإثيوبية التقليدية يُستخرج من بذور نبات ينتمي إلى عائلة الزنجبيل. يُستخدم على نطاق واسع في الطهي الإثيوبي ومزيج التوابل، ويمنح نكهة دافئة وعطرية استثنائية.",
    },
    harvesting_places: {
      en: "Southwest Ethiopia (Kaffa, Sheka, Bench-Sheko) — Oromia (Jimma, Illu Ababora, Wellega) — South Ethiopia (South Omo, Gamo, Dawuro) — Sidama (Sidama Zone)",
      ar: "جنوب غرب إثيوبيا (كافا، شيكا، بينش-شيكو) — أوروميا (جيما، إيلو أبابورا، ووليغا) — جنوب إثيوبيا (جنوب أومو، غامو، داورو) — سيداما (منطقة سيداما)",
    },
    origin: {
      en: "Southwest Ethiopia, Oromia & Sidama",
      ar: "جنوب غرب إثيوبيا، أوروميا وسيداما",
    },
    price: 0,
    discount: 0,
    image: "/gallary/ethiopianCardamomMain.jpg",
  },
];

export const FEATURED_IDS = [1, 2, 4, 5, 12, 15];

// Machine-facing category keys used for filtering/matching (unchanged
// across languages) mapped to their display translation key in utils/data.js
export const CATEGORIES = ["Pulses", "Oil Seeds", "Grains", "Spices", "Livestock", "Coffee"];

export const CATEGORY_UI_KEY = {
  Coffee: "categoryCoffee",
  Livestock: "categoryLivestock",
  Pulses: "categoryPulses",
  "Oil Seeds": "categoryOilSeeds",
  Spices: "categorySpices",
  Grains: "categoryGrains",
};
