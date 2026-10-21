import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, ArrowUpRight } from 'lucide-react';
import { CURATED_POSTS, DOCTOR_INFO } from '../data/medicalContent';

export default function InstagramShowcase() {
  const [activePostIdx, setActivePostIdx] = useState(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const currentPost = CURATED_POSTS[activePostIdx];
  const totalSlides = currentPost.slides.length;

  const handlePrev = () => {
    setActiveSlideIdx((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setActiveSlideIdx((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handleSelectPost = (idx) => {
    setActivePostIdx(idx);
    setActiveSlideIdx(0);
  };

  return (
    <section id="publicacoes" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold text-brand-gold tracking-wider uppercase block mb-3">
              Educação Médica em Saúde
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#11151b] tracking-tight leading-snug mb-4">
              Conteúdo clínico e publicações oficiais
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Informação médica de qualidade para desmistificar o Lipedema, combater o efeito sanfona e entender os sinais do seu organismo.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={DOCTOR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-700 bg-white border border-gray-200 hover:border-brand-gold hover:text-brand-gold transition-colors shadow-soft"
            >
              <Instagram className="w-4 h-4 text-brand-gold" />
              <span>Acompanhar no Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Post Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CURATED_POSTS.map((post, idx) => {
            const isSelected = idx === activePostIdx;
            return (
              <button
                key={post.id}
                onClick={() => handleSelectPost(idx)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-brand-gold text-white border-brand-gold font-semibold shadow-soft'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-brand-gold/60 hover:text-brand-gold'
                }`}
              >
                {post.title}
              </button>
            );
          })}
        </div>

        {/* Active Carousel Viewer */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-elevated p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Slide Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-card">
                <img 
                  src={currentPost.slides[activeSlideIdx]} 
                  alt={`${currentPost.title} - Lâmina ${activeSlideIdx + 1}`} 
                  className="w-full h-full object-cover"
                />

                {/* Counter */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-mono text-white">
                  {activeSlideIdx + 1} de {totalSlides}
                </div>

                {/* Left/Right Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-gray-800 shadow-md flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
                  aria-label="Lâmina anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-gray-800 shadow-md flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
                  aria-label="Próxima lâmina"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5 mt-4">
                {currentPost.slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveSlideIdx(dotIdx)}
                    className={`h-1.5 rounded-full transition-all ${
                      dotIdx === activeSlideIdx
                        ? 'w-6 bg-brand-gold'
                        : 'w-1.5 bg-gray-200 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para lâmina ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Explanation & Context */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <span className="text-xs font-bold text-brand-gold tracking-wider uppercase mb-2">
                {currentPost.category}
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#11151b] leading-snug mb-4">
                {currentPost.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-8">
                {currentPost.description}
              </p>

              {/* Slide thumbnail navigation */}
              <div className="mb-8">
                <span className="text-xs text-gray-500 block mb-2 font-medium">
                  Lâminas da publicação:
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {currentPost.slides.map((img, thumbIdx) => (
                    <button
                      key={thumbIdx}
                      onClick={() => setActiveSlideIdx(thumbIdx)}
                      className={`relative w-12 h-15 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                        thumbIdx === activeSlideIdx
                          ? 'border-brand-gold ring-2 ring-brand-gold/40'
                          : 'border-gray-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Miniatura ${thumbIdx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-gray-500">
                  Deseja discutir este assunto em consulta médica?
                </span>

                <a
                  href={`https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(`Olá Dr. Jacy Martins! Vi a publicação sobre "${currentPost.title}" e gostaria de agendar uma consulta.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors shadow-sm"
                >
                  <span>Agendar Consulta</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
