import { Route, Routes, useLocation, Navigate } from 'react-router';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { PracticeAreasPage } from '@/pages/PracticeAreasPage';
import { ProceduresPage } from '@/pages/ProceduresPage';
import { ContentsPage } from '@/pages/ContentsPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MessageSquare } from 'lucide-react';
import { DOCTOR_INFO } from '@/data/content';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 antialiased selection:bg-gold selection:text-[#0c0e12]">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo
      </a>
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content with Routing */}
      <main id="conteudo-principal" tabIndex={-1}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<Navigate to="/#sobre" replace />} />
          <Route path="/atuacao" element={<PracticeAreasPage />} />
          <Route path="/procedimentos" element={<ProceduresPage />} />
          <Route path="/conteudos" element={<ContentsPage />} />
          <Route path="/conteudos/:slug" element={<ArticlePage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button — Ergonomic, Mobile-Optimized Gold Pill */}
      <div className="fixed bottom-5 sm:bottom-6 right-3.5 sm:right-6 z-40 pb-[env(safe-area-inset-bottom)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-full sm:rounded-xl bg-gradient-to-r from-[#dfc79b] via-[#c5a880] to-[#b09062] hover:brightness-105 text-[#0c0e12] font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(197,168,128,0.35)] border-0 transition-all hover:scale-105 active:scale-95"
          title="Agendar Consulta via WhatsApp"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0c0e12] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#0c0e12]"></span>
          </span>
          <span className="hidden sm:inline">Agendar Consulta</span>
          <span className="sm:hidden font-extrabold tracking-wide">Agendar</span>
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
        </a>
      </div>
    </div>
  );
}
