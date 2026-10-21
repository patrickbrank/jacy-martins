import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { NAV_ITEMS, DOCTOR_INFO } from '@/data/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['inicio', 'atuacao', 'procedimentos', 'sobre', 'conteudos', 'contato'];

    const onScrollSpy = () => {
      const scrollPos = window.scrollY + 140;

      if (window.scrollY < 80) {
        setActiveSection('inicio');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScrollSpy, { passive: true });
    onScrollSpy();
    return () => window.removeEventListener('scroll', onScrollSpy);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; sectionId?: string }) => {
    setMenuOpen(false);
    if (item.href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.sectionId && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `/#${item.sectionId}`);
      }
    }
  };

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 ${
          scrolled
            ? 'bg-[#0c0e12]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_14px_40px_rgba(0,0,0,0.95)]'
            : 'bg-[#0c0e12]/70 backdrop-blur-sm py-3 sm:py-4'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between gap-6">
            
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => handleLinkClick(e, { href: '/' })}
              className="flex items-center group transition-opacity hover:opacity-90"
              aria-label="Dr. Jacy Martins Jr — Medicina Integrativa & Lipedema"
            >
              <img
                src="/imagens/jacy logo 2.png"
                alt="Dr. Jacy Martins Jr"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links — Crisp off-white & champagne gold */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
              {NAV_ITEMS.map((item) => {
                const isHomeSection = location.pathname === '/' && item.sectionId;
                const isActive = isHomeSection
                  ? activeSection === item.sectionId
                  : location.pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`transition-all py-1 relative ${
                      isActive ? 'text-gold-light font-bold' : 'text-slate-200/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-light to-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-graphite-950 transition-all shadow-gold-sm active:scale-95 whitespace-nowrap"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Actions: Direct Schedule Pill + High-Contrast Tactile Menu Pill */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] text-[#0c0e12] font-bold text-[11px] uppercase tracking-wider shadow-sm active:scale-95"
                title="Agendar Consulta via WhatsApp"
              >
                <span>Agendar</span>
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border-0 bg-white/[0.08] hover:bg-white/[0.14] text-white transition-all shadow-sm active:scale-95 cursor-pointer"
                aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-gold-light">Fechar</span>
                    <X className="w-4 h-4 text-gold-light" />
                  </>
                ) : (
                  <>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white">Menu</span>
                    <div className="flex flex-col gap-[3px] w-4 justify-center items-center">
                      <span className="w-4 h-[2px] bg-gold-light rounded-full" />
                      <span className="w-3 h-[2px] bg-white rounded-full self-end" />
                      <span className="w-4 h-[2px] bg-gold-light rounded-full" />
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer via Portal — Escapes header backdrop-filter containing block */}
      {menuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-[100] h-[100dvh] w-screen bg-[#0c0e12] px-5 sm:px-6 py-5 overflow-y-auto animate-fadeIn flex flex-col justify-between pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <div>
              {/* Top Bar with Logo & Close Pill — Borderless Clean Aesthetics */}
              <div className="flex items-center justify-between pb-4 border-0">
                <Link
                  to="/"
                  onClick={(e) => handleLinkClick(e, { href: '/' })}
                  className="flex items-center"
                >
                  <img
                    src="/imagens/jacy logo 2.png"
                    alt="Dr. Jacy Martins Jr"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-0 bg-white/[0.08] hover:bg-white/[0.14] text-gold-light hover:text-white transition-colors cursor-pointer active:scale-95"
                  aria-label="Fechar menu"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider">Fechar</span>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Doctor Credentials Sub-bar — Borderless Soft Surface */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.04] border-0 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span className="font-mono font-bold text-gold-light">
                    {DOCTOR_INFO.crm}
                  </span>
                </div>
                <span className="text-slate-300 font-medium text-[11px]">São Paulo & Telemedicina</span>
              </div>

              {/* Primary Navigation Links — Clean Editorial Selection (No brackets, no harsh borders) */}
              <nav className="mt-5 flex flex-col space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  const isHomeSection = location.pathname === '/' && item.sectionId;
                  const isActive = isHomeSection
                    ? activeSection === item.sectionId
                    : location.pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={`flex items-center justify-between py-3 px-3.5 rounded-xl transition-all text-[15px] border-0 active:bg-white/[0.08] ${
                        isActive
                          ? 'bg-white/[0.06] text-gold-light font-bold'
                          : 'text-slate-200/90 hover:text-white hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-all flex-shrink-0 ${
                            isActive
                              ? 'bg-gold shadow-[0_0_8px_rgba(223,199,155,0.9)]'
                              : 'bg-transparent'
                          }`}
                        />
                        <span className={isActive ? 'text-white' : ''}>{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isActive ? 'text-gold-light translate-x-0.5' : 'text-slate-600'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Specialty Highlights — Borderless */}
              <div className="mt-6 pt-5 border-0">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                  Foco Clínico & Tratamentos
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/#atuacao"
                    onClick={(e) => handleLinkClick(e, { href: '/#atuacao', sectionId: 'atuacao' })}
                    className="p-2.5 rounded-lg bg-white/[0.04] border-0 hover:bg-white/[0.08] text-left transition-colors"
                  >
                    <span className="block text-xs font-bold text-white leading-tight">Lipedema</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">Diagnóstico & Dor</span>
                  </Link>
                  <Link
                    to="/#procedimentos"
                    onClick={(e) => handleLinkClick(e, { href: '/#procedimentos', sectionId: 'procedimentos' })}
                    className="p-2.5 rounded-lg bg-white/[0.04] border-0 hover:bg-white/[0.08] text-left transition-colors"
                  >
                    <span className="block text-xs font-bold text-white leading-tight">Protocolos</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">Exames & Conduta</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Actions — Borderless */}
            <div className="pt-5 border-0 mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full py-3.5 text-center justify-center text-xs font-bold uppercase tracking-wider shadow-gold"
              >
                <span>Agendar Consulta no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2.5 font-medium">
                Consultório em São Paulo • Telemedicina para todo o Brasil
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
