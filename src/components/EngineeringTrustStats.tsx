import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Award, Factory, Database, Ruler, Compass, Building2, CheckCircle2 } from 'lucide-react';

interface EngineeringTrustStatsProps {
  currentLang: Language;
}

export const EngineeringTrustStats: React.FC<EngineeringTrustStatsProps> = ({ currentLang }) => {
  const stats = [
    {
      icon: Factory,
      num: {
        uk: '300+',
        sk: '300+',
        en: '300+'
      },
      label: {
        uk: 'Реалізованих об\'єктів (100% діючі)',
        sk: 'Realizovaných projektov (100% v prevádzke)',
        en: 'Completed Facilities (100% Operational)'
      },
      desc: {
        uk: '100% проєктів успішно побудовані та надійно працюють до сьогоднішнього дня',
        sk: '100 % projektov bolo úspešne postavených a spoľahlivo fungujú dodnes',
        en: '100% of projects were successfully built and operate reliably to this day'
      }
    },
    {
      icon: Database,
      num: {
        uk: '42 000 м³',
        sk: '42 000 m³',
        en: '42,000 m³'
      },
      label: {
        uk: 'Максимальний парк РВС',
        sk: 'Max. kapacita nádrží RVS',
        en: 'Max. Single Tank Farm Capacity'
      },
      desc: {
        uk: 'Комплексний резервуарний термінал нафтопродуктів',
        sk: 'Veľkokapacitný terminál ropných produktov',
        en: 'Multi-tank storage terminal with foam deluge & containment'
      }
    },
    {
      icon: Ruler,
      num: {
        uk: 'DN15 – DN530',
        sk: 'DN15 – DN530',
        en: 'DN15 – DN530'
      },
      label: {
        uk: 'Діаметри трубопроводів',
        sk: 'Priemery potrubných rozvodov',
        en: 'Piping Diameters Range'
      },
      desc: {
        uk: 'Високий та низький тиск, газ, нафта, хімія, пара',
        sk: 'Vysoký a nízky tlak, plyn, ropa, chémia, para',
        en: 'High/low pressure, gas, crude, chemical, steam lines'
      }
    },
    {
      icon: Compass,
      num: {
        uk: '27+ Років',
        sk: '27+ Rokov',
        en: '27+ Years'
      },
      label: {
        uk: 'Практичного стажу',
        sk: 'Rokov inžinierskej praxe',
        en: 'Years Field & CAD Experience'
      },
      desc: {
        uk: 'Безперервний досвід проектування та авторського нагляду',
        sk: 'Nepretržitá prax v CAD projektovaní a dozore',
        en: 'Continuous engineering design and turnkey site supervision'
      }
    }
  ];

  const clientFacilities = [
    { 
      name: { uk: 'LUKOIL Refinery', sk: 'Rafinéria LUKOIL', en: 'LUKOIL Refinery' }, 
      type: { uk: 'НПЗ та насосні станції', sk: 'Rafinéria a čerpadlá', en: 'Refinery & Feed Pumps' } 
    },
    { 
      name: { uk: 'Одеський припортовий завод (ОПЗ)', sk: 'Odesský prístavný závod (OPZ)', en: 'Odesa Port Plant (OPZ)' }, 
      type: { uk: 'Естакади та котельні комплекси', sk: 'Potrubné mosty a kotolne', en: 'Pipe Racks & Boiler Plants' } 
    },
    { 
      name: { uk: 'ПАТ «Одеснафтопродукт»', sk: 'Odesnaftoprodukt a.s.', en: 'PJSC Odesnaftoproduct' }, 
      type: { uk: 'Резервуарні парки та насосні авіагасу', sk: 'Zásobníky a letecký petrolej', en: 'Tank Farms & Kerosene Manifolds' } 
    },
    { 
      name: { uk: 'ЗАТ «Синтез Ойл»', sk: 'Syntez Oil a.s.', en: 'Syntez Oil CJSC' }, 
      type: { uk: 'Пожежогасіння та промканалізація 42 000 м³', sk: 'Hasiace systémy a kanalizácia 42 000 m³', en: '42k m³ Deluge & Oily Water Drainage' } 
    },
    { 
      name: { uk: 'ЕГАЗ / ЕРМ', sk: 'E-GAS / ERM', en: 'E-GAS / ERM' }, 
      type: { uk: 'Модульні контейнери та СВГ-термінали', sk: 'Modulárne kontajnery a LPG', en: 'Plug & Play Skids & LPG Terminals' } 
    }
  ];

  return (
    <section className="py-16 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Metric Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-2xl transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl hover:z-20 relative shadow-sm flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-blue)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-gost font-black text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                    {stat.num[currentLang]}
                  </div>
                  <div className="font-gost font-extrabold text-base sm:text-lg text-[var(--accent-blue)] mt-1.5">
                    {stat.label[currentLang]}
                  </div>
                </div>
                <div className="text-sm sm:text-base text-[var(--text-secondary)] mt-3.5 pt-3 border-t border-[var(--border-color)] font-normal leading-relaxed">
                  {stat.desc[currentLang]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Client Trust Bar */}
        <div className="mt-10 p-6 sm:p-8 bg-[var(--bg-surface-2)] border border-[var(--border-color)] rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-4 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[var(--accent-blue)]" />
              <span className="font-gost font-black text-base sm:text-lg text-[var(--text-primary)] uppercase tracking-wider">
                {currentLang === 'uk' ? 'Підтверджений виробничий досвід на ключових підприємствах' : currentLang === 'sk' ? 'Overená inžinierska prax na významných podnikoch' : 'Proven Track Record Across Key Industrial Enterprises'}
              </span>
            </div>
            <div className="font-gost-mono text-sm text-[var(--accent-blue)] font-extrabold">
              ISO 9001 · EN 13480 · ASME B31.3 · API 650
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clientFacilities.map((client, idx) => (
              <div key={idx} className="p-4 bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-blue)] rounded-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:z-20 relative cursor-pointer">
                <div className="font-gost font-bold text-sm sm:text-base text-[var(--text-primary)] truncate">
                  {client.name[currentLang]}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 truncate font-medium">
                  {client.type[currentLang]}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
