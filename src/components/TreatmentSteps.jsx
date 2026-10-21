import React from 'react';
import { 
  ClipboardList, 
  FlaskConical, 
  HeartPulse, 
  ArrowRight, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/medicalContent';

const STEPS_DATA = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Escuta atenta e história clínica",
    desc: "Uma consulta sem pressa para entender detalhadamente suas queixas, dores diárias, histórico de tentativas e estilo de vida. Você é ouvida com acolhimento e sem julgamentos.",
  },
  {
    step: "02",
    icon: FlaskConical,
    title: "Mapeamento com exames aprofundados",
    desc: "Solicitamos painéis laboratoriais completos para avaliar inflamação crônica, resistência insulínica, tireoide, cortisol e perfil hormonal minucioso.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "Plano terapêutico e acompanhamento",
    desc: "Estruturamos um tratamento médico personalizado para desinflamar o tecido, cessar dores e organizar seu metabolismo, com retornos periódicos de evolução.",
  }
];

export default function TreatmentSteps() {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-graphite-950 text-white border-y border-gold/20 relative overflow-hidden">
      {/* Warm champagne atmospheric glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-gold/30 text-xs font-semibold text-gold-light uppercase tracking-wider mb-4 shadow-sm">
            <CalendarCheck className="w-4 h-4 text-gold" />
            <span>Método Clínico Estruturado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-4">
            Como funciona a consulta médica e o tratamento
          </h2>
          <p className="text-sm sm:text-base text-graphite-300 leading-relaxed font-normal">
            Você não recebe uma receita genérica para levar para casa. Nosso método investiga a raiz biológica dos sintomas para construir uma estratégia médica definitiva, segura e duradoura.
          </p>
        </div>

        {/* 3 Step Cards in Luxury Dark Graphite & Gold */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STEPS_DATA.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#151924] p-7 sm:p-8 rounded-2xl border border-white/10 shadow-2xl hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl font-light text-gold-light tracking-wide">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold-light border border-gold/30 flex items-center justify-center transition-transform group-hover:scale-105">
                      <IconComponent className="w-5 h-5 text-gold-light" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-graphite-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-gold-light">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Conduta estritamente baseada em evidências</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Contrast Reassurance Callout Card in Graphite & Gold */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#181d2a] border border-gold/30 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-light block mb-1">
              Pronta para Iniciar?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-white mb-2 leading-snug">
              Inicie sua jornada para uma vida sem dor e com mais disposição.
            </h3>
            <p className="text-xs sm:text-sm text-graphite-300 leading-relaxed font-normal">
              Atendimento presencial no consultório em São Paulo (Capital) ou Telemedicina com receitas digitais para todo o Brasil.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all shadow-gold-sm active:scale-95 whitespace-nowrap"
          >
            <span>Agendar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-graphite-950" />
          </a>
        </div>

      </div>
    </section>
  );
}
