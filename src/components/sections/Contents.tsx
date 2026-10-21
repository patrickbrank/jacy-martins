import { useState } from 'react';
import { ArrowRight, Clock, BookOpen, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { Reveal } from '@/components/Reveal';
import { ArrowLink } from '@/components/ArrowLink';
import { PATIENT_ARTICLES, PatientArticle } from '@/data/patientArticles';

interface ContentsProps {
  showExploreLink?: boolean;
  isPageHeader?: boolean;
}

export function Contents({ showExploreLink = false, isPageHeader = false }: ContentsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Lipedema & Saúde Feminina',
    'Medicina Investigativa',
    'Metabolismo & Emagrecimento',
    'Terapias Hormonais & Longevidade',
    'Ciência Metabólica',
  ];

  const filteredArticles = selectedCategory === 'all'
    ? PATIENT_ARTICLES
    : PATIENT_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <section
      id="conteudos"
      className={`relative bg-[#f8f9fa] border-b border-graphite-200/80 ${
        isPageHeader ? 'pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20' : 'py-20 sm:py-24 lg:py-28'
      }`}
    >
      <div className="container-wide">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-end pb-4 sm:pb-6 text-left">
          <Reveal className="col-span-12 lg:col-span-8">
            <span className="eyebrow text-gold-dark font-bold block mb-2">
              Educação Médica em Saúde
            </span>
            {isPageHeader ? (
              <h1 className="heading-xl text-navy-900 leading-tight">
                Artigos Clínicos e Conteúdos para Pacientes
              </h1>
            ) : (
              <h2 className="heading-xl text-navy-900 leading-tight">
                Artigos Clínicos e Conteúdos para Pacientes
              </h2>
            )}
            <span className="block h-0.5 w-14 rounded-full bg-gold mt-3" />
            <p className="body-standard text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
              Informação médica fundamentada para desmistificar o Lipedema, entender os sinais de inflamação e reprogramar seu metabolismo com segurança.
            </p>
          </Reveal>

          {showExploreLink && (
            <Reveal className="col-span-12 lg:col-span-4 flex lg:justify-end" delay={100}>
              <ArrowLink href="/conteudos">Ver todos os artigos</ArrowLink>
            </Reveal>
          )}
        </div>

        {/* Category Filter Pills — Smooth Edge-to-Edge Scroll on Mobile */}
        <div className="mt-6 -mx-5 sm:mx-0 px-5 sm:px-0 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-gold/60 hover:text-gold-dark'
              }`}
            >
              {cat === 'all' ? 'Todos os Assuntos' : cat}
            </button>
          ))}
          <div className="w-5 flex-shrink-0 sm:hidden" aria-hidden="true" />
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredArticles.map((article, idx) => (
            <Reveal key={article.id} delay={idx * 60}>
              <article className="medical-card p-5 sm:p-7 flex flex-col justify-between h-full group text-left border border-slate-200/90 hover:border-gold/60 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-gold/10 text-gold-dark border border-gold/30">
                      <Tag className="h-3 w-3" />
                      <span>{article.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500">
                      <Clock className="h-3 w-3 text-gold-dark" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <Link to={`/conteudos/${article.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2.5 leading-snug group-hover:text-gold-dark transition-colors">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="body-standard text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/conteudos/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-dark transition-colors"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gold-dark transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
