export const DR_JACY_PHOTO_SRC = '/imagens/jacy imagem 1.png';
export const DR_JACY_OFFICE_PHOTO = '/imagens/jacy imagem 2.png';
export const DR_JACY_COAT_PHOTO = '/imagens/jacy imagem 3.png';

export const BASE_SITE_URL = 'https://drjacymartins.com.br';

export const DOCTOR_INFO = {
  name: 'Dr. Jacy Martins Junior',
  shortName: 'Dr. Jacy Martins',
  crm: 'CRM-SP 263543',
  title: 'Médico | Medicina Integrativa, Lipedema & Saúde Metabólica',
  academic: 'Formado pela Faculdade de Medicina UNIFACS (Turma X)',
  instagram: '@drjacymjunior',
  instagramUrl: 'https://www.instagram.com/drjacymjunior/',
  whatsapp: '5511924983787',
  whatsappFormatted: '+55 11 92498-3787',
  defaultMessage: 'Olá Dr. Jacy Martins! Gostaria de informações para agendar uma consulta.',
  locations: {
    presencial: {
      city: 'São Paulo',
      state: 'SP',
      name: 'Consultório Privativo em São Paulo',
      address: 'Capital - São Paulo - SP',
      desc: 'Atendimento presencial dedicado, com exame físico palpatório para estadiamento de Lipedema e dedicação exclusiva.',
    },
    online: {
      city: 'Todo o Brasil',
      state: 'Online',
      name: 'Telemedicina Brasil e Exterior',
      address: 'Atendimento por Videoconferência',
      desc: 'Consulta médica aprofundada online com prescrições digitais e pedidos de exames ICP-Brasil válidos em todo o país.',
    },
  },
};

export interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Início', href: '/', sectionId: 'inicio' },
  { label: 'Lipedema & Sintomas', href: '/#atuacao', sectionId: 'atuacao' },
  { label: 'Protocolos Clínicos', href: '/#procedimentos', sectionId: 'procedimentos' },
  { label: 'Sobre o Médico', href: '/#sobre', sectionId: 'sobre' },
  { label: 'Artigos & Conteúdos', href: '/conteudos' },
  { label: 'Locais & Contato', href: '/#contato', sectionId: 'contato' },
] as const;

