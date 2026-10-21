import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DOCTOR_INFO } from '../data/medicalContent';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-graphite-950/95 backdrop-blur-md border-b border-gold/20 py-3.5 shadow-2xl' 
          : 'bg-graphite-950/80 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo with Gold Accent */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#" className="flex items-center group">
              <img 
                src="/imagens/jacy logo 2.png" 
                alt="Dr. Jacy Martins Jr" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wide text-graphite-300">
            <a href="#lipedema" className="hover:text-gold-light transition-colors">
              Lipedema
            </a>
            <a href="#especialidades" className="hover:text-gold-light transition-colors">
              Especialidades
            </a>
            <a href="#como-funciona" className="hover:text-gold-light transition-colors">
              Como Funciona
            </a>
            <a href="#sobre" className="hover:text-gold-light transition-colors">
              Sobre o Médico
            </a>
            <a href="#faq" className="hover:text-gold-light transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Protected CTA Action - Luxury Gold Metallic Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all shadow-gold-sm active:scale-95 whitespace-nowrap"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-graphite-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-graphite-950/98 border-b border-gold/20 px-6 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm font-medium text-graphite-200">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-bold text-gold bg-gold/10 border border-gold/30 px-2.5 py-1 rounded-md">
                {DOCTOR_INFO.crm}
              </span>
              <span className="text-graphite-400 font-medium">São Paulo & Telemedicina</span>
            </div>

            <a 
              href="#lipedema" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-gold transition-colors"
            >
              O que é Lipedema
            </a>
            <a 
              href="#especialidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-gold transition-colors"
            >
              Áreas de Atuação Médica
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-gold transition-colors"
            >
              Como Funciona a Consulta
            </a>
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-gold transition-colors"
            >
              Sobre o Dr. Jacy Martins
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-gold transition-colors"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] text-graphite-950 block shadow-gold-sm"
              >
                Agendar Consulta no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
