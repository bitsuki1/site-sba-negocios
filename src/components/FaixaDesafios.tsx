import { AlertCircle } from "lucide-react";
import { DESAFIOS, type Setor } from "@/data/site";

export const FaixaDesafios = ({ setor }: { setor: Setor }) => {
  const d = DESAFIOS[setor];
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="container-sba py-12 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-center">
          <h2 className="font-display text-2xl font-bold text-primary-dark">
            {d.titulo}
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {d.itens.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
              >
                <AlertCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground"
                  aria-hidden="true"
                />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