export function contentSlug(title: string) {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  paragraphs: readonly string[];
  keyPoints: readonly string[];
}

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    id: 'lipedema',
    title: 'Diagnóstico e Manejo Clínico do Lipedema',
    subtitle: 'Alívio de dores ao toque, queimação e desinflamação profunda',
    description:
      'O lipedema é uma doença biológica crônica, inflamatória e hormônio-dependente. Não é preguiça nem excesso de peso comum.',
    paragraphs: [
      'Milhões de mulheres passam anos sofrendo em silêncio e ouvindo de forma leviana que precisam "apenas fechar a boca e treinar mais". O Lipedema é uma condição clínica real, inflamatória e com forte substrato genético e hormonal.',
      'A gordura do Lipedema é biologicamente doente, dolorosa à palpação, sensível a hematomas espontâneos e resistente ao déficit calórico convencional, acumulando-se predominantemente nos membros inferiores e poupando os pés.',
      'Nossa conduta foca no estadiamento clínico, desinflamação profunda do tecido intersticial, preservação da drenagem linfática e alívio rápido da sensação de peso e queimação diária.',
    ],
    keyPoints: [
      'Dor, sensibilidade e queimação constante ao toque',
      'Inchaço ortostático que se intensifica ao final do dia',
      'Pernas em formato de coluna com corte abrupto no tornozelo',
      'Resistência absoluta a dietas restritivas convencionais',
    ],
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento com Saúde Metabólica',
    subtitle: 'Investigação profunda da causa biológica para superar o efeito sanfona',
    description:
      'Emagrecimento de verdade é Ciência e Individualidade. Cortar calorias sem ajustar insulina e cortisol apenas desacelera seu metabolismo.',
    paragraphs: [
      'Não adianta insistir em dietas de fome se sua curva de insulina estiver cronicamente alta, o cortisol desregulado ou a tireoide operando em ritmo lento. O corpo humano responde a sinais bioquímicos de sobrevivência.',
      'Dietas excessivamente restritivas reduzem a taxa metabólica basal e provocam perda severa de massa muscular, resultando no clássico e frustrante efeito sanfona.',
      'Tratamos a causa biológica que trava a queima de gordura, promovendo saciedade real, equilíbrio hormonal e reeducação metabólica sem medicamentos temporários ou restrições punitivas.',
    ],
    keyPoints: [
      'Mapeamento laboratorial da resistência insulínica',
      'Prevenção do efeito sanfona com preservação muscular',
      'Regulação hormonal de grelina, leptina e saciedade',
      'Estratégia personalizada sem escassez ou fome extrema',
    ],
  },
  {
    id: 'inflamacao',
    title: '03 Sinais de Inflamação Crônica Silenciosa',
    subtitle: 'Por trás dos sintomas que você tolera todos os dias',
    description:
      'Cansaço matinal, dores articulares difusas e névoa mental não são normais da rotina: são avisos de inflamação de baixo grau.',
    paragraphs: [
      'A inflamação aguda é uma resposta fisiológica protetora. No entanto, quando ela se torna subclínica, crônica e silenciosa, corrói sua energia celular e desregula os centros de comando hormonal do organismo.',
      'O primeiro sinal clássico é o cansaço constante mesmo após 8 horas de sono, decorrente de disfunção mitocondrial. O segundo são dores articulares e musculares migratórias sem causa mecânica. O terceiro são alterações no humor, névoa mental e dificuldade de foco.',
      'Identificamos marcadores inflamatórios ocultos em exames laboratoriais aprofundados e desenhamos um protocolo para restaurar seu equilíbrio biológico.',
    ],
    keyPoints: [
      'Cansaço contínuo e falta de vitalidade matinal',
      'Dores articulares e musculares sem causa ortopédica',
      'Oscilações de humor, lentidão de raciocínio e névoa mental',
      'Restauração bioquímica da função celular e mitocondrial',
    ],
  },
  {
    id: 'hormonios',
    title: 'Terapias Hormonais e Climatério',
    subtitle: 'Equilíbrio fisiológico para mulheres e homens resgatarem vitalidade',
    description:
      'Ajuste individualizado e seguro para quem busca recuperar sono reparador, clareza mental e disposição duradoura.',
    paragraphs: [
      'As oscilações e quedas hormonais do climatério e da menopausa provocam sintomas que vão muito além dos calores noturnos: geram ganho de gordura visceral, perda óssea, insônia e alteração de memória.',
      'Da mesma forma, homens com descompasso metabólico frequentemente apresentam queda de testosterona, perda de foco e fadiga crônica.',
      'A reposição e modulação hormonal médica, quando indicada após minuciosa triagem laboratorial e cardiovascular, resgata a qualidade de vida com segurança e rigor científico.',
    ],
    keyPoints: [
      'Manejo seguro do climatério e transição da menopausa',
      'Sono restaurador e proteção ósseo-cardiovascular',
      'Modulação fisiológica com base em exames minuciosos',
      'Atendimento específico tanto para mulheres quanto homens',
    ],
  },
  {
    id: 'performance',
    title: 'Medicina Esportiva e Composição Corporal',
    subtitle: 'Construção de massa magra funcional e combate ativo à sarcopenia',
    description:
      'Músculo é órgão endócrino de longevidade. Cuidamos do ganho de força, recuperação física e saúde metabólica com segurança.',
    paragraphs: [
      'O tecido muscular não tem apenas papel estético: é o maior sítio de captação de glicose do corpo e o principal protetor contra doenças cardiovasculares, diabetes e envelhecimento precoce.',
      'A sarcopenia (perda involuntária de massa e força muscular) é um dos maiores fatores de perda de autonomia e queda do gasto calórico basal ao longo dos anos.',
      'Acompanhamos atletas amadores, praticantes de musculação e pessoas sedentárias que necessitam de intervenção médica para otimização de força, nutrição clínica e segurança metabólica.',
    ],
    keyPoints: [
      'Combate ativo à perda de massa magra funcional',
      'Otimização do metabolismo da glicose e da sensibilidade insulínica',
      'Recuperação muscular pós-treino e redução de dores',
      'Planejamento seguro orientado por parâmetros clínicos',
    ],
  },
  {
    id: 'estrategia',
    title: 'Planejamento Estratégico de Saúde',
    subtitle: 'Por que o erro é adiar o cuidado para a virada do ano',
    description:
      'Começar agora é jogar o jogo certo. Quem organiza o metabolismo colhe resultados sustentáveis sem desespero.',
    paragraphs: [
      'É muito comum as pessoas esperarem uma data mágica — a próxima segunda-feira ou a virada do ano — para começar a cuidar do corpo, muitas vezes recorrendo a medidas drásticas de última hora.',
      'A saúde metabólica não funciona por impulsos sazonais. O metabolismo desinflamado com calma e técnica médica responde muito melhor e com menor esforço ao longo do tempo.',
      'Nosso compromisso é estruturar um plano de saúde realista, que respeite seu momento e gere resultados visíveis já nas primeiras semanas de acompanhamento.',
    ],
    keyPoints: [
      'Superação da mentalidade de "tudo ou nada"',
      'Acompanhamento contínuo e suporte clínico',
      'Metabolismo organizado para o ano inteiro',
      'Resultados graduais, consistentes e sem sofrimento',
    ],
  },
];

