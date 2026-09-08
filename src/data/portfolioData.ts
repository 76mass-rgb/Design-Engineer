import { ProjectItem, RealResultImage, SkillItem, EducationItem, CertificateItem, ContactInfo, LocalizedString, LocalizedArray } from '../types';

export const CONTACT_DATA: ContactInfo = {
  phone: '+421 905 168 884',
  phoneRaw: '+421905168884',
  email: 'Dolinskiy_V.A@i.ua',
  location: 'Čadca, Slovensko',
  locationDetails: {
    uk: 'Чадца, Жилінський край, Словаччина (доступний для відряджень та віддаленої роботи)',
    sk: 'Čadca, Žilinský kraj, Slovensko (dostupný na služobné cesty a prácu na diaľku)',
    en: 'Čadca, Žilina Region, Slovakia (available for business trips & remote projects)'
  },
  experienceYears: 27,
  completedProjects: '300+',
  degreesCount: 3
};

export const UI_TRANSLATIONS: Record<string, LocalizedString> = {
  navLogo: {
    uk: 'В. Долінський',
    sk: 'V. Dolynskyi',
    en: 'V. Dolynskyi'
  },
  navTagline: {
    uk: 'Mechanical & Industrial Design Engineer',
    sk: 'Mechanical & Industrial Design Engineer',
    en: 'Mechanical & Industrial Design Engineer'
  },
  navExpertise: {
    uk: 'Експертиза',
    sk: 'Odbornosť',
    en: 'Expertise'
  },
  navProjects: {
    uk: 'Проєкти',
    sk: 'Projekty',
    en: 'Projects'
  },
  navProcess: {
    uk: 'Концепт → Реальність',
    sk: 'Koncept → Realita',
    en: 'Concept to Reality'
  },
  navProof: {
    uk: 'Результати',
    sk: 'Výsledky',
    en: 'Real Results'
  },
  navHowIWork: {
    uk: 'Як я працюю',
    sk: 'Ako pracujem',
    en: 'How I Work'
  },
  navAbout: {
    uk: 'Про інженера',
    sk: 'O inžinierovi',
    en: 'About'
  },
  navEducation: {
    uk: 'Кваліфікація',
    sk: 'Kvalifikácia',
    en: 'Credentials'
  },
  navContact: {
    uk: 'Контакти',
    sk: 'Kontakt',
    en: 'Contact'
  },
  navResume: {
    uk: 'Резюме / CV',
    sk: 'Životopis / CV',
    en: 'Resume / CV'
  },
  btnDownloadCV: {
    uk: 'Резюме (PDF)',
    sk: 'Životopis (PDF)',
    en: 'Download CV'
  },
  btnConsultation: {
    uk: 'Зв\'язатися з інженером',
    sk: 'Kontaktovať inžiniera',
    en: 'Contact Engineer'
  },
  heroTag: {
    uk: 'Mechanical & Industrial Design Engineer · Slovakia / EU',
    sk: 'Mechanical & Industrial Design Engineer · Slovensko / EÚ',
    en: 'Mechanical & Industrial Design Engineer · Slovakia / EU'
  },
  heroNameFirst: {
    uk: 'Віталій',
    sk: 'Vitalii',
    en: 'Vitalii'
  },
  heroNameLast: {
    uk: 'Долінський',
    sk: 'Dolynskyi',
    en: 'Dolynskyi'
  },
  heroTitle: {
    uk: 'Механічний & Промисловий Інженер-Конструктор',
    sk: 'Strojný & Priemyselný Inžinier Konštruktér',
    en: 'Mechanical & Industrial Design Engineer'
  },
  heroTitleLine1: {
    uk: 'Механічний & Промисловий',
    sk: 'Strojný & Priemyselný',
    en: 'Mechanical & Industrial'
  },
  heroTitleLine2: {
    uk: 'Інженер-Конструктор',
    sk: 'Inžinier Konštruktér',
    en: 'Design Engineer'
  },
  heroSubtitle: {
    uk: 'Машинобудування, промислове обладнання та CAD рішення',
    sk: 'Strojný dizajn, priemyselné zariadenia a CAD riešenia',
    en: 'Machine design, industrial equipment & CAD solutions'
  },
  heroCoreMessage: {
    uk: 'Від інженерного задуму та 3D CAD до готової виробничої конструкції.',
    sk: 'Od inžinierskeho konceptu a 3D CAD po výrobnú dokumentáciu pripravenú na realizáciu.',
    en: 'From engineering concept and 3D CAD to manufacturing-ready design.'
  },
  heroDesc: {
    uk: 'Не просто створюю 3D CAD моделі. Я розробляю практичні машинобудівні та промислові рішення, механізми й вузли, які можуть бути реально виготовлені, змонтовані та надійно працювати роками.',
    sk: 'Nevytváram iba 3D CAD modely. Vyvíjam praktické strojné a priemyselné riešenia, mechanizmy a zostavy, ktoré sa dajú reálne vyrobiť, zmontovať a dlhodobo spoľahlivo prevádzkovať.',
    en: "I don't just create CAD models. I develop practical mechanical and industrial solutions, mechanisms, and assemblies that can be manufactured, installed, and reliably operated in the real world."
  },
  heroImpact: {
    uk: '27+ років практичного досвіду. Головний доказ: всі об\'єкти та обладнання, змонтовані за моїми кресленнями, безперебійно працюють до сьогоднішнього дня.',
    sk: '27+ rokov inžinierskej praxe. Kľúčový dôkaz: všetky projekty a zariadenia nainštalované podľa mojich výkresov dodnes spoľahlivo fungujú v prevádzke.',
    en: '27+ years of hands-on engineering experience. Key proof: All projects and equipment installed according to my designs remain operational to this day.'
  },
  btnViewProjects: {
    uk: 'Переглянути проєкти',
    sk: 'Zobraziť projekty',
    en: 'View Projects'
  },
  btnContact: {
    uk: 'Зв\'язатися з інженером',
    sk: 'Kontaktovať inžiniera',
    en: 'Contact Engineer'
  },
  statProjects: {
    uk: 'Реалізовані об\'єкти',
    sk: 'Realizované objekty',
    en: 'Completed Projects'
  },
  statProjectsSubtitle: {
    uk: '100% діючі та надійні',
    sk: '100% v prevádzke',
    en: '100% built & operating'
  },
  statExp: {
    uk: 'Років досвіду',
    sk: 'Rokov skúseností',
    en: 'Years of Experience'
  },
  statEdu: {
    uk: 'Освітні ступені',
    sk: 'Vzdelanostné stupne',
    en: 'Academic Degrees'
  },
  specTitle1: {
    uk: 'Спеціалізація',
    sk: 'Špecializácia',
    en: 'Specialization'
  },
  specVal1: {
    uk: 'Машинобудування · Обладнання · 3D CAD',
    sk: 'Strojný dizajn · Zariadenia · 3D CAD',
    en: 'Machine Design · Equipment · 3D CAD'
  },
  specTitle2: {
    uk: 'Інженерні інструменти',
    sk: 'Inžinierske nástroje',
    en: 'Engineering Tools'
  },
  specVal2: {
    uk: 'AutoCAD · SolidWorks · SketchUp',
    sk: 'AutoCAD · SolidWorks · SketchUp',
    en: 'AutoCAD · SolidWorks · SketchUp'
  },
  skillsSecNum: {
    uk: '01 —',
    sk: '01 —',
    en: '01 —'
  },
  skillsTitle: {
    uk: 'Чим я можу допомогти',
    sk: 'V čom vám môžem pomôcť',
    en: 'What I Can Help You With'
  },
  skillsSubtitle: {
    uk: '6 ключових напрямків інженерної експертизи: від розробки нових машин до модифікації існуючого обладнання',
    sk: '6 kľúčových oblastí inžinierskej odbornosti: od vývoja nových strojov po úpravu existujúcich zariadení',
    en: '6 core engineering expertise areas: from custom machine development to modification and CAD manufacturing packages'
  },
  portfolioSecNum: {
    uk: '02 —',
    sk: '02 —',
    en: '02 —'
  },
  portfolioTitle: {
    uk: 'Інженерні кейси (Case Studies)',
    sk: 'Inžinierske prípadové štúdie',
    en: 'Engineering Case Studies'
  },
  educationSecNum: {
    uk: '05 —',
    sk: '05 —',
    en: '05 —'
  },
  educationTitle: {
    uk: 'Освіта та кваліфікація',
    sk: 'Vzdelanie a kvalifikácia',
    en: 'Education & Qualifications'
  },
  contactSecNum: {
    uk: '06 —',
    sk: '06 —',
    en: '06 —'
  },
  contactTitle: {
    uk: 'Зв\'язок та технічні запити',
    sk: 'Kontakt a technické dopyty',
    en: 'Direct Contact & Inquiries'
  },
  contactHeadingPre: {
    uk: 'Маєте інженерну',
    sk: 'Máte inžiniersky',
    en: 'Have an Engineering'
  },
  contactHeadingAccent: {
    uk: 'задачу або проблему?',
    sk: 'problém či zadanie?',
    en: 'Problem or Challenge?'
  },
  contactHeadingPost: {
    uk: 'Обговоримо вимоги та знайдемо практичне рішення.',
    sk: 'Preberme požiadavky a nájdime praktické riešenie.',
    en: "Let's discuss the requirements and find a practical solution."
  },
  contactSub: {
    uk: 'Готовий до детального аналізу ТЗ, розробки 3D CAD моделей, інженерних розрахунків та підготовки робочої документації до виробництва. Локація: Чадца, Жилінський край, Словаччина — доступний для виїздів на виробництво та віддаленої роботи по всій Європі.',
    sk: 'Pripravený na analýzu zadania, tvorbu 3D CAD modelov, pevnostné výpočty a prípravu výrobnej dokumentácie. Lokalita: Čadca, Žilinský kraj, Slovensko — k dispozícii pre osobné obhliadky aj prácu na diaľku v rámci celej EÚ.',
    en: 'Ready to review technical requirements, build accurate 3D CAD models, run engineering calculations, and deliver manufacturing-ready drawings. Located in Čadca, Slovakia — available for on-site facility visits and remote projects across Europe.'
  },
  formName: {
    uk: 'Ваше ім\'я або назва компанії',
    sk: 'Vaše meno alebo názov firmy',
    en: 'Your Name or Company'
  },
  formEmail: {
    uk: 'Email або телефон для зв\'язку',
    sk: 'Email alebo telefónne číslo',
    en: 'Email or Phone Number'
  },
  formProjectType: {
    uk: 'Тип інженерної задачі',
    sk: 'Typ inžinierskej úlohy',
    en: 'Type of Engineering Task'
  },
  formMessage: {
    uk: 'Опис вимог, обладнання або технічного завдання',
    sk: 'Popis požiadaviek, zariadenia alebo technického zadania',
    en: 'Description of problem, equipment, or technical requirements'
  },
  formSubmit: {
    uk: 'Надіслати технічне завдання',
    sk: 'Odoslať technické zadanie',
    en: 'Send Technical Inquiry'
  },
  formSuccess: {
    uk: 'Дякую! Запит сформовано. Відкриваю поштовий клієнт...',
    sk: 'Ďakujem! Dopyt bol pripravený. Otváram emailového klienta...',
    en: 'Thank you! Technical inquiry prepared. Opening email client...'
  },
  allFilter: {
    uk: 'Всі проєкти',
    sk: 'Všetky projekty',
    en: 'All Projects'
  },
  filterIndustrial: {
    uk: 'Промислові об\'єкти',
    sk: 'Priemyselné objekty',
    en: 'Industrial Facilities'
  },
  filterPiping: {
    uk: 'Трубопроводи',
    sk: 'Potrubné trasy & Čerpadlá',
    en: 'Piping & Pumping'
  },
  filterSteel: {
    uk: 'Металоконструкції',
    sk: 'Oceľové konštrukcie',
    en: 'Steel Structures'
  },
  filterTanks: {
    uk: 'Резервуари',
    sk: 'Nádrže & Zásobníky',
    en: 'Tanks & Bulk Storage'
  },
  filterEquipment: {
    uk: 'Обладнання & Машини',
    sk: 'Stroje & Zariadenia',
    en: 'Machinery & Equipment'
  },
  filterGrain: {
    uk: 'Зернові комплекси',
    sk: 'Obilné komplexy & Agro',
    en: 'Grain & Agro'
  },
  filterSpecial: {
    uk: 'Спеціальні проєкти',
    sk: 'Špeciálne projekty & R&D',
    en: 'Special Projects'
  },
  openModalHint: {
    uk: 'Натисніть для перегляду Case Study, креслень та фото',
    sk: 'Kliknite pre zobrazenie Case Study, výkresov a fotiek',
    en: 'Click to open Case Study, CAD drawings and photos'
  },
  closeModal: {
    uk: 'Закрити',
    sk: 'Zavrieť',
    en: 'Close'
  },
  softwareProficiency: {
    uk: 'Інженерний інструментарій',
    sk: 'Inžinierske nástroje',
    en: 'Engineering Tools'
  },
  cadIsometrics: {
    uk: '«Софт — це лише інструмент, а не кінцевий продукт»',
    sk: '«Softvér je len nástroj, nie finálny produkt»',
    en: '«Software is a tool, not the product»'
  },
  copyright: {
    uk: 'Всі права захищені · Mechanical & Industrial Design Engineer',
    sk: 'Všetky práva vyhradené · Mechanical & Industrial Design Engineer',
    en: 'All rights reserved · Mechanical & Industrial Design Engineer'
  },
  themeDark: {
    uk: 'Темна (Графіт)',
    sk: 'Tmavá (Grafit)',
    en: 'Dark (Graphite)'
  },
  themeLight: {
    uk: 'Світла (Технічна)',
    sk: 'Svetlá (Technická)',
    en: 'Light (Crisp)'
  },
  themeBlueprint: {
    uk: 'CAD (Ватман)',
    sk: 'CAD (Pauzák)',
    en: 'CAD (Drafting Paper)'
  }
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'machine-design',
    icon: '⚙️',
    wide: false,
    name: {
      uk: '1. Machine Design (Машинобудування)',
      sk: '1. Strojný dizajn (Machine Design)',
      en: '1. Machine Design'
    },
    desc: {
      uk: 'Проектування та розробка механічних машин, кінематичних вузлів, приводів та агрегатів з урахуванням навантажень, зносостійкості та технологічності виготовлення.',
      sk: 'Návrh a vývoj mechanických strojov, mechanizmov, pohonov a funkčných celkov s dôrazom na zaťaženie, životnosť a výrobnú realizovateľnosť.',
      en: 'Design and development of mechanical machines, mechanisms, drives, and assemblies engineered for durability, structural integrity, and manufacturability.'
    },
    tags: ['Kinematics', 'Drive Mechanisms', 'Machine Assemblies', 'Power Transmission', 'Shafts & Bearings']
  },
  {
    id: 'industrial-equipment',
    icon: '🏭',
    wide: false,
    name: {
      uk: '2. Industrial Equipment (Пром. обладнання)',
      sk: '2. Priemyselné zariadenia (Industrial Equipment)',
      en: '2. Industrial Equipment'
    },
    desc: {
      uk: 'Інженерні рішення для важкої, нафтохімічної, аграрної та виробничої промисловості: насосні комплекси, резервуари, трубопровідні обв\'язки, теплообмінники та фільтраційні вузли.',
      sk: 'Inžinierske riešenia pre priemyselné a výrobné aplikácie: čerpacie stanice, zásobníky, potrubné rozvody, výmenníky tepla a technologické skidy.',
      en: 'Engineering solutions for heavy industrial and manufacturing applications: pump skids, pressure vessels, pipeline manifolds, heat exchangers, and processing systems.'
    },
    tags: ['Pumping Stations', 'Vessels & Tanks', 'Process Skids', 'Piping Networks', 'Filtration Units']
  },
  {
    id: '3d-cad',
    icon: '📐',
    wide: false,
    name: {
      uk: '3. 3D CAD & Креслення',
      sk: '3. 3D CAD & Výrobná dokumentácia',
      en: '3. 3D CAD & Manufacturing Docs'
    },
    desc: {
      uk: 'Створення точних деталізованих 3D моделей, збірок, специфікацій (BOM), перевірка на просторові колізії та випуск повного комплекту робочих креслень за ISO / DIN / ГОСТ.',
      sk: 'Tvorba detailných 3D modelov, zostáv, kusovníkov (BOM), detekcia kolízií a kompletná výrobná výkresová dokumentácia podľa ISO / DIN / STN.',
      en: 'Detailed 3D models, complex assemblies, bill of materials (BOM), tolerance stack-up, interference checking, and complete manufacturing drawing packages.'
    },
    tags: ['SolidWorks', 'AutoCAD', 'SketchUp', 'GD&T / ISO Tolerances', 'Fabrication Drawings', 'BOM']
  },
  {
    id: 'engineering-development',
    icon: '💡',
    wide: false,
    name: {
      uk: '4. Engineering Development (Розробка від ідеї)',
      sk: '4. Inžiniersky vývoj (Engineering Development)',
      en: '4. Engineering Development'
    },
    desc: {
      uk: 'Перетворення початкової ідеї, ескізу, технічних вимог або існуючого фізичного зразка у практичне, перевірене та готове до виробництва інженерне рішення.',
      sk: 'Premena počiatočnej myšlienky, skice, zadania alebo fyzického prototypu na funkčné, optimalizované a výrobne overené inžinierske riešenie.',
      en: 'Turning an initial idea, rough sketch, concept, or existing equipment into a validated, practical, and manufacturing-ready engineering design.'
    },
    tags: ['Idea to CAD', 'Concept Validation', 'Engineering Calculations', 'FEA Stress Checks', 'Prototyping']
  },
  {
    id: 'equipment-modification',
    icon: '🔧',
    wide: false,
    name: {
      uk: '5. Equipment Modification (Модернізація)',
      sk: '5. Modifikácia zariadení (Equipment Modification)',
      en: '5. Equipment Modification'
    },
    desc: {
      uk: 'Вдосконалення, адаптація, підвищення продуктивності та редизайн існуючого механічного обладнання безпосередньо під нові технологічні умови або стандарти.',
      sk: 'Vylepšenie, adaptácia, zvýšenie výkonu a konštrukčná úprava existujúcich strojov a zariadení podľa nových požiadaviek prevádzky.',
      en: 'Improvement, adaptation, capacity upgrade, and redesign of existing mechanical equipment to resolve operational bottlenecks or fit new process conditions.'
    },
    tags: ['Retrofitting', 'Capacity Upgrade', 'Reverse Engineering', 'As-Built Survey', 'Vibration Mitigation']
  },
  {
    id: 'custom-machinery',
    icon: '🚀',
    wide: false,
    name: {
      uk: '6. Custom Machinery (Спеціальні машини)',
      sk: '6. Špecializované stroje (Custom Machinery)',
      en: '6. Custom Machinery'
    },
    desc: {
      uk: 'Розробка унікального спеціалізованого обладнання, підйомних та тягових механізмів, експериментальних випробувальних стендів під нестандартні виробничі задачі.',
      sk: 'Vývoj jednoúčelových strojov, ťažných a manipulačných mechanizmov a laboratórnych testovacích stolov pre špecifické úlohy zákazníka.',
      en: 'Development of specialized machinery, winches, railcar positioners, custom fixtures, and experimental scientific testing stands for unique requirements.'
    },
    tags: ['Custom Machines', 'Specialized Winches', 'Test Rigs', 'Lab Apparatus', 'Turnkey Mechanisms']
  }
];


