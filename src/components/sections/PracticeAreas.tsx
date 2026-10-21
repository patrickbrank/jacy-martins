import { useState } from 'react';
import {
  ArrowRight,
  HeartPulse,
  Flame,
  Activity,
  Sparkles,
  Dumbbell,
  Compass,
} from 'lucide-react';
import { PRACTICE_AREAS, type PracticeArea } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { PracticeAreaModal } from '@/components/PracticeAreaModal';

interface PracticeAreasProps {
  isPageHeader?: boolean;
}

const AREA_ICONS = [
  HeartPulse, // 1. Lipedema
  Flame,      // 2. Emagrecimento
  Activity,   // 3. 03 Sinais de Inflamação
  Sparkles,   // 4. Terapias Hormonais
  Dumbbell,   // 5. Medicina Esportiva
  Compass,    // 6. Planejamento Estratégico
];

export function PracticeAreas({ isPageHeader = false }: PracticeAreasProps) {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleOpenModal = (area: PracticeArea, index: number) => {
    setSelectedArea(area);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedArea(null);
  };

  return (
    <section
      id="atuacao"
      className={`relative bg-[#f8f9fa] border-b border-graphite-200/80 ${
        isPageHeader ? 'pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16' : 'py-16 sm:py-20 lg:py-24'
      }`}
    >
      <div className="container-wide">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-end pb-4 sm:pb-6 text-left">
          <Reveal className="col-span-12 lg:col-span-7">
            <span className="eyebrow text-gold-dark font-bold block mb-2">
              Pilares de Atendimento
            </span>
            {isPageHeader ? (
              <h1 className="heading-xl text-navy-900 leading-tight">
                Áreas de Atuação e Condições Clínicas
              </h1>
            ) : (
              <h2 className="heading-xl text-navy-900 leading-tight">
                Áreas de Atuação e Condições Clínicas
              </h2>
            )}
            <span className="block h-0.5 w-14 rounded-full bg-gold mt-3" />
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-5" delay={100}>
            <p className="body-standard text-slate-600 text-sm sm:text-base leading-relaxed">
              O corpo humano é um sistema interconectado. Investigamos metabolismo celular, equilíbrio hormonal e processos inflamatórios conjuntamente.
            </p>
          </Reveal>
        </div>

        {/* 6 Area Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PRACTICE_AREAS.map((area, i) => {
            const IconComponent = AREA_ICONS[i % AREA_ICONS.length] || HeartPulse;

            return (
              <Reveal
                key={`${area.id}-${i}`}
                delay={(i % 3) * 60}
              >
                <div
                  onClick={() => handleOpenModal(area, i)}
                  className="medical-card p-5 sm:p-7 flex flex-col justify-between h-full group text-left cursor-pointer border border-slate-200/90 hover:border-gold/60 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-dark border border-gold/30 transition-transform group-hover:scale-105">
                        <IconComponent className="h-5 w-5 text-gold-dark" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-gold-dark font-bold bg-gold/10 px-2.5 py-1 rounded-md">
                        Saiba mais
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-1 leading-snug group-hover:text-gold-dark transition-colors">
                      {area.title}
                    </h3>

                    <span className="block text-xs font-semibold text-gold-dark mb-2.5">
                      {area.subtitle}
                    </span>

                    <p className="body-standard text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy-900 group-hover:text-gold-dark transition-colors">
                    <span>Ver detalhes clínicos</span>
                    <ArrowRight className="h-4 w-4 text-gold-dark transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <PracticeAreaModal
        area={selectedArea}
        isOpen={!!selectedArea}
        onClose={handleCloseModal}
        icon={AREA_ICONS[selectedIndex % AREA_ICONS.length]}
      />
    </section>
  );
}