export interface ProcedureItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  indications: readonly string[];
}

export const PROCEDURES: readonly ProcedureItem[] = [
  {
    id: 'protocolo-lipedema',
    title: 'Protocolo de Desinflamação Tecidual do Lipedema',
    shortDesc: 'Abordagem clínica integrada para controle da dor, queimação e progressão do Lipedema.',
    fullDesc:
      'Combinação de conduta anti-inflamatória personalizada, orientação de compressão médica graduada, suplementação mitocondrial específica e estímulo circulatório para cessar a hipersensibilidade dolorosa e devolver a mobilidade.',
    indications: [
      'Dor ao toque nas pernas ou braços',
      'Sensação de peso e inchaço no fim do dia',
      'Nódulos de gordura subcutânea palpáveis',
      'Mulheres com diagnóstico ou suspeita de Lipedema',
    ],
  },
  {
    id: 'mapeamento-hormonal',
    title: 'Mapeamento Bioquímico & Painel Hormonal Profundo',
    shortDesc: 'Investigação laboratorial aprofundada antes de qualquer conduta terapêutica.',
    fullDesc:
      'Solicitamos e interpretamos painéis laboratoriais que vão muito além do hemograma rotineiro: curva de insulina com índice HOMA, perfil tireoidiano ampliado, cortisol salivar circadiano, marcadores inflamatórios ultrassensíveis (como PCR e ferritina) e perfil hormonal completo.',
    indications: [
      'Dificuldade crônica de perda de peso',
      'Cansaço matinal e falta de disposição',
      'Mulheres no climatério ou com irregularidade menstrual',
      'Homens com fadiga, baixa libido ou perda de força',
    ],
  },
  {
    id: 'exame-palpatorio',
    title: 'Exame Físico Palpatório e Estadiamento Clínico',
    shortDesc: 'Avaliação presencial em São Paulo com classificação de gravidade e laudo médico.',
    fullDesc:
      'Realizado exclusivamente no consultório em São Paulo. O Dr. Jacy realiza a palpação sistemática dos membros inferiores e superiores, avaliando consistência tecidual, presença de nódulos ("feijãozinhos"), espessamento de pele, sinal de Stemmer e estadiamento de grau I a IV.',
    indications: [
      'Confirmação diagnóstica de Lipedema',
      'Diferenciação clara entre Lipedema, Linfedema e Obesidade',
      'Emissão de laudo médico para fisioterapia ou reembolso',
    ],
  },
  {
    id: 'reprogramacao-metabolica',
    title: 'Reprogramação Metabólica e Composição Corporal',
    shortDesc: 'Estratégia clínica contra o efeito sanfona, com foco em manutenção muscular.',
    fullDesc:
      'Protocolo individualizado que ajusta os gatilhos neuroquímicos da fome e da saciedade, reduz a resistência à insulina e preserva a taxa metabólica basal, permitindo que a perda de gordura ocorra de forma fisiológica e sustentável.',
    indications: [
      'Histórico de múltiplas dietas falhas no passado',
      'Presença de gordura visceral e esteatose hepática',
      'Risco de sarcopenia ou perda de tônus muscular',
    ],
  },
];