export { PROJECTS_DATA } from './projectsData';

export const REAL_RESULTS_GALLERY: RealResultImage[] = [
  {
  "id": "rr-lukoil-pump",
  "projectId": "lukoil-pump-2003",
  "title": {
    "uk": "Живильний насосний агрегат НПЗ LUKOIL",
    "sk": "Napájacie čerpadlo v rafinérii LUKOIL",
    "en": "LUKOIL Refinery Operating Feed Pump Unit"
  },
  "category": {
    "uk": "Трубопроводи & Насоси",
    "sk": "Potrubia a čerpadlá",
    "en": "Piping & Pumps"
  },
  "year": "2003",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/dsc01220.jpg-1280x960.jpg?v=1WvuMq",
  "description": {
    "uk": "Змонтований та діючий насосний агрегат НПЗ LUKOIL з розвантажувальними компенсаторами та модернізованою обв'язкою технологічних труб.",
    "sk": "Zmontovaný a funkčný čerpací agregát rafinérie LUKOIL s tlmením vibrácií a prepojením potrubí.",
    "en": "Installed and operating LUKOIL refinery feed pump skid with vibration compensation and upgraded process manifolds."
  }
},
  {
  "id": "rr-lukoil-fuelline",
  "projectId": "lukoil-fuelline-2004",
  "title": {
    "uk": "Паливні колектори та насоси НПЗ LUKOIL",
    "sk": "Palivové potrubia a prídavné čerpadlá LUKOIL",
    "en": "LUKOIL Fuel Manifolds & Booster Pump Station"
  },
  "category": {
    "uk": "Трубопроводи & Насоси",
    "sk": "Potrubia a čerpadlá",
    "en": "Piping & Pumps"
  },
  "year": "2004",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/dsc03823.jpg-1280x960.jpg?v=1WvuMq",
  "description": {
    "uk": "Змонтована технологічна паливна лінія до групи додаткових насосів НПЗ LUKOIL з неруйнівним контролем зварних швів.",
    "sk": "Zrealizovaná technologická palivová vetva k prídavným čerpadlám rafinérie LUKOIL s RTG kontrolou zvarov.",
    "en": "Installed process fuel pipeline supplying auxiliary booster pumps with 100% NDT inspection."
  }
},
  {
  "id": "rr-danube-bunkering",
  "projectId": "danube-bunkering-2004",
  "title": {
    "uk": "Бункерувальний нафтотермінал на річці Дунай",
    "sk": "Bunkrovací ropný terminál na rieke Dunaj",
    "en": "Danube River Marine Bunkering Terminal"
  },
  "category": {
    "uk": "Промислові об'єкти",
    "sk": "Priemyselné objekty",
    "en": "Industrial Facilities"
  },
  "year": "2004",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/image.jpg-1545x984.jpg?v=1WvuMq",
  "description": {
    "uk": "Діючий річковий бункерувальний термінал: причальні естакади, заправні трубопроводи та насосні споруди для суден на Дунаї.",
    "sk": "Fungujúci riečny bunkrovací terminál: prístavné mólo a čerpacie zariadenia pre lode na Dunaji.",
    "en": "Operating marine bunkering terminal: jetty pipe racks and fuel delivery systems servicing vessels on the Danube."
  }
},
  {
  "id": "rr-cooling-tower",
  "projectId": "cooling-tower-2004",
  "title": {
    "uk": "Градирня компресорного цеху молочного заводу",
    "sk": "Chladiaca veža kompresorov mliekárne",
    "en": "Dairy Plant Refrigerator Cooling Tower"
  },
  "category": {
    "uk": "Машини & Обладнання",
    "sk": "Stroje a zariadenia",
    "en": "Machinery & Equipment"
  },
  "year": "2004",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/dsc01837.jpg-1280x960.jpg?v=1WvuMq",
  "description": {
    "uk": "Змонтована випарна градирня оборотного водопостачання холодильно-компресорного відділення молокозаводу.",
    "sk": "Zmontovaná chladiaca veža cirkulačného chladenia kompresorového úseku mliekárne.",
    "en": "Installed industrial cooling tower providing continuous condenser cooling for dairy refrigeration compressors."
  }
},
  {
  "id": "rr-oil-bridge",
  "projectId": "oil-harbor-bridge-2005",
  "title": {
    "uk": "Автомобільний міст під 40 т у нафтовій гавані",
    "sk": "Cestný most pre 40 t v ropnom prístave",
    "en": "Oil Harbor Heavy-Vehicle 40t Bridge"
  },
  "category": {
    "uk": "Металоконструкції & Мости",
    "sk": "Oceľové konštrukcie a mosty",
    "en": "Steel Structures & Bridges"
  },
  "year": "2005",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/dsc01026.jpg-1280x960.jpg?v=1WvuMq",
  "description": {
    "uk": "Збудований сталевий автодорожній міст через канал нафтотермінала, розрахований на важкі автоцистерни до 40 тонн.",
    "sk": "Postavený oceľový most cez kanál ropného terminálu dimenzovaný pre 40-tonové cisterny.",
    "en": "Constructed heavy steel vehicular bridge over the harbor canal engineered for 40-ton petroleum tanker trucks."
  }
},
  {
  "id": "rr-lpg-complex",
  "projectId": "lpg-terminal-2006",
  "title": {
    "uk": "Діючий комплекс перевантаження газу LPG",
    "sk": "Prekládkový komplex skvapalneného plynu LPG",
    "en": "LPG Gas Transshipment Operating Facility"
  },
  "category": {
    "uk": "Промислові об'єкти",
    "sk": "Priemyselné objekty",
    "en": "Industrial Facilities"
  },
  "year": "2006",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/3.jpg-1679x1259.jpg?v=1WvuMq",
  "description": {
    "uk": "Резервуари високого тиску, насосно-компресорна станція та залізнична естакада наливу зріджених вуглеводневих газів.",
    "sk": "Tlakové zásobníky, kompresorová stanica a železničná stáčacia estakáda plynu LPG.",
    "en": "Pressurized storage bullets, gas compressor skids, and rail unloading racks at operating LPG terminal."
  }
},
  {
  "id": "rr-kerosene-pump",
  "projectId": "kerosene-pump-2007",
  "title": {
    "uk": "Насосна станція гасу на «Одеснафтопродукт»",
    "sk": "Čerpacia stanica petroleja «Odesnaftoprodukt»",
    "en": "Kerosene Pumping Station at Odesnefteprodukt"
  },
  "category": {
    "uk": "Трубопроводи & Насоси",
    "sk": "Potrubia a čerpadlá",
    "en": "Piping & Pumps"
  },
  "year": "2007",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/dsc01844.jpg-1679x1259.jpg?v=1WvuMq",
  "description": {
    "uk": "Відкрита насосна станція перекачування гасу з вибухозахищеними відцентровими агрегатами та всмоктувальними колекторами.",
    "sk": "Otvorená čerpacia stanica petroleja s čerpadlami v nevýbušnom vyhotovení a potrubiami.",
    "en": "Open-air kerosene transfer pump station with explosion-proof centrifugal skids and manifolds."
  }
},
  {
  "id": "rr-tank-farm-42000",
  "projectId": "tank-farm-42000-2009",
  "title": {
    "uk": "Резервуарний парк 42 000 м³ «Одеснафтопродукт»",
    "sk": "Zásobníkový park 42 000 m³ «Odesnaftoprodukt»",
    "en": "42,000 m³ Tank Farm Terminal at Odesnefteprodukt"
  },
  "category": {
    "uk": "Резервуари & Парки",
    "sk": "Nádrže a zásobníky",
    "en": "Tanks & Storage"
  },
  "year": "2009",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/dsc01267.jpg-1679x1259.jpg?v=1WvuMq",
  "description": {
    "uk": "Збудований резервуарний парк вертикальних сталевих резервуарів (РВС) з бетонним каре обвалування та магістральними трубопроводами.",
    "sk": "Zrealizovaný park vertikálnych oceľových nádrží (RVS) s betónovými záchytnými jímkami.",
    "en": "Operating vertical cylindrical bulk oil storage tanks (RVS) with secondary concrete containment dikes."
  }
},
  {
  "id": "rr-water-platform",
  "projectId": "water-platform-2016",
  "title": {
    "uk": "Опорна сталева вежа під ємність води 10 т",
    "sk": "Oceľová vežová plošina pre nádrž 10 t",
    "en": "10-Ton Elevated Water Reservoir Tower Platform"
  },
  "category": {
    "uk": "Металоконструкції",
    "sk": "Oceľové konštrukcie",
    "en": "Steel Structures"
  },
  "year": "2016",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/1.jpg-1256x780.jpg?v=1WvuMq",
  "description": {
    "uk": "Просторова решітчаста сталева вежа з гарячим цинкуванням, майданчиком обслуговування та ємністю технічної води 10 000 л.",
    "sk": "Priestorová žiarovo zinkovaná oceľová veža s obslužnou lávkou a nádržou na 10 000 l vody.",
    "en": "Hot-dip galvanized space-truss tower platform supporting 10,000L elevated water vessel with safety cage ladder."
  }
},
  {
  "id": "rr-uam-tank",
  "projectId": "uam-tank-2017",
  "title": {
    "uk": "Цистерна 6 м³ для рідких добрив КАС-32 на шасі",
    "sk": "Cisterna 6 m³ na tekuté hnojivá DAM-32 na podvozku",
    "en": "6 m³ Liquid Fertilizer UAM Tank on Truck Chassis"
  },
  "category": {
    "uk": "Резервуари & Обладнання",
    "sk": "Nádrže a zariadenia",
    "en": "Tanks & Vessels"
  },
  "year": "2017",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/4.jpg-1256x826.jpg?v=1WvuMq",
  "description": {
    "uk": "Виготовлений та встановлений на шасі вантажного автомобіля резервуар з внутрішніми хвилегасниками під агресивні добрива КАС-32.",
    "sk": "Vyrobená a osadená cisternová nadstavba s vlnolamami na prevoz tekutých hnojív DAM-32 na nákladnom vozidle.",
    "en": "Fabricated and chassis-mounted heavy-duty chemical transport vessel with anti-surge baffles for liquid fertilizer."
  }
},
  {
  "id": "rr-dnieper-grain",
  "projectId": "dnieper-grain-warehouse-2017",
  "title": {
    "uk": "Зерновий перевантажувальний комплекс на Дніпрі",
    "sk": "Prekládkový obilný sklad na rieke Dneper",
    "en": "Dnieper River Grain Transshipment Terminal"
  },
  "category": {
    "uk": "Агро & Зернові комплекси",
    "sk": "Agro a obilie",
    "en": "Grain & Agro"
  },
  "year": "2017",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/0.jpg-1679x1259.jpg?v=1WvuMq",
  "description": {
    "uk": "Склад підлогового зберігання зерна, підпірні стіни, надземні галереї та суднонавантажувальні стріли на річці Дніпро.",
    "sk": "Sklad obilia, oporné steny, pásové mosty a lodné nakladače obilia na rieke Dneper.",
    "en": "Flat storage grain warehouse, bulk retaining walls, overhead conveyor galleries, and barge loading facility on the Dnieper."
  }
},
  {
  "id": "rr-grain-intake",
  "projectId": "grain-intake-hopper-2017",
  "title": {
    "uk": "Бункер приймання зерна з проїзними гратами",
    "sk": "Príjmový podzemný zásobník obilia s roštom",
    "en": "Underground Truck Grain Intake Hopper Pit"
  },
  "category": {
    "uk": "Агро & Зернові комплекси",
    "sk": "Agro a obilie",
    "en": "Grain & Agro"
  },
  "year": "2017",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/12.jpg-1679x1259.jpg?v=1WvuMq",
  "description": {
    "uk": "Підземний розвантажувальний вузол зерновозів з посиленими проїзними решітками під 15 т/вісь та шиберними дозаторами.",
    "sk": "Podzemná vykládková stanica kamiónov s pojazdovými roštami dimenzovanými na 15 t/nápravu.",
    "en": "Underground grain receiving hopper vault with drive-over heavy vehicle gratings and high-capacity outflow gates."
  }
},
  {
  "id": "rr-grain-36000",
  "projectId": "grain-terminal-36000-2018",
  "title": {
    "uk": "Термінал 36 000 т та облік Micro Motion",
    "sk": "Terminál 36 000 t a meranie Micro Motion",
    "en": "36,000-Ton Terminal with Micro Motion Coriolis Metering"
  },
  "category": {
    "uk": "Агро & Зернові комплекси",
    "sk": "Agro a obilie",
    "en": "Grain & Agro"
  },
  "year": "2018",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/11-1.jpg-1679x1192.jpg?v=1WvuMq",
  "description": {
    "uk": "Масштабний комплекс одночасного зберігання 36 000 т зерна з прецизійними вузлами комерційного обліку Micro Motion.",
    "sk": "Veľkokapacitný sklad obilia na 36 000 t s vysoko presnými meracími trasami Micro Motion.",
    "en": "36,000-ton grain transshipment terminal equipped with Emerson Micro Motion Coriolis mass flow metering skids."
  }
},
  {
  "id": "rr-winch",
  "projectId": "shunting-winch-2020",
  "title": {
    "uk": "Маневрова залізнична лебідка на коліях",
    "sk": "Posunovacie železničné navijadlo na koľajisku",
    "en": "Railcar Shunting Winch on Industrial Siding"
  },
  "category": {
    "uk": "Машини & Обладнання",
    "sk": "Stroje a zariadenia",
    "en": "Machinery & Equipment"
  },
  "year": "2020",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/0.jpg-1679x1259.jpg?v=1WvuMq",
  "description": {
    "uk": "Виготовлена та змонтована на залізничній колії потужна маневрова лебідка для переміщення навантажених вагонів.",
    "sk": "Vyrobené a osadené posunovacie navijadlo na vlečke pre manipuláciu s naloženými vagónmi.",
    "en": "Manufactured heavy-duty electromechanical shunting winch installed on rail siding for pulling freight cars."
  }
},
  {
  "id": "rr-lab-stand",
  "projectId": "latvia-lab-stand-2021",
  "title": {
    "uk": "Лабораторний стенд Латвійського університету",
    "sk": "Laboratórny stojan Lotyšskej univerzity",
    "en": "University of Latvia Research Test Stand"
  },
  "category": {
    "uk": "Спеціальні проєкти & R&D",
    "sk": "Špeciálne projekty",
    "en": "Special Projects & R&D"
  },
  "year": "2021",
  "imageUrl": "https://r.mobirisesite.com/1301207/assets/images/3-20.png-1256x1483.png?v=1WvuMq",
  "description": {
    "uk": "Зібрана та діюча в науковій лабораторії експериментальна прецизійна установка з мікронним юстируванням.",
    "sk": "Zmontovaný funkčný testovací stojan s mikrónovou presnosťou v laboratóriu Lotyšskej univerzity.",
    "en": "Precision testing apparatus operating in University of Latvia laboratory featuring micro-kinematic alignment stages."
  }
},
];

