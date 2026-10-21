export interface ArticleBlock {
  type: 'heading' | 'paragraph' | 'bullet' | 'numbered' | 'reference';
  text: string;
  number?: number;
  isReferenceHeader?: boolean;
}

export interface PatientArticle {
  id: string;
  filename: string;
  title: string;
  slug: string;
  aliases: string[];
  category:
    | 'Lipedema & Saúde Feminina'
    | 'Medicina Investigativa'
    | 'Metabolismo & Emagrecimento'
    | 'Terapias Hormonais & Longevidade'
    | 'Ciência Metabólica'
    | string;
  tags?: string[];
  wordCount: number;
  readTime: string;
  excerpt: string;
  pdfUrl?: string;
  blocks: ArticleBlock[];
}

export const PATIENT_ARTICLES: PatientArticle[] = [
  {
    id: 'lipedema-guia-completo',
    filename: 'Lipedema-Guia-Completo.pdf',
    title: 'Lipedema: Muito Além da Estética — Por Que Não É Gordura Comum e Como Tratar',
    slug: 'lipedema-muito-alem-da-estetica-por-que-nao-e-gordura-comum',
    aliases: ['lipedema', 'o-que-e-lipedema', 'tratamento-lipedema'],
    category: 'Lipedema & Saúde Feminina',
    tags: ['Lipedema', 'Saúde da Mulher', 'Dor nas Pernas', 'Inflamação'],
    wordCount: 1650,
    readTime: '8 min',
    excerpt:
      'Milhões de mulheres passam anos acreditando que seu sofrimento é apenas excesso de peso ou falta de força de vontade. O Lipedema é uma doença inflamatória crônica com tratamento médico comprovado.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Durante anos, mulheres com Lipedema escutam nos consultórios e academias a mesma frase frustrante: "você só precisa fechar a boca e treinar mais". No entanto, meses de déficit calórico rigoroso e exercícios diários geram resultados no rosto, no tronco e no abdômen, mas deixam as pernas e os braços exatamente iguais — ou ainda mais doloridos. Isso acontece porque o Lipedema não é acúmulo de gordura comum por excesso calórico.',
      },
      {
        type: 'heading',
        text: 'O Que É o Lipedema?',
      },
      {
        type: 'paragraph',
        text: 'O Lipedema é uma doença crônica, progressiva e hormônio-dependente caracterizada pela proliferação inflamatória do tecido adiposo subcutâneo, principalmente nos membros inferiores (quadris, coxas e pernas) e, em cerca de 30% dos casos, nos membros superiores. Reconhecida pela Organização Mundial da Saúde (código CID-11: EF02), é uma condição com forte componente genético, que costuma ter início ou piora em períodos de transição hormonal, como puberdade, gestação, uso de anticoncepcionais ou climatério.',
      },
      {
        type: 'heading',
        text: 'Os 4 Sinais Mais Frequentes de Lipedema',
      },
      {
        type: 'bullet',
        text: 'Dor e hipersensibilidade ao toque: sensação de ardor, aperto ou queimação nas pernas mesmo com leves pressões ou esbarrões no dia a dia.',
      },
      {
        type: 'bullet',
        text: 'Inchaço e sensação de peso ortostático: as pernas tornam-se progressivamente mais cansadas, pesadas e retidas ao longo do dia, piorando em dias quentes.',
      },
      {
        type: 'bullet',
        text: 'Formato de perna em coluna (com corte abrupto no tornozelo): o acúmulo de gordura poupa rigorosamente o dorso dos pés e as mãos, criando um corte bem demarcado.',
      },
      {
        type: 'bullet',
        text: 'Facilidade de hematomas e nódulos subcutâneos: presença de manchas roxas frequentes sem histórico de trauma, decorrentes da fragilidade capilar do tecido inflamado.',
      },
      {
        type: 'heading',
        text: 'A Diferença Entre Lipedema e Obesidade Comum',
      },
      {
        type: 'paragraph',
        text: 'Na obesidade convencional, o tecido adiposo é distribuído de forma relativamente homogênea por todo o corpo e responde proporcionalmente ao balanço energético negativo (déficit calórico). Além disso, a gordura da obesidade não é intrinsecamente dolorosa à palpação. Já no Lipedema, o adipócito está doente, cercado por fibrose e inflamação crônica, resistindo bravamente à restrição calórica comum.',
      },
      {
        type: 'heading',
        text: 'Como Funciona o Tratamento Médico?',
      },
      {
        type: 'paragraph',
        text: 'O tratamento do Lipedema é clínico e multidisciplinar. No consultório do Dr. Jacy Martins em São Paulo, o plano terapêutico se divide em três pilares fundamentais: 1) Estadiamento clínico por palpação minuciosa dos membros; 2) Protocolo de desinflamação bioquímica e dieta com baixa carga inflamatória; 3) Otimização do retorno venoso com terapia compressiva e suporte antioxidante mitocondrial. O objetivo inicial é fazer a dor cessar e recuperar sua qualidade de vida.',
      },
    ],
  },
  {
    id: 'sinais-inflamacao-silenciosa',
    filename: 'Sinais-Inflamacao-Silenciosa.pdf',
    title: '03 Sinais de Que Seu Corpo Está em Inflamação Silenciosa (E Você Nem Percebe)',
    slug: '03-sinais-de-inflamacao-silenciosa-que-seu-corpo-da-e-voce-ignora',
    aliases: ['inflamacao-silenciosa', 'sinais-inflamacao', 'fadiga-cronica'],
    category: 'Medicina Investigativa',
    tags: ['Inflamação', 'Bioquímica', 'Fadiga', 'Metabolismo'],
    wordCount: 1420,
    readTime: '7 min',
    excerpt:
      'Cansaço matinal crônico, dores difusas e lentidão mental não são sinais normais de uma rotina corrida. Eles são alertas de inflamação celular de baixo grau.',
    blocks: [
      {
        type: 'paragraph',
        text: 'A inflamação nem sempre vem acompanhada de febre, inchaço visível ou vermelhidão imediata. Existe um tipo de inflamação insidioso, conhecido na medicina como inflamação crônica de baixo grau (ou "inflamação silenciosa"), que se desenvolve lentamente ao longo de meses ou anos, danificando as mitocôndrias celulares e bagunçando os eixos hormonais.',
      },
      {
        type: 'heading',
        text: 'Sinal #1: Cansaço Constante, Mesmo Dormindo Bem',
      },
      {
        type: 'paragraph',
        text: 'Você deita, dorme sete ou oito horas, mas acorda com a sensação de não ter descansado absolutamente nada. Esse cansaço matinal frequente não é falta de sono, e sim incapacidade das suas células em produzir trifosfato de adenosina (ATP). A inflamação silenciosa lesiona as cristas mitocondriais, impedindo que o oxigênio e os nutrientes sejam convertidos em energia vital.',
      },
      {
        type: 'heading',
        text: 'Sinal #2: Dores Articulares e Musculares Sem Motivo Aparente',
      },
      {
        type: 'paragraph',
        text: 'Acordar com rigidez nas mãos, nos joelhos ou na coluna lombar, ou sentir uma dor muscular profunda mesmo sem ter feito exercícios intensos no dia anterior, é um clássico sinal inflamatório. Citocinas como interleucina-6 (IL-6) e fator de necrose tumoral alfa (TNF-alfa) sensibilizam os nociceptores (receptores de dor), fazendo com que estímulos corriqueiros provoquem desconforto contínuo.',
      },
      {
        type: 'heading',
        text: 'Sinal #3: Oscilações de Humor e Dificuldade de Concentração',
      },
      {
        type: 'paragraph',
        text: 'A chamada "névoa mental" (brain fog), caracterizada por esquecimento de palavras simples, perda de foco rápido e irritabilidade sem causa aparente, decorre de neuroinflamação de baixo grau. O tecido cerebral é altamente suscetível a metabólitos inflamatórios circulantes e a desequilíbrios na barreira hematoencefálica.',
      },
      {
        type: 'heading',
        text: 'Como Mapear a Inflamação em Exames de Sangue?',
      },
      {
        type: 'paragraph',
        text: 'No acompanhamento do Dr. Jacy Martins, solicitamos marcadores que passam despercebidos em check-ups gerais: Proteína C-Reativa ultrassensível (PCR-us), ferritina sérica (como reagente de fase aguda), homocisteína, índice HOMA-IR e velocidade de hemossedimentação (VHS). Identificar esses sinais precocemente permite neutralizar a inflamação antes que ela evolua para doenças autoimunes ou síndrome metabólica.',
      },
    ],
  },
  {
    id: 'erros-que-travam-emagrecimento',
    filename: 'Erros-Travam-Emagrecimento.pdf',
    title: '04 Erros Que Travam o Seu Emagrecimento (E Por Que a Culpa Não É Sua)',
    slug: '04-erros-que-travam-seu-emagrecimento-e-por-que-a-culpa-nao-e-sua',
    aliases: ['erros-emagrecimento', 'metabolismo-lento', 'efeito-sanfona'],
    category: 'Metabolismo & Emagrecimento',
    tags: ['Emagrecimento', 'Metabolismo', 'Hormônios', 'Cortisol'],
    wordCount: 1540,
    readTime: '7 min',
    excerpt:
      'Se você já tentou cortar calorias, passar horas na esteira e mesmo assim o ponteiro da balança não se move, o problema não é falta de foco: seu metabolismo está desregulado.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Poucas coisas são tão desmoralizantes quanto se esforçar ao extremo em uma dieta restritiva e ver o corpo simplesmente parar de responder após poucas semanas. A verdade que a maioria dos métodos comerciais não conta é simples: o corpo humano é um sistema adaptativo e inteligente, programado biologicamente para sobreviver à fome.',
      },
      {
        type: 'heading',
        text: 'Erro 1: Dietas Restritivas Demais e Déficit Extremo',
      },
      {
        type: 'paragraph',
        text: 'Quando você corta calorias de forma drástica, o cérebro interpreta que você está passando por uma crise de escassez alimentar. Em resposta de defesa, ele reduz a conversão de T4 em T3 (o hormônio ativo da tireoide), diminuindo sua taxa metabólica basal em até 30%. Você perde peso no início por desidratação e perda muscular, mas logo atinge o platô — e ao voltar a comer o mínimo, recupera o peso em dobro.',
      },
      {
        type: 'heading',
        text: 'Erro 2: Dormir Mal e Privar o Corpo de Sono Reparador',
      },
      {
        type: 'paragraph',
        text: 'Uma única noite de sono ruim é suficiente para aumentar a resistência à insulina nas 24 horas seguintes e elevar drasticamente os níveis de grelina (o hormônio da fome compulsiva) enquanto derruba a leptina (hormônio da saciedade). Sem sono profundo, o corpo busca energia rápida em carboidratos refinados e doces.',
      },
      {
        type: 'heading',
        text: 'Erro 3: Ignorar os Três Guardiões Hormonais (Insulina, Cortisol e Tireoide)',
      },
      {
        type: 'paragraph',
        text: 'A insulina alta é um freio químico absoluto para a lipólise (queima de gordura). Enquanto os níveis de insulina basal permanecerem elevados no sangue, a enzima lipase sensível a hormônio não é ativada. Somado a isso, o cortisol cronicamente alto provocado pelo estresse diário estimula o acúmulo de gordura visceral profunda no abdômen.',
      },
      {
        type: 'heading',
        text: 'Erro 4: Pular Refeições Sem Planejamento Fisiológico',
      },
      {
        type: 'paragraph',
        text: 'Pular refeições de forma desordenada desestabiliza a glicemia e gera picos compensatórios de fome e compulsão noturna. O emagrecimento sustentável exige estabilidade glicêmica e aporte proteico adequado ao longo do dia para proteger seus músculos.',
      },
      {
        type: 'heading',
        text: 'A Solução Médica: Ciência + Individualidade',
      },
      {
        type: 'paragraph',
        text: 'Antes de iniciar qualquer intervenção dietética, consulte um médico para mapear seus hormônios, dosar sua curva insulínica e investigar sua função tireoidiana. Tratar o terreno biológico é o único caminho para um emagrecimento definitivo e sem sofrimento.',
      },
    ],
  },
  {
    id: 'climaterio-e-modulacao-hormonal',
    filename: 'Climaterio-Modulacao-Hormonal.pdf',
    title: 'Climatério e Menopausa: Como a Modulação Hormonal Segura Resgata a Vitalidade',
    slug: 'climaterio-e-menopausa-como-modulacao-hormonal-segura-resgata-vitalidade',
    aliases: ['climaterio', 'menopausa', 'terapia-hormonal', 'reposicao-hormonal'],
    category: 'Terapias Hormonais & Longevidade',
    tags: ['Hormônios', 'Menopausa', 'Climatério', 'Longevidade'],
    wordCount: 1710,
    readTime: '9 min',
    excerpt:
      'A transição para a menopausa não precisa ser marcada por insônia, ganho súbito de peso e perda de ânimo. A ciência médica hoje dispõe de protocolos seguros e individualizados.',
    blocks: [
      {
        type: 'paragraph',
        text: 'O climatério é a fase de transição que antecede a menopausa (a última menstruação) e pode começar até uma década antes da interrupção definitiva dos ciclos. Muitas mulheres entre 40 e 50 anos começam a notar que o peso que antes era fácil de controlar passa a se acumular rapidamente no abdômen, o sono torna-se fragmentado, a libido diminui e episódios de irritabilidade e calorões surgem sem aviso.',
      },
      {
        type: 'heading',
        text: 'O Papel do Estrogênio e da Progesterona',
      },
      {
        type: 'paragraph',
        text: 'Os hormônios ovarianos não atuam apenas no sistema reprodutivo: existem receptores de estrogênio nos neurônios, no endotélio vascular, nos ossos e nas células musculares. Quando a produção fisiológica diminui, ocorrem alterações na sensibilidade insulínica, perda de densidade mineral óssea e redução na síntese de colágeno e massa magra.',
      },
      {
        type: 'heading',
        text: 'O Que Mudou na Segurança da Terapia Hormonal?',
      },
      {
        type: 'paragraph',
        text: 'Os estudos mais recentes das sociedades internacionais de menopausa demonstraram que a terapia de reposição hormonal iniciada na chamada "janela de oportunidade" (mulheres com menos de 60 anos ou dentro de 10 anos do início da menopausa) oferece benefícios imensos na proteção cardiovascular, cerebral e óssea, com baixíssimo risco quando utilizados hormônios isomoleculares por via transdérmica.',
      },
      {
        type: 'heading',
        text: 'Critérios Obrigatórios Antes da Prescrição',
      },
      {
        type: 'bullet',
        text: 'Mamografia digital e ultrassonografia das mamas recentes e sem atipias.',
      },
      {
        type: 'bullet',
        text: 'Ultrassonografia transvaginal para avaliação da espessura endometrial.',
      },
      {
        type: 'bullet',
        text: 'Painel lipídico, hepático e de marcadores de trombofilia quando indicado.',
      },
      {
        type: 'bullet',
        text: 'Acompanhamento periódico com reavaliação clínica e laboratorial contínua.',
      },
    ],
  },
  {
    id: 'emagrecimento-ciencia-e-individualidade',
    filename: 'Emagrecimento-Ciencia-Individualidade.pdf',
    title: 'Emagrecimento é Ciência e Individualidade: Por Que Cortar Calorias Não Funciona Para Todo Mundo',
    slug: 'emagrecimento-e-ciencia-e-individualidade-por-que-cortar-calorias-nao-funciona',
    aliases: ['ciencia-emagrecimento', 'individualidade-metabolica', 'sarcopenia'],
    category: 'Ciência Metabólica',
    tags: ['Metabolismo', 'Ciência', 'Nutrição Médica', 'Massa Muscular'],
    wordCount: 1590,
    readTime: '8 min',
    excerpt:
      'Copiar a dieta da colega ou cortar carboidratos a zero costuma levar à frustração. Cada organismo possui uma assinatura bioquímica única que dita a resposta calórica.',
    blocks: [
      {
        type: 'paragraph',
        text: 'A visão simplista de que o corpo é apenas uma calculadora de "calorias que entram versus calorias que saem" ignora completamente a complexidade da endocrinologia humana. Duas pessoas com a mesma altura, peso e idade, consumindo rigorosamente a mesma quantidade de calorias, podem ter respostas de composição corporal opostas dependendo da sua sensibilidade insulínica, microbiota intestinal, perfil tireoidiano e massa muscular prévia.',
      },
      {
        type: 'heading',
        text: 'Músculo: O Maior Órgão Endócrino do Corpo',
      },
      {
        type: 'paragraph',
        text: 'Quando uma pessoa perde 10 kg através de uma dieta relâmpago, frequentemente cerca de 4 a 5 kg perdidos são de massa muscular. Isso é desastroso para o metabolismo. O músculo esquelético é responsável pela captação de mais de 80% da glicose pós-prandial estimulada por insulina. Perder músculo significa tornar o corpo metabolicamente lento e predisposto ao acúmulo de gordura futura.',
      },
      {
        type: 'heading',
        text: 'A Armadilha do "Vou Esperar o Ano Virar"',
      },
      {
        type: 'paragraph',
        text: 'Muitos pacientes adiam o cuidado de saúde para janeiro, acreditando que as festas e a rotina do fim de ano impedem qualquer evolução. No entanto, o objetivo não é viver em uma bolha de isolamento, mas sim aprender a organizar a bioquímica do corpo para que eventos sociais não destruam sua saúde nem tragam culpa.',
      },
      {
        type: 'heading',
        text: 'O Que a Abordagem Médica do Dr. Jacy Martins Proporciona',
      },
      {
        type: 'bullet',
        text: 'Investigação profunda das intolerâncias, curva de insulina e esteatose hepática.',
      },
      {
        type: 'bullet',
        text: 'Preservação absoluta de massa magra funcional com aporte nutricional correto.',
      },
      {
        type: 'bullet',
        text: 'Estratégia gradual e realista para você chegar aos seus objetivos com vigor e energia.',
      },
    ],
  },
];

export function findArticleBySlug(slug: string): PatientArticle | undefined {
  const normalized = slug.toLowerCase().trim();
  return PATIENT_ARTICLES.find(
    (a) => a.slug === normalized || a.aliases.some((alias) => alias.toLowerCase() === normalized) || a.id === normalized
  );
}

