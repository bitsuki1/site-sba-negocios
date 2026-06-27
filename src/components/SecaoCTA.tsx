import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SecaoCTAProps {
  titulo: string;
  texto: string;
  botao: { label: string; href: string };
}

export const SecaoCTA = ({ titulo, texto, botao }: SecaoCTAProps) => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-sba flex flex-col items-center gap-6 py-16 text-center md:py-20">
        <div className="rule-gold" />
        <h2 className="max-w-2xl font-display text-2xl font-bold md:text-3xl">
          {titulo}
        </h2>
        <p className="max-w-xl text-primary-foreground/85">{texto}</p>
        <Button asChild variant="gold" size="lg">
          <Link to={botao.href}>{botao.label}</Link>
        </Button>
      </div>
    </section>
  );
};
