import { useState } from 'react';
import { 
  HeartPulse, 
  Flame, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Dna,
  Zap,
  Layers,
  Scale,
  Info
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { DOCTOR_INFO } from '@/data/content';

export function ClinicalDiagrams() {
  const [activeTab, setActiveTab] = useState<'lipedema' | 'inflamacao' | 'metabolismo'>('lipedema');
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <section className="py-20 sm:py-24 bg-[#f8f9fa] border-b border-slate-200/80 relative">
      <div className="container-wide">
        
        {/* Header — Proportional & Refined */}
        <div className="max-w-3xl mb-12 text-left">
          <Reveal>
            <span className="eyebrow text-gold-dark font-bold block mb-2">
              Entendimento Biológico
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-navy-900 leading-tight tracking-tight">
              A Ciência por Trás dos Sintomas que Você Sente
            </h2>
            <span className="block h-0.5 w-14 rounded-full bg-gold mt-3" />
            <p className="body-standard text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              Compreender a fisiologia do corpo é o primeiro passo para um tratamento eficaz. Veja como o Lipedema, a inflamação celular e os hormônios atuam no seu organismo.
            </p>
          </Reveal>
        </div>

        {/* Tab Selectors — Full edge-to-edge scroll on mobile without premature margin clipping */}
        <div className="-mx-5 sm:mx-0 px-5 sm:px-0 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('lipedema')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border cursor-pointer flex-shrink-0 ${
              activeTab === 'lipedema'
                ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-gold/60 hover:text-gold-dark'
            }`}
          >
            <Layers className="h-4 w-4 text-gold" />
            <span>1. Matriz Clínica: Lipedema vs Obesidade</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('inflamacao')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border cursor-pointer flex-shrink-0 ${
              activeTab === 'inflamacao'
                ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-gold/60 hover:text-gold-dark'
            }`}
          >
            <Activity className="h-4 w-4 text-gold" />
            <span>2. Os 03 Sinais de Inflamação Silenciosa</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('metabolismo')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border cursor-pointer flex-shrink-0 ${
              activeTab === 'metabolismo'
                ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-gold/60 hover:text-gold-dark'
            }`}
          >
            <Flame className="h-4 w-4 text-gold" />
            <span>3. Os 04 Bloqueios do Metabolismo</span>
          </button>

          {/* End spacer so the last tab button can be scrolled completely to the edge with breathing space */}
          <div className="w-5 flex-shrink-0 sm:hidden" aria-hidden="true" />
        </div>

        {/* TAB 1: Matriz Clínica Editorial (Zero Caixas Cinzas Empilhadas) */}
        {activeTab === 'lipedema' && (
          <Reveal>
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 lg:p-11 shadow-card text-left">
              
              <div className="max-w-2xl mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-dark block mb-2">
                  Diferenciação Diagnóstica
                </span>
                <h3 className="text-2xl font-bold text-navy-900 leading-tight mb-2">
                  Lipedema não é gordura comum. É uma condição inflamatória e dolorosa.
                </h3>
                <p className="body-standard text-slate-600 text-sm leading-relaxed">
                  Entenda ponto a ponto as diferenças biológicas que explicam por que o Lipedema não responde a dietas de restrição calórica e exige conduta médica especializada:
                </p>
              </div>

              {/* Clean Editorial Table (No nested boxes) */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft mb-10">
                {/* Desktop Header */}
                <div className="hidden sm:grid grid-cols-12 bg-[#0c0e12] text-white p-4 sm:p-5 text-left border-0 items-center">
                  <div className="col-span-3 text-xs font-mono uppercase font-bold tracking-wider text-slate-400">
                    Critério Clínico
                  </div>
                  <div className="col-span-4 text-xs sm:text-sm font-bold text-slate-300 flex items-center gap-2">
                    <Scale className="h-4 w-4 text-slate-400" />
                    <span>Na Obesidade Comum</span>
                  </div>
                  <div className="col-span-5 text-xs sm:text-sm font-bold text-gold-light flex items-center gap-2">
                    <HeartPulse className="h-4 w-4 text-gold flex-shrink-0" />
                    <span>No Lipedema (CID-11 EF02)</span>
                  </div>
                </div>

                {/* Mobile Header */}
                <div className="sm:hidden bg-[#0c0e12] text-white p-3.5 text-left border-0 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-gold-light">
                    Critérios de Diferenciação Clínica
                  </span>
                  <HeartPulse className="h-4 w-4 text-gold" />
                </div>

                {/* Rows — Clean, Breathable, Full-Width on Mobile */}
                <div className="divide-y divide-slate-100 text-xs sm:text-sm text-left">
                  {/* Row 1 */}
                  <div className="grid grid-cols-12 p-4 sm:p-5 items-start sm:items-center hover:bg-slate-50/70 transition-colors gap-2.5 sm:gap-0">
                    <div className="col-span-12 sm:col-span-3 font-bold text-navy-900 text-sm">
                      Sensibilidade & Dor
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-600 sm:pr-4">
                      <span className="sm:hidden text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Na Obesidade Comum:</span>
                      <span>Indolor à palpação ou à pressão cotidiana.</span>
                    </div>
                    <div className="col-span-12 sm:col-span-5 text-navy-900 font-medium flex items-start gap-1.5 pt-1 sm:pt-0">
                      <CheckCircle2 className="h-4 w-4 text-gold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="sm:hidden text-[10px] uppercase font-bold text-gold-dark block mb-0.5">No Lipedema (CID-11 EF02):</span>
                        <span>Dói ao toque e à palpação; sensação de peso e queimação.</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-12 p-4 sm:p-5 items-start sm:items-center hover:bg-slate-50/70 transition-colors gap-2.5 sm:gap-0">
                    <div className="col-span-12 sm:col-span-3 font-bold text-navy-900 text-sm">
                      Resposta a Dietas
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-600 sm:pr-4">
                      <span className="sm:hidden text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Na Obesidade Comum:</span>
                      <span>Reduz de forma homogênea com déficit calórico.</span>
                    </div>
                    <div className="col-span-12 sm:col-span-5 text-navy-900 font-medium flex items-start gap-1.5 pt-1 sm:pt-0">
                      <CheckCircle2 className="h-4 w-4 text-gold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="sm:hidden text-[10px] uppercase font-bold text-gold-dark block mb-0.5">No Lipedema (CID-11 EF02):</span>
                        <span>Resistente a dietas de restrição calórica e treinos.</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-12 p-4 sm:p-5 items-start sm:items-center hover:bg-slate-50/70 transition-colors gap-2.5 sm:gap-0">
                    <div className="col-span-12 sm:col-span-3 font-bold text-navy-900 text-sm">
                      Distribuição Corporal
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-600 sm:pr-4">
                      <span className="sm:hidden text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Na Obesidade Comum:</span>
                      <span>Generalizada e uniforme pelo corpo todo.</span>
                    </div>
                    <div className="col-span-12 sm:col-span-5 text-navy-900 font-medium flex items-start gap-1.5 pt-1 sm:pt-0">
                      <CheckCircle2 className="h-4 w-4 text-gold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="sm:hidden text-[10px] uppercase font-bold text-gold-dark block mb-0.5">No Lipedema (CID-11 EF02):</span>
                        <span>Desproporcional nos membros inferiores e braços.</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-12 p-4 sm:p-5 items-start sm:items-center hover:bg-slate-50/70 transition-colors gap-2.5 sm:gap-0">
                    <div className="col-span-12 sm:col-span-3 font-bold text-navy-900 text-sm">
                      Sinal do Tornozelo
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-600 sm:pr-4">
                      <span className="sm:hidden text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Na Obesidade Comum:</span>
                      <span>Sem demarcação; envolve pernas e pés continuamente.</span>
                    </div>
                    <div className="col-span-12 sm:col-span-5 text-navy-900 font-medium flex items-start gap-1.5 pt-1 sm:pt-0">
                      <CheckCircle2 className="h-4 w-4 text-gold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="sm:hidden text-[10px] uppercase font-bold text-gold-dark block mb-0.5">No Lipedema (CID-11 EF02):</span>
                        <span>Sinal do manguito clássico: corte abrupto poupando os pés.</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid grid-cols-12 p-4 sm:p-5 items-start sm:items-center hover:bg-slate-50/70 transition-colors gap-2.5 sm:gap-0">
                    <div className="col-span-12 sm:col-span-3 font-bold text-navy-900 text-sm">
                      Fragilidade Capilar
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-slate-600 sm:pr-4">
                      <span className="sm:hidden text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Na Obesidade Comum:</span>
                      <span>Hematomas apenas com traumas evidentes.</span>
                    </div>
                    <div className="col-span-12 sm:col-span-5 text-navy-900 font-medium flex items-start gap-1.5 pt-1 sm:pt-0">
                      <CheckCircle2 className="h-4 w-4 text-gold-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="sm:hidden text-[10px] uppercase font-bold text-gold-dark block mb-0.5">No Lipedema (CID-11 EF02):</span>
                        <span>Manchas roxas frequentes mesmo sem bater.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical Staging Progression (Graus I a IV) */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-4 w-4 text-gold-dark" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-navy-900">
                    Estadiamento Clínico do Lipedema (Avaliação Palpatória)
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200 text-left">
                    <span className="font-mono text-xs font-bold text-gold-dark block mb-1">GRAU I</span>
                    <strong className="text-xs sm:text-sm font-bold text-navy-900 block mb-1">Pele Lisa</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">Tecido subcutâneo espessado com nódulos finos ("sensação de areia").</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200 text-left">
                    <span className="font-mono text-xs font-bold text-gold-dark block mb-1">GRAU II</span>
                    <strong className="text-xs sm:text-sm font-bold text-navy-900 block mb-1">Casca de Laranja</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">Pele irregular com nódulos maiores bem palpáveis ("tamanho de feijão").</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200 text-left">
                    <span className="font-mono text-xs font-bold text-gold-dark block mb-1">GRAU III</span>
                    <strong className="text-xs sm:text-sm font-bold text-navy-900 block mb-1">Massas Lobulares</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">Grandes dobras lobulares de gordura que causam atrito ao caminhar.</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#f8f9fa] border border-slate-200 text-left">
                    <span className="font-mono text-xs font-bold text-gold-dark block mb-1">GRAU IV</span>
                    <strong className="text-xs sm:text-sm font-bold text-navy-900 block mb-1">Lipolinfedema</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">Associação com insuficiência linfática secundária e edema crônico.</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0c0e12] text-white">
                  <div>
                    <strong className="block text-sm font-bold text-white mb-0.5">Exame Palpatório no Consultório em São Paulo</strong>
                    <span className="text-xs text-slate-400">Classificação precisa de estadiamento e laudo para tratamento.</span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
                  >
                    <span>Agendar Avaliação de Lipedema</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          </Reveal>
        )}

        {/* TAB 2: Os 03 Sinais de Inflamação Silenciosa */}
        {activeTab === 'inflamacao' && (
          <Reveal>
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 lg:p-11 shadow-card text-left">
              <div className="max-w-2xl mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-dark block mb-2">
                  Bioquímica Médica
                </span>
                <h3 className="text-2xl font-bold text-navy-900 leading-tight mb-3">
                  Como a inflamação subclínica afeta suas células e sua energia
                </h3>
                <p className="body-standard text-slate-600 text-sm leading-relaxed">
                  A inflamação crônica de baixo grau não produz sintomas óbvios no início, mas corrói sua vitalidade mitocondrial e desregula os eixos hormonais.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-gold-dark">01</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                        <Zap className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-navy-900 mb-2">Cansaço Matinal Crônico</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Você dorme 8 horas e acorda exausta. A inflamação bloqueia a cadeia respiratória das mitocôndrias, impedindo a conversão de glicose em ATP (energia celular).
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-gold-dark">
                    Marcador: PCR-us e Ferritina elevada
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-gold-dark">02</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                        <Activity className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-navy-900 mb-2">Dores Articulares Difusas</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Desconforto nos joelhos, dedos ou lombar sem histórico de lesão. Citocinas pró-inflamatórias (IL-6 e TNF-α) sensibilizam receptores nervosos no tecido conjuntivo.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-gold-dark">
                    Marcador: VHS e Ácido Úrico
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-gold-dark">03</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                        <Dna className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-navy-900 mb-2">Névoa Mental & Humor</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Dificuldade de concentração e oscilações emocionais repentinas. A neuroinflamação afeta a síntese de serotonina e dopamina no sistema nervoso central.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-gold-dark">
                    Marcador: Homocisteína e Cortisol
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0c0e12] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs sm:text-sm text-slate-300">
                  Identificou esses sinais? Solicite o painel laboratorial aprofundado do Dr. Jacy Martins.
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 px-6 whitespace-nowrap"
                >
                  <span>Mapear Sinais no WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* TAB 3: Os 04 Bloqueios do Metabolismo */}
        {activeTab === 'metabolismo' && (
          <Reveal>
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 lg:p-11 shadow-card text-left">
              <div className="max-w-2xl mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-dark block mb-2">
                  Ciência do Emagrecimento
                </span>
                <h3 className="text-2xl font-bold text-navy-900 leading-tight mb-3">
                  Por que "fechar a boca" não resolve quando os hormônios estão travados?
                </h3>
                <p className="body-standard text-slate-600 text-sm leading-relaxed">
                  Emagrecimento de verdade é Ciência e Individualidade. Conheça os 4 eixos hormonais que precisam estar alinhados para o corpo queimar gordura de forma definitiva:
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fa] border border-slate-200">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-gold/15 text-gold-dark mb-2.5">
                    Eixo 1 • Insulina
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-900 mb-1 leading-snug">A Trava da Lipólise</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Com a insulina alta no sangue, a enzima que quebra gordura (lipase) é inibida quimicamente.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fa] border border-slate-200">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-gold/15 text-gold-dark mb-2.5">
                    Eixo 2 • Cortisol
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-900 mb-1 leading-snug">Gordura Visceral</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    O estresse crônico mantém o cortisol elevado, estimulando o depósito de gordura profunda no abdômen.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fa] border border-slate-200">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-gold/15 text-gold-dark mb-2.5">
                    Eixo 3 • Tireoide
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-900 mb-1 leading-snug">Metabolismo Lento</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dietas de fome reduzem a conversão de T4 em T3 ativo, diminuindo o gasto calórico de sobrevivência.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fa] border border-slate-200">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-gold/15 text-gold-dark mb-2.5">
                    Eixo 4 • Sono
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-900 mb-1 leading-snug">Grelina & Leptina</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dormir mal desregula a saciedade, gerando compulsão involuntária e resistência insulínica.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-900 to-[#181d26] text-white flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Reprograme sua bioquímica com acompanhamento médico
                  </h4>
                  <p className="text-xs text-slate-300">
                    Tratamento individualizado em São Paulo ou Telemedicina em todo o Brasil.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
                >
                  <span>Agendar Consulta Metabólica</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
