import { CheckCircle2, ArrowRight, HeartPulse, FlaskConical, Stethoscope, Flame } from 'lucide-react';
import { PROCEDURES, DOCTOR_INFO } from '@/data/content';
import { Reveal } from '@/components/Reveal';

interface ProceduresProps {
  isPageHeader?: boolean;
}

const PROTOCOL_ICONS = [
  HeartPulse,   // Protocolo 01: Desinflamação do Lipedema
  FlaskConical, // Protocolo 02: Mapeamento Bioquímico & Hormonal
  Stethoscope,  // Protocolo 03: Exame Físico Palpatório & Estadiamento
  Flame,        // Protocolo 04: Reprogramação Metabólica
];

export function Procedures({ isPageHeader = false }: ProceduresProps) {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section
      id="procedimentos"
      className={`relative bg-[#0c0e12] text-white border-0 overflow-hidden ${
        isPageHeader ? 'pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20' : 'py-20 sm:py-24 lg:py-28'
      }`}
    >
      {/* Golden Atmospheric Illumination — Soft & Subtle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#dfc79b]/8 sm:from-[#dfc79b]/16 via-[#c5a880]/5 sm:via-[#c5a880]/10 to-transparent blur-[140px]" />
        <div className="absolute -left-20 bottom-10 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#c5a880]/6 sm:from-[#c5a880]/14 to-transparent blur-[130px]" />
      </div>

      {/* High-Precision Micro-dot Architectural Texture — Softened */}
      <div 
        className="absolute inset-0 opacity-[0.05] sm:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(223, 199, 155, 0.7) 1.2px, transparent 1.2px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-wide relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <Reveal>
            <span className="eyebrow text-gold-light font-bold block mb-2">
              Conduta Clínica Personalizada
            </span>
            {isPageHeader ? (
              <h1 className="heading-xl text-white leading-snug max-w-2xl">
                Protocolos Médicos e Avaliações Diagnósticas
              </h1>
            ) : (
              <h2 className="heading-xl text-white leading-snug max-w-2xl">
                Protocolos Médicos e Avaliações Diagnósticas
              </h2>
            )}
            <span className="block h-0.5 w-14 rounded-full bg-gold mt-3" />
            <p className="body-standard text-graphite-300 text-sm sm:text-base leading-relaxed mt-4">
              Cada organismo possui uma assinatura bioquímica única. Nossos protocolos combinam exame físico minucioso com painéis laboratoriais aprofundados para intervenções assertivas e individualizadas.
            </p>
          </Reveal>
        </div>

        {/* 4 Protocol Cards Grid with Prominent Medical Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROCEDURES.map((proc, idx) => {
            const IconComponent = PROTOCOL_ICONS[idx % PROTOCOL_ICONS.length] || HeartPulse;

            return (
              <Reveal key={proc.id} delay={idx * 80}>
                <div className="p-6 sm:p-8 rounded-2xl bg-[#151924]/90 border-0 shadow-[0_15px_35px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-300 flex flex-col justify-between h-full group text-left backdrop-blur-sm">
                  <div>
                    {/* Header with Prominent Medical Icon + Protocol Pill */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 text-gold-light border-0 shadow-sm transition-transform group-hover:scale-105">
                        <IconComponent className="h-6 w-6 text-gold-light" />
                      </div>
                      <span className="font-mono text-xs text-gold-light font-bold uppercase tracking-wider bg-gold/15 px-3 py-1 rounded-md">
                        Protocolo 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 leading-snug group-hover:text-gold-light transition-colors">
                      {proc.title}
                    </h3>

                    <p className="body-standard text-xs sm:text-sm text-graphite-300 leading-relaxed mb-5">
                      {proc.fullDesc}
                    </p>

                    {/* Indications list */}
                    <div className="pt-4 border-0">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gold-light block mb-2">
                        Principais Indicações:
                      </span>
                      <ul className="space-y-2">
                        {proc.indications.map((ind, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-graphite-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-0">
                    <a
                      href={`https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(`Olá Dr. Jacy Martins! Gostaria de agendar: ${proc.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-light hover:text-white transition-colors"
                    >
                      <span>Consultar Protocolo</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gold" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Reassurance Banner — Totally Borderless, Direct CTA */}
        <Reveal delay={200} className="mt-12">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#151924]/95 border-0 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left backdrop-blur-sm">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Deseja discutir seu caso clínico diretamente com o médico?
              </h3>
              <p className="text-xs sm:text-sm text-graphite-300">
                Atendimento presencial em São Paulo (Capital) e Telemedicina para todo o Brasil.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0 text-xs py-3 px-6 whitespace-nowrap"
            >
              <span>Agendar Consulta</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
