import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CONTATO } from "@/data/site";

// Política de Privacidade alinhada à LGPD (Lei 13.709/2018).
// Reflete o que o site realmente faz: coleta de leads via formulário, gravados
// no Supabase por Edge Function e notificados por e-mail (Resend).

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

          <Bloco titulo="1. Controlador e encarregado">
            <p>
              O tratamento dos dados pessoais enviados por este site é realizado
              pela <strong>SBA Negócios</strong> (São Bento Serviços), com
              endereço em {CONTATO.endereco}, {CONTATO.bairro}.
            </p>
            <p>
              As solicitações sobre os seus dados e o contato com o encarregado
              pelo tratamento de dados (DPO) podem ser feitos por{" "}
              <a
                href={`mailto:${CONTATO.email}`}
                className="font-medium text-primary hover:text-primary-dark"
              >
                {CONTATO.email}
              </a>
              .
            </p>
          </Bloco>

          <Bloco titulo="2. Quais dados coletamos">
            <p>
              Coletamos apenas os dados que você nos envia voluntariamente pelos
              formulários de contato e de parceria: <strong>nome</strong>,{" "}
              <strong>e-mail</strong>, <strong>telefone</strong>,{" "}
              <strong>organização</strong>, <strong>perfil de atuação</strong>{" "}
              (no caso de parceiros) e o <strong>conteúdo da mensagem</strong>.
              Não coletamos dados sensíveis e não é preciso cadastro para navegar.
            </p>
          </Bloco>

          <Bloco titulo="3. Para que usamos e com que base legal">
            <p>
              Os dados são usados exclusivamente para responder ao seu contato,
              avaliar o seu caso e dar andamento à conversa comercial. As bases
              legais são o seu <strong>consentimento</strong> e o{" "}
              <strong>legítimo interesse</strong> em atender a uma solicitação que
              você mesmo iniciou (art. 7º, I e IX, da LGPD). Não usamos seus dados
              para decisões automatizadas nem para publicidade de terceiros.
            </p>
          </Bloco>

          <Bloco titulo="4. Com quem compartilhamos (operadores)">
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

          <Bloco titulo="5. Transferência internacional">
            <p>
              Os operadores acima (Supabase e Resend) podem processar e armazenar
              dados em servidores localizados fora do Brasil, inclusive nos
              Estados Unidos. Essas transferências observam as salvaguardas
              exigidas pela LGPD (art. 33), com prestadores que adotam medidas de
              segurança reconhecidas pelo mercado.
            </p>
          </Bloco>

          <Bloco titulo="6. Por quanto tempo guardamos">
            <p>
              Mantemos os dados pelo tempo necessário ao atendimento e ao
              relacionamento comercial, ou até que você solicite a exclusão. Após
              isso, são eliminados, salvo obrigação legal de retenção.
            </p>
          </Bloco>

          <Bloco titulo="7. Segurança">
            <p>
              Adotamos medidas técnicas para proteger os seus dados: o envio ao
              banco passa por uma função no servidor com credencial restrita; o
              site nunca acessa a base diretamente (Row Level Security); e o
              tráfego é cifrado por HTTPS. Nenhum sistema é totalmente inviolável,
              mas trabalhamos continuamente para reduzir riscos.
            </p>
          </Bloco>

          <Bloco titulo="8. Seus direitos">
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
              . Você também tem o direito de apresentar reclamação à Autoridade
              Nacional de Proteção de Dados (ANPD).
            </p>
          </Bloco>

          <Bloco titulo="9. Cookies e terceiros">
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
