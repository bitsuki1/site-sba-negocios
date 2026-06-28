import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CONTATO, MARCA } from "@/data/site";

// Rascunho de Política de Privacidade alinhado à LGPD (Lei 13.709/2018).
// ⚠️ Revisar com o jurídico antes de tratar como texto final.

const Bloco = ({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="font-display text-xl font-semibold text-primary-dark">
      {titulo}
    </h2>
    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  </section>
);

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <Hero
        compacto
        eyebrow="Privacidade"
        titulo="Política de Privacidade"
        subtitulo="Como a SBA Negócios trata os dados pessoais enviados pelo site, em conformidade com a LGPD (Lei 13.709/2018)."
      />

      <section className="bg-background">
        <div className="container-sba max-w-3xl space-y-10 py-16 md:py-20">
          <p className="text-sm text-muted-foreground">
            Última atualização: junho de 2026.
          </p>

          <Bloco titulo="1. Quem é o controlador">
            <p>
              O controlador dos dados é a {MARCA.nome}, com contato em{" "}
              <a
                href={`mailto:${CONTATO.email}`}
                className="font-medium text-primary hover:text-primary-dark"
              >
                {CONTATO.email}
              </a>
              . Endereço: {CONTATO.endereco}, {CONTATO.bairro}.
            </p>
          </Bloco>

          <Bloco titulo="2. Quais dados coletamos">
            <p>
              Coletamos apenas os dados que você nos envia voluntariamente pelos
              formulários de contato e de parceria: <strong>nome</strong>,{" "}
              <strong>e-mail</strong>, <strong>telefone</strong>,{" "}
              <strong>organização</strong>, <strong>perfil de atuação</strong>{" "}
              (no caso de parceiros) e o <strong>conteúdo da mensagem</strong>.
              Não coletamos dados sensíveis e não exigimos cadastro para navegar.
            </p>
          </Bloco>

          <Bloco titulo="3. Para que usamos">
            <p>
              Os dados são usados exclusivamente para responder ao seu contato,
              avaliar o seu caso e dar andamento à conversa comercial. A base
              legal é o seu consentimento e o legítimo interesse em atender a uma
              solicitação que você mesmo iniciou (art. 7º da LGPD).
            </p>
          </Bloco>

          <Bloco titulo="4. Com quem compartilhamos">
            <p>
              Não vendemos nem cedemos seus dados. Eles são tratados pela equipe
              da SBA e por operadores de tecnologia que viabilizam o site,
              estritamente para os fins acima:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                <strong>Supabase</strong> — armazenamento seguro dos contatos
                enviados.
              </li>
              <li>
                <strong>Resend</strong> — envio do aviso de novo contato à nossa
                equipe.
              </li>
            </ul>
            <p>
              Quando um projeto avança, dados estritamente necessários podem ser
              compartilhados com parceiros técnicos ou jurídicos envolvidos,
              sempre com a sua ciência.
            </p>
          </Bloco>

          <Bloco titulo="5. Por quanto tempo guardamos">
            <p>
              Mantemos os dados pelo tempo necessário ao atendimento e ao
              relacionamento comercial, ou até que você solicite a exclusão. Após
              isso, são eliminados, salvo obrigação legal de retenção.
            </p>
          </Bloco>

          <Bloco titulo="6. Seus direitos">
            <p>
              Você pode, a qualquer momento, solicitar acesso, correção,
              portabilidade, anonimização ou exclusão dos seus dados, além de
              revogar o consentimento. Basta escrever para{" "}
              <a
                href={`mailto:${CONTATO.email}`}
                className="font-medium text-primary hover:text-primary-dark"
              >
                {CONTATO.email}
              </a>
              .
            </p>
          </Bloco>

          <Bloco titulo="7. Cookies e terceiros">
            <p>
              O site não usa cookies de rastreamento para publicidade. Carregamos
              fontes do Google Fonts, o que implica uma requisição aos servidores
              do Google — sem identificá-lo pessoalmente para a SBA.
            </p>
          </Bloco>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidade;
