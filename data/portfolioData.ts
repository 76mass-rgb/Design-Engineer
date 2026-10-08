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
  navSkills: {
    uk: 'Послуги & Напрямки',
    sk: 'Služby & Oblasti',
    en: 'Services & Domains'
  },
  navProjects: {
    uk: 'Проєкти & Кейси',
    sk: 'Projekty & Štúdie',
    en: 'Projects & Cases'
  },
  navProcess: {
    uk: 'Процес & Стандарти',
    sk: 'Proces & Štandardy',
    en: 'Workflow & Standards'
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
    uk: 'Контакти & ТЗ',
    sk: 'Kontakt & Zadanie',
    en: 'Contact & RFQ'
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
    uk: 'Проєктування машин, промислового обладнання, технологічних трубопроводів та металоконструкцій',
    sk: 'Konštrukcia strojov, priemyselných zariadení, potrubných trás a oceľových konštrukcií',
    en: 'Mechanical Machine Design, Industrial Equipment, Process Piping & Structural Steel'
  },
  heroCoreMessage: {
    uk: 'Розробка робочої конструкторської документації (КД / КМД) та розрахунки під реальне виробництво.',
    sk: 'Vývoj výrobnej konštrukčnej dokumentácie a pevnostné výpočty pre reálnu dielenskú realizáciu.',
    en: 'Manufacturing-ready mechanical design packages (CAD / BOM / FEA) engineered for physical production.'
  },
  heroDesc: {
    uk: 'Розв\'язую задачі розробки нестандартного обладнання, модернізації виробничих ліній, розрахунку навантажень та випуску креслень за стандартами ISO / DIN / ДСТУ для машинобудування, нафтогазової, аграрної та харчової промисловості.',
    sk: 'Riešim vývoj zákazkových strojov a mechanizmov, modernizáciu prevádzok, pevnostné dimenzovanie a kompletnú výkresovú dokumentáciu (ISO / DIN / STN) pre strojárstvo, plynárenstvo, poľnohospodárstvo a potravinárstvo.',
    en: 'Engineering custom machinery, process piping skids, industrial storage, and fabrication-ready 2D/3D CAD packages (ISO / DIN standards) for manufacturing, oil & gas, agro-bulk, and food processing plants.'
  },
  heroImpact: {
    uk: '27+ років стажу інженера-конструктора. 26+ реалізованих промислових об\'єктів, що надійно працюють в експлуатації.',
    sk: '27+ rokov praxe konštruktéra. 26+ priemyselných realizácií overených v reálnej dlhodobej prevádzke.',
    en: '27+ years of engineering practice. 26+ field-commissioned industrial projects operating in real production environments.'
  },
  btnViewProjects: {
    uk: 'Переглянути інженерні кейси',
    sk: 'Zobraziť inžinierske prípady',
    en: 'Featured Engineering Cases'
  },
  btnContact: {
    uk: 'Обговорити технічне завдання',
    sk: 'Konzultovať technické zadanie',
    en: 'Submit Technical Inquiry'
  },
  statProjects: {
    uk: 'Реалізовані об\'єкти',
    sk: 'Realizované objekty',
    en: 'Completed Projects'
  },
  statProjectsSubtitle: {
    uk: 'Промислове впровадження',
    sk: 'Priemyselná realizácia',
    en: 'Field-implemented'
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
    uk: '01',
    sk: '01',
    en: '01'
  },
  skillsTitle: {
    uk: 'Інженерні послуги & Напрямки експертизи',
    sk: 'Inžinierske služby & Oblasti expertízy',
    en: 'Engineering Design Services & Expertise'
  },
  skillsSubtitle: {
    uk: '6 ключових напрямків машинобудування, проєктування промислового обладнання, 3D CAD моделювання та модернізації вузлів.',
    sk: '6 kľúčových oblastí konštrukcie strojov, priemyselných zariadení, 3D CAD modelovania a modernizácie prevádzok.',
    en: '6 core domains of machine design, industrial equipment, 3D CAD modeling, and mechanical equipment modification.'
  },
  portfolioSecNum: {
    uk: '02',
    sk: '02',
    en: '02'
  },
  portfolioTitle: {
    uk: 'Інженерні кейси (Case Studies)',
    sk: 'Inžinierske prípadové štúdie',
    en: 'Engineering Case Studies'
  },
  processSecNum: {
    uk: '03',
    sk: '03',
    en: '03'
  },
  aboutSecNum: {
    uk: '04',
    sk: '04',
    en: '04'
  },
  educationSecNum: {
    uk: '05',
    sk: '05',
    en: '05'
  },
  educationTitle: {
    uk: 'Освіта та кваліфікація',
    sk: 'Vzdelanie a kvalifikácia',
    en: 'Education & Qualifications'
  },
  contactSecNum: {
    uk: '06',
    sk: '06',
    en: '06'
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
    uk: 'Надіслати технічний запит',
    sk: 'Odoslať technický dopyt',
    en: 'Send Technical Inquiry'
  },
  formSuccess: {
    uk: 'Дякую! Запит сформовано. Відкриваю поштовий клієнт...',
    sk: 'Ďakujem! Dopyt bol pripravený. Otváram emailového klienta...',
    en: 'Thank you! Technical inquiry prepared. Opening email client...'
  },
  inquirySecBadge: {
    uk: 'ТЕХНІЧНИЙ ЗАПИТ ТА ПЕРВИННИЙ КОНТАКТ',
    sk: 'TECHNICKÝ DOPYT A PRVÝ KONTAKT',
    en: 'TECHNICAL INQUIRY & INITIAL CONTACT'
  },
  inquiryTitle: {
    uk: 'Обговоримо вашу інженерну задачу',
    sk: 'Preberme vaše inžinierske zadanie',
    en: 'Discuss Your Engineering Challenge'
  },
  inquirySubtitle: {
    uk: 'Для первинної оцінки не потрібне ідеальне технічне завдання. Достатньо короткого опису, ескізу або фотографії вузла — технічні деталі та граничні умови сформулюємо разом.',
    sk: 'Na prvotné posúdenie nepotrebujete dokonalé zadanie. Postačí stručný popis, skica alebo fotografia zostavy — technické špecifikácie zadefinujeme spoločne.',
    en: "You don't need a complete specification to start. A brief summary, rough sketch, or shop-floor photo is enough — we will clarify operating conditions and requirements together."
  },
  inquiryWhatToSendHeading: {
    uk: 'Що можна надати для оцінки задачі:',
    sk: 'Čo môžete poslať na posúdenie:',
    en: 'You can send:'
  },
  inquiryWhatToSendSub: {
    uk: 'Підійде будь-яка наявна інформація в будь-якому форматі:',
    sk: 'Vhodné sú akékoľvek dostupné informácie v ľubovoľnom formáte:',
    en: 'Any available information in whatever format you have:'
  },
  inquiryItemDesc: {
    uk: 'Опис проєкту (у вільній формі: мета, призначення, що має робити вузол)',
    sk: 'Popis projektu (voľnou formou: účel, prevádzkové prostredie, funkcia)',
    en: 'Project description (free-form: intended function, operating environment)'
  },
  inquiryItemDrawings: {
    uk: 'Креслення (PDF, DWG, DXF, ескізи від руки або скани)',
    sk: 'Výkresy (PDF, DWG, DXF, náčrty rukou alebo skeny)',
    en: 'Drawings (PDF, DWG, DXF, hand sketches, or scanned paper prints)'
  },
  inquiryItemDimensions: {
    uk: 'Габаритні розміри (монтажний простір, висоти, фланцеві прив\'язки)',
    sk: 'Rozmery & priestor (zástavbový priestor, výšky, pripojovacie rozmery)',
    en: 'Dimensions & constraints (available space, envelope limits, flange interfaces)'
  },
  inquiryItemSpecs: {
    uk: 'Технічні характеристики (потужність, робочий тиск, витрата, матеріал)',
    sk: 'Špecifikácie zariadenia (výkon, prevádzkový tlak, prietok, materiál)',
    en: 'Equipment specifications (capacity, operating pressure, flow rate, material)'
  },
  inquiryItemPhotos: {
    uk: 'Фотографії (наявний цех, місце монтажу, зношений або пошкоджений вузол)',
    sk: 'Fotografie (reálny stav z prevádzky, montážny priestor, opotrebovaný diel)',
    en: 'Photos (site photos from the shop floor, current assembly, worn/broken parts)'
  },
  inquiryItemDocs: {
    uk: 'Наявна документація (паспорти обладнання, каталоги, 3D STEP/IGES)',
    sk: 'Existujúca dokumentácia (pasporty zariadení, katalógy dielov, 3D STEP/IGES)',
    en: 'Existing documentation (equipment manuals, component datasheets, 3D STEP)'
  },
  inquiryNoDetailsNote: {
    uk: 'Не знаєте всіх точних параметрів? Це нормальна інженерна практика. Більшість успішних проєктів починаються з фотографії вузла або кількох речень опису. Усі критичні навантаження та вимоги ми узгодимо на первинній консультації.',
    sk: 'Neviete všetky presné parametre? To je bežná inžinierska prax. Väčšina úspešných projektov začína fotografiou z prevádzky alebo pár vetami popisu. Všetky kritické zaťaženia a požiadavky zosúladíme pri úvodnej konzultácii.',
    en: 'Not sure about all technical details yet? That is standard engineering practice. Most successful projects start with a photo or a two-sentence summary. We will clarify operating loads and boundary conditions during the initial review.'
  },
  inquiryNextStepsHeading: {
    uk: 'Що відбудеться після вашого звернення:',
    sk: 'Čo nasleduje po odoslaní dopytu:',
    en: 'What happens after your inquiry:'
  },
  inquiryStep1Title: {
    uk: '1. Аналіз завдання (до 24 год)',
    sk: '1. Analýza zadania (do 24 hod.)',
    en: '1. Initial Review (within 24h)'
  },
  inquiryStep1Desc: {
    uk: 'Оцінка технічної здійсненності, складності та вибір базової концепції.',
    sk: 'Posúdenie realizovateľnosti, náročnosti a voľba základnej koncepcie.',
    en: 'Feasibility check, engineering complexity assessment, and concept screening.'
  },
  inquiryStep2Title: {
    uk: '2. Технічне уточнення',
    sk: '2. Technické upresnenie',
    en: '2. Technical Clarification'
  },
  inquiryStep2Desc: {
    uk: 'Прямий контакт (телефон, email, WhatsApp) для узгодження граничних умов та норм.',
    sk: 'Priamy kontakt (telefón, email, WhatsApp) na zosúladenie okrajových podmienok.',
    en: 'Direct discussion (phone, email, WhatsApp) to clarify loads, codes, and constraints.'
  },
  inquiryStep3Title: {
    uk: '3. План, строки та кошторис',
    sk: '3. Plán, termíny a rozpočet',
    en: '3. Execution Plan & Scope'
  },
  inquiryStep3Desc: {
    uk: 'Конкретний графік: етапи 3D CAD, склад креслень, терміни та прозорий кошторис.',
    sk: 'Konkrétny harmonogram: etapy 3D CAD, zoznam výkresov, termíny a fixný rozpočet.',
    en: 'Clear execution plan: 3D CAD milestones, drawing deliverables, delivery dates, and fixed quote.'
  },
  inquiryBtnSend: {
    uk: 'Надіслати технічний запит',
    sk: 'Odoslať technický dopyt',
    en: 'Send Technical Inquiry'
  },
  inquiryBtnCopy: {
    uk: 'Скопіювати шаблон запиту',
    sk: 'Kopírovať šablónu dopytu',
    en: 'Copy Inquiry Template'
  },
  inquiryBtnCopied: {
    uk: 'Шаблон скопійовано у буфер!',
    sk: 'Šablóna skopírovaná do schránky!',
    en: 'Template Copied to Clipboard!'
  },
  inquiryBtnWhatsApp: {
    uk: 'Швидке повідомлення у WhatsApp',
    sk: 'Rýchla správa cez WhatsApp',
    en: 'Quick WhatsApp Message'
  },
  inquiryFieldCategory: {
    uk: 'Напрямок / Тип інженерної задачі:',
    sk: 'Oblasť / Typ inžinierskej úlohy:',
    en: 'Engineering Domain / Task Type:'
  },
  inquiryFieldMessage: {
    uk: 'Короткий опис завдання або наявних даних (за бажанням):',
    sk: 'Stručný popis úlohy alebo vstupných údajov (voliteľné):',
    en: 'Brief task summary or known constraints (optional):'
  },
  inquiryFieldContact: {
    uk: 'Ваш контакт (email або телефон для відповіді):',
    sk: 'Váš kontakt (email alebo telefón pre odpoveď):',
    en: 'Your contact (email or phone for reply):'
  },
  inquiryPlaceholderMessage: {
    uk: 'Наприклад: Необхідно спроєктувати насосний вузол / раму / трубопровідну лінію. Габарити орієнтовно 2х1.5м. Є фотографії поточного майданчика та ескіз від руки...',
    sk: 'Napríklad: Potrebujeme navrhnúť čerpací agregát / rám / potrubnú trasu. Rozmery orientačne 2x1.5m. Máme fotky prevádzky a náčrt rukou...',
    en: 'E.g.: Need to design a pump skid / mounting frame / piping run. Space envelope ~2x1.5m. We have shop-floor photos and a hand sketch...'
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

export const REAL_RESULTS_GALLERY: RealResultImage[] = [];

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
      title: { uk: 'Практична реалізованість (DFMA)', sk: 'Praktická realizovateľnosť (DFMA)', en: 'Industrial Viability (DFMA)' },
      desc: { uk: 'Проєкти розробляються з урахуванням технологій виготовлення та монтажу.', sk: 'Návrhy rešpektujú skutočné výrobné a montážne technológie.', en: 'Every design is engineered specifically for physical manufacturing and field assembly.' }
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
      uk: 'Введення в експлуатацію та As-Built',
      sk: 'Uvedenie do prevádzky a As-Built',
      en: 'Commissioning & As-Built handover'
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
      uk: 'Аспірантура R&D (Постдипломна науково-дослідна інженерна діяльність)',
      sk: 'Postgraduálne štúdium R&D (Vedecko-výskumná činnosť)',
      en: 'Postgraduate R&D Fellowship (Doctoral Engineering Research)'
    },
    details: {
      uk: 'Поглиблена наукова робота в галузі динаміки переміщення сипучих матеріалів шнековими машинами з пружинними шнеками, їхньої втомної міцності та розрахунку довготривалої ефективної роботи.',
      sk: 'Vedecko-výskumná činnosť v oblasti dynamiky dopravy sypkých hmôt závitovkovými dopravníkmi s pružnými/pružinovými skrutkovicami, ich únavovej pevnosti a dimenzovania dlhodobej prevádzkovej účinnosti.',
      en: 'Advanced scientific research in bulk material transport dynamics via flexible spring-screw conveyors, spiral fatigue strength, and continuous operational efficiency calculations.'
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
