import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SecaoCTA } from "@/components/SecaoCTA";
import { CardFrente } from "@/components/CardFrente";
import { FRENTES } from "@/data/site";

const ESTAGIOS = [
  {
    numero: "01",
    titulo: "Teaser (grátis)",
    texto:
      "Uma primeira leitura da oportunidade para o município, sem custo. Serve para entender se faz sentido seguir.",
  },
  {
    numero: "02",
    titulo: "Diagnóstico (pago)",
    texto:
      "Estudo mais a fundo da situação local: o que existe, o que é possível e quais os caminhos.",
  },
  {
    numero: "03",
    titulo: "Estruturação",
    texto:
      "Organização do projeto: técnico, jurídico, modelo e atores. A SBA monta o arranjo que torna o projeto viável.",
  },
  {
    numero: "04",
    titulo: "Intermediação",
    texto:
      "A SBA conecta prefeitura, operador, tecnologia e jurídico até o acordo. Quem executa a obra é o operador, não a SBA.",
  },
];

const ResiduosInfraestrutura = () => {
  return (
    <Layout>
      <Hero
        compacto
        eyebrow="Resíduos & Infraestrutura Ambiental"
        titulo="Conectamos as pontas para destravar projetos."
        subtitulo="No modelo Hub Conector, a SBA liga prefeitura, operador, tecnologia e jurídico. Não construímos usinas: estruturamos o projeto e conduzimos do primeiro contato ao contrato."
        ctaPrincipal={{ label: "Conversar sobre um projeto", href: "/contato" }}
      />

      {/* Hub Conector */}
      <section className="bg-background">
        <div className="container-sba py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 rule-gold" />
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              O modelo Hub Conector
            </h2>
            <p className="mt-4 text-muted-foreground">
              Em vez de executar, a SBA articula. Trabalhamos em estágios, e cada
              estágio só avança quando faz sentido para o município.
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

      {/* 5 frentes */}
      <section className="bg-secondary/50">
        <div className="container-sba py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Nossas cinco frentes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Em todas elas, o foco é o benefício para o município: economia,
              receita nova e conformidade. Os valores variam caso a caso e ficam
              sob consulta.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FRENTES.map((frente) => (
              <CardFrente key={frente.id} frente={frente} />
            ))}
          </div>
        </div>
      </section>

      <SecaoCTA
        titulo="Tem um projeto ou um desafio na sua cidade?"
        texto="Comece pelo teaser, sem custo. A partir dele, decidimos juntos se vale seguir para o diagnóstico."
        botao={{ label: "Conversar sobre um projeto", href: "/contato" }}
      />
    </Layout>
  );
};

export default ResiduosInfraestrutura;
