import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, FileSearch, HandCoins, Scale } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SecaoCTA } from "@/components/SecaoCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AREAS } from "@/data/site";

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
    titulo: "Boa gestão fiscal",
    texto:
      "Recuperar o que é do município é também um dever de boa gestão, alinhado à Lei de Responsabilidade Fiscal (LRF).",
  },
];

const Home = () => {
  return (
    <Layout>
      <Hero
        eyebrow="SBA Negócios"
        titulo="Estruturamos negócios para o setor público e privado."
        subtitulo="A SBA é a gestão que conecta as pontas — cliente, técnico, jurídico e tecnologia. Originamos e estruturamos projetos: da recuperação tributária do município à infraestrutura ambiental."
        ctaPrincipal={{ label: "Conhecer as soluções", href: "/recuperacao-tributaria" }}
        ctaSecundario={{ label: "Falar com a SBA", href: "/contato" }}
      />

      {/* Áreas de atuação */}
      <section className="bg-background">
        <div className="container-sba py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 rule-gold" />
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Duas áreas, um jeito de trabalhar
            </h2>
            <p className="mt-4 text-muted-foreground">
              A SBA não executa obra. Atuamos como gestora: organizamos o projeto,
              conectamos quem precisa estar junto e conduzimos até o resultado.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {AREAS.map((area) => (
              <Card key={area.id} className="flex h-full flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-dark">
                    {area.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 leading-relaxed text-muted-foreground">
                    {area.resumo}
                  </p>
                  <Link
                    to={area.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
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

      <SecaoCTA
        titulo="Quer saber quanto a sua cidade tem a recuperar?"
        texto="Solicite um estudo da sua cidade. Dado público, método auditável e honorários só no êxito."
        botao={{ label: "Solicitar estudo da minha cidade", href: "/contato" }}
      />
    </Layout>
  );
};

export default Home;
