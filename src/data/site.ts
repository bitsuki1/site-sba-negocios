// ============================================================================
// SBA Negócios — conteúdo central do site
// Edite aqui os dados que se repetem (contato, navegação, frentes da Área B).
// Marca: sempre "SBA Negócios". Nunca use marcas antigas.
// ============================================================================

import {
  Flame,
  TreePine,
  Layers,
  CalendarRange,
  SunMedium,
  type LucideIcon,
} from "lucide-react";

export const MARCA = {
  nome: "SBA Negócios",
  sigla: "SBA",
  tagline: "Desenvolvimento de negócios e consultoria",
};

export const CONTATO = {
  endereco: "Rua XV de Novembro, 200 — 15º andar",
  bairro: "Sé, Centro Histórico — São Paulo/SP",
  telefone: "(11) 99157-4850",
  telefoneLink: "+5511991574850",
  whatsapp: "5511991574850",
  email: "eduardo@saobentoservicos.com.br",
  // TODO: definir domínio final (ex.: sbanegocios.com.br)
  dominio: "sbanegocios.com.br",
};

export const NAV = [
  { label: "Início", href: "/" },
  { label: "Recuperação Tributária", href: "/recuperacao-tributaria" },
  { label: "Resíduos & Infraestrutura", href: "/residuos-infraestrutura" },
  { label: "Sobre", href: "/sobre" },
  { label: "Seja um parceiro", href: "/seja-um-parceiro" },
  { label: "Contato", href: "/contato" },
];

export interface Area {
  id: string;
  titulo: string;
  resumo: string;
  href: string;
}

export const AREAS: Area[] = [
  {
    id: "tributaria",
    titulo: "Recuperação Tributária",
    resumo:
      "Com a decisão definitiva do STF (Tema 1130), o IRRF retido nos pagamentos do município aos seus fornecedores pertence ao próprio município. A SBA levanta, nas contas públicas, quanto há a recuperar dos últimos 5 anos e quanto passa a entrar daqui pra frente. Honorários 100% no êxito.",
    href: "/recuperacao-tributaria",
  },
  {
    id: "residuos",
    titulo: "Resíduos & Infraestrutura Ambiental",
    resumo:
      "No modelo Hub Conector, a SBA liga prefeitura, operador, tecnologia e jurídico — do teaser ao contrato. Cinco frentes, de usina de resíduos a energia solar e iluminação pública, sempre com foco em economia, receita nova e conformidade.",
    href: "/residuos-infraestrutura",
  },
];

export interface Frente {
  id: string;
  titulo: string;
  descricao: string;
  beneficio: string;
  icon: LucideIcon;
  destaque?: boolean;
}

export const FRENTES: Frente[] = [
  {
    id: "waste-to-energy",
    titulo: "Usina de Resíduos (Waste-to-Energy)",
    descricao:
      "O lixo urbano deixa de ser custo e passa a gerar energia. É o nosso carro-chefe na Área B.",
    beneficio:
      "Destinação adequada dos resíduos, redução de aterro e uma nova fonte de energia para o município.",
    icon: Flame,
    destaque: true,
  },
  {
    id: "recompor-reflorestar",
    titulo: "Recompor & Reflorestar",
    descricao:
      "Restauração e reflorestamento de áreas, com possibilidade de geração de crédito de carbono.",
    beneficio:
      "Conformidade ambiental, recuperação de áreas degradadas e potencial de receita com carbono.",
    icon: TreePine,
  },
  {
    id: "estabilizador-solo",
    titulo: "Estabilizador de Solo",
    descricao:
      "Solução para obras e infraestrutura que melhora a base do solo onde se vai construir.",
    beneficio:
      "Mais durabilidade nas obras e redução de custos de manutenção ao longo do tempo.",
    icon: Layers,
  },
  {
    id: "eventos-cultura",
    titulo: "Eventos & Projetos Culturais",
    descricao:
      "Estruturação e captação de recursos para eventos e projetos culturais do município.",
    beneficio:
      "Movimentação da economia local e projetos viáveis, com captação organizada.",
    icon: CalendarRange,
  },
  {
    id: "energia-fotovoltaica",
    titulo: "Energia: Fotovoltaica & Iluminação Pública",
    descricao:
      "Usinas solares para abastecer prédios públicos e modernização da iluminação municipal.",
    beneficio:
      "Economia direta na conta de energia e iluminação pública mais eficiente.",
    icon: SunMedium,
  },
];

// Passos didáticos da Recuperação Tributária
export const PASSOS_TRIBUTARIO = [
  {
    numero: "01",
    titulo: "Levantamento",
    texto:
      "A partir de dados públicos das contas do município, a SBA estima quanto há de IRRF a recuperar dos últimos 5 anos e quanto passa a entrar daqui pra frente.",
  },
  {
    numero: "02",
    titulo: "Estudo da sua cidade",
    texto:
      "Você recebe um estudo com o valor de piso estimado e o método utilizado — dado público e auditxe1vel, sem nenhum custo antecipado.",
  },
  {
    numero: "03",
    titulo: "Confirmação e recuperação",
    texto:
      "Na fase seguinte, o valor é confirmado documento a documento (responsabilidade do município). Os honorários são cobrados apenas sobre o que de fato for recuperado.",
  },
];