export const FAQS = [
  {
    q: 'Como funciona a consulta presencial em São Paulo e o que está incluso?',
    a: 'A consulta presencial é realizada no consultório privativo do Dr. Jacy Martins na capital paulista. Inclui anamnese detalhada com 1 hora de atenção exclusiva, exame físico palpatório minucioso para estadiamento de Lipedema, requisição de painel laboratorial aprofundado e elaboração do plano terapêutico personalizado.',
  },
  {
    q: 'Como funciona a Telemedicina para quem mora fora de SP ou no exterior?',
    a: 'O atendimento por telemedicina conta com a mesma profundidade e duração da consulta presencial, realizado por videoconferência segura. As receitas médicas e pedidos de exames possuem assinatura digital padrão ICP-Brasil, sendo aceitos em farmácias e laboratórios de todo o território nacional.',
  },
  {
    q: 'O atendimento do Dr. Jacy Martins aceita convênio ou plano de saúde?',
    a: 'O atendimento é estritamente particular e privativo para garantir tempo e dedicação total a cada caso. Fornecemos Nota Fiscal com detalhamento médico e relatório clínico para que você possa solicitar reembolso de consulta e exames junto ao seu plano de saúde.',
  },
  {
    q: 'Preciso levar exames anteriores para a primeira consulta?',
    a: 'Se você realizou exames de sangue, ultrassonografias ou ressonâncias nos últimos 6 meses, traga-os ou envie antecipadamente para a nossa equipe no WhatsApp. Caso não tenha exames recentes, o Dr. Jacy solicitará o painel diagnóstico completo logo no primeiro encontro.',
  },
  {
    q: 'Quanto tempo demora para sentir os primeiros resultados no Lipedema?',
    a: 'O protocolo clínico foca inicialmente no alívio da dor e na desinflamação do tecido. A redução da sensação de peso nas pernas, a diminuição da sensibilidade ao toque e o alívio do inchaço no fim do dia costumam ser percebidos já nas primeiras 3 a 6 semanas com a conduta médica correta.',
  },
  {
    q: 'Homens também realizam acompanhamento com o Dr. Jacy Martins?',
    a: 'Sim. O Dr. Jacy atende pacientes masculinos com foco em otimização metabólica, emagrecimento saudável, modulação hormonal segura (como reposição de testosterona), combate à sarcopenia e saúde cardiovascular funcional.',
  },
];

import { PATIENT_ARTICLES, PatientArticle, findArticleBySlug } from './patientArticles';
export { PATIENT_ARTICLES, findArticleBySlug };
export type { PatientArticle };

export const CONTENTS = PATIENT_ARTICLES.slice(0, 4);
export const ADDITIONAL_CONTENTS = PATIENT_ARTICLES.slice(4).map((a) => a.title);
export const ALL_CONTENTS = PATIENT_ARTICLES;

export const LOCATIONS = [
  {
    city: 'São Paulo',
    state: 'São Paulo',
    clinic: 'Consultório Privativo Dr. Jacy Martins',
    address: 'Capital - São Paulo - SP',
    crm: 'CRM-SP 263543',
    type: 'Atendimento presencial e palpação diagnóstica',
    description: 'Avaliação física minuciosa, estadiamento clínico de Lipedema, acolhimento humanizado e 1 hora de atenção exclusiva.',
    scheduleInfo: 'Atendimento com horário previamente agendado',
  },
  {
    city: 'Telemedicina',
    state: 'Todo o Brasil e Exterior',
    clinic: 'Consulta Médica On-line',
    address: 'Plataforma médica segura por videoconferência',
    crm: 'CRM-SP 263543',
    type: 'Consulta online por videoconferência',
    description: 'Atendimento pontual com o mesmo tempo e dedicação da consulta presencial. Pedidos de exames e receitas com assinatura digital ICP-Brasil.',
    scheduleInfo: 'Horários flexíveis de segunda a sexta-feira',
  },
] as const;

export const FOOTER_LINKS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Lipedema & Sintomas', href: '/#atuacao' },
      { label: 'Protocolos Clínicos', href: '/#procedimentos' },
      { label: 'Sobre o Médico', href: '/#sobre' },
      { label: 'Artigos & Conteúdos', href: '/conteudos' },
      { label: 'Locais & Contato', href: '/#contato' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'São Paulo (Presencial)', href: '/#contato' },
      { label: 'Telemedicina Brasil', href: '/#contato' },
      { label: 'Dúvidas Frequentes', href: '/#contato' },
    ],
  },
];
