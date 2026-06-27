# Site SBA Negócios

Site institucional da **SBA Negócios** — empresa de desenvolvimento de negócios e
consultoria para os setores público e privado. A SBA atua como gestora/PMO que
conecta as pontas (cliente, técnico, jurídico, tecnologia), origina e estrutura
projetos — **não executa obra**.

> **Marca:** sempre "SBA Negócios" (sigla **SBA**). As marcas antigas não devem
> aparecer em nenhum lugar do site.

---

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** (tokens da marca em `src/index.css`)
- **shadcn/ui** (componentes em `src/components/ui`)
- **React Router** (navegação entre páginas)
- **lucide-react** (ícones)

Mesmo stack do **Lovable**, pronto para editar lá depois.

---

## Como rodar localmente

Pré-requisito: **Node.js 18+**.

```bash
# 1. instalar dependências
npm install

# 2. rodar em modo de desenvolvimento
npm run dev
```

O site abre em `http://localhost:8080`.

Outros comandos:

```bash
npm run build     # gera a versão de produção em /dist
npm run preview   # pré-visualiza o build de produção
```

---

## Onde editar o conteúdo

A maior parte do texto que se repete está em **`src/data/site.ts`**:

- **`CONTATO`** — endereço, telefone, e-mail e domínio.
  - ⚠️ Defina o **domínio final** (hoje está `sbanegocios.com.br` como exemplo).
- **`NAV`** — itens do menu.
- **`AREAS`** — as duas áreas exibidas na Home.
- **`FRENTES`** — as cinco frentes da Área B (Resíduos & Infraestrutura).
- **`PASSOS_TRIBUTARIO`** — os 3 passos da Recuperação Tributária.

O texto mais longo de cada página está dentro do próprio arquivo em `src/pages/`.

---

## Regras de conteúdo (inegociáveis)

1. **Marca:** apenas "SBA Negócios". Nunca usar marcas antigas.
2. **Tributário:** nunca prometer "garantido" ou "comprovado". Usar
   "estimativa", "potencial", "piso seguro" e deixar claro **pagamento só no
   êxito**.
3. **Área B:** descrever o **benefício** (economia, receita nova, conformidade).
   **Não inventar números** — valores ficam "sob consulta".
4. **Tom:** PT-BR sério, direto, honesto e simples (sem jargão).

---

## Formulários

Hoje os formulários (`Contato` e `Seja um parceiro`) usam um **fallback por
e-mail**: ao enviar, abrem o e-mail do usuário já preenchido para
`eduardo@saobentoservicos.com.br`. Não há backend.

Para **gravar** os contatos, conecte o formulário a um backend (ex.: Supabase,
n8n ou um serviço de formulário) editando a função `handleSubmit` em
`src/components/FormularioContato.tsx`.

---

## Como conectar no Lovable

1. Este repositório já está no GitHub: `bitsuki1/site-sba-negocios`.
2. No Lovable, use **"Import from GitHub"** / conecte o repositório existente.
   - O Lovable reconhece o stack (Vite + React + TS + Tailwind + shadcn/ui).
3. Edite visualmente pelo chat do Lovable. O alias `@/` e a estrutura de pastas
   já seguem o padrão esperado pela ferramenta.

> Alternativa: criar um projeto novo no Lovable e colar o **prompt-semente**
> abaixo para reconstruir a base — depois ajustar o conteúdo.

---

## Paleta e tipografia

- **Azul institucional:** `#2E5AAC`
- **Azul escuro:** `#1a3a5c`
- **Dourado (acento):** `#C9A227`
- **Verde discreto (acento):** `#2F7D5B`
- **Fontes:** Poppins (títulos) + Inter (texto), via Google Fonts.

Os valores ficam como variáveis CSS (HSL) em `src/index.css`.

---

## Prompt-semente para o Lovable

> Crie um site institucional em Vite + React + TypeScript + Tailwind + shadcn/ui
> para a **SBA Negócios**, consultoria que conecta as pontas (cliente, técnico,
> jurídico, tecnologia) para os setores público e privado — não executa obra.
> Páginas: Home, Recuperação Tributária (Tema 1130 do STF — IRRF é do município,
> tom honesto, "piso estimado", pagamento só no êxito, sem "garantido"), Resíduos
> & Infraestrutura (modelo Hub Conector + 5 frentes em cards, benefícios e números
> "sob consulta"), Sobre, Seja um parceiro (formulário) e Contato.
> Use paleta azul (#2E5AAC / #1a3a5c) com acento dourado/verde discreto, fontes
> Poppins + Inter, design limpo, institucional, responsivo e acessível. Marca
> sempre "SBA Negócios"; nunca usar marcas antigas. Todo o texto em PT-BR simples.
