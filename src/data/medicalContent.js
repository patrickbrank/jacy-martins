export const DOCTOR_INFO = {
  name: "Dr. Jacy Martins Junior",
  displayShort: "Dr. Jacy Martins",
  crm: "CRM-SP 263543",
  title: "Médico | Medicina Integrativa, Lipedema & Metabologia",
  academic: "Formado pela Faculdade de Medicina UNIFACS",
  instagram: "@drjacymjunior",
  instagramUrl: "https://www.instagram.com/drjacymjunior/",
  whatsapp: "5511924983787",
  whatsappFormatted: "+55 11 92498-3787",
  defaultMessage: "Olá Dr. Jacy Martins! Gostaria de informações para agendar uma consulta.",
  locations: {
    presencial: {
      title: "Consultório em São Paulo",
      subtitle: "Capital - SP",
      desc: "Avaliação física completa, palpação diagnóstica de Lipedema e acolhimento presencial privativo."
    },
    online: {
      title: "Telemedicina",
      subtitle: "Todo o Brasil e Exterior",
      desc: "Consulta online por videoconferência com prescrições e pedidos de exames válidos em todo o país."
    }
  }
};

export const CLINICAL_PILLARS = [
  {
    id: "lipedema",
    title: "Diagnóstico e Manejo do Lipedema",
    summary: "Alívio de dores ao toque, sensação de peso nas pernas e desinflamação profunda.",
    details: "O lipedema é uma condição inflamatória crônica e hormônio-dependente, não acúmulo de gordura comum. Atuamos com protocolo clínico para reduzir o inchaço, cessar a dor e devolver sua mobilidade e bem-estar.",
    tag: "Condição Médica"
  },
  {
    id: "emagrecimento",
    title: "Emagrecimento com Saúde Metabólica",
    summary: "Investigação da causa biológica do ganho de peso para superar o efeito sanfona.",
    details: "Não adianta cortar calorias se a insulina estiver cronicamente alta, a tireoide lenta ou o cortisol desregulado. Tratamos os desequilíbrios hormonais para que o corpo volte a responder de forma natural e sustentável.",
    tag: "Ciência & Metabolismo"
  },
  {
    id: "hormonios",
    title: "Terapias Hormonais e Climatério",
    summary: "Equilíbrio fisiológico para resgatar disposição, sono reparador e vitalidade.",
    details: "Ajuste individualizado e seguro para mulheres no climatério/menopausa e homens que buscam recuperar energia, clareza mental e qualidade de vida, sempre guiado por exames laboratoriais minuciosos.",
    tag: "Longevidade Ativa"
  },
  {
    id: "performance",
    title: "Medicina Esportiva e Composição Corporal",
    summary: "Construção de massa magra funcional e combate à sarcopenia com segurança.",
    details: "Acompanhamento médico para ganho de músculo, preservação metabólica e disposição física, integrando saúde celular, nutrição médica e segurança cardiovascular.",
    tag: "Saúde Funcional"
  }
];

export const CONSULTATION_STEPS = [
  {
    step: "01",
    title: "Escuta atenta e história clínica",
    desc: "Uma consulta sem pressa para entender suas queixas, dores diárias, histórico familiar e tentativas anteriores. Aqui você é ouvida sem julgamentos."
  },
  {
    step: "02",
    title: "Mapeamento com exames detalhados",
    desc: "Solicitamos painéis laboratoriais aprofundados para avaliar inflamação crônica, curva de insulina, função da tireoide, cortisol e perfil hormonal."
  },
  {
    step: "03",
    title: "Plano sob medida e acompanhamento",
    desc: "Estruturamos um tratamento médico personalizado para desinflamar e restabelecer sua saúde, com retornos regulares para acompanhar sua evolução."
  }
];

export const LIPEDEMA_FACTS = {
  headline: "Não é preguiça. Não é culpa sua. É lipedema.",
  subtitle: "Uma condição inflamatória que afeta milhões de mulheres e muitas vezes é confundida com excesso de peso comum.",
  symptoms: [
    "Dor, sensibilidade ou queimação ao toque nas pernas ou braços",
    "Sensação de pernas pesadas e inchaço que piora ao longo do dia",
    "Gordura localizada desproporcional que não responde a dietas ou treinos",
    "Facilidade em ter manchas roxas (hematomas) sem bater",
    "Formato de perna com corte abrupto no tornozelo (perna em coluna)"
  ],
  differences: [
    {
      aspect: "Dor e Sensibilidade",
      lipedema: "Dói à palpação, sensação de peso constante",
      obesidade: "Gordura geralmente indolor ao toque"
    },
    {
      aspect: "Resposta a Dietas",
      lipedema: "Resistente a dietas e treinos intensos",
      obesidade: "Diminui proporcionalmente com déficit calórico"
    },
    {
      aspect: "Distribuição",
      lipedema: "Desproporcional em pernas e braços, poupando pés e mãos",
      obesidade: "Distribuição generalizada e homogênea no corpo"
    }
  ]
};

export const FAQS = [
  {
    q: "Como funciona a consulta presencial em São Paulo e o que está incluso?",
    a: "A consulta presencial é realizada no consultório privativo do Dr. Jacy Martins na capital paulista. Inclui anamnese clínica aprofundada de 1 hora, exame físico palpatório minucioso para estadiamento e identificação de nódulos de Lipedema, solicitação de painel laboratorial bioquímico detalhado e prescrição de protocolo médico individualizado."
  },
  {
    q: "Como funciona a consulta por Telemedicina para quem mora fora de SP ou no exterior?",
    a: "O atendimento online é realizado por videoconferência com o mesmo tempo e dedicação de uma consulta presencial. Os pedidos de exames laboratoriais e receitas médicas contam com assinatura digital certificada pela ICP-Brasil, sendo aceitos em farmácias e laboratórios de todo o território nacional."
  },
  {
    q: "A consulta dá direito a reembolso pelo meu plano de saúde / convênio?",
    a: "O atendimento do Dr. Jacy Martins é estritamente particular e de dedicação exclusiva. Ao término do atendimento, nossa equipe emite Nota Fiscal com discriminação médica e relatório clínico completo para que você possa solicitar o reembolso de consulta e exames junto à sua operadora de saúde."
  },
  {
    q: "Preciso levar exames anteriores para a primeira consulta médica?",
    a: "Se você realizou exames de sangue, ultrassonografias ou ressonâncias nos últimos 6 meses, traga-os ou envie antecipadamente para nossa equipe via WhatsApp. Caso não tenha exames recentes, o Dr. Jacy solicitará o painel diagnóstico completo logo no primeiro encontro."
  },
  {
    q: "Quanto tempo dura o tratamento e quando vejo os primeiros resultados?",
    a: "O protocolo clínico inicial foca na desinflamação tecidual rápida. A diminuição da dor ao toque, o alívio da queimação e a redução da sensação de peso nas pernas costumam ser percebidos já nas primeiras 3 a 6 semanas de conduta correta, com acompanhamento periódico para consolidação duradoura."
  },
  {
    q: "Homens também podem fazer acompanhamento com o Dr. Jacy Martins?",
    a: "Sim. O Dr. Jacy Martins atende pacientes masculinos com foco em otimização metabólica, modulação hormonal (reposição segura de testosterona), ganho de massa muscular magra, controle de diabetes e saúde cardiovascular funcional."
  }
];