export const ABOUT_DATA = {
  quote: {
    uk: '«Я не просто створюю 3D моделі. Я розробляю практичні машинобудівні та інженерні рішення, які можна виготовити, змонтувати і які безвідмовно працюють роками.»',
    sk: '«Nevytváram iba 3D CAD modely. Vyvíjam praktické strojné a inžinierske riešenia, ktoré sa dajú reálne vyrobiť, zmontovať a ktoré bezporuchovo fungujú dlhé roky.»',
    en: "«I don't just create 3D models. I develop practical mechanical and engineering solutions that can be manufactured, installed, and reliably operated for years.»"
  },
  paragraphs: [
    {
      uk: 'Понад 27 років я спеціалізуюся на проектуванні машин, промислового обладнання, механічних вузлів та складних технологічних систем. Мій підхід базується на глибокому розумінні виробничих процесів: як деталь обробляється на верстаті, як зварюється вузол і як технік обслуговуватиме його на діючому заводі.',
      sk: 'Viac ako 27 rokov sa špecializujem na navrhovanie strojov, priemyselných zariadení, mechanických zostáv a technologických systémov. Môj prístup stavia na praktickom pochopení výroby: ako sa diel obrába, ako sa celok zvára a ako ho bude obsluha udržiavať v prevádzke.',
      en: 'With over 27 years of dedicated experience, I specialize in the design and development of machinery, industrial equipment, mechanical mechanisms, and process installations. My core philosophy is grounded in physical manufacturability: how parts are machined, welded, assembled, and serviced on-site.'
    },
    {
      uk: 'Завдяки подвійній кваліфікації (механіка + міцність будівельних металоконструкцій) я створюю самодостатні проекти: від внутрішнього кінематичного приводу до опорної рами, фундаментів та інтеграції в існуючі технологічні комунікації підприємства.',
      sk: 'Vďaka kombinovanému vzdelaniu (mechanika + pevnosť nosných oceľových konštrukcií) navrhujem komplexné celky: od vnútorného pohonu až po nosný rám, základy a napojenie na existujúce rozvody závodu.',
      en: 'Having a dual background in mechanical design and heavy structural engineering, I deliver comprehensive turnkey packages: from the internal moving mechanisms and power transmission to the heavy steel support chassis, foundation tie-ins, and plant routing.'
    },
    {
      uk: 'Проживаю в місті Чадца (Жилінський край, Словаччина). Готовий до особистих виїздів на виробничі майданчики по всій Словаччині, Чехії та ЄС для натурних замірів, обговорення ТЗ та авторського нагляду.',
      sk: 'Pôsobím v meste Čadca (Žilinský kraj, Slovensko). Som pripravený na osobné obhliadky výrobných závodov po celom Slovensku, Česku a EÚ na zameranie, upresnenie technických požiadaviek a autorský dozor.',
      en: 'Based in Čadca (Žilina Region, Slovakia). Readily available for on-site facility visits across Slovakia, Czechia, and the wider EU for laser measuring, technical workshops, and field commissioning.'
    }
  ],
  pillars: [
    {
      title: { uk: '100% Реалізованість', sk: '100 % Realizovateľnosť', en: '100% Real-World Proven' },
      desc: { uk: 'Всі створені проекти успішно виготовлені та експлуатуються.', sk: 'Všetky navrhnuté zariadenia boli vyrobené a fungujú.', en: 'Every design has been physically manufactured and commissioned.' }
    },
    {
      title: { uk: 'Виробнича логіка (DFMA)', sk: 'Výrobná logika (DFMA)', en: 'Design for Manufacturing' },
      desc: { uk: 'Креслення враховують реальні допуски, інструменти та зварку.', sk: 'Výkresy rešpektujú skutočné výrobné technológie a tolerancie.', en: 'Drawings respect actual machining, tooling, and fabrication tolerances.' }
    },
    {
      title: { uk: 'Швидка комунікація', sk: 'Rýchla komunikácia', en: 'Direct Communication' },
      desc: { uk: 'Прямий контакт з інженером без бюрократичних посередників.', sk: 'Priamy kontakt s inžinierom bez sprostredkovateľov.', en: 'Direct engineering dialog without layers of sales intermediaries.' }
    }
  ]
};

