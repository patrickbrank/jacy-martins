import React from 'react';
import { 
  Flame, 
  Clock, 
  Sparkles, 
  Dumbbell, 
  ArrowRight, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/medicalContent';

const SYMPTOMS_LIST = [
  {
    icon: Flame,
    title: "Dor e hipersensibilidade ao toque",
    desc: "Sensação dolorosa, ardor ou queimação ao simples toque ou leve pressão nas pernas e braços.",
  },
  {
    icon: Clock,
    title: "Inchaço e peso no fim do dia",
    desc: "As pernas ficam progressivamente mais pesadas, cansadas e retidas ao longo do dia.",
  },
  {
    icon: Sparkles,
    title: "Perna em formato de coluna",
    desc: "Acúmulo de gordura que termina abruptamente no tornozelo, poupando pés e mãos.",
  },
  {
    icon: Dumbbell,
    title: "Gordura resistente a treinos",
    desc: "Mesmo com restrição calórica e academia, a gordura dos membros não diminui proporcionalmente.",
  }
];

const COMPARISON_ROWS = [
  {
    criterion: "Dor e Sensibilidade",
    lipedema: "Dói à palpação, peso e queimação contínua",
    obesidade: "Gordura geralmente indolor ao toque"
  },
  {
    criterion: "Resposta a Dietas",
    lipedema: "Resistente a déficit calórico comum",
    obesidade: "Reduz proporcionalmente com déficit calórico"
  },
  {
    criterion: "Distribuição Corporal",
    lipedema: "Desproporcional em pernas e braços",
    obesidade: "Generalizada e uniforme pelo corpo"
  }
];

export default function LipedemaSection() {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent("Olá Dr. Jacy Martins! Gostaria de agendar uma consulta para avaliação e diagnóstico de Lipedema.")}`;

  return (
    <section id="lipedema" className="py-20 md:py-28 bg-[#f8f9fa] border-b border-graphite-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-gold/40 text-xs font-bold text-gold-dark uppercase tracking-wider mb-3 shadow-soft">
            <ShieldAlert className="w-3.5 h-3.5 text-gold-dark" />
            <span>Diagnóstico Clínico Especializado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-graphite-950 tracking-tight leading-[1.15] mb-4">
            Você convive com dor, inchaço e peso crônico nas pernas?
          </h2>
          <p className="text-sm sm:text-base text-graphite-600 leading-relaxed font-normal">
            Milhões de mulheres passam anos sofrendo em silêncio acreditando ser apenas ganho de peso comum ou retenção de líquidos. O <strong className="text-graphite-950 font-semibold">Lipedema</strong> é uma condição inflamatória crônica e progressiva que exige diagnóstico médico clínico e conduta terapêutica específica.
          </p>
        </div>

        {/* 2-Column Grid: Symptoms & Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Symptoms */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-graphite-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-graphite-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-0.5">
                    Critérios de Triagem
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-graphite-950">
                    Sinais Mais Frequentes de Lipedema
                  </h3>
                </div>
                <span className="text-xs font-bold text-graphite-700 bg-graphite-100 px-2.5 py-1 rounded-md border border-graphite-200">
                  4 Sinais-Chave
                </span>
              </div>

              <div className="space-y-3.5">
                {SYMPTOMS_LIST.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-[#fafafa] border border-graphite-200/80 flex items-start gap-3.5 transition-all hover:border-gold/50 hover:bg-white"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold-dark border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4 text-gold-dark" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-graphite-950 leading-snug">
                          {item.title}
                        </div>
                        <p className="text-xs sm:text-sm text-graphite-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-graphite-100 text-xs text-graphite-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
              <span>Diagnóstico confirmado por exame físico palpatório e anamnese médica.</span>
            </div>
          </div>

          {/* Right Column: Comparative Analysis */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-graphite-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-graphite-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-0.5">
                    Diferenciação Médica
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-graphite-950">
                    Lipedema vs Obesidade Comum
                  </h3>
                </div>
                <span className="text-xs font-bold text-gold-dark bg-gold/10 border border-gold/30 px-2.5 py-1 rounded-md">
                  Quadro Clínico
                </span>
              </div>

              <p className="text-xs sm:text-sm text-graphite-600 mb-6 leading-relaxed">
                A gordura do Lipedema é inflamatória, dolorosa e hormônio-dependente. Ela não se comporta como o tecido adiposo convencional:
              </p>

              <div className="space-y-4">
                {COMPARISON_ROWS.map((row, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#fafafa] border border-graphite-200">
                    <div className="text-xs font-bold text-graphite-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-dark"></span>
                      <span>{row.criterion}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                      <div className="bg-white p-3 rounded-lg border border-gold/30 shadow-soft">
                        <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider block mb-1">
                          No Lipedema:
                        </span>
                        <span className="font-semibold text-graphite-950">
                          {row.lipedema}
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-graphite-200">
                        <span className="text-[11px] font-bold text-graphite-400 uppercase tracking-wider block mb-1">
                          Na Obesidade:
                        </span>
                        <span className="text-graphite-600">
                          {row.obesidade}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-graphite-100 text-xs text-graphite-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
              <span>Avaliação presencial em São Paulo com estadiamento e laudo.</span>
            </div>
          </div>

        </div>

        {/* Clinical Reassurance Banner - Clean, High-Contrast Luxury Light Card (Zero Post Images, Zero White-on-White Bugs) */}
        <div className="rounded-2xl bg-white border border-gold/40 shadow-card p-8 sm:p-10 lg:p-12 text-left relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-2">
              Acolhimento & Respeito Biológico
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-graphite-950 leading-tight mb-4">
              Você não precisa mais conviver com a dor e a frustração diária.
            </h3>

            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed mb-8 font-normal">
              O Lipedema é uma condição biológica real com substrato genético e hormonal. Não é fraqueza, não é culpa sua e não se resolve com restrição calórica extrema. O tratamento médico existe para desinflamar seu organismo, eliminar a sensação de queimação e resgatar sua mobilidade e autoestima.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all shadow-gold-sm active:scale-95 whitespace-nowrap"
              >
                <span>Agendar Avaliação de Lipedema</span>
                <ArrowRight className="w-4 h-4 text-graphite-950" />
              </a>

              <div className="text-xs text-graphite-500 border-l border-graphite-300 pl-4 hidden sm:block">
                <span className="font-serif text-sm font-semibold text-graphite-950 block">Dr. Jacy Martins Jr</span>
                <span className="text-gold-dark">CRM-SP 263543 • UNIFACS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
