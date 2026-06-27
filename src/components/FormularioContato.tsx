import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { CONTATO } from "@/data/site";

type Variante = "contato" | "parceiro";

interface FormularioContatoProps {
  variante?: Variante;
}

/**
 * Formulário reutilizável de contato.
 *
 * Observação para o Lovable / desenvolvimento:
 * Hoje o envio usa um fallback por e-mail (mailto) e não depende de backend.
 * Para gravar os contatos, conecte este formulário a um backend
 * (ex.: Supabase, n8n, formspree) trocando o conteúdo de `handleSubmit`.
 */
export const FormularioContato = ({ variante = "contato" }: FormularioContatoProps) => {
  const [enviado, setEnviado] = useState(false);
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    organizacao: "",
    perfil: "",
    mensagem: "",
  });

  const ehParceiro = variante === "parceiro";

  const atualizar = (campo: string, valor: string) =>
    setDados((d) => ({ ...d, [campo]: valor }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const assunto = ehParceiro
      ? "Quero ser parceiro da SBA Negócios"
      : "Contato pelo site — SBA Negócios";

    const corpo = [
      `Nome: ${dados.nome}`,
      `E-mail: ${dados.email}`,
      `Telefone: ${dados.telefone}`,
      `Organização: ${dados.organizacao}`,
      ehParceiro ? `Perfil: ${dados.perfil}` : null,
      "",
      "Mensagem:",
      dados.mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    // Fallback sem backend: abre o e-mail já preenchido.
    window.location.href = `mailto:${CONTATO.email}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;

    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 font-display text-xl font-semibold text-primary-dark">
          Mensagem preparada
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Abrimos seu e-mail com a mensagem pronta. Caso não tenha aberto, escreva
          direto para{" "}
          <a href={`mailto:${CONTATO.email}`} className="font-medium text-primary underline">
            {CONTATO.email}
          </a>
          .
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setEnviado(false)}
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input
            id="nome"
            required
            value={dados.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
            placeholder="Seu nome"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            required
            value={dados.email}
            onChange={(e) => atualizar("email", e.target.value)}
            placeholder="voce@exemplo.com.br"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone / WhatsApp</Label>
          <Input
            id="telefone"
            value={dados.telefone}
            onChange={(e) => atualizar("telefone", e.target.value)}
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organizacao">
            {ehParceiro ? "Empresa / Organização" : "Prefeitura / Empresa"}
          </Label>
          <Input
            id="organizacao"
            value={dados.organizacao}
            onChange={(e) => atualizar("organizacao", e.target.value)}
            placeholder={ehParceiro ? "Nome da sua empresa" : "Nome da organização"}
          />
        </div>
      </div>

      {ehParceiro && (
        <div className="space-y-2">
          <Label htmlFor="perfil">Como você pode somar?</Label>
          <Input
            id="perfil"
            value={dados.perfil}
            onChange={(e) => atualizar("perfil", e.target.value)}
            placeholder="Ex.: técnico, jurídico, representante, operador, tecnologia"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          required
          value={dados.mensagem}
          onChange={(e) => atualizar("mensagem", e.target.value)}
          placeholder={
            ehParceiro
              ? "Conte um pouco sobre sua atuação e onde você pode contribuir."
              : "Conte o que você precisa. Se for uma prefeitura, diga o nome da cidade."
          }
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {ehParceiro ? "Enviar candidatura" : "Enviar mensagem"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Ao enviar, você concorda em ser contatado pela SBA Negócios sobre este
        assunto.
      </p>
    </form>
  );
};
