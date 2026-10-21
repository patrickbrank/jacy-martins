import React, { useState } from 'react';
import { 
  MapPin, 
  Video, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Clock,
  Building2
} from 'lucide-react';
import { FAQS, DOCTOR_INFO } from '../data/medicalContent';

export default function ConsultationModalities() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getWhatsappForModality = (modality) => {
    const text = `Olá Dr. Jacy Martins! Gostaria de agendar uma consulta na modalidade: ${modality}.`;
    return `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f8f9fa] border-b border-graphite-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modalities Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-gold/40 text-xs font-bold text-gold-dark uppercase tracking-wider mb-3 shadow-soft">
            <Building2 className="w-3.5 h-3.5 text-gold-dark" />
            <span>Estrutura & Modalidades</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-graphite-950 tracking-tight leading-[1.15] mb-4">
            Escolha o formato de atendimento ideal para você
          </h2>
          <p className="text-sm sm:text-base text-graphite-600 leading-relaxed font-normal">
            Oferecemos o mesmo rigor técnico, tempo estendido de consulta e atenção médica minuciosa tanto presencialmente quanto por telemedicina.
          </p>
        </div>

        {/* 2 Modality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Card 1: Presencial SP */}
          <div className="bg-white p-7 sm:p-9 rounded-2xl border border-graphite-200 shadow-card hover:shadow-elevated hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold-dark border border-gold/30 flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                <MapPin className="w-6 h-6 text-gold-dark" />
              </div>

              <span className="text-[11px] font-bold text-gold-dark tracking-wider uppercase block mb-1">
                Consultório Privativo
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-graphite-950 mb-3">
                Atendimento Presencial em São Paulo
              </h3>

              <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed mb-6 font-normal">
                Estrutura completa para exame físico palpatório minucioso, estadiamento e laudo de Lipedema, em ambiente privativo e acolhedor na capital paulista.
              </p>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-graphite-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <span>Exame físico palpatório de membros inferiores e superiores</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <span>Ambiente privativo com 1 hora de dedicação exclusiva</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <span>Fácil acesso e comodidade na capital de São Paulo</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={getWhatsappForModality("Presencial em São Paulo")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all block shadow-gold-sm active:scale-95"
              >
                Agendar Consulta Presencial em SP
              </a>
            </div>
          </div>

          {/* Card 2: Telemedicina Brasil */}
          <div className="bg-white p-7 sm:p-9 rounded-2xl border border-graphite-200 shadow-card hover:shadow-elevated hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-graphite-100 text-graphite-800 border border-graphite-200 flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                <Video className="w-6 h-6 text-graphite-800" />
              </div>

              <span className="text-[11px] font-bold text-graphite-500 tracking-wider uppercase block mb-1">
                Todo o Brasil e Exterior
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-graphite-950 mb-3">
                Telemedicina & Consulta Online
              </h3>

              <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed mb-6 font-normal">
                Atendimento por videoconferência com o mesmo tempo, profundidade e rigor científico de uma consulta presencial. Ideal para pacientes de outros estados.
              </p>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-graphite-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <span>Prescrições digitais com assinatura ICP-Brasil válidas nacionalmente</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <span>Pedidos de exames laboratoriais aceitos em todo o Brasil</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark flex-shrink-0" />
                  <span>Sem deslocamento ou espera, com total privacidade e conforto</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={getWhatsappForModality("Telemedicina / Online")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider text-graphite-900 bg-graphite-100 hover:bg-graphite-900 hover:text-white transition-all block active:scale-95 border border-graphite-300"
              >
                Agendar Consulta Online
              </a>
            </div>
          </div>

        </div>

        {/* 2-Column FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          
          {/* Left Column: Concierge & Direct Assistance Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider block mb-1">
                Transparência Médica
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-graphite-950 mb-3">
                Dúvidas Frequentes
              </h3>
              <p className="text-sm text-graphite-600 leading-relaxed font-normal">
                Reunimos as principais informações sobre agendamento, reembolso de planos de saúde, exames e conduta clínica do Dr. Jacy Martins.
              </p>
            </div>

            {/* Concierge Assistance Card */}
            <div className="p-7 rounded-2xl bg-white border border-gold/30 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-gold/10 text-gold-dark border border-gold/30 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-gold-dark" />
              </div>
              <h4 className="font-serif text-lg font-bold text-graphite-950 mb-1.5">
                Precisa de orientação personalizada?
              </h4>
              <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed mb-6 font-normal">
                Nossa equipe de recepção está à disposição no WhatsApp para esclarecer valores, preparar o envio de exames anteriores ou agendar seu horário.
              </p>
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre a consulta com o Dr. Jacy Martins.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-graphite-950 hover:bg-graphite-900 text-white transition-all shadow-sm active:scale-95"
              >
                <span>Falar com a Recepção</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </a>
              <div className="flex items-center justify-center gap-1.5 text-xs text-graphite-500 mt-4">
                <Clock className="w-3.5 h-3.5 text-gold-dark" />
                <span>Atendimento de Segunda a Sexta-feira</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Animated Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-gold/60 shadow-card' 
                      : 'bg-white border-graphite-200 hover:border-gold/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className={`font-serif text-base sm:text-lg font-bold leading-snug ${
                      isOpen ? 'text-graphite-950' : 'text-graphite-800'
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 bg-gold/10 text-gold-dark' : 'text-graphite-400 bg-graphite-50'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-graphite-600 leading-relaxed font-normal border-t border-graphite-100 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
