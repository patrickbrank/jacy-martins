import React from 'react';
import { 
  HeartPulse, 
  Flame, 
  Sparkles, 
  Dumbbell, 
  ArrowRight, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { CLINICAL_PILLARS, DOCTOR_INFO } from '../data/medicalContent';

const PILLAR_ICONS = {
  lipedema: HeartPulse,
  emagrecimento: Flame,
  hormonios: Sparkles,
  performance: Dumbbell
};

export default function SpecialtiesGrid() {
  const getWhatsappForPillar = (title) => {
    const text = `Olá Dr. Jacy Martins! Gostaria de agendar uma consulta com foco em: ${title}.`;
    return `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-white border-b border-graphite-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f8f9fa] border border-gold/40 text-xs font-bold text-gold-dark uppercase tracking-wider mb-3 shadow-soft">
            <Stethoscope className="w-3.5 h-3.5 text-gold-dark" />
            <span>Cuidado Médico Integrativo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-graphite-950 tracking-tight leading-[1.15] mb-4">
            Principais áreas de atuação médica
          </h2>
          <p className="text-sm sm:text-base text-graphite-600 leading-relaxed font-normal">
            O corpo humano é um sistema interconectado. Investigamos metabolismo celular, equilíbrio hormonal e processos inflamatórios conjuntamente para resultados consistentes e seguros.
          </p>
        </div>

        {/* 4 Pillar Cards in Luxury White, Slate & Gold */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {CLINICAL_PILLARS.map((pillar) => {
            const IconComponent = PILLAR_ICONS[pillar.id] || HeartPulse;

            return (
              <div
                key={pillar.id}
                className="bg-[#fcfcfd] p-7 sm:p-8 rounded-2xl border border-graphite-200/90 shadow-card hover:shadow-elevated hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/30">
                      {pillar.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-graphite-200 text-gold-dark flex items-center justify-center transition-colors group-hover:bg-gold/10 group-hover:border-gold/40 shadow-soft">
                      <IconComponent className="w-5 h-5 text-gold-dark" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-graphite-950 mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-graphite-800 mb-3">
                    {pillar.summary}
                  </div>

                  <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-normal">
                    {pillar.details}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-graphite-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-graphite-500">
                    <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                    <span>Mapeamento laboratorial completo</span>
                  </div>

                  <a
                    href={getWhatsappForPillar(pillar.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark hover:text-gold-deep transition-colors"
                  >
                    <span>Agendar Consulta</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-dark" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
