import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/medicalContent';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-graphite-950 text-white">
      {/* Warm champagne atmospheric radiance */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Manifesto & Call to Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-gold/30 text-xs font-semibold text-graphite-200 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold-light font-bold tracking-wide">{DOCTOR_INFO.crm}</span>
              <span className="text-white/20">•</span>
              <span className="text-graphite-300">São Paulo & Telemedicina Brasil</span>
            </div>

            {/* Headline - Editorial Serif Masterpiece */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-white tracking-tight leading-[1.12] mb-6">
              Não é falta de força de vontade. <br className="hidden sm:inline" />
              <span className="italic text-gold-light font-normal">
                É uma condição médica com diagnóstico e tratamento.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed max-w-xl font-normal mb-8">
              Acompanhamento médico especializado no diagnóstico preciso de <strong className="text-white font-semibold">Lipedema</strong>, desinflamação celular profunda, alívio de dores nas pernas e <strong className="text-white font-semibold">reprogramação metabólica</strong>. Medicina com rigor científico, sem dietas punitivas ou culpas.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all shadow-gold-sm flex items-center justify-center gap-2.5 whitespace-nowrap active:scale-95"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 text-graphite-950" />
              </a>

              <a
                href="#lipedema"
                className="h-12 px-6 rounded-lg text-xs sm:text-sm font-semibold text-graphite-200 bg-graphite-900/90 border border-gold/25 hover:border-gold/60 hover:text-white transition-all flex items-center justify-center whitespace-nowrap"
              >
                Entender os Sinais de Lipedema
              </a>
            </div>

            {/* Integrated Luxury Trust Bar */}
            <div className="w-full max-w-xl rounded-xl bg-graphite-900/70 border border-gold/20 p-4 backdrop-blur-md shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 sm:divide-x sm:divide-white/10">
                
                <div className="flex items-center gap-2.5 sm:pr-2">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold-light border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">Escuta Atenta</div>
                    <div className="text-[11px] text-graphite-400">Sem julgamentos</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:px-2">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold-light border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">Bioquímica</div>
                    <div className="text-[11px] text-graphite-400">Exames aprofundados</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:pl-2">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold-light border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">Atendimento</div>
                    <div className="text-[11px] text-graphite-400">SP & Telemedicina</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Architectural Doctor Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Luxury Museum-Grade Frame */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/15 via-gold/20 to-white/5 border border-gold/30 shadow-2xl backdrop-blur-md">
                
                <div className="relative aspect-[3.4/4.8] rounded-xl overflow-hidden bg-graphite-900 group">
                  <img 
                    src="/imagens/jacy imagem 1.png" 
                    alt="Dr. Jacy Martins Junior - Médico UNIFACS" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Refined subtle base shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-transparent"></div>

                  {/* Subtle Doctor Credential Badge - Placed elegantly at bottom without covering his torso */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-lg bg-graphite-950/90 backdrop-blur-md border border-gold/30 text-left shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-serif text-base font-semibold text-white tracking-wide">
                          {DOCTOR_INFO.name}
                        </div>
                        <div className="text-[11px] text-gold-light font-medium tracking-wide">
                          {DOCTOR_INFO.title}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-graphite-950 bg-gradient-to-r from-gold-light to-gold px-2 py-0.5 rounded shadow-sm">
                        {DOCTOR_INFO.crm}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-graphite-300 mt-2 pt-2 border-t border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>São Paulo (Capital) • Atendimento Nacional Online</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
