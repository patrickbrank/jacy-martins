import { PageMeta } from '@/components/PageMeta';
import { Locations } from '@/components/sections/Locations';

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Agendamento e Contato — Dr. Jacy Martins Jr"
        description="Agende sua consulta presencial em São Paulo ou via Telemedicina em todo o Brasil com o Dr. Jacy Martins Jr."
        path="/contato"
      />
      <Locations isPageHeader />
    </>
  );
}
