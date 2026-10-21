import { useEffect, type ComponentType } from 'react';
import { X, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import type { PracticeArea } from '@/data/content';
import { DOCTOR_INFO } from '@/data/content';

interface PracticeAreaModalProps {
  area: PracticeArea | null;
  isOpen: boolean;
  onClose: () => void;
  icon?: ComponentType<{ className?: string }>;
}

export function PracticeAreaModal({
  area,
  isOpen,
  onClose,
  icon: IconComponent,
}: PracticeAreaModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !area) return null;

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(`Olá Dr. Jacy Martins! Gostaria de agendar uma consulta sobre: ${area.title}.`)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-area-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0c0e12]/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 fade-in duration-200"
      >
        {/* Header */}
        <div className="relative p-5 sm:p-6 md:p-7 border-b border-slate-100 bg-gradient-to-b from-[#f8f9fa] to-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              {IconComponent && (
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-light border border-gold/30 shadow-sm flex-shrink-0">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>
              )}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold-dark font-bold block mb-1">
                  Área de Atuação Clínica
                </span>
                <h2
                  id="practice-area-modal-title"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-navy-900 leading-snug"
                >
                  {area.title}
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 md:p-7 overflow-y-auto space-y-4 text-slate-700">
          <div className="text-xs sm:text-sm font-semibold text-navy-900 mb-2">
            {area.subtitle}
          </div>

          {area.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="body-standard text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-700"
            >
              {paragraph}
            </p>
          ))}

          {/* Keypoints list */}
          {area.keyPoints && area.keyPoints.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-navy-900 block mb-2.5">
                Pontos de Atenção Médica:
              </span>
              <ul className="space-y-2">
                {area.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-gold-dark flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contextual Assistance Note */}
          <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-gold/10 border border-gold/30 flex items-start gap-3">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-gold-dark flex-shrink-0 mt-0.5" />
            <p className="font-sans text-xs sm:text-[13px] text-navy-900 leading-relaxed">
              O diagnóstico médico correto e a avaliação bioquímica individualizada são fundamentais para o sucesso terapêutico. Caso apresente algum desses sintomas, agende sua consulta com o Dr. Jacy Martins.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 md:p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onClose}
            className="btn-outline text-xs py-2 px-5 justify-center min-h-10 order-2 sm:order-1"
          >
            Fechar
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-primary text-xs py-2 px-6 justify-center min-h-10 order-1 sm:order-2"
          >
            <span>Agendar Consulta</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
