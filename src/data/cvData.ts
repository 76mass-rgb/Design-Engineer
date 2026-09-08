import { Language } from '../types';

export interface CVData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  experienceYears: number;
  completedProjects: string;
  summary: string;
  drivingLicense: string;
  specializations: string[];
  standards: string[];
  software: { name: string; level: string; category: string }[];
  workExperience: {
    period: string;
    role: string;
    companyOrScope: string;
    location: string;
    highlights: string[];
  }[];
  education: {
    year: string;
    degree: string;
    institution: string;
    specialty: string;
  }[];
  certifications: {
    year: string;
    name: string;
    institution: string;
    description: string;
  }[];
  keyProjects: {
    name: string;
    year: string;
    type: string;
    description: string;
  }[];
  languages: { lang: string; level: string }[];
}

export const CV_TRANSLATIONS: Record<Language, CVData> = {
  uk: {
    name: 'Віталій Долінський',
    title: 'Провідний інженер-конструктор · Технологічні трубопроводи, нафтохімія та промислові об\'єкти',
    location: 'Чадца, Словаччина (доступний для відряджень, виїздів на заміри та віддаленої роботи)',
    phone: '+421 905 168 884',
    email: 'Dolinskiy_V.A@i.ua',
    experienceYears: 27,
    completedProjects: '300+',
    drivingLicense: 'Категорії «A», «B», «C» (наявний власний автомобіль, висока мобільність)',
    summary: 'Провідний інженер-конструктор з 27+ роками практичного досвіду та 300+ реалізованими промисловими об\'єктами в нафтохімічній, газовій, аграрній та важкій промисловості. Головне професійне досягнення: 100% розроблених проектів успішно побудовані, введені в експлуатацію і надійно працюють до сьогоднішнього дня. Досвідчений керівник проектних груп. Повний інженерний цикл: від передпроектних замірів та ТКП до стадій «ЕП», «П», «РП», «Р», розробки ППР, випуску деталізованих креслень у цех (розділи КМ, КЖ, ВК, ТХ за ГОСТ / ISO / ASME / Eurocodes) та безпосереднього авторського нагляду і керівництва будівельно-монтажними роботами на об\'єктах.',
    specializations: [
      'Технологічні трубопроводи високого та низького тиску (газ, нафта, хімія, пара)',
      'Розробка схем P&ID, Flow Sheets та монтажних ізометрій (ISO 10628, EN 13480)',
      'Резервуарні парки зберігання (РВС до 42 000 м³), насосні станції та обвалування',
      'Проектування металоконструкцій (КМ, КМД), монолітних залізобетонних фундаментів (КЖ)',
      'Розрахунки на сейсмостійкість та динамічні навантаження (ОДАБА "Сейсміка")',
      'Залізничні та автоналивні естакади (УСН-150, стендери, колектори)',
      'Розробка проектів виконання робіт (ППР), авторський нагляд та керівництво СМР'
    ],
    standards: [
      'ГОСТ 2.304 / ЄСКД (Робочі креслення та специфікації)',
      'ASME B31.3 / ASME B31.1 (Process Piping Systems)',
      'API 650 / API 620 (Welded Tanks for Oil Storage)',
      'EN 13480 (Metallic Industrial Piping)',
      'Eurocodes (EN 1990 - EN 1999, Сейсмостійкість EN 1998)',
      'ISO 10628 (P&ID Diagrams)',
      'ДБН / СНиП (Промислове проектування та будівництво)'
    ],
    software: [
      { name: 'AutoCAD (2D / 3D)', level: 'Експерт (25+ років)', category: 'CAD & Робочі креслення' },
      { name: 'SketchUp Pro', level: 'Експерт', category: '3D просторове моделювання об\'єктів' },
      { name: 'SolidWorks', level: 'Досвідчений', category: 'Машинобудівні вузли, апарати та FEA' },
      { name: 'NanoCAD', level: 'Експерт', category: 'Робоча проектна документація' },
      { name: 'Mathcad / Excel Engineering', level: 'Експерт', category: 'Гідравлічні та міцнісні розрахунки' },
      { name: 'MS Office / Windows OS', level: 'Досвідчений користувач', category: 'Офісне та інженерне ПЗ' }
    ],
    workExperience: [
      {
        period: '04.2019 — теперішній час',
        role: 'Провідний конструктор / Керівник напрямку проектування',
        companyOrScope: 'ТОВ «ЕГАЗ»',
        location: 'Україна / ЄС',
        highlights: [
          'Проектування об\'єктів високої складності: скраплений газ (LPG), паливні комплекси, випарні установки, технологічні модулі.',
          'Узгодження технічних рішень із замовниками, наглядовими та експертними органами.',
          'Виїзди на об\'єкти для візуального визначення обсягів робіт, зняття точних замірів.',
          'Здійснення авторського нагляду та оперативне керівництво будівельно-монтажними роботами на майданчиках.'
        ]
      },
      {
        period: '12.2017 — 05.2018',
        role: 'Провідний конструктор',
        companyOrScope: 'ТОВ «Посейдон»',
        location: 'Україна',
        highlights: [
          'Проектування портових та промислових споруд, зернових силосних корпусів та технологічних ліній транспортування.',
          'Авторський нагляд, польове інженерне супроводження та безпосередній контроль СМР.'
        ]
      },
      {
        period: '03.2005 — 10.2017 (12+ років)',
        role: 'Провідний конструктор / Керівник проектної групи',
        companyOrScope: 'ТОВ «ЮСТ-СП»',
        location: 'Україна',
        highlights: [
          'Керівництво проектною групою інженерів-механіків та будівельників.',
          'Комплексне проектування промислових об\'єктів: нафтотермінали, естакади Одеса-Броди, резервуарні парки до 42 000 м³ («Синтез Ойл», «Одеснафтопродукт»), газокомпресорні вузли, мостові переходи, градирні.',
          'Розробка Проектів виконання робіт (ППР) для складних монтажних операцій та підйому великовагового обладнання.',
          'Постійний авторський нагляд і пряме керівництво будівельними та монтажними роботами на майданчиках.'
        ]
      },
      {
        period: '09.2004 — 03.2005',
        role: 'Інженер-конструктор 1 категорії',
        companyOrScope: 'ПП «Хімтяжмонтаж»',
        location: 'Україна',
        highlights: [
          'Зняття натурних замірів на діючих промислових об\'єктах.',
          'Розробка робочих креслень безпосередньо в цех для виготовлення металоконструкцій та вузлів трубопроводів.',
          'Складання деталізованих специфікацій на матеріали і комплектуючі (MTO).',
          'Контроль за виготовленням конструкцій на заводі та якістю монтажу на об\'єктах.'
        ]
      },
      {
        period: '02.2001 — 09.2004',
        role: 'Інженер-конструктор / Інженер-конструктор 2 кат. / Інженер з комплектації',
        companyOrScope: 'ВАТ «ЛУКОЙЛ-Одеський нафтопереробний завод»',
        location: 'Одеса, Україна',
        highlights: [
          'Проектування будівельних конструкцій (КМ, КЖ, ВК) та технологічних трубопроводів нафтопереробного заводу.',
          'Розробка конструкторської документації на стадіях «ЕП» (Ескізний проект), «П» (Проект), «РП» (Робочий проект) і «Р» (Робоча документація) для монолітних споруд, фундаментів та технологічних блоків.',
          'Розрахунки монолітних залізобетонних та металевих конструкцій, фундаментів під технологічне обладнання.',
          'Комплектація технологічним обладнанням і запірною арматурою установок НПЗ перед плановими капітальними ремонтами.'
        ]
      },
      {
        period: '10.1997 — 10.1998',
        role: 'Інженер 1 категорії / Провідний інженер',
        companyOrScope: 'Одеський державний політехнічний університет',
        location: 'Одеса, Україна',
        highlights: [
          'Керівництво проектною групою, розробка систем пневмо- та механічного транспортування сипучих матеріалів.',
          'Розробка, монтаж та налагодження лабораторного та дослідного обладнання.'
        ]
      },
      {
        period: '06.1991 — 09.1997',
        role: 'Бетонник 3р. / Механік / Молодший інженер з тех.частини',
        companyOrScope: 'Будівельний кооператив «Монолітбуд»',
        location: 'Україна',
        highlights: [
          'Практичний досвід бетонних та будівельних робіт на будівельних майданчиках.',
          'Ремонт, обслуговування та технічний контроль важкої будівельної техніки та механізмів.'
        ]
      }
    ],
    education: [
      {
        year: '1998 — 2003',
        degree: 'Диплом інженера-будівельника (Повна вища освіта)',
        institution: 'Київський національний університет будівництва та архітектури (КНУБА)',
        specialty: 'Конструювання об\'єктів промислового та цивільного будівництва (ПЦБ)'
      },
      {
        year: '1998 — 2000',
        degree: 'Аспірантура (Постдипломна науково-дослідна інженерна діяльність)',
        institution: 'Одеський державний політехнічний університет (ОДПУ)',
        specialty: 'Промислові машини, апарати хімічних виробництв та матеріалознавство'
      },
      {
        year: '1992 — 1997',
        degree: 'Диплом інженера-механіка (Повна вища освіта, Факультет машинобудування)',
        institution: 'Одеський державний політехнічний університет (ОДПУ)',
        specialty: 'Обладнання хімічних виробництв і підприємств будівельних матеріалів'
      }
    ],
    certifications: [
      {
        year: '2009',
        name: 'Сейсмостійке проектування («Сейсміка» / Eurocode 8)',
        institution: 'Одеська державна академія будівництва та архітектури (ОДАБА)',
        description: 'Інститут післядипломної освіти — розрахунок будівельних конструкцій, фундаментів та трубопроводів на сейсмічні навантаження.'
      },
      {
        year: '2003',
        name: 'Технологія палив і спецпродуктів на НПЗ',
        institution: 'НУ «Львівська політехніка» (Інститут післядипломного навчання)',
        description: 'Поглиблена кваліфікація з процесів нафтопереробки, хімічних реакцій та технологічних схем переробки вуглеводнів.'
      },
      {
        year: '2003',
        name: 'Технологія комп\'ютерного проектування AutoCAD 2D/3D',
        institution: 'Одеський центр освіти «Екселент класс»',
        description: 'Професійне володіння інструментами автоматизованого випуску проектної документації.'
      }
    ],
    keyProjects: [
      {
        name: 'Резервуарний парк зберігання нафтопродуктів 42 000 м³ (ЗАТ «Синтез Ойл»)',
        year: '2009',
        type: 'Нафтохімія / Резервуарні парки',
        description: 'Комплексний проект: обв\'язка РВС, протипожежне пінне гасіння та зрошення, промливнева каналізація з гідрозатворами, блискавкозахист та заземлення.'
      },
      {
        name: 'Керосинова насосна станція та гребінка 12 колекторів (ПАТ «Одеснафтопродукт»)',
        year: '2007',
        type: 'Нафтохімія / Насосні комплекси',
        description: 'Просторова розводка 12 паралельних ліній входу/виходу авіаційного гасу на відкритому насосному майданчику в умовах жорсткого обмеження площі.'
      },
      {
        name: 'Модульний контейнерний цех очищення в 40ft High Cube контейнері',
        year: '2021',
        type: 'R&D / Модульні технологічні установки',
        description: 'Повний технологічний цикл: 4 насосні групи, реакторні колони, нержавіюча обв\'язка AISI 316, нульові колізії, запуск Plug & Play.'
      },
      {
        name: 'Залізнична естакада зливу на 8 вагонів з установками УСН-150',
        year: '2008',
        type: 'Нафтогазова логістика',
        description: 'Двостороння естакада, шарнірно-зчленовані установки УСН-150 (радіус 4 м), самопливні колектори та промканалізація.'
      }
    ],
    languages: [
      { lang: 'Українська', level: 'Рідна / Професійний рівень' },
      { lang: 'Словацька', level: 'Добре (проживання та робота в Словаччині)' },
      { lang: 'English', level: 'Базовий / Технічна термінологія CAD, ISO, ASME' }
    ]
  },
  sk: {
    name: 'Dolynskyi Vitalii',
    title: 'Vedúci projektový inžinier · Technologické potrubia a priemyselné objekty',
    location: 'Čadca, Žilinský kraj, Slovensko (k dispozícii na služobné cesty a remote)',
    phone: '+421 905 168 884',
    email: 'Dolinskiy_V.A@i.ua',
    experienceYears: 27,
    completedProjects: '300+',
    drivingLicense: 'Vodičské oprávnenie «A», «B», «C» (vlastné vozidlo, vysoká mobilita)',
    summary: 'Projektový inžinier s viac ako 27 rokmi praxe a 300+ úspešne realizovanými priemyselnými objektmi v petrochémii, plynárenstve, poľnohospodárstve a ťažkom priemysle. Kľúčový profesionálny úspech: 100 % navrhnutých projektov bolo úspešne postavených, spustených a spoľahlivo fungujú dodnes. Komplexný životný cyklus projektovania: od tvorby P&ID procesných schém a hydraulických výpočtov až po 3D modelovanie, izometrické výkresy (EN / ASME / ISO) a autorský dozor na stavbách.',
    specializations: [
      'Technologické potrubné rozvody vysokého a nízkeho tlaku',
      'Tvorba procesných schém P&ID a Flow Sheets (ISO 10628)',
      'Zásobníkové parky, ropné terminály a skladovacie nádrže',
      'Čerpacie a kompresorové stanice, odparovacie jednotky',
      'Obilné silá, poľnohospodárske terminály a dopravníkové mosty',
      'Priemyselné oceľové konštrukcie a potrubné estakády',
      'Autorský dozor, uvádzanie do prevádzky a technický audit'
    ],
    standards: [
      'EN 13480 (Kovové priemyselné potrubia)',
      'ASME B31.3 / ASME B31.1 (Process Piping)',
      'API 650 / API 620 (Zvárané nádrže na ropné produkty)',
      'Eurokódy (EN 1990 - EN 1999)',
      'ISO 10628 (P&ID diagramy)',
      'STN / ČSN / GOST technické kreslenie'
    ],
    software: [
      { name: 'AutoCAD (2D/3D)', level: 'Expert (25+ rokov)', category: 'CAD & Dielenské výkresy' },
      { name: 'SketchUp Pro', level: 'Expert', category: '3D priestorové modelovanie stavieb' },
      { name: 'SolidWorks', level: 'Pokročilý', category: 'Strojárske uzly a diely' },
      { name: 'NanoCAD', level: 'Expert', category: 'Projekčná dokumentácia stavieb' },
      { name: 'Mathcad / Excel Engineering', level: 'Expert', category: 'Hydraulické a pevnostné výpočty' },
      { name: 'MS Office / Windows OS', level: 'Pokročilý užívateľ', category: 'Kancelársky softvér' }
    ],
    workExperience: [
      {
        period: '04.2019 — súčasnosť',
        role: 'Vedúci konštruktér / Vedúci projektovania',
        companyOrScope: 'EGAZ s.r.o.',
        location: 'Slovensko / EÚ / Ukrajina',
        highlights: [
          'Projektovanie náročných plynových a palivových celkov: skvapalnený plyn (LPG), výparníky, prečerpávacie moduly.',
          'Odsúhlasovanie technických riešení s investormi a certifikačnými orgánми.',
          'Výjazdy na objekty za účelom zamerania a vizuálneho stanovenia rozsahu prác.',
          'Výkon autorského dozoru a priame riadenie montážnych prác na stavbách.'
        ]
      },
      {
        period: '12.2017 — 05.2018',
        role: 'Vedúci konštruktér',
        companyOrScope: 'Poseidon s.r.o.',
        location: 'Ukrajina',
        highlights: [
          'Projektovanie prístavných a poľnohospodárskych objektov, obilných síl a dopravných pásov.',
          'Autorský dozor a kontrola kvality montáže.'
        ]
      },
      {
        period: '03.2005 — 10.2017 (12+ rokov)',
        role: 'Vedúci konštruktér / Vedúci projektovej skupiny',
        companyOrScope: 'JUST-SP s.r.o.',
        location: 'Ukrajina',
        highlights: [
          'Vedenie tímu strojných a stavebných inžinierov.',
          'Komplexné projektovanie priemyselných celkov: terminály ropy a plynu (42 000 m³ Syntez Oil, Odesnaftaprodukt), kompresorové stanice, potrubné mosty, chladiace veže.',
          'Tvorba technologických postupov montáže (PPR) pre ťažkotonážne žeriavové operácie.',
          'Trvalý autorský dozor a riadenie stavebno-montážnych prác.'
        ]
      },
      {
        period: '09.2004 — 03.2005',
        role: 'Konštruktér 1. kategórie',
        companyOrScope: 'Chimtiažmontaž',
        location: 'Ukrajina',
        highlights: [
          'Zameriavanie objektov v prevádzke.',
          'Tvorba dielenských výkresov pre výrobu oceľových konštrukcií a potrubných dielcov.',
          'Spracovanie materiálových špecifikácií (MTO) a kontrola výroby.'
        ]
      },
      {
        period: '02.2001 — 09.2004',
        role: 'Projektový inžinier / Inžinier pre kompletizáciu zariadení',
        companyOrScope: 'LUKOIL — Odeská rafinéria',
        location: 'Ukrajina',
        highlights: [
          'Projektovanie oceľových konštrukcií, základov a technologických potrubí rafinérie.',
          'Tvorba dokumentácie pre stavebné povolenie a realizáciu stavby (monolitické konštrukcie, základy, potrubia).',
          'Statické a pevnostné výpočty železobetónových pätiek a oceľových rámov.',
          'Kompletizácia armatúrami a technologickým vybavením pred plánovanými generálnymi opravami.'
        ]
      },
      {
        period: '10.1997 — 10.1998',
        role: 'Inžinier 1. kategórie / Vedúci inžinier',
        companyOrScope: 'Odeská štátna polytechnická univerzita',
        location: 'Ukrajina',
        highlights: [
          'Vedenie projektového tímu, vývoj systémov pneumatickej dopravy sypkých materiálov.',
          'Montáž a uvádzanie laboratórnych testovacích systémov do prevádzky.'
        ]
      },
      {
        period: '06.1991 — 09.1997',
        role: 'Betonár / Mechanik / Mladší inžinier',
        companyOrScope: 'Stavebné družstvo «Monolitbud»',
        location: 'Ukrajina',
        highlights: [
          'Priame praktické skúsenosti so zhotovovaním betónových konštrukcií na stavbách.',
          'Servis, údržba a technický dohľad nad stavebnými mechanizmami.'
        ]
      }
    ],
    education: [
      {
        year: '1998 — 2003',
        degree: 'Diplom stavebného inžiniera (Ing. - Univerzitné vzdelanie)',
        institution: 'Kyjevská národná univerzita stavebníctva a architektúry (KNUBA)',
        specialty: 'Konštruovanie priemyselných a pozemných stavieb'
      },
      {
        year: '1998 — 2000',
        degree: 'Postgraduálne vedecko-výskumné štúdium',
        institution: 'Odeská štátna polytechnická univerzita',
        specialty: 'Priemyselné stroje, chemické aparáty a materiálové inžinierstvo'
      },
      {
        year: '1992 — 1997',
        degree: 'Diplom strojného inžiniera (Ing. - Strojnícka fakulta)',
        institution: 'Odeská štátna polytechnická univerzita',
        specialty: 'Zariadenia chemického priemyslu a výroby stavebných hmôt'
      }
    ],
    certifications: [
      {
        year: '2009',
        name: 'Seizmické navrhovanie stavieb (Eurocode 8)',
        institution: 'Odeská štátna akadémia stavebníctva a architektúry (ODABA)',
        description: 'Výpočty priemyselných stavieb, potrubí a základov v seizmických oblastiach.'
      },
      {
        year: '2003',
        name: 'Technológia palív a špeciálnych produktov v rafinériách',
        institution: 'Technická univerzita «Ľvovská polytechnika»',
        description: 'Chemicko-technologické procesy spracovania ropy a uhľovodíkov.'
      },
      {
        year: '2003',
        name: 'Technológia počítačového projektovania AutoCAD 2D/3D',
        institution: 'Vzdelávacie centrum «Excelent Class»',
        description: 'Pokročilá tvorba digitálnej technickej dokumentácie.'
      }
    ],
    keyProjects: [
      {
        name: 'Skladovací park ropných látok 42 000 m³ (Syntez Oil)',
        year: '2009',
        type: 'Petrochémia / Nádrže',
        description: 'Komplexný projekt: potrubné prepojenie nádrží RVS, penové hasenie, priemyselná kanalizácia s lapačmi a bleskozvody.'
      },
      {
        name: 'Čerpacia stanica leteckého petroleja a rozdeľovač 12 liniek',
        year: '2007',
        type: 'Petrochémia / Čerpadlá',
        description: 'Priestorové vedenie 12 sacích/výtlačných potrubí petroleja v stiesnených podmienkach.'
      },
      {
        name: 'Modulárna kontajnerová jednotka v 40ft HC kontajneri',
        year: '2021',
        type: 'R&D / Modulárne systémy',
        description: 'Celá technologická linka: 4 čerpadlá, reaktory, nerezové potrubia AISI 316, Plug & Play.'
      },
      {
        name: 'Železničná rampa pre stáčanie 8 vagónov USN-150',
        year: '2008',
        type: 'Dopravná infraštruktúra',
        description: 'Obojstranná rampa, kĺbové ramená USN-150 s dosahom 4 m a samospádové zvody.'
      }
    ],
    languages: [
      { lang: 'Slovenský jazyk', level: 'Profesionálna pracovná úroveň (B2/C1)' },
      { lang: 'Ukrajinský jazyk', level: 'Materinský jazyk' },
      { lang: 'Anglický jazyk', level: 'Technická úroveň (B1/B2)' },
      { lang: 'Poľský / Český jazyk', level: 'Porozumenie technickej dokumentácie' }
    ]
  },
  en: {
    name: 'Dolynskyi Vitalii',
    title: 'Lead Industrial Design Engineer · Process Piping, Petrochemicals & Heavy Structures',
    location: 'Čadca, Žilina Region, Slovakia (available for business trips, surveys & remote)',
    phone: '+421 905 168 884',
    email: 'Dolinskiy_V.A@i.ua',
    experienceYears: 27,
    completedProjects: '300+',
    drivingLicense: 'Driving License Categories «A», «B», «C» (own vehicle, high mobility)',
    summary: 'Lead Industrial Design Engineer with over 27 years of hands-on expertise and 300+ completed projects across petrochemical, gas, agricultural, and heavy industrial domains. Core Engineering Milestone: 100% of designed facilities have been successfully constructed, commissioned, and continue to operate reliably to this day. Full project lifecycle execution: from preliminary site surveys and concept FEED studies to detailed shop drawings (structural steel, reinforced concrete, piping TX per ISO / ASME / Eurocodes), heavy lifting plans (PPR), field supervision, and turnkey commissioning.',
    specializations: [
      'High and low pressure process piping systems (hydrocarbons, steam, chemicals)',
      'P&ID diagrams, flow sheets, and 3D piping isometrics (ISO 10628, EN 13480)',
      'Bulk storage tank farms (up to 42,000 m³), pump stations & containment dikes',
      'Structural steel design (pipe racks, gantries) & heavy equipment foundations',
      'Seismic design and dynamic load engineering (Eurocode 8 / ODABA)',
      'Rail and road tank car unloading gantries (USN-150 articulated arms)',
      'Method statements & lifting plans (PPR), site supervision, and commissioning'
    ],
    standards: [
      'ASME B31.3 / ASME B31.1 (Process Piping Code)',
      'EN 13480 (Metallic Industrial Piping)',
      'Eurocodes (EN 1990 - EN 1999, Seismic EN 1998)',
      'API 650 / API 620 (Welded Tanks for Oil Storage)',
      'ISO 10628 / ISO 3098 (P&ID and Technical Drawings)',
      'GOST 2.304 / ESKD Technical Drawing'
    ],
    software: [
      { name: 'AutoCAD (2D / 3D)', level: 'Expert (25+ years)', category: 'CAD Drafting & Blueprint Layouts' },
      { name: 'SketchUp Pro', level: 'Expert', category: '3D Spatial Facility Modeling' },
      { name: 'SolidWorks', level: 'Proficient', category: 'Mechanical Equipment & FEA Stress Analysis' },
      { name: 'NanoCAD', level: 'Expert', category: 'Industrial Engineering Deliverables' },
      { name: 'Mathcad / Excel Engineering', level: 'Expert', category: 'Hydraulic & Stress Calculations' },
      { name: 'MS Office / Windows OS', level: 'Power User', category: 'Project Management & Collaboration' }
    ],
    workExperience: [
      {
        period: '04.2019 — Present',
        role: 'Lead Design Engineer / Head of Engineering Design',
        companyOrScope: 'EGAZ LLC',
        location: 'Slovakia / EU / Ukraine',
        highlights: [
          'Engineering complex gas and fuel facilities: Liquefied Petroleum Gas (LPG) skids, vaporizers, and pumping packages.',
          'Technical coordination with clients, EPC general contractors, and regulatory compliance bodies.',
          'Field reconnaissance visits for dimensional verification and structural survey.',
          'On-site engineering supervision and direct management of mechanical assembly.'
        ]
      },
      {
        period: '12.2017 — 05.2018',
        role: 'Lead Structural / Mechanical Engineer',
        companyOrScope: 'Poseidon LLC',
        location: 'Ukraine',
        highlights: [
          'Design of port logistics terminals, grain silo batteries, and belt/chain conveying galleries.',
          'Field quality control and engineering supervision during mechanical assembly.'
        ]
      },
      {
        period: '03.2005 — 10.2017 (12+ years)',
        role: 'Lead Design Engineer / Head of Project Engineering Group',
        companyOrScope: 'JUST-SP LLC',
        location: 'Ukraine',
        highlights: [
          'Managed multi-disciplinary teams of mechanical, piping, and structural civil engineers.',
          'Turnkey engineering of large facilities: 42,000 m³ tank terminals (Syntez Oil, Odesnaftaprodukt), gas compressor skids, pipe bridges, cooling towers.',
          'Authored detailed Construction Method Statements & Rigging/Lifting Plans (PPR).',
          'Continuous field engineering supervision and direct site coordination of erection works.'
        ]
      },
      {
        period: '09.2004 — 03.2005',
        role: 'Design Engineer (Grade 1)',
        companyOrScope: 'Khimtyazhmontazh (Heavy Chemical Erection)',
        location: 'Ukraine',
        highlights: [
          'Performed physical on-site surveys in operating chemical and refining plants.',
          'Produced direct fabrication shop drawings for structural steel and spool piping.',
          'Compiled detailed Bills of Materials (BOM/MTO) and supervised manufacturing quality.'
        ]
      },
      {
        period: '02.2001 — 09.2004',
        role: 'Design Engineer (Grade 2) / Equipment Procurement Engineer',
        companyOrScope: 'LUKOIL — Odesa Oil Refinery',
        location: 'Odesa, Ukraine',
        highlights: [
          'Designed refinery structural steel, reinforced concrete, drainage, and process piping systems.',
          'Developed full design documentation across FEED, Detail Design, and As-Built stages.',
          'Structural stress and soil-bearing calculations for heavy foundations and compressor bases.',
          'Coordinated equipment procurement and high-pressure valve bill of quantities prior to plant turnarounds.'
        ]
      },
      {
        period: '10.1997 — 10.1998',
        role: 'Engineer (Grade 1) / Lead Research Engineer',
        companyOrScope: 'Odesa State Polytechnic University',
        location: 'Odesa, Ukraine',
        highlights: [
          'Led engineering research group designing pneumatic and mechanical conveying systems for bulk solids.',
          'Fabricated and commissioned experimental laboratory test benches.'
        ]
      },
      {
        period: '06.1991 — 09.1997',
        role: 'Concrete Craftsman (Grade 3) / Equipment Mechanic / Junior Technical Engineer',
        companyOrScope: 'Monolitbud Construction Enterprise',
        location: 'Ukraine',
        highlights: [
          'Hands-on field experience in reinforced concrete casting and heavy construction sites.',
          'Maintenance, overhaul, and technical safety oversight of heavy construction machinery.'
        ]
      }
    ],
    education: [
      {
        year: '1998 — 2003',
        degree: 'Civil & Structural Engineering Degree (MSc equivalent)',
        institution: 'Kyiv National University of Construction and Architecture (KNUCA)',
        specialty: 'Industrial and Civil Structural Engineering (Foundations, Steel & Concrete)'
      },
      {
        year: '1998 — 2000',
        degree: 'Postgraduate Academic Research Fellowship',
        institution: 'Odesa State Polytechnic University',
        specialty: 'Industrial Chemical Machinery, Pressure Equipment & Applied Materials Science'
      },
      {
        year: '1992 — 1997',
        degree: 'Mechanical Engineering Degree (MSc equivalent, Faculty of Mechanical Eng.)',
        institution: 'Odesa State Polytechnic University',
        specialty: 'Machinery & Equipment for Chemical Plants and Building Material Manufacturing'
      }
    ],
    certifications: [
      {
        year: '2009',
        name: 'Seismic Structural Engineering (Eurocode 8)',
        institution: 'Odesa State Academy of Civil Engineering & Architecture (ODABA)',
        description: 'Postgraduate qualification in dynamic earthquake-resistant structural and piping design.'
      },
      {
        year: '2003',
        name: 'Refinery Fuels & Specialty Petrochemicals Processing',
        institution: 'Lviv Polytechnic National University (Postgraduate Institute)',
        description: 'Advanced petrochemical refining processes, catalytic conversion, and distillation chemistry.'
      },
      {
        year: '2003',
        name: 'AutoCAD 2D/3D Digital Engineering Technology',
        institution: 'Excelent Class Technical Training Center',
        description: 'Advanced CAD drafting, automated dimensioning, and isometric documentation workflows.'
      }
    ],
    keyProjects: [
      {
        name: '42,000 m³ Bulk Liquid Petroleum Terminal (Syntez Oil)',
        year: '2009',
        type: 'Petrochemical Tank Farm',
        description: 'Turnkey tank farm manifold piping, automatic high-expansion foam fire suppression, oily water containment, and lightning protection.'
      },
      {
        name: 'Aviation Kerosene Manifold & High-Rate Pumping Station',
        year: '2007',
        type: 'Refinery Pump Complex',
        description: 'Multi-level routing of 12 parallel suction/discharge headers under severe footprint restrictions.'
      },
      {
        name: 'Modular Containerized Plant in 40ft High Cube Container',
        year: '2021',
        type: 'R&D / Modular Systems',
        description: 'Compact skid layout with 4 pumps, vertical reactor towers, and AISI 316 sanitary piping for rapid Plug & Play deployment.'
      },
      {
        name: '8-Car Rail Tank Bottom-Unloading Gantry (USN-150)',
        year: '2008',
        type: 'Railway Logistics Gantry',
        description: 'Dual-sided gantry with articulated USN-150 loading arms (4m radius) and gravity drainage manifolds.'
      }
    ],
    languages: [
      { lang: 'Ukrainian', level: 'Native / Full Professional' },
      { lang: 'Slovak', level: 'Working Proficiency (living & working in Slovakia)' },
      { lang: 'English', level: 'Technical / Working Proficiency (B1/B2)' }
    ]
  }
};
