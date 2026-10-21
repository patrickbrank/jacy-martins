import { ArrowUp, Instagram, MapPin, Video, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { FOOTER_LINKS, DOCTOR_INFO } from '@/data/content';

export function Footer() {
  const location = useLocation();

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `/#${id}`);
        }
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(DOCTOR_INFO.defaultMessage)}`;

  return (
    <footer className="relative border-0 bg-gradient-to-b from-[#0c0e12] to-[#08090d] pt-16 pb-24 sm:py-16 lg:py-20 text-slate-300 overflow-hidden">
      {/* Subtle Golden Ambient Illumination */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-[450px] w-[450px] rounded-full bg-gold/10 blur-[130px]" />
        <div className="absolute -left-20 bottom-0 h-[350px] w-[350px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      {/* Micro-dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(223, 199, 155, 0.6) 1.2px, transparent 1.2px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 border-0">
          
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <Link
              to="/"
              onClick={(e) => handleFooterLinkClick(e, '/')}
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="Dr. Jacy Martins Jr — Medicina Integrativa"
            >
              <img
                src="/imagens/jacy logo 2.png"
                alt="Dr. Jacy Martins Jr"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="body-standard mt-5 max-w-sm text-graphite-300">
              Acompanhamento médico especializado no diagnóstico de Lipedema, desinflamação celular, modulação hormonal e saúde metabólica com rigor científico.
            </p>

            {/* Registros Profissionais */}
            <div className="mt-5 rounded-xl bg-white/[0.04] border-0 p-3.5 max-w-sm">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold-light font-bold block mb-1.5">
                Registro Profissional & Formação
              </span>
              <div className="space-y-1 font-mono text-xs text-graphite-200">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-white font-medium">{DOCTOR_INFO.crm}</span>
                  <span className="text-gold-light text-[11px]">Medicina Integrativa</span>
                </div>
                <div className="text-graphite-400 text-[11px] pt-1 border-0">
                  {DOCTOR_INFO.academic}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.06] border-0 text-gold-light hover:bg-gold hover:text-navy-950 transition-all duration-300 shadow-sm"
                aria-label="Instagram do Dr. Jacy Martins"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gold-light">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={(e) => handleFooterLinkClick(e, link.href)}
                      className="group inline-flex items-center gap-2 text-sm text-graphite-300 transition-colors hover:text-gold-light"
                    >
                      <span className="h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="col-span-12 lg:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gold-light">
              Atendimento Médico
            </h4>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-graphite-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Consultório em São Paulo</strong>
                  <span className="text-graphite-400 text-xs">Exame físico e palpação diagnóstica</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Video className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Telemedicina Nacional</strong>
                  <span className="text-graphite-400 text-xs">Receitas e exames digitais ICP-Brasil</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-xs py-3 px-6"
              >
                <span>Agendar Consulta</span>
              </a>
            </div>
          </div>
        </div>

        {/* CFM Compliance Notice */}
        <div className="pt-8 pb-4 text-xs text-graphite-500 leading-relaxed text-left max-w-4xl">
          <p>
            <strong className="text-graphite-400">Aviso de Ética Médica (CFM):</strong> Este site possui caráter exclusivamente informativo e de educação em saúde, em cumprimento às resoluções do Conselho Federal de Medicina (CFM). Não substitui a consulta médica presencial ou por telemedicina regulamentada. Responsável Técnico: Dr. Jacy Martins Junior — CRM-SP 263543.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-graphite-500 gap-4 pt-4 border-0">
          <div>
            © {new Date().getFullYear()} Dr. Jacy Martins Junior. Todos os direitos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-graphite-400 hover:text-gold-light transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5 text-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
