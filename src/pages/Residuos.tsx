import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SecaoCTA } from "@/components/SecaoCTA";
import { CardSolucao } from "@/components/CardSolucao";
import { solucoesPorTema } from "@/data/site";

const ESTAGIOS = [
  {
    numero: "01",
    titulo: "Teaser (grátis)",
    texto:
      "Uma primeira leitura da oportunidade, sem custo. Serve para entender se faz sentido seguir.",
  },
  {
    numero: "02",
    titulo: "Diagnóstico (pago)",
    texto:
      "Estudo a fundo da situação: o que existe, o volume, o que é possível e quais os caminhos.",
  },
  {
    numero: "03",
    titulo: "Estruturação",
    texto:
      "Organização do projeto: técnico, jurídico, modelo e atores. A SBA monta o arranjo que o torna viável.",
  },
  {
    numero: "04",
    titulo: "Intermediação",
    texto:
      "A SBA conecta cliente, operador, tecnologia e jurídico até o acordo. Quem executa é o operador, não a SBA.",
  },
];

const Residuos = () => {
  const segmentos = solucoesPorTema("Resíduos & Valorização");

  return (
    <Layout>
      <Hero
        compacto
        eyebrow="Resíduos & Valorização"
        titulo="Resíduo não é só custo. Bem estruturado, vira valor."
        subtitulo="A SBA não constrói usinas: estrutura o projeto e conecta cliente, operador, tecnologia e jurídico — do primeiro contato ao contrato. Atendemos o resíduo urbano do município, o grande gerador e o setor hospitalar."
        ctaPrincipal={{ label: "Conversar sobre um projeto", href: "/contato" }}
      />

      {/* Os 3 segmentos */}
      <section className="bg-background">
        <div className="container-sba py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 rule-gold" />
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Três frentes, sem misturar
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada tipo de resíduo tem regra, tecnologia e operador próprios. A
              SBA trata cada um na sua frente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {segmentos.map((s) => (
              <CardSolucao key={s.id} solucao={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Hub Conector */}
      <section className="bg-secondary/50">
        <div className="container-sba py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              O modelo Hub Conector
            </h2>
            <p className="mt-4 text-muted-foreground">
              Em vez de executar, a SBA articula. Trabalhamos em estágios, e cada
              um só avança quando faz sentido para o cliente.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ESTAGIOS.map((estagio) => (
              <li
                key={estagio.numero}
                className="rounded-lg border border-border bg-card p-6"
              >
                <span className="font-display text-3xl font-bold text-gold">
                  {estagio.numero}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-primary-dark">
                  {estagio.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {estagio.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tecnologia dos parceiros */}
      <section className="bg-background">
        <div className="container-sba py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="rule-gold mb-5" />
              <h2 className="font-display text-3xl font-bold text-primary-dark">
                A tecnologia vem de parceiros
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  A SBA trabalha com uma rede de parceiros de tecnologia e
                  operação para transformar resíduo em energia, biocombustível,
                  biofertilizante e outros produtos — conforme o tipo de material
                  e a realidade de cada cliente.
                </p>
                <p>
                  Isso significa que o município ou a empresa não precisa
                  escolher uma tecnologia sozinho: a SBA traz a opção adequada,
                  com quem já tem solução validada e em operação.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-7">
              <h3 className="font-display text-xl font-semibold text-primary-dark">
                Economia circular, na prática
              </h3>
              <p className="mt-3 text-muted-foreground">
                O objetivo é simples: tirar o resíduo do aterro e do passivo
                ambiental e colocá-lo de volta como valor — energia, receita ou
                conformidade. Os números variam caso a caso e ficam sob consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SecaoCTA
        titulo="Tem um desafio de resíduos na sua cidade ou empresa?"
        texto="Comece pelo teaser, sem custo. A partir dele, decidimos juntos se vale seguir para o diagnóstico."
        botao={{ label: "Conversar sobre um projeto", href: "/contato" }}
      />
    </Layout>
  );
};

export default Residuos;
