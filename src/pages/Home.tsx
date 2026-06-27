import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileSearch, HandCoins, Scale } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SecaoCTA } from "@/components/SecaoCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SETORES, solucoesPorSetor } from "@/data/site";

const PROVAS = [
  {
    icon: ShieldCheck,
    titulo: "Segurança jurídica",
    texto:
      "No tributário, partimos de uma decisão definitiva do STF (Tema 1130). Não é interpretação nossa: é o que a Corte já decidiu.",
  },
  {
    icon: FileSearch,
    titulo: "Método auditável",
    texto:
      "Trabalhamos com dado público e método que pode ser conferido. Você entende de onde vem cada número.",
  },
  {
    icon: HandCoins,
    titulo: "Pagamento no êxito",
    texto:
      "No serviço tributário, os honorários são cobrados apenas sobre o que for de fato recuperado. Sem custo antecipado.",
  },
  {
    icon: Scale,
    titulo: "Boa gestão",
    texto:
      "Recuperar receita e destravar projetos é dever de boa gestão — alinhado à Lei de Responsabilidade Fiscal e à conformidade ambiental.",
  },
];

const Home = () => {
  return (
    <Layout>
      <Hero
        eyebrow="SBA Negócios"
        titulo="Estruturamos negócios para o setor público e privado."
        subtitulo="A SBA é a gestão que conecta as pontas — cliente, técnico, jurídico e tecnologia. Originamos e estruturamos projetos; não executamos obra. Da recuperação tributária do município à valorização de resíduos."
        ctaPrincipal={{ label: "Ver soluções", href: "/solucoes" }}
        ctaSecundario={{ label: "Falar com a SBA", href: "/contato" }}
      />

      {/* Duas portas — por setor */}
      <section className="bg-background">
        <div className="container-sba py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 rule-gold" />
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Por onde você começa
            </h2>
            <p className="mt-4 text-muted-foreground">
              A SBA atua em duas frentes, com soluções organizadas para quem
              decide. Escolha a sua porta.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SETORES.map((setor) => {
              const exemplos = solucoesPorSetor(setor.id).slice(0, 4);
              return (
                <Card
                  key={setor.id}
                  className="flex h-full flex-col transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-foreground">
                      {setor.publico}
                    </p>
                    <CardTitle className="mt-1 text-2xl text-primary-dark">
                      {setor.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="leading-relaxed text-muted-foreground">
                      {setor.resumo}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {exemplos.map((s) => (
                        <li
                          key={s.id}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary-dark"
                        >
                          {s.titulo}
                        </li>
                      ))}
                    </ul>
                    <div className="flex-1" />
                    <Link
                      to={setor.href}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Ver soluções para {setor.titulo.toLowerCase()}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prova de seriedade */}
      <section className="bg-secondary/50">
        <div className="container-sba py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Por que confiar na SBA
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trabalho sério é trabalho que você consegue verificar. Estes são os
              nossos princípios.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROVAS.map((prova) => {
              const Icone = prova.icon;
              return (
                <div
                  key={prova.titulo}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary-dark">
                    {prova.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {prova.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hub Conector */}
      <section className="bg-background">
        <div className="container-sba py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 rule-gold" />
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              A SBA não executa. A SBA conecta.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Funcionamos como um hub: originamos o projeto, organizamos o
              problema e ligamos prefeitura ou empresa aos operadores e às
              tecnologias parceiras que executam. Quem opera a usina, planta a
              floresta ou instala a usina solar é o parceiro especializado — o
              nosso papel é fazer o projeto acontecer e manter tudo coordenado.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/solucoes"
                className="inline-flex items-center justify-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Conhecer todas as soluções
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="border-t border-border bg-secondary/50">
        <div className="container-sba py-12">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Tecnologia e execução com parceiros estabelecidos
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "CSTR — tratamento e valorização de resíduos",
              "ConAid CBR Plus — estabilização de solo",
              "Dynacal — pavimentação",
            ].map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary-dark"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SecaoCTA
        titulo="Quer saber por onde a sua cidade ou empresa pode começar?"
        texto="Conte o seu caso. No tributário, dado público e honorários só no êxito; nas demais frentes, um diagnóstico antes de qualquer compromisso."
        botao={{ label: "Falar com a SBA", href: "/contato" }}
      />
    </Layout>
  );
};

export default Home;
