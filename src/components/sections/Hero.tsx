import { 
  ArrowRight, 
  Stethoscope, 
  MapPin, 
  Video, 
  Award, 
  HeartHandshake, 
  Activity, 
  ShieldCheck
} from 'lucide-react';
import { DoctorPhoto } from '@/components/DoctorPhoto';
import { DOCTOR_INFO } from '@/data/content';

export function Hero() {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0c0e12] pt-20 sm:pt-24 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 border-0 text-white">
      {/* Golden Atmospheric Illumination — Soft, Velvety & Whisper-Quiet on Mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#dfc79b]/8 sm:from-[#dfc79b]/20 via-[#c5a880]/5 sm:via-[#c5a880]/12 to-transparent blur-[140px]" />
        <div className="absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#c5a880]/6 sm:from-[#c5a880]/15 via-[#9f834d]/4 sm:via-[#9f834d]/10 to-transparent blur-[130px]" />
        <div className="hidden sm:block absolute left-1/3 bottom-0 h-[380px] w-[500px] rounded-full bg-gradient-to-t from-[#c5a880]/10 to-transparent blur-[110px]" />
        <div className="absolute top-0 inset-x-1/4 h-px bg-gradient-to-r from-transparent via-[#dfc79b]/30 to-transparent blur-[0.5px]" />
      </div>

      {/* Architectural Micro-dot Texture — Softened & Subtle */}
      <div 
        className="absolute inset-0 opacity-[0.04] sm:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(223, 199, 155, 0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 65% 70% at 80% 45%, black 15%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 70% at 80% 45%, black 15%, transparent 75%)',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column — Text & Authority */}
          <div className="col-span-12 flex flex-col justify-center md:col-span-7 text-left">
            
            {/* Medical Focus Pill — Compact, 1 Line on Mobile */}
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-sm backdrop-blur-sm w-fit border-0">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <Stethoscope className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold-light flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold-light">
                <span className="hidden sm:inline">Medicina Integrativa • Diagnóstico de Lipedema</span>
                <span className="sm:hidden">Lipedema & Saúde Metabólica</span>
              </span>
            </div>

            {/* Headline — Elegant Modern Typography */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold leading-[1.2] tracking-tight text-white mb-4 sm:mb-5">
              Não é falta de força de vontade.
              <span className="text-gold-light block font-normal mt-1 sm:mt-1.5">
                É uma condição médica com diagnóstico e tratamento.
              </span>
            </h1>

            {/* Mobile Doctor Portrait — Full Width to Standard Margins, Square & Low-Opacity Soft Gold Frame */}
            <div className="block md:hidden my-5 w-full">
              <div className="relative w-full">
                {/* Soft Whisper Golden Halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#dfc79b]/10 via-[#c5a880]/5 to-transparent rounded-[30px] blur-lg pointer-events-none" />

                {/* Outer Golden Luxury Container — Low Dimmed Opacity with Thicker Mobile Frame */}
                <div className="relative rounded-3xl p-3 sm:p-3.5 bg-gradient-to-tr from-[#dfc79b]/10 via-[#c5a880]/6 to-[#9f834d]/8 border border-[#dfc79b]/20 shadow-[0_15px_35px_rgba(0,0,0,0.85)] backdrop-blur-md">
                  {/* Inner Photo Canvas — Perfect Square Ratio Spanning Margin to Margin */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#0c0e12]">
                    <DoctorPhoto
                      src="/imagens/jacy imagem 1.png"
                      alt="Dr. Jacy Martins Junior — Médico UNIFACS"
                      className="h-full w-full object-cover object-top"
                    />

                    {/* Editorial Doctor Credential Banner */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/80 to-transparent flex items-end justify-between gap-2.5 z-10">
                      <div className="text-left min-w-0 pr-1">
                        <span className="block text-xs sm:text-sm font-bold text-white leading-tight truncate">
                          {DOCTOR_INFO.name}
                        </span>
                        <span className="block text-[11px] sm:text-xs text-gold-light font-medium mt-0.5 whitespace-nowrap">
                          Medicina Estética
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold text-navy-950 bg-gradient-to-r from-gold-light to-gold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-sm whitespace-nowrap flex-shrink-0">
                        {DOCTOR_INFO.crm}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-xl text-slate-300 leading-relaxed text-sm sm:text-[15px] font-normal mb-6 sm:mb-8">
              Acompanhamento médico especializado no diagnóstico preciso de <strong className="text-white font-medium">Lipedema</strong>, desinflamação celular profunda, alívio de dores nas pernas e <strong className="text-white font-medium">reprogramação metabólica</strong> com rigor científico, sem dietas punitivas ou culpas.
            </p>

            {/* Sleek Trust Points — Balanced 3-Column Micro-Cards (Never vertically stacked) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-xl mb-6 sm:mb-8 p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border-0">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-2.5 rounded-xl bg-white/[0.02]">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gold/15 text-gold-light mb-1.5 sm:mb-2 flex-shrink-0">
                  <HeartHandshake className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="block font-bold text-[11px] sm:text-xs text-white leading-tight">1h Exclusiva</span>
                <span className="block text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Escuta atenta</span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-2.5 rounded-xl bg-white/[0.02]">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gold/15 text-gold-light mb-1.5 sm:mb-2 flex-shrink-0">
                  <Activity className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="block font-bold text-[11px] sm:text-xs text-white leading-tight">Bioquímica</span>
                <span className="block text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Exames profundos</span>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-2 sm:p-2.5 rounded-xl bg-white/[0.02]">
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gold/15 text-gold-light mb-1.5 sm:mb-2 flex-shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="block font-bold text-[11px] sm:text-xs text-white leading-tight">SP & Brasil</span>
                <span className="block text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Presencial & Online</span>
              </div>
            </div>

            {/* Doctor Credentials Badge — Desktop & Tablet */}
            <div className="hidden sm:flex items-center gap-3 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-gold-light flex-shrink-0 border border-gold/20">
                <Award className="h-4.5 w-4.5 text-gold" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-white leading-tight">
                    {DOCTOR_INFO.name}
                  </span>
                  <span className="text-gold-light/60 text-xs">·</span>
                  <span className="font-mono text-xs font-semibold text-gold-light leading-tight">
                    {DOCTOR_INFO.crm}
                  </span>
                </div>
                <span className="text-xs text-slate-400 mt-0.5">
                  {DOCTOR_INFO.academic}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase tracking-wider py-3.5 px-7"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-all font-semibold border-0"
              >
                Conhecer Áreas de Atuação
              </a>
            </div>

          </div>

          {/* Right Column — Noble Framed Doctor Canvas (Tablet & Desktop Side-by-Side from md: 768px) */}
          <div className="hidden md:flex col-span-12 md:col-span-5 justify-center md:justify-end">
            <div className="relative w-full max-w-[420px] md:max-w-[440px] lg:max-w-[480px]">
              
              {/* Luminous Golden Back-Halo behind Doctor's Portrait Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#dfc79b]/15 via-[#c5a880]/10 to-transparent rounded-[44px] blur-2xl pointer-events-none" />

              {/* Outer Golden Luxury Container — Thicker Web Frame with Low Soft Opacity */}
              <div className="relative rounded-[32px] p-3.5 sm:p-4 lg:p-4.5 bg-gradient-to-tr from-[#dfc79b]/10 via-[#c5a880]/6 to-[#9f834d]/8 border border-[#dfc79b]/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
                
                {/* Inner Photo Canvas */}
                <div className="relative h-[460px] md:h-[500px] lg:h-[580px] w-full overflow-hidden rounded-2xl bg-[#0c0e12]">
                  <DoctorPhoto
                    src="/imagens/jacy imagem 1.png"
                    alt="Dr. Jacy Martins Junior — Médico UNIFACS"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Soft bottom vignette with integrated clean authority label */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/80 to-transparent flex items-end justify-between gap-3 z-10">
                    <div className="text-left min-w-0 pr-2">
                      <span className="block text-sm font-bold text-white leading-tight">
                        {DOCTOR_INFO.name}
                      </span>
                      <span className="block text-xs text-gold-light font-medium mt-0.5 whitespace-nowrap">
                        Medicina Estética
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase font-bold text-navy-950 bg-gradient-to-r from-gold-light to-gold px-2.5 py-1 rounded-md shadow-sm whitespace-nowrap flex-shrink-0">
                      {DOCTOR_INFO.crm}
                    </span>
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
