export interface Coach {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  cref: string;
  specialties: string[];
  phone: string;
  formattedPhone?: string;
  whatsappMessage: string;
  bio: string;
  experienceYears: number;
  image: string;
}

export interface Modality {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  intensity: 'Alta' | 'Muito Alta' | 'Personalizada';
  coachName: string;
  scheduleSummary: string;
}

export interface ClassScheduleItem {
  id: string;
  time: string;
  modality: string;
  coach: string;
  room: string;
  level: string;
  duration: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  priceMonthly: number;
  priceQuarterly: number;
  priceAnnualMonthly: number;
  benefits: string[];
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  timeTraining: string;
  result: string;
  text: string;
  rating: number;
  modality: string;
}

export const GYM_INFO = {
  name: "Academia Thanos",
  tagline: "Força, Disciplina & Alta Performance",
  description: "A academia de alta performance mais completa de Guaranésia - MG. Equipamentos biomecânicos de primeira linha, musculação pesada, treinamento funcional e acompanhamento profissional para o seu melhor resultado.",
  
  // Exact user specified location
  location: {
    street: "Rua Francisco Monteiro Dias",
    number: "380",
    neighborhood: "Bom Jesus",
    city: "Guaranésia",
    state: "MG",
    zipCode: "37810-000",
    reference: "Próximo à área central de Guaranésia",
    fullAddress: "Rua Francisco Monteiro Dias, 380 - Bom Jesus, Guaranésia - MG, 37810-000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Monteiro+Dias,+380+-+Guaran%C3%A9sia+-+MG",
    wazeUrl: "https://waze.com/ul?q=Rua+Francisco+Monteiro+Dias,+380+Guaranesia+MG",
  },

  // Main Teacher / WhatsApp Contact as specified by user
  whatsapp: {
    cleanNumber: "5535991359857",
    formattedNumber: "(35) 99135-9857",
    teacherName: "Professor da Academia Thanos",
    defaultMessage: "Olá Professor! Estive no site da Academia Thanos em Guaranésia e gostaria de saber mais sobre os treinos, horários e agendar uma aula experimental.",
    trialMessage: "Olá Professor! Quero garantir minha aula experimental gratuita na Academia Thanos de Guaranésia!",
  },

  contact: {
    phone: "(35) 99135-9857",
    email: "contato@academiathanos.com.br",
    instagram: "@academiathanos_guaranesia",
  },

  hours: {
    weekdays: "05:30 às 22:00",
    saturday: "07:00 às 16:00",
    sunday: "Fechado",
    holidays: "08:00 às 12:00",
    sundayAndHolidays: "Domingos: Fechado | Feriados: 08:00 às 12:00",
  }
};

export const COACHES: Coach[] = [
  {
    id: "vinicius",
    name: "Vinicius",
    nickname: "Prof. Vinicius",
    role: "Professor Responsável & Musculação de Alta Performance",
    cref: "CREF / MG",
    specialties: ["Musculação & Hipertrofia", "Periodização de Carga", "Biomecânica e Postura"],
    phone: "5535991359857",
    formattedPhone: "(35) 99135-9857",
    whatsappMessage: "Olá Professor Vinicius! Estive no site da Academia Thanos e gostaria de saber mais sobre os treinos e acompanhamento em Guaranésia.",
    bio: "Professor responsável pela Academia Thanos em Guaranésia. Especialista em treinos de hipertrofia, ganho de força e acompanhamento técnico individualizado para garantir sua execução perfeita.",
    experienceYears: 8,
    image: "/src/assets/images/coach_vinicius_fair_1790856795681.jpg"
  },
  {
    id: "presley",
    name: "Presley",
    nickname: "Prof. Presley",
    role: "Professor Responsável & Treinamento Físico",
    cref: "CREF / MG",
    specialties: ["Treinamento Funcional", "Musculação Orientada", "Condicionamento Físico"],
    phone: "5535997757577",
    formattedPhone: "(35) 99775-7577",
    whatsappMessage: "Olá Professor Presley! Estive no site da Academia Thanos e gostaria de saber mais sobre os treinos e acompanhamento em Guaranésia.",
    bio: "Professor responsável pela Academia Thanos em Guaranésia. Foco em metodologia dinâmica, queima calórica, fortalecimento muscular e evolução constante de cada aluno.",
    experienceYears: 8,
    image: "/src/assets/images/coach_presley_photo_1790856196691.jpg"
  }
];

