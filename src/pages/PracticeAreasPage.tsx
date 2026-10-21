import { PageMeta } from '@/components/PageMeta';
import { PracticeAreas } from '@/components/sections/PracticeAreas';

export function PracticeAreasPage() {
  return (
    <>
      <PageMeta
        title="Áreas de Atuação Clínica — Dr. Jacy Martins Jr"
        description="Lipedema, Emagrecimento Metabólico, Inflamação Silenciosa e Modulação Hormonal com o Dr. Jacy Martins Jr."
        path="/atuacao"
      />
      <PracticeAreas isPageHeader />
    </>
  );
}
