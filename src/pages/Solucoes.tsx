import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SecaoCTA } from "@/components/SecaoCTA";
import { CardSolucao } from "@/components/CardSolucao";
import { TEMAS, solucoesPorTema } from "@/data/site";

const SUBTITULO_TEMA: Record<string, string> = {
  "Recuperação Tributária": "Receita que já é do município, de volta ao caixa.",
  "Resíduos & Valorização":
    "Do lixo urbano ao resíduo hospitalar — destinação correta e valor onde havia custo.",
  "Energia & Eficiência": "Menos conta de energia, mais eficiência para a cidade.",
  Ambiental: "Recuperar áreas, tratar água e abrir receita com carbono.",
  Infraestrutura: "Soluções que dão base e durabilidade às obras.",
  Cultura: "Projetos culturais viáveis, com captação organizada.",
};

const Solucoes = () => {
  return (
    <Layout>
      <Hero
        compacto
        eyebrow="Soluções"
        titulo="Tudo o que a SBA estrutura, em um só lugar."
        subtitulo="Organizamos o portfólio por tema. Cada solução traz o benefício para o cliente; os valores das frentes ambientais e de infraestrutura ficam sob consulta, caso a caso. No tributário, é sempre piso estimado e pagamento no êxito."
        ctaPrincipal={{ label: "Falar com a SBA", href: "/contato" }}
      />

      {TEMAS.map((tema, i) => {
        const solucoes = solucoesPorTema(tema);
        if (solucoes.length === 0) return null;
        return (
          <section
            key={tema}
            className={i % 2 === 0 ? "bg-background" : "bg-secondary/50"}
          >
            <div className="container-sba py-14 md:py-16">
              <div className="max-w-2xl">
                <div className="rule-gold mb-4" />
                <h2 className="font-display text-2xl font-bold text-primary-dark md:text-3xl">
                  {tema}
                </h2>
                {SUBTITULO_TEMA[tema] && (
                  <p className="mt-3 text-muted-foreground">
                    {SUBTITULO_TEMA[tema]}
                  </p>
                )}
              </div>

              <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {solucoes.map((s) => (
                  <CardSolucao key={s.id} solucao={s} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <SecaoCTA
        titulo="Não sabe por onde começar?"
        texto="Conte o seu caso — município ou empresa — e a SBA indica o melhor primeiro passo, sem compromisso."
        botao={{ label: "Falar com a SBA", href: "/contato" }}
      />
    </Layout>
  );
};

export default Solucoes;
