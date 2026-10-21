import { useState } from 'react';
import { MapPin, Video, ChevronDown, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { LOCATIONS, FAQS, DOCTOR_INFO } from '@/data/content';
import { Reveal } from '@/components/Reveal';

interface LocationsProps {
  isPageHeader?: boolean;
}

export function Locations({ isPageHeader = false }: LocationsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const getWhatsappForLocation = (city: string) => {
    return `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(`Olá Dr. Jacy Martins! Gostaria de agendar uma consulta para: ${city}.`)}`;
  };

  return (
    <section
      id="contato"
      className={`relative bg-white border-b border-graphite-200/80 ${
        isPageHeader ? 'pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20' : 'py-20 sm:py-24 lg:py-28'
      }`}
    >
      <div className="container-wide">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <Reveal>
            <span className="eyebrow text-gold-dark font-bold block mb-2">
              Locais & Modalidades de Atendimento
            </span>
            {isPageHeader ? (
              <h1 className="heading-xl text-navy-900 leading-tight">
                Consultório em São Paulo e Telemedicina para Todo o Brasil
              </h1>
            ) : (
              <h2 className="heading-xl text-navy-900 leading-tight">
                Consultório em São Paulo e Telemedicina para Todo o Brasil
              </h2>
            )}
            <span className="block h-0.5 w-14 rounded-full bg-gold mt-3" />
            <p className="body-standard text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              Oferecemos o mesmo rigor técnico, tempo de consulta de 1 hora e atenção médica minuciosa tanto presencialmente quanto por telemedicina.
            </p>
          </Reveal>
        </div>

        {/* 2 Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {LOCATIONS.map((loc, idx) => {
            const isOnline = loc.city === 'Telemedicina';
            const Icon = isOnline ? Video : MapPin;

            return (
              <Reveal key={loc.city} delay={idx * 80}>
                <div className="medical-card p-5 sm:p-8 lg:p-9 flex flex-col justify-between h-full text-left border border-slate-200/90 hover:border-gold/60 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark border border-gold/30">
                        <Icon className="h-6 w-6 text-gold-dark" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-navy-900 bg-slate-100 px-3 py-1 rounded-md">
                        {loc.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-navy-900 mb-1 leading-snug">
                      {loc.clinic}
                    </h3>
                    <div className="text-xs font-semibold text-gold-dark mb-4">
                      {loc.address}
                    </div>

                    <p className="body-standard text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {loc.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#f8f9fa] border border-slate-200/80 mb-6 flex items-center gap-2 text-xs text-slate-700">
                      <Clock className="h-4 w-4 text-gold-dark flex-shrink-0" />
                      <span>{loc.scheduleInfo}</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href={getWhatsappForLocation(loc.city)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-xs py-3.5"
                    >
                      <span>Agendar em {loc.city}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            
            {/* Left Column: Direct Assistance */}
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <span className="eyebrow text-gold-dark font-bold block mb-2">
                  Transparência Médica
                </span>
                <h3 className="heading-lg text-navy-900 mb-4">
                  Perguntas Frequentes sobre a Consulta
                </h3>
                <p className="body-standard text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Reunimos as dúvidas mais comuns sobre valores, reembolso de convênio, envio de exames anteriores e conduta clínica do Dr. Jacy Martins.
                </p>

                <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-gold/30">
                  <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                    <MessageSquare className="h-4 w-4 text-gold-dark" />
                    <span>Dúvida específica?</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Nossa equipe de recepção está à disposição para orientar sobre seu caso antes da consulta.
                  </p>
                  <a
                    href={`https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre a consulta com o Dr. Jacy Martins.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full text-xs py-2.5 text-center justify-center"
                  >
                    <span>Tirar Dúvidas no WhatsApp</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Accordion */}
            <div className="col-span-12 lg:col-span-7 space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <Reveal key={idx} delay={idx * 40}>
                    <div
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-white border-gold/60 shadow-card'
                          : 'bg-[#fafafa] border-slate-200 hover:border-gold/30'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 bg-gold/15 text-gold-dark' : 'text-slate-400 bg-white'
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
