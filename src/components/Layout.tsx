import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { applySeo } from "@/lib/seo";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Ao trocar de página: volta ao topo e atualiza título/metas (SEO por rota).
  useEffect(() => {
    window.scrollTo(0, 0);
    applySeo(pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <Footer />
      <BotaoWhatsApp />
    </div>
  );
};
