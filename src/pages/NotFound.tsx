import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="bg-background">
        <div className="container-sba flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <div className="rule-gold mb-6" />
          <p className="font-display text-6xl font-bold text-primary-dark">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-primary-dark">
            Página não encontrada
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            O endereço que você tentou acessar não existe ou foi movido. Vamos
            voltar para um lugar conhecido?
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Voltar para o início</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
