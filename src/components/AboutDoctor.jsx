import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  GraduationCap,
  Award,
  Stethoscope
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/medicalContent';

export default function AboutDoctor() {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section id="sobre" className="py-20 md:py-28 bg-graphite-950 text-white border-y border-gold/20 relative overflow-hidden">
      {/* Warm champagne ambient radiance */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Dual-Portrait Composition (Crisp, High-Prestige, No Blurry Fades) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Primary Photo: Executive Office with São Paulo Skyline (jacy imagem 2.png) */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/15 via-gold/25 to-white/5 border border-gold/40 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-graphite-900 group">
                  <img 
                    src="/imagens/jacy imagem 2.png" 
                    alt="Dr. Jacy Martins Junior no Consultório em São Paulo" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Clean bottom credit bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-graphite-950 via-graphite-950/80 to-transparent text-left">
                    <div className="font-serif text-lg font-bold text-white tracking-wide">
                      {DOCTOR_INFO.name}
                    </div>
                    <div className="text-xs text-gold-light font-medium flex items-center gap-2 mt-0.5">
                      <span>{DOCTOR_INFO.crm}</span>
                      <span>•</span>
                      <span>{DOCTOR_INFO.academic}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Inset Photo: Clinical Authority in Medical Coat UNIFACS (jacy imagem 3.png) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-36 sm:w-44 aspect-[3/4] rounded-xl overflow-hidden border-2 border-gold/60 shadow-2xl bg-graphite-900 group hidden xs:block">
                <img 
                  src="/imagens/jacy imagem 3.png" 
                  alt="Dr. Jacy Martins - Formação Médica UNIFACS" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-transparent to-transparent flex items-end p-2.5">
                  <div className="text-[10px] font-bold text-gold-light uppercase tracking-wider">
                    UNIFACS Turma X
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: High-Prestige Positioning Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-gold/30 text-xs font-semibold text-gold-light mb-5">
              <GraduationCap className="w-4 h-4 text-gold" />
              <span>Médico Responsável Técnico</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-5">
              Medicina com rigor científico, escuta ativa e respeito à sua individualidade.
            </h2>

            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed font-normal mb-8">
              O <strong className="text-white font-semibold">{DOCTOR_INFO.name}</strong> dedica sua prática médica ao diagnóstico e manejo de condições frequentemente rotuladas como "falta de força de vontade". Seja no tratamento do Lipedema, na regulação metabólica ou na modulação hormonal, cada conduta é fundamentada em investigação bioquímica detalhada, sem fórmulas prontas ou julgamentos.
            </p>

            {/* 3 Streamlined Pillars of Care in Graphite & Gold */}
            <div className="w-full space-y-4 mb-9">
              
              <div className="p-4 sm:p-5 rounded-xl bg-graphite-900/70 border border-gold/20 flex items-start gap-4 transition-all hover:border-gold/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold-light border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                    Investigação Diagnóstica Aprofundada
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite-300 mt-1 leading-relaxed">
                    Mapeamento detalhado de marcadores inflamatórios, curva glicêmica e insulínica, função tireoidiana e perfil hormonal completo antes de prescrever qualquer conduta.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-graphite-900/70 border border-gold/20 flex items-start gap-4 transition-all hover:border-gold/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold-light border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                    Tratamento Individualizado e Sem Culpas
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite-300 mt-1 leading-relaxed">
                    Protocolos clínicos personalizados que respeitam sua rotina e seu organismo, focando em desinflamar seu tecido adiposo sem impor dietas de fome ou escassez.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-graphite-900/70 border border-gold/20 flex items-start gap-4 transition-all hover:border-gold/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold-light border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                    Consultório Privativo em SP & Telemedicina Nacional
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite-300 mt-1 leading-relaxed">
                    Ambiente privativo e acolhedor na capital de São Paulo para exame físico palpatório de Lipedema e consultas online para pacientes de todo o Brasil e exterior.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all shadow-gold-sm flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
              >
                <span>Falar com a Recepção no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-graphite-950" />
              </a>

              <div className="flex items-center gap-1.5 text-xs text-graphite-400">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>São Paulo / Capital</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
