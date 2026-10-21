import React, { useState } from 'react';
import { 
  HeartPulse, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  RotateCcw, 
  Send, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { TRIAGE_QUESTIONS, DOCTOR_INFO } from '../data/medicalContent';

export default function InteractiveTriage({ isModal = false, onClose }) {
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleToggle = (id) => {
    setAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    setAnswers({});
    setCompleted(false);
  };

  // Calculate score
  const selectedQuestions = TRIAGE_QUESTIONS.filter(q => answers[q.id]);
  const totalScore = selectedQuestions.reduce((acc, curr) => acc + curr.points, 0);

  const lipedemaScore = selectedQuestions.filter(q => q.category === 'lipedema').reduce((acc, curr) => acc + curr.points, 0);
  const inflamacaoScore = selectedQuestions.filter(q => q.category === 'inflamacao').reduce((acc, curr) => acc + curr.points, 0);
  const metabolismoScore = selectedQuestions.filter(q => q.category === 'metabolismo').reduce((acc, curr) => acc + curr.points, 0);

  let resultLevel = 'baixo';
  let resultTitle = 'Baixo Alerta de Sinais Inflamatórios';
  let resultDesc = 'Seus sintomas atuais não indicam forte suspeita clínica de Lipedema ativo ou inflamação de alto grau. Ainda assim, um check-up metabólico preventivo é sempre indicado para longevidade e prevenção.';
  let badgeColor = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';

  if (totalScore >= 8 || lipedemaScore >= 6) {
    resultLevel = 'alto';
    resultTitle = 'Alta Compatibilidade com Sinais de Lipedema & Inflamação';
    resultDesc = 'Você assinalou múltiplos critérios clássicos de Lipedema (dor ao toque, peso ortostático, gordura resistente a dieta) e inflamação crônica. Essa condição NÃO é falta de esforço e requer diagnóstico médico especializado para estagnar a evolução e eliminar a dor.';
    badgeColor = 'bg-rose-500/10 text-rose-300 border-rose-500/30';
  } else if (totalScore >= 4) {
    resultLevel = 'moderado';
    resultTitle = 'Alerta Moderado de Inflamação & Metabolismo Desregulado';
    resultDesc = 'Você apresenta sinais consistentes de inflamação de baixo grau e instabilidade metabólica (como cansaço matinal, retenção de líquidos ou dificuldade de queima calórica). Uma investigação laboratorial minuciosa é fortemente recomendada.';
    badgeColor = 'bg-amber-500/10 text-amber-300 border-amber-500/30';
  }

  // Pre-fill WhatsApp text
  const symptomsText = selectedQuestions.map(q => `• ${q.question}`).join('\n');
  const whatsappReport = `Olá Dr. Jacy Martins! Realizei a autoavaliação no site e obtive o resultado: *${resultTitle}* (Pontuação: ${totalScore}).\n\nMeus sintomas assinalados:\n${symptomsText || '• Nenhum sintoma marcado'}\n\nGostaria de agendar uma consulta para avaliação médica e conduta diagnóstica.`;

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(whatsappReport)}`;

  return (
    <div id="autoavaliacao" className={`w-full ${isModal ? 'p-2 sm:p-6' : 'py-20 bg-obsidian-950 relative'}`}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/30 text-champagne-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Ferramenta Clínica de Triagem</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-alabaster-50 tracking-tight">
            Autoavaliação de Sinais Clínicos & Lipedema
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-alabaster-300 max-w-xl mx-auto">
            Selecione as queixas que você sente com frequência. O algoritmo cruzará seus relatos com os critérios diagnósticos das publicações do Dr. Jacy Martins.
          </p>
        </div>

        {/* Questionnaire Box */}
        <div className="bg-obsidian-900 border border-champagne-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="space-y-3 mb-8">
            {TRIAGE_QUESTIONS.map((item, index) => {
              const isChecked = !!answers[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => handleToggle(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isChecked
                      ? 'bg-champagne-400/15 border-champagne-400 text-alabaster-50 shadow-sm'
                      : 'bg-obsidian-850/60 border-obsidian-750 text-alabaster-200 hover:border-champagne-400/30 hover:bg-obsidian-800'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs text-champagne-400/70 font-semibold mt-0.5">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-medium leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isChecked
                      ? 'bg-champagne-400 text-obsidian-950 font-bold'
                      : 'border border-champagne-400/30 bg-obsidian-950'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action to show results */}
          <div className="pt-6 border-t border-obsidian-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-alabaster-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-champagne-400" />
              <span>{selectedQuestions.length} de {TRIAGE_QUESTIONS.length} sintomas selecionados</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {selectedQuestions.length > 0 && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold uppercase text-alabaster-400 hover:text-alabaster-100 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar</span>
                </button>
              )}

              <button
                onClick={() => setCompleted(true)}
                className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-obsidian-950 bg-gradient-to-r from-champagne-300 to-champagne-400 hover:brightness-110 shadow-gold-glow transition-all"
              >
                Calcular Meu Perfil Clínico
              </button>
            </div>
          </div>

          {/* Results Display Box */}
          {completed && (
            <div className="mt-8 pt-8 border-t-2 border-champagne-400/30 animate-fadeIn">
              <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-950 border border-champagne-400/40 relative">
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${badgeColor}`}>
                    {resultLevel === 'alto' ? 'Atenção Especializada Recomendada' : resultLevel === 'moderado' ? 'Alerta Metabólico' : 'Baixo Risco Agudo'}
                  </span>
                  <span className="text-xs font-mono text-champagne-300">
                    Pontuação: {totalScore} pts
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-alabaster-50 mb-3">
                  {resultTitle}
                </h3>

                <p className="text-sm text-alabaster-200/90 leading-relaxed mb-6 font-light">
                  {resultDesc}
                </p>

                {/* Score breakdown metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-obsidian-900 border border-obsidian-800 text-center">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-alabaster-400">Lipedema</div>
                    <div className="font-bold text-base text-champagne-300">{lipedemaScore} pts</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-alabaster-400">Inflamação</div>
                    <div className="font-bold text-base text-champagne-300">{inflamacaoScore} pts</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-alabaster-400">Metabolismo</div>
                    <div className="font-bold text-base text-champagne-300">{metabolismoScore} pts</div>
                  </div>
                </div>

                {/* Direct Doctor WhatsApp Handoff */}
                <div className="bg-gradient-to-br from-spruce-900/40 to-obsidian-900 p-5 rounded-xl border border-champagne-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="text-xs font-bold uppercase text-champagne-300 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Encaminhar Resumo para a Equipe Médica</span>
                    </div>
                    <p className="text-xs text-alabaster-300">
                      Envie suas respostas diretamente para o WhatsApp do Dr. Jacy Martins para agilizar sua consulta.
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-obsidian-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Resultado no WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
