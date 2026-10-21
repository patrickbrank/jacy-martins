import { PageMeta } from '@/components/PageMeta';
import { Hero } from '@/components/sections/Hero';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { ClinicalDiagrams } from '@/components/sections/ClinicalDiagrams';
import { Procedures } from '@/components/sections/Procedures';
import { About } from '@/components/sections/About';
import { Contents } from '@/components/sections/Contents';
import { Locations } from '@/components/sections/Locations';

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Dr. Jacy Martins Jr — Medicina Integrativa, Lipedema & Saúde Metabólica"
        description="Diagnóstico especializado em Lipedema, desinflamação celular e equilíbrio hormonal. Consultório em São Paulo e Telemedicina para todo o Brasil. CRM-SP 263543."
        path="/"
      />
      <Hero />
      <PracticeAreas />
      <ClinicalDiagrams />
      <Procedures />
      <About />
      <Contents showExploreLink />
      <Locations />
    </>
  );
}
