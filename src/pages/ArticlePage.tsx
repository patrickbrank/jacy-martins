import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Clock, Tag, ArrowRight, Share2, MessageSquare } from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';
import { findArticleBySlug, PATIENT_ARTICLES } from '@/data/patientArticles';
import { DOCTOR_INFO } from '@/data/content';

export function ArticlePage() {
  const { slug } = useParams();
  const article = findArticleBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!article) {
    return (
      <section className="bg-[#f8f9fa] pt-36 pb-24 min-h-[60vh]">
        <div className="container-narrow text-center">
          <h1 className="heading-lg text-navy-900 mb-4 font-bold">Artigo não encontrado</h1>
          <p className="body-standard text-slate-600 mb-8">
            O artigo solicitado não foi localizado ou pode ter sido movido.
          </p>
          <Link to="/conteudos" className="btn-primary text-xs py-3 px-6">
            Voltar aos conteúdos
          </Link>
        </div>
      </section>
    );
  }

  const whatsappUrl = `https://wa.me/${DOCTOR_INFO.whatsapp}?text=${encodeURIComponent(`Olá Dr. Jacy Martins! Li o artigo "${article.title}" no seu site e gostaria de agendar uma consulta.`)}`;

  const relatedArticles = PATIENT_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <>
      <PageMeta
        title={`${article.title} — Dr. Jacy Martins Jr`}
        description={article.excerpt}
        path={`/conteudos/${article.slug}`}
        type="article"
      />

      <article className="bg-[#f8f9fa] pt-28 sm:pt-36 pb-20 text-left">
        <div className="container-narrow">
          
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              to="/conteudos"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-gold-dark transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar aos Conteúdos</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-gold/15 text-gold-dark border border-gold/30">
                <Tag className="h-3.5 w-3.5" />
                <span>{article.category}</span>
              </span>

              <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5 text-gold-dark" />
                <span>Leitura: {article.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-navy-900 leading-[1.2] tracking-tight mb-4">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author Credit */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3.5">
              <img
                src="/imagens/jacy imagem 1.png"
                alt="Dr. Jacy Martins Jr"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-gold/40 shadow-sm"
              />
              <div>
                <div className="text-sm font-bold text-navy-900">
                  {DOCTOR_INFO.name}
                </div>
                <div className="text-xs text-slate-500">
                  {DOCTOR_INFO.crm} • {DOCTOR_INFO.academic}
                </div>
              </div>
            </div>
          </header>

          {/* Article Content Blocks */}
          <div className="bg-white p-7 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 shadow-card space-y-6">
            {article.blocks.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={idx}
                    className="text-xl sm:text-2xl font-bold text-navy-900 pt-5 pb-2 leading-snug border-b border-slate-100"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'bullet') {
                return (
                  <div key={idx} className="flex items-start gap-3 pl-2 sm:pl-4">
                    <span className="h-2 w-2 rounded-full bg-gold-dark mt-2.5 flex-shrink-0" />
                    <p className="body-standard text-slate-700 leading-relaxed text-sm sm:text-base">
                      {block.text}
                    </p>
                  </div>
                );
              }

              return (
                <p
                  key={idx}
                  className="body-standard text-slate-700 leading-relaxed text-sm sm:text-base"
                >
                  {block.text}
                </p>
              );
            })}

            {/* Contextual Consultation Callout */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12151c] to-[#0c0e12] border border-gold/30 text-white shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-gold-light font-bold block mb-2">
                Acompanhamento Médico Especializado
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Identificou esses sinais ou sintomas no seu dia a dia?
              </h3>
              <p className="text-xs sm:text-sm text-graphite-300 leading-relaxed mb-6 font-normal">
                Agende uma consulta com o Dr. Jacy Martins para avaliação clínica individualizada no consultório em São Paulo ou via Telemedicina em todo o Brasil.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase py-3.5 px-6 inline-flex"
              >
                <span>Agendar Avaliação no WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-14 pt-10 border-t border-slate-200">
              <span className="eyebrow text-gold-dark font-bold block mb-4">
                Continue Lendo
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/conteudos/${rel.slug}`}
                    className="medical-card p-5 block group text-left border border-slate-200/90 hover:border-gold/60"
                  >
                    <span className="text-[10px] uppercase font-bold text-gold-dark block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-gold-dark transition-colors leading-snug mb-2">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">
                      {rel.readTime} de leitura
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </>
  );
}
