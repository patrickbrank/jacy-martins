import { Award, GraduationCap, MapPin, CheckCircle2, ArrowRight, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import { DOCTOR_INFO } from '@/data/content';
import { Reveal } from '@/components/Reveal';

interface AboutProps {
  isPageHeader?: boolean;
}

export function About({ isPageHeader = false }: AboutProps) {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section
      id="sobre"
      className={`relative bg-white border-b border-graphite-200/80 ${
        isPageHeader ? 'pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20' : 'py-20 sm:py-24'
      }`}
    >
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column — Imposing Executive Doctor Portrait (Full Height, Unified, Zero Redundancy) */}
          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
            <Reveal className="w-full max-w-lg lg:max-w-xl">
              
              {/* Grand Photo Frame — Thicker on Web with Dimmed Golden Opacity */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3.5 lg:p-4 bg-gradient-to-tr from-[#dfc79b]/25 via-[#c5a880]/15 to-[#9f834d]/20 border border-[#dfc79b]/35 shadow-card group flex-1 backdrop-blur-md">
                <div className="relative h-[360px] sm:h-[480px] lg:h-[660px] w-full overflow-hidden rounded-[14px] sm:rounded-2xl bg-slate-900">
                  <img
                    src="/imagens/jacy imagem 2.png"
                    alt="Dr. Jacy Martins Junior — Consultório Privativo em São Paulo"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* High-End Editorial Doctor Authority Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/85 to-transparent text-left flex items-end justify-between gap-3 z-10">
                    <div className="min-w-0 pr-2">
                      <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                        {DOCTOR_INFO.name}
                      </h3>
                      <span className="block text-xs sm:text-sm text-gold-light font-medium mt-0.5 whitespace-nowrap">
                        Medicina Estética
                      </span>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="font-mono text-[10px] sm:text-xs uppercase font-bold text-navy-950 bg-gradient-to-r from-gold-light to-gold px-2.5 py-1 rounded-md shadow-sm whitespace-nowrap flex-shrink-0 block">
                        {DOCTOR_INFO.crm}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </Reveal>
          </div>

          {/* Right Column — Biography & Core Clinical Pillars (Aligned at top) */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark mb-3.5">
                <Award className="h-3.5 w-3.5 text-gold-dark" />
                <span>Médico Responsável Técnico</span>
              </div>

              {isPageHeader ? (
                <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-navy-900 leading-[1.22] tracking-tight mb-4">
                  Medicina com rigor científico, escuta ativa e respeito à sua individualidade.
                </h1>
              ) : (
                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-navy-900 leading-[1.22] tracking-tight mb-4">
                  Medicina com rigor científico, escuta ativa e respeito à sua individualidade.
                </h2>
              )}

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
                O <strong className="text-navy-900 font-semibold">{DOCTOR_INFO.name}</strong> dedica sua prática médica ao diagnóstico e manejo de condições que frequentemente são incompreendidas ou rotuladas como "falta de força de vontade". Seja no tratamento do Lipedema, na regulação metabólica ou na modulação hormonal, cada conduta é fundamentada em investigação laboratorial aprofundada, sem fórmulas prontas ou culpas.
              </p>

              {/* 3 Pillars of Care with Rich Icons */}
              <div className="w-full space-y-3 mb-7">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200/90 flex items-start gap-3.5 transition-all hover:border-gold/50">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartPulse className="h-4 w-4 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                      Investigação Diagnóstica Aprofundada
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Mapeamento minucioso de inflamação subclínica, curva de insulina, função tireoidiana e perfil hormonal completo antes de qualquer conduta.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200/90 flex items-start gap-3.5 transition-all hover:border-gold/50">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                      Tratamento Individualizado e Sem Culpas
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Protocolos personalizados que respeitam sua rotina e seu organismo, focando em desinflamar seu tecido adiposo sem impor dietas de fome.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200/90 flex items-start gap-3.5 transition-all hover:border-gold/50">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                      Consultório em SP e Telemedicina Nacional
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Ambiente privativo na capital paulista para exame físico palpatório de Lipedema e consultas online com receitas ICP-Brasil para todo o país.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs uppercase tracking-wider py-3.5 px-7"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="h-3.5 w-3.5 text-gold-dark flex-shrink-0" />
                  <span>Atendimento de Segunda a Sexta-feira</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
