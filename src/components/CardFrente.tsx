import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Frente } from "@/data/site";

interface CardFrenteProps {
  frente: Frente;
}

export const CardFrente = ({ frente }: CardFrenteProps) => {
  const Icone = frente.icon;

  return (
    <Card
      className={cn(
        "h-full transition-shadow hover:shadow-md",
        frente.destaque && "border-gold/60 ring-1 ring-gold/30"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
            <Icone className="h-6 w-6" aria-hidden="true" />
          </span>
          {frente.destaque && (
            <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-semibold text-gold-foreground">
              Carro-chefe
            </span>
          )}
        </div>
        <CardTitle className="mt-4 text-lg">{frente.titulo}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {frente.descricao}
        </p>
        <div className="rounded-md bg-secondary/70 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Benefício
          </p>
          <p className="mt-1 text-sm text-foreground/90">{frente.beneficio}</p>
        </div>
        <p className="text-xs text-muted-foreground">Números sob consulta.</p>
      </CardContent>
    </Card>
  );
};
