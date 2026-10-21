import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  BatteryLow, 
  Brain, 
  Activity, 
  UtensilsCrossed, 
  Moon, 
  Flame, 
  Clock 
} from 'lucide-react';
import { INFLAMMATION_SIGNS, WEIGHT_LOSS_ERRORS, DOCTOR_INFO } from '../data/medicalContent';

export default function InflammationAndErrors() {
  const [activeTab, setActiveTab] = useState('inflamacao'); // 'inflamacao' or 'erros'

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent("Olá Dr. Jacy Martins! Gostaria de agendar uma consulta para investigar sintomas de inflamação e metabolismo.")}`;

  return (
    <section id="inflamacao" className="py-24 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold block mb-3">
            Medicina Investigativa Baseada em Evidências
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster-50 tracking-tight">
            Por Trás dos Sintomas Que Você Tolera
          </h2>
          <p className="mt-4 text-alabaster-300 text-sm sm:text-base leading-relaxed">
            Muitas vezes o cansaço, a dor e o peso travado não são cansaço normal da rotina: são avisos claros de inflamação crônica e descompasso hormonal.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-obsidian-950 border border-champagne-400/25 mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab('inflamacao')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'inflamacao'
                  ? 'bg-champagne-400 text-obsidian-950 shadow-gold-glow'
                  : 'text-alabaster-300 hover:text-alabaster-50'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>03 Sinais de Inflamação Silenciosa</span>
            </button>
            <button
              onClick={() => setActiveTab('erros')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'erros'
                  ? 'bg-champagne-400 text-obsidian-950 shadow-gold-glow'
                  : 'text-alabaster-300 hover:text-alabaster-50'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>04 Erros que Travam o Emagrecimento</span>
            </button>
          </div>
        </div>

        {/* Content Tab 1: 03 Sinais de Inflamação Silenciosa */}
        {activeTab === 'inflamacao' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {INFLAMMATION_SIGNS.map((sign, idx) => (
              <div 
                key={idx}
                className="bg-obsidian-850/90 border border-champagne-400/20 rounded-3xl p-8 relative flex flex-col justify-between group hover:border-champagne-400/50 hover:bg-obsidian-800 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-champagne-400/60 group-hover:text-champagne-400 transition-colors">
                      #{sign.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-champagne-400/10 text-champagne-300 border border-champagne-400/20">
                      {sign.accent}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-alabaster-50 mb-3 group-hover:text-champagne-200 transition-colors leading-snug">
                    {sign.title}
                  </h3>

                  <p className="text-sm text-alabaster-300/80 leading-relaxed">
                    {sign.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-obsidian-750 flex items-center gap-2 text-xs text-champagne-400 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Identificável em exames metabólicos</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content Tab 2: 04 Erros Que Travam Seu Emagrecimento */}
        {activeTab === 'erros' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {WEIGHT_LOSS_ERRORS.map((err, idx) => (
              <div 
                key={idx}
                className="bg-obsidian-850/90 border border-champagne-400/20 rounded-3xl p-7 flex flex-col justify-between hover:border-champagne-400/50 hover:bg-obsidian-800 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-champagne-400/15 border border-champagne-400/30 flex items-center justify-center font-display font-bold text-champagne-300 mb-5 group-hover:scale-110 transition-transform">
                    {err.num}
                  </div>

                  <h3 className="font-display text-lg font-bold text-alabaster-50 mb-2 leading-snug">
                    {err.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-alabaster-300/80 leading-relaxed mb-4">
                    {err.takeaway}
                  </p>
                </div>

                <div className="pt-4 border-t border-obsidian-750">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-champagne-400 mb-1">
                    Solução Médica:
                  </div>
                  <p className="text-xs text-alabaster-200 font-light">
                    {err.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-obsidian-950 via-obsidian-850 to-obsidian-950 border border-champagne-400/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-alabaster-50">
              "Emagrecimento de verdade é Ciência + Individualidade."
            </h4>
            <p className="text-xs sm:text-sm text-alabaster-300 mt-1 max-w-xl">
              Não adianta copiar a dieta do colega ou cortar carboidratos a zero. Antes de começar qualquer plano, mapeie seus hormônios com o Dr. Jacy Martins.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-obsidian-950 bg-champagne-400 hover:bg-champagne-300 transition-colors flex items-center gap-2 shadow-gold-glow"
          >
            <span>Consultar Mapeamento Hormonal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