export const ENGINEERING_TOOLS_DATA = {
  statement: {
    uk: '«Програмне забезпечення — це лише інструмент, а не кінцевий продукт. Справжня цінність полягає в інженерних знаннях, фізичній логіці конструкції та вмінні знайти практичне рішення.»',
    sk: '«Softvér je len nástroj, nie finálny produkt. Skutočná hodnota spočíva v inžinierskych znalostiach, fyzikálnej logike konštrukcie a schopnosti nájsť praktické riešenie.»',
    en: '«Software is a tool, not the product. The true engineering value lies in physical principles, structural logic, and delivering practical, manufacturing-ready solutions.»'
  },
  tools: [
    { 
      name: 'SolidWorks', 
      category: {
        uk: '3D Параметричний CAD',
        sk: '3D Parametrický CAD',
        en: '3D Parametric CAD'
      }, 
      desc: {
        uk: 'Складні машинобудівні складальні одиниці, твердотільне моделювання, кінематика та листовий метал',
        sk: 'Zložité strojné zostavy, objemové modelovanie, kinematika mechanizmov a plechové diely',
        en: 'Complex machine assemblies, solid modeling, mechanism kinematics, sheet metal'
      }
    },
    { 
      name: 'AutoCAD', 
      category: {
        uk: '2D/3D Робочий CAD',
        sk: '2D/3D Výrobný CAD',
        en: '2D/3D Production CAD'
      }, 
      desc: {
        uk: 'Виробничі креслення, трасування трубопроводів, P&ID схеми та загальні види (КМ/КМД)',
        sk: 'Dielenské výkresy, potrubné trasy, P&ID schémy a celkové zostavy',
        en: 'Fabrication drawings, piping layouts, P&ID schematics, GA drawings'
      }
    },
    { 
      name: 'SketchUp Pro', 
      category: {
        uk: 'Просторове та концепт-моделювання',
        sk: 'Priestorové a konceptové modelovanie',
        en: 'Spatial & Concept Modeling'
      }, 
      desc: {
        uk: 'Швидка компоновка цехів та обладнання, візуалізація об\'єктів, будівельна прив\'язка',
        sk: 'Rýchle priestorové usporiadanie hál a technológií, vizualizácia a stavebné väzby',
        en: 'Rapid 3D layout staging, facility visualization, architectural tie-in'
      }
    },
    { 
      name: 'Mathcad & Calculations', 
      nameLocalized: {
        uk: 'Mathcad & Розрахунки',
        sk: 'Mathcad & Výpočty',
        en: 'Mathcad & Calculations'
      },
      category: {
        uk: 'Інженерні розрахунки',
        sk: 'Inžinierske výpočty',
        en: 'Engineering Sizing'
      }, 
      desc: {
        uk: 'Гідравлічні розрахунки, теплове розширення, крутні моменти валів, навантаження балок',
        sk: 'Hydraulické dimenzovanie, teplotná rozťažnosť, krútiace momenty hriadeľov a nosníky',
        en: 'Hydraulic sizing, thermal expansion, shaft torque, beam load calculations'
      }
    },
    { 
      name: 'GD&T / ISO Tolerancing', 
      nameLocalized: {
        uk: 'GD&T / Допуски та посадки',
        sk: 'GD&T / Tolerancie a lícovania',
        en: 'GD&T / ISO Tolerancing'
      },
      category: {
        uk: 'Виробничі стандарти',
        sk: 'Výrobné normy',
        en: 'Manufacturing Standards'
      }, 
      desc: {
        uk: 'Геометричні допуски форми та розташування (H7/g6), позначення зварних швів за ISO/ГОСТ',
        sk: 'Geometrické tolerovanie tvaru a polohy (H7/g6), zvarové značky podľa noriem ISO/EN',
        en: 'Geometric dimensioning, fits & clearances (H7/g6), weld symbols per ISO'
      }
    },
    { 
      name: 'FEA / Structural Stress', 
      nameLocalized: {
        uk: 'FEA / Міцнісний аналіз',
        sk: 'FEA / Pevnostná analýza',
        en: 'FEA / Structural Stress'
      },
      category: {
        uk: 'Метод скінченних елементів',
        sk: 'Metóda konečných prvkov',
        en: 'Finite Element Analysis'
      }, 
      desc: {
        uk: 'Перевірка концентрації напружень, деформацій та коефіцієнтів запасу міцності',
        sk: 'Kontrola koncentrácie napätia, deformácií a overenie bezpečnostných faktorov',
        en: 'Stress concentration checks, displacement analysis, factor of safety verification'
      }
    }
  ]
};