// Lutas e artes marciais removidas do catálogo
export const MODALITIES: Modality[] = [
  {
    id: "musculacao",
    title: "Musculação & Hipertrofia",
    category: "Força Pura",
    description: "Equipamentos articulados de primeira linha, anilhas olímpicas, halteres pesados e os professores Vinicius e Presley sempre presentes no salão para instruir sua execução em cada repetição.",
    features: ["Maquinário com biomecânica anatômica", "Área de peso livre completa", "Fichas de treino personalizadas", "Acompanhamento postural em tempo real"],
    image: "/src/assets/images/modalities_musculacao_1790776951324.jpg",
    intensity: "Muito Alta",
    coachName: "Prof. Vinicius & Prof. Presley",
    scheduleSummary: "Seg a Sex: 05:30 às 22:00 | Sáb: 07:00 às 16:00"
  },
  {
    id: "funcional",
    title: "Treinamento Funcional Thanos",
    category: "Condicionamento & Queima",
    description: "Circuitos intensos para queima calórica, aumento de resistência cardiovascular e fortalecimento do abdômen e pernas. Treinos dinâmicos e envolventes sob orientação direta.",
    features: ["Kettlebells, cordas navais e trenó", "Turmas com acompanhamento próximo", "Melhora de agilidade e mobilidade", "Acessível para iniciantes e avançados"],
    image: "/src/assets/images/modalities_combat_cross_1790776961214.jpg",
    intensity: "Alta",
    coachName: "Prof. Presley & Prof. Vinicius",
    scheduleSummary: "Turmas manhã, tarde e noite"
  },
  {
    id: "personal",
    title: "Personal Training Dedicado",
    category: "Atendimento 1-on-1",
    description: "Acelere sua transformação corporal com atenção individualizada de um dos nossos professores responsáveis durante 100% da sua sessão de treino.",
    features: ["Treinos milimetricamente ajustados", "Correção minuciosa de cada exercício", "Horários exclusivos a combinar", "Suporte contínuo via WhatsApp"],
    image: "/src/assets/images/coach_personal_training_1790776971204.jpg",
    intensity: "Personalizada",
    coachName: "Prof. Vinicius / Prof. Presley",
    scheduleSummary: "Horário exclusivo a combinar"
  }
];

