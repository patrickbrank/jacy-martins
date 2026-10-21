import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Página não encontrada — Dr. Jacy Martins Jr"
        description="A página que você está procurando não existe."
        path="/404"
      />
      <section className="bg-[#f8f9fa] pt-36 pb-24 min-h-[70vh] flex items-center justify-center text-center">
        <div className="container-narrow">
          <span className="text-6xl sm:text-7xl font-extrabold text-gold-dark block mb-2">
            404
          </span>
          <h1 className="heading-lg text-navy-900 mb-4">Página não encontrada</h1>
          <p className="body-standard text-slate-600 mb-8 max-w-md mx-auto">
            O endereço acessado não existe ou foi alterado. Utilize os links de navegação para retornar ao site.
          </p>
          <Link to="/" className="btn-primary text-xs py-3.5 px-6 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar à Página Inicial</span>
          </Link>
        </div>
      </section>
    </>
  );
}