export const CONCEPT_TO_REALITY_STEPS = [
  {
    step: '01',
    icon: '💡',
    title: {
      uk: 'Інженерний аналіз та ТЗ',
      sk: 'Inžinierska analýza a zadanie',
      en: 'Engineering Analysis & Requirements'
    },
    subtitle: {
      uk: 'Вхідні дані, обмеження та заміри',
      sk: 'Vstupné dáta, obmedzenia a zameranie',
      en: 'Input data, site constraints & survey'
    },
    description: {
      uk: 'Детальне вивчення технологічного процесу, просторових обмежень цеху чи майданчика, робочих середовищ, тисків та температур.',
      sk: 'Podrobný rozbor technologického procesu, priestorových obmedzení prevádzky, prevádzkových tlakov, médií a teplôt.',
      en: 'Thorough evaluation of process parameters, site constraints, working media, temperatures, and operating pressures.'
    },
    highlights: {
      uk: ['Виїзд на заміри та 3D сканування майданчика', 'Розрахунок міцності та навантажень', 'Узгодження ТЗ за ISO / ДСТУ / DIN'],
      sk: ['Zameranie priestoru a overenie kolízií', 'Pevnostné a zaťažovacie výpočty', 'Dohodnutie zadania podľa ISO / DIN'],
      en: ['Site surveying & collision checks', 'Structural & load calculations', 'Requirements spec to ISO / DIN standards']
    }
  },
  {
    step: '02',
    icon: '📐',
    title: {
      uk: '3D CAD Моделювання',
      sk: '3D CAD Modelovanie',
      en: '3D CAD Parametric Modeling'
    },
    subtitle: {
      uk: 'Твердотільні складальні моделі',
      sk: 'Objemové zostavy a kinematika',
      en: 'Solid assemblies & kinematics'
    },
    description: {
      uk: 'Розробка повної тривимірної моделі обладнання чи трубопроводів у SolidWorks/AutoCAD з перевіркою взаємних колізій.',
      sk: 'Vývoj detailného 3D modelu zariadenia alebo potrubných trás v SolidWorks/AutoCAD s overením montovateľnosti.',
      en: 'Development of detailed 3D digital prototypes in SolidWorks/AutoCAD with interference and kinematics checks.'
    },
    highlights: {
      uk: ['Параметричне моделювання вузлів', 'Перевірка збирання та доступу для ТО', 'Підбір стандартних покупних виробів'],
      sk: ['Parametrické modelovanie uzlov', 'Overenie prístupu pre údržbu', 'Výber normalizovaných dielov'],
      en: ['Parametric assembly design', 'Maintenance ergonomics & clearance check', 'Selection of standard catalog components']
    }
  },
  {
    step: '03',
    icon: '📑',
    title: {
      uk: 'Робоча документація (КМД/РК)',
      sk: 'Výrobná dokumentácia',
      en: 'Fabrication Drawings & BOM'
    },
    subtitle: {
      uk: 'Креслення за ГОСТ / ISO / EN',
      sk: 'Dielenské výkresy podľa ISO / EN',
      en: 'Manufacturing-ready blueprints'
    },
    description: {
      uk: 'Випуск повного комплекту робочих креслень для заводського виготовлення: деталювання, розгортки, зварні шви, специфікації BOM.',
      sk: 'Tvorba kompletného balíka dielenských výkresov: kusovníky, zvarové značky, tolerancie ISO a rozvinuté tvary plechov.',
      en: 'Release of comprehensive shop drawings: tolerances, welding callouts, sheet metal unfoldings, and bill of materials.'
    },
    highlights: {
      uk: ['Точні посадки, допуски та шорсткості', 'Специфікації металопрокату та кріплення', 'DXF/DWG файли для лазерного розкрою'],
      sk: ['Lícovanie a geometrické tolerancie ISO', 'Výpis hutného materiálu a spojovacieho materiálu', 'DXF/DWG dáta pre laserové pálenie'],
      en: ['GD&T tolerances and surface finishes', 'Material take-off and fasteners catalog', 'DXF cut files for CNC laser & plasma']
    }
  },
  {
    step: '04',
    icon: '🏭',
    title: {
      uk: 'Авторський нагляд за виготовленням',
      sk: 'Autorský dozor pri výrobe',
      en: 'Manufacturing Oversight'
    },
    subtitle: {
      uk: 'Контроль зварювання, збирання та ТУ',
      sk: 'Kontrola zvárania a dielenskej montáže',
      en: 'Shop assembly & welding quality check'
    },
    description: {
      uk: 'Консультації виробництва, узгодження еквівалентних замін матеріалів, контроль відповідності геометрії деталей кресленням.',
      sk: 'Konzultácie s výrobou, schvaľovanie materiálových náhrad, kontrola rozmerov a kvality zvarových spojov.',
      en: 'Direct shop floor technical support, approval of allowable material substitutions, and inspection of key tolerances.'
    },
    highlights: {
      uk: ['Контроль зварних швів та неруйнівний контроль', 'Контрольна збірка вузлів на стенді', 'Випробування на герметичність та тиск'],
      sk: ['Kontrola zvarov a nedeštruktívne skúšky', 'Dielenská kontrolná predmontáž', 'Tlakové a tesnostné skúšky'],
      en: ['Weld inspection and NDT verification', 'Shop dry-run pre-assembly fit check', 'Hydrostatic and pneumatic pressure tests']
    }
  },
  {
    step: '05',
    icon: '🚀',
    title: {
      uk: 'Монтаж та пусконалагодження',
      sk: 'Montáž a uvedenie do prevádzky',
      en: 'Installation & Commissioning'
    },
    subtitle: {
      uk: '100% працюючий промисловий об’єкт',
      sk: '100 % funkčné priemyselné dielo',
      en: 'Operational industrial handover'
    },
    description: {
      uk: 'Шеф-монтаж на об’єкті замовника, центрування агрегатів, пусконалагоджувальні роботи під навантаженням та передача в експлуатацію.',
      sk: 'Šéfmontáž na stavbe, presné ustavenie agregátov, nábeh do prevádzky pod záťažou a odovzdanie zákazníkovi.',
      en: 'On-site installation supervision, machine alignment, cold and hot load commissioning, and client handover.'
    },
    highlights: {
      uk: ['Лазерне центрування валів та насосів', 'Пуск під технологічним навантаженням', 'Виконавча документація (As-Built)'],
      sk: ['Presné vyrovnanie strojov a čerpadiel', 'Skúšobná prevádzka pod záťažou', 'Dokumentácia skutočného vyhotovenia (As-Built)'],
      en: ['Laser shaft & flange precision alignment', 'Full operational load testing', 'As-Built engineering documentation package']
    }
  }
];