export const SCHEDULE_BY_DAY: Record<string, ClassScheduleItem[]> = {
  "Segunda": [
    { id: "s1", time: "06:00 - 07:00", modality: "Funcional Wake-Up", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" },
    { id: "s2", time: "07:30 - 08:30", modality: "Circuito Cardio & Agilidade", coach: "Presley", room: "Arena Funcional", level: "Iniciante / Geral", duration: "60m" },
    { id: "s3", time: "09:00 - 10:00", modality: "Musculação Monitorada (Glúteos & Pernas)", coach: "Vinicius", room: "Sala Musculação", level: "Geral", duration: "60m" },
    { id: "s4", time: "17:00 - 18:00", modality: "Cross & Funcional Tarde", coach: "Presley", room: "Arena Funcional", level: "Intermediário", duration: "60m" },
    { id: "s5", time: "18:30 - 19:30", modality: "Musculação Hipertrofia (Membros Superiores)", coach: "Vinicius", room: "Sala Musculação", level: "Avançado", duration: "60m" },
    { id: "s6", time: "19:30 - 20:30", modality: "Treino Funcional de Alta Intensidade", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" }
  ],
  "Terça": [
    { id: "t1", time: "06:30 - 07:30", modality: "Circuito Queima Intensa", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" },
    { id: "t2", time: "08:00 - 09:00", modality: "Musculação Periodizada (Costas & Bíceps)", coach: "Vinicius", room: "Sala Musculação", level: "Geral", duration: "60m" },
    { id: "t3", time: "18:00 - 19:00", modality: "Alongamento & Mobilidade Articular", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" },
    { id: "t4", time: "19:15 - 20:15", modality: "Musculação Assistida Noite", coach: "Vinicius", room: "Sala Musculação", level: "Geral", duration: "60m" }
  ],
  "Quarta": [
    { id: "q1", time: "06:00 - 07:00", modality: "Funcional Wake-Up", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" },
    { id: "q2", time: "07:30 - 08:30", modality: "Circuito Cardio & Queima", coach: "Presley", room: "Arena Funcional", level: "Geral", duration: "60m" },
    { id: "q3", time: "17:30 - 18:30", modality: "Musculação Monitorada (Peito & Tríceps)", coach: "Vinicius", room: "Sala Musculação", level: "Geral", duration: "60m" },
    { id: "q4", time: "19:30 - 20:30", modality: "Funcional Core & Fortalecimento", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" }
  ],
  "Quinta": [
    { id: "qu1", time: "06:30 - 07:30", modality: "Circuito Queima Intensa", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" },
    { id: "qu2", time: "08:30 - 09:30", modality: "Musculação Periodizada (Pernas)", coach: "Vinicius", room: "Sala Musculação", level: "Geral", duration: "60m" },
    { id: "qu3", time: "18:00 - 19:00", modality: "Treino de Força & Abdômen", coach: "Vinicius", room: "Sala Musculação", level: "Intermediário", duration: "60m" },
    { id: "qu4", time: "19:15 - 20:15", modality: "Funcional Extreme", coach: "Presley", room: "Arena Funcional", level: "Alta", duration: "60m" }
  ],
  "Sexta": [
    { id: "se1", time: "06:00 - 07:00", modality: "Funcional Friday Burn", coach: "Presley", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" },
    { id: "se2", time: "08:00 - 09:00", modality: "Musculação Monitorada Full Body", coach: "Vinicius", room: "Sala Musculação", level: "Geral", duration: "60m" },
    { id: "se3", time: "18:00 - 19:00", modality: "Super Circuito Final de Semana", coach: "Presley & Vinicius", room: "Arena Funcional", level: "Todos os níveis", duration: "60m" }
  ],
  "Sábado": [
    { id: "sa1", time: "08:00 - 09:15", modality: "Super Aulão Funcional Thanos", coach: "Professores Vinicius & Presley", room: "Arena Funcional", level: "Aberto a todos", duration: "75m" },
    { id: "sa2", time: "09:30 - 16:00", modality: "Musculação Livre com Monitor", coach: "Vinicius & Presley", room: "Sala Musculação", level: "Geral", duration: "Livre" }
  ],
  "Domingo": [],
  "Feriados": [
    { id: "fe1", time: "08:00 - 12:00", modality: "Treino Especial de Feriado & Musculação Livre", coach: "Professores Vinicius & Presley", room: "Sala Musculação & Funcional", level: "Geral", duration: "08:00 às 12:00" }
  ]
};

// USER REQUEST:
// "e no Valores Transparentes coloca o plano mensal 80,00 e plano thanos vip 90,00"
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "mensal",
    name: "Plano Mensal",
    tagline: "Treine com total liberdade, sem taxa de adesão ou fidelidade",
    priceMonthly: 80.00,
    priceQuarterly: 75.00,
    priceAnnualMonthly: 70.00,
    highlight: "Sem Fidelidade",
    benefits: [
      "Acesso completo à área de musculação",
      "Instrutores credenciados no salão em todos os horários",
      "Ficha de treino personalizada e orientada",
      "Sem taxa de matrícula ou cancelamento",
      "Armários rotativos e duchas quentes",
      "Atendimento direto via WhatsApp com o professor"
    ]
  },
  {
    id: "thanos-vip",
    name: "Plano Thanos VIP",
    tagline: "O plano mais completo para máxima transformação física",
    popular: true,
    priceMonthly: 90.00,
    priceQuarterly: 85.00,
    priceAnnualMonthly: 80.00,
    highlight: "Mais Escolhido",
    benefits: [
      "Musculação Livre + Acesso às Aulas Coletivas",
      "Acesso livre a todo o Treinamento Funcional",
      "Avaliação física completa com bioimpedância periódica",
      "1 Convite mensal para trazer um amigo para treinar",
      "Camiseta oficial exclusiva Academia Thanos Guaranésia",
      "Acesso prioritário a eventos e workshops técnicos",
      "Acompanhamento e ajuste de cargas constante"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep1",
    name: "Carlos Eduardo Menezes",
    age: 34,
    timeTraining: "10 meses de Thanos",
    result: "-12kg de gordura e +6kg de massa magra",
    text: "Moro aqui em Guaranésia e a Thanos foi a melhor coisa para a minha rotina. O professor Vinicius e o professor Presley ajudam muito na execução do agachamento e na postura. O ambiente é super focado e os equipamentos são excelentes!",
    rating: 5,
    modality: "Musculação & Hipertrofia"
  },
  {
    id: "dep2",
    name: "Beatriz Nogueira",
    age: 29,
    timeTraining: "7 meses de Thanos",
    result: "Redução de 9cm de cintura e mais energia",
    text: "O Plano Thanos VIP vale cada centavo! Faço musculação e o funcional orientado pelo professor Presley. O atendimento no WhatsApp pelo (35) 99135-9857 é super atencioso e rápido.",
    rating: 5,
    modality: "Funcional & Musculação"
  },
  {
    id: "dep3",
    name: "Felipe Andrade",
    age: 38,
    timeTraining: "1 ano e meio",
    result: "Ganho expressivo de força e definição",
    text: "A localização na Rua Francisco Monteiro Dias Nº 380 é muito fácil de chegar. A academia tem um clima familiar mas ao mesmo tempo com pegada de alta performance. Recomendo de olhos fechados!",
    rating: 5,
    modality: "Musculação & Força"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Onde a academia fica exatamente em Guaranésia?",
    a: "Estamos localizados na Rua Francisco Monteiro Dias, Nº 380 - Bairro Bom Jesus, em Guaranésia - MG (CEP 37810-000). O local possui fácil acesso e vagas de estacionamento."
  },
  {
    q: "Como falar com o professor no WhatsApp?",
    a: "Basta clicar em qualquer botão de WhatsApp no site ou chamar diretamente no número (35) 99135-9857. Nosso professor responderá prontamente com todas as informações."
  },
  {
    q: "Quais são os valores dos planos?",
    a: "Nosso Plano Mensal é apenas R$ 80,00 (sem carência ou fidelidade) e o Plano Thanos VIP completo com todas as modalidades é apenas R$ 90,00 por mês."
  },
  {
    q: "Como funciona a aula experimental gratuita?",
    a: "Você não paga nada para conhecer! Basta clicar no botão de Aula Experimental ou chamar o professor no WhatsApp pelo (35) 99135-9857 para agendar seu dia e horário."
  },
  {
    q: "Iniciantes recebem instrução desde o primeiro dia?",
    a: "Sim! Na Academia Thanos você tem professores credenciados pelo CREF acompanhando seus treinos, montando sua rotina e ensinando a postura correta de cada máquina."
  }
];
