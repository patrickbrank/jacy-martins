import { PageMeta } from '@/components/PageMeta';
import { Procedures } from '@/components/sections/Procedures';

export function ProceduresPage() {
  return (
    <>
      <PageMeta
        title="Protocolos Clínicos e Avaliações Diagnósticas — Dr. Jacy Martins Jr"
        description="Protocolo de desinflamação do Lipedema, mapeamento hormonal e reprogramação metabólica."
        path="/procedimentos"
      />
      <Procedures isPageHeader />
    </>
  );
}