export const HOW_I_WORK_STEPS = [
  {
    number: '01',
    phase: {
      uk: 'ЕТАП 1 // ДОСЛІДЖЕННЯ ТА ТЗ',
      sk: 'FÁZA 1 // ZADANIE A ANALÝZA',
      en: 'STAGE 1 // SCOPE & AUDIT'
    },
    title: {
      uk: 'Аналіз завдання, збір вихідних даних та технічне завдання',
      sk: 'Analýza úlohy, zber vstupných dát a technické zadanie',
      en: 'Requirements audit, data gathering & technical specification'
    },
    description: {
      uk: 'Вивчаю технологічні вимоги замовника, наявні будівельні конструкції, схеми P&ID, середовища, обмеження габаритів та вимоги нормативів.',
      sk: 'Podrobná analýza technologických požiadaviek, jestvujúcich stavieb, P&ID schém, chemických médií a rozmerových limitov.',
      en: 'Deep examination of process parameters, existing structures, P&ID diagrams, media properties, clearances, and code requirements.'
    },
    deliverables: {
      uk: [
        'Погоджене технічне завдання (ТЗ)',
        'Визначення нормативної бази (ISO, EN, DIN, ДСТУ)',
        'План-графік виконання проєкту'
      ],
      sk: [
        'Odsúhlasené technické zadanie (TZ)',
        'Definícia noriem (ISO, EN, DIN)',
        'Harmonogram inžinierskych prác'
      ],
      en: [
        'Approved Technical Requirements Specification',
        'Applicable engineering standards roadmap (ISO/EN/ASME)',
        'Engineering milestones schedule'
      ]
    }
  },
  {
    number: '02',
    phase: {
      uk: 'ЕТАП 2 // РОЗРАХУНКИ ТА КОНЦЕПТ',
      sk: 'FÁZA 2 // VÝPOČTY A KONCEPT',
      en: 'STAGE 2 // CALCULATIONS & CONCEPT'
    },
    title: {
      uk: 'Інженерні розрахунки, вибір схеми та 3D компонування',
      sk: 'Inžinierske výpočty, výber schémy a 3D dispozičné riešenie',
      en: 'Engineering sizing calculations & preliminary 3D concept'
    },
    description: {
      uk: 'Розрахунок міцності, гідравлічних опорів, пропускної здатності, товщин стінок ємностей та металоємності опорних каркасів.',
      sk: 'Pevnostné, hydraulické a statické výpočty, dimenzovanie stien nádrží a optimalizácia oceľových profilov.',
      en: 'Stress, hydraulic, and structural load calculations; vessel wall sizing and steel structure weight optimization.'
    },
    deliverables: {
      uk: [
        'Розрахункова пояснювальна записка',
        'Принципова компонувальна 3D модель',
        'Попередній підбір покупного обладнання та приводів'
      ],
      sk: [
        'Výpočtová správa s overením bezpečnosti',
        'Základný priestorový 3D model dispozície',
        'Predbežná špecifikácia motorov a armatúr'
      ],
      en: [
        'Engineering calculation report & safety factors',
        'Preliminary 3D spatial layout assembly',
        'Component & drive selection schedule'
      ]
    }
  },
  {
    number: '03',
    phase: {
      uk: 'ЕТАП 3 // ДЕТАЛЬНИЙ 3D CAD',
      sk: 'FÁZA 3 // DETAILNÝ 3D CAD',
      en: 'STAGE 3 // DETAILED 3D CAD'
    },
    title: {
      uk: 'Повноцінне твердотільне моделювання та перевірка колізій',
      sk: 'Kompletné objemové modelovanie a kontrola kolízií',
      en: 'Parametric solid modeling & clash detection'
    },
    description: {
      uk: 'Створення цифрового двійника виробу у SolidWorks/AutoCAD до останнього болта, зварного шва, фланця та прокладки.',
      sk: 'Tvorba presného digitálneho modelu zariadenia v SolidWorks/AutoCAD do poslednej skrutky, tesnenia a zvaru.',
      en: 'Building the complete digital twin down to every fastener, seal, flange, bracket, and weld seam in SolidWorks/AutoCAD.'
    },
    deliverables: {
      uk: [
        'Повна параметрична 3D модель складальної одиниці',
        'Звіт про відсутність перетинів та колізій',
        '3D візуалізація для узгодження з монтажниками'
      ],
      sk: [
        'Parametrická 3D zostava s väzbami',
        'Protokol o eliminácii priestorových kolízií',
        '3D vizualizácia pre montážny tím'
      ],
      en: [
        'Full 3D parametric CAD master assembly',
        'Zero-interference clash detection clearance report',
        'Visual 3D model walkthrough for erection planning'
      ]
    }
  },
  {
    number: '04',
    phase: {
      uk: 'ЕТАП 4 // РОБОЧІ КРЕСЛЕННЯ ТА СПЕЦИФІКАЦІЇ',
      sk: 'FÁZA 4 // VÝKRESY A KUSOVNÍKY',
      en: 'STAGE 4 // FABRICATION DRAWINGS & BOM'
    },
    title: {
      uk: 'Випуск повного комплекту робочої документації (КМД/РК)',
      sk: 'Tvorba kompletnej dielenskej dokumentácie',
      en: 'Manufacturing drawing package & Bill of Materials'
    },
    description: {
      uk: 'Оформлення складальних, монтажних креслень, деталювань, розгорток згідно з ДСТУ/ГОСТ/ISO з допусками, шереховатостями та ТУ.',
      sk: 'Zostavné a dielenské výkresy s ISO toleranciami, drsnosťami, zvarmi a kusovníkmi materiálov.',
      en: 'Assembly, shop, and fabrication drawings with ISO/ASME fits, surface finishes, welding symbols, and exhaustive BOMs.'
    },
    deliverables: {
      uk: [
        'Складальні креслення (СБ) та загальні види (ВО)',
        'Деталювання та розгортки деталей для лазерного розкрою (DXF)',
        'Повні специфікації матеріалів (BOM) у форматі Excel/PDF'
      ],
      sk: [
        'Zostavné výkresy a celkové pohľady',
        'Dielenské výkresy a DXF tvary pre CNC pálenie',
        'Kompletný kusovník materiálu (BOM) v Excel/PDF'
      ],
      en: [
        'General Assembly (GA) & Sub-assembly Blueprints',
        'Shop detail drawings & 1:1 DXF cut sheets for CNC lasers',
        'Comprehensive Multi-level Bill of Materials (BOM) in Excel/PDF'
      ]
    }
  },
  {
    number: '05',
    phase: {
      uk: 'ЕТАП 5 // СУПРОВІД ТА ЗДАЧА',
      sk: 'FÁZA 5 // DOZOR A ODOVZDANIE',
      en: 'STAGE 5 // FABRICATION LIAISON & AS-BUILT'
    },
    title: {
      uk: 'Технічний супровід виготовлення, шеф-монтаж та As-Built',
      sk: 'Technická podpora výroby, šéfmontáž a As-Built výkresy',
      en: 'Shop floor technical liaison, commissioning & As-Built'
    },
    description: {
      uk: 'Супровід виробничого процесу, оперативне вирішення питань цеху, консультації монтажної бригади та випуск фінальних As-Built креслень.',
      sk: 'Odborné konzultácie s dielňou, riešenie otázok montáže a zapracovanie skutočného stavu do As-Built dokumentácie.',
      en: 'Ongoing technical communication with fabricators, prompt shop floor query resolution, and delivery of final As-Built archive.'
    },
    deliverables: {
      uk: [
        'Оперативні авторські погодження та консультації',
        'Акти контрольних замірів та перевірки геометрії',
        'Виконавчі креслення (As-Built) в архівному форматі'
      ],
      sk: [
        'Technické konzultácie pri montáži',
        'Protokoly zamerania skutočného vyhotovenia',
        'Finálne As-Built výkresy v archívnom balíku'
      ],
      en: [
        'Shop floor Engineering Change Orders & author sign-offs',
        'Geometric inspection & trial assembly sign-off',
        'Final digital As-Built documentation archive'
      ]
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-knuba',
    year: '1998 — 2003',
    school: {
      uk: 'Київський національний університет будівництва та архітектури (КНУБА)',
      sk: 'Kyjevská národná univerzita stavebníctva a architektúry (KNUBA)',
      en: 'Kyiv National University of Construction and Architecture (KNUCA)'
    },
    spec: {
      uk: 'Конструювання об’єктів промислового та цивільного будівництва (ПЦБ)',
      sk: 'Konštruovanie priemyselných a pozemných stavieb',
      en: 'Industrial & Civil Structural Engineering (Foundations, Concrete & Steel Structures)'
    },
    degreeType: {
      uk: 'Диплом інженера-будівельника (Повна вища освіта, Specialist / MSc)',
      sk: 'Diplom stavebného inžiniera (Ing. - Univerzitné vzdelanie)',
      en: 'Civil & Structural Engineering Degree (MSc equivalent)'
    },
    details: {
      uk: 'Фундаменти важкого промислового обладнання, сталеві ферми великих прольотів, резервуарні каре, просторові розрахунки на вітрові та снігові навантаження.',
      sk: 'Základy ťažkých priemyselných strojov, oceľové väzníky veľkých rozponov, záchytné jímky nádrží a statika stavieb.',
      en: 'Foundations for heavy industrial machinery, long-span steel trusses, tank containment dikes, and finite element building static calculations.'
    }
  },
  {
    id: 'edu-postgrad',
    year: '1998 — 2000',
    school: {
      uk: 'Одеський державний політехнічний університет (ОДПУ)',
      sk: 'Odeská štátna polytechnická univerzita',
      en: 'Odesa State Polytechnic University'
    },
    spec: {
      uk: 'Промислові машини, апарати хімічних виробництв та матеріалознавство',
      sk: 'Priemyselné stroje, chemické aparáty a materiálové inžinierstvo',
      en: 'Chemical Plant Machinery, Pressure Vessels & Materials Science'
    },
    degreeType: {
      uk: 'Аспірантура (Постдипломна науково-дослідна інженерна діяльність / R&D)',
      sk: 'Postgraduálne vedecko-výskumné štúdium (R&D)',
      en: 'Postgraduate Academic Research Fellowship (R&D)'
    },
    details: {
      uk: 'Поглиблена наукова робота в галузі динаміки роторних машин, контактної напруги зубчастих передач, втомної міцності сталей та розрахунку посудин під тиском.',
      sk: 'Vedecký výskum v oblasti dynamiky točivých strojov, napätia ozubených prevodov, únavovej pevnosti ocelí a tlakových nádob.',
      en: 'Scientific research in rotor machine dynamics, gear contact stress, fatigue strength of structural alloys, and high-pressure vessel design.'
    }
  },
  {
    id: 'edu-odpu-mech',
    year: '1992 — 1997',
    school: {
      uk: 'Одеський державний політехнічний університет (ОДПУ)',
      sk: 'Odeská štátna polytechnická univerzita',
      en: 'Odesa State Polytechnic University'
    },
    spec: {
      uk: 'Обладнання хімічних виробництв і підприємств будівельних матеріалів',
      sk: 'Zariadenia chemického priemyslu a výroby stavebných hmôt',
      en: 'Machinery & Equipment for Chemical Plants and Building Material Manufacturing'
    },
    degreeType: {
      uk: 'Диплом інженера-механіка (Факультет машинобудування, Specialist / MSc)',
      sk: 'Diplom strojného inžiniera (Strojnícka fakulta, Ing.)',
      en: 'Mechanical Engineering Degree (MSc equivalent, Faculty of Mechanical Eng.)'
    },
    details: {
      uk: 'Фундаментальна підготовка: теорія машин і механізмів (ТММ), опір матеріалів, деталі машин, гідравліка, технологія машинобудування, компресори та насоси.',
      sk: 'Základná strojárska príprava: teória mechanizmov, pružnosť a pevnosť, časti strojov, hydraulika, kompresory a čerpadlá.',
      en: 'Core engineering training: theory of machines and mechanisms, strength of materials, machine elements, fluid dynamics, compressors, and pump systems.'
    }
  }
];

export const CERTIFICATIONS_DATA: CertificateItem[] = [
  {
    id: 'cert-seismic',
    year: '2009',
    name: {
      uk: 'Сейсмостійке проєктування («Сейсміка» / Eurocode 8)',
      sk: 'Seizmické navrhovanie stavieb a technológií (Eurocode 8)',
      en: 'Seismic Structural & Plant Engineering (Eurocode 8)'
    },
    institution: {
      uk: 'Одеська державна академія будівництва та архітектури (ОДАБА)',
      sk: 'Odeská štátna akadémia stavebníctva a architektúry (ODABA)',
      en: 'Odesa State Academy of Civil Engineering and Architecture'
    },
    badge: {
      uk: 'Сейсмостійкість',
      sk: 'Seizmika',
      en: 'Seismic Compliance'
    },
    description: {
      uk: 'Інститут післядипломної освіти — розрахунок будівельних конструкцій, висотних естакад, фундаментів та резервуарів на сейсмічні коливання до 8 балів.',
      sk: 'Inštitút postgraduálneho vzdelávania — výpočty stavebných konštrukcií, estakád a nádrží na dynamické seizmické zaťaženia.',
      en: 'Postgraduate certification in structural dynamics, high-rack pipe bridges, foundation stability, and bulk storage tanks under seismic events up to magnitude 8.'
    }
  },
  {
    id: 'cert-refinery',
    year: '2003',
    name: {
      uk: 'Технологія палив і спецпродуктів на НПЗ',
      sk: 'Technológia palív a rafinérskych procesov',
      en: 'Refinery Fuels, LPG & Petrochemical Technologies'
    },
    institution: {
      uk: 'НУ «Львівська політехніка» (Інститут післядипломного навчання)',
      sk: 'Technická univerzita «Ľvovská polytechnika»',
      en: 'Lviv Polytechnic National University (Postgraduate Institute)'
    },
    badge: {
      uk: 'НПЗ та Нафтохімія',
      sk: 'Rafinérie',
      en: 'Refinery & Petrochem'
    },
    description: {
      uk: 'Поглиблена кваліфікація з процесів нафтопереробки, хімічних реакцій, вибухопожежобезпеки технологічних схем та трубопровідного транспорту вуглеводнів.',
      sk: 'Špecializovaná kvalifikácia pre technológie spracovania ropy, protipožiarnu bezpečnosť a potrubný transport uhľovodíkov.',
      en: 'Advanced specialization in petroleum refining processes, explosion protection standards, hydrocarbon fluid transport, and refinery piping schematics.'
    }
  },
  {
    id: 'cert-cad',
    year: '2003',
    name: {
      uk: 'Комп’ютерне 2D/3D проєктування та CAD стандарти',
      sk: 'Počítačové 2D/3D projektovanie a CAD štandardy',
      en: 'Computer-Aided 2D/3D Engineering Design & CAD Standards'
    },
    institution: {
      uk: 'Сертифікований інженерний навчальний центр CAD',
      sk: 'Certifikované CAD stredisko',
      en: 'Certified Engineering CAD Training Center'
    },
    badge: {
      uk: 'AutoCAD / ISO CAD',
      sk: 'AutoCAD / ISO',
      en: 'AutoCAD / ISO CAD'
    },
    description: {
      uk: 'Професійна сертифікація з випуску конструкторської документації (КД) згідно з міжнародними стандартами ISO/DIN, керування шарами та блок-бібліотеками.',
      sk: 'Odborná certifikácia pre tvorbu výkresovej dokumentácie podľa medzinárodných noriem ISO/DIN a správu CAD knižníc.',
      en: 'Professional qualification in producing standards-compliant engineering drawings to ISO/DIN, layer standardization, and digital CAD block libraries.'
    }
  }
];
