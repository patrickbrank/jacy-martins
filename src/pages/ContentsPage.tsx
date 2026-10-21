import { PageMeta } from '@/components/PageMeta';
import { Contents } from '@/components/sections/Contents';

export function ContentsPage() {
  return (
    <>
      <PageMeta
        title="Artigos e Conteúdos Clínicos — Dr. Jacy Martins Jr"
        description="Textos médicos educativos sobre Lipedema, emagrecimento biológico e inflamação silenciosa pelo Dr. Jacy Martins."
        path="/conteudos"
      />
      <Contents isPageHeader />
    </>
  );
}
