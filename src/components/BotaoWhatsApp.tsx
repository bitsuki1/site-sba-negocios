import { MessageCircle } from "lucide-react";
import { CONTATO } from "@/data/site";

/**
 * Botão flutuante de WhatsApp — presente em todas as páginas (via Layout).
 * Canal de maior conversão para o público B2G/B2B, especialmente no mobile.
 */
export const BotaoWhatsApp = () => {
  const msg = encodeURIComponent(
    "Olá! Cheguei pelo site da SBA Negócios e gostaria de conversar."
  );

  return (
    <a
      href={`https://wa.me/${CONTATO.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a SBA no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
};
