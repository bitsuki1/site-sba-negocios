import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import RecuperacaoTributaria from "@/pages/RecuperacaoTributaria";
import ResiduosInfraestrutura from "@/pages/ResiduosInfraestrutura";
import Sobre from "@/pages/Sobre";
import SejaParceiro from "@/pages/SejaParceiro";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recuperacao-tributaria" element={<RecuperacaoTributaria />} />
        <Route path="/residuos-infraestrutura" element={<ResiduosInfraestrutura />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/seja-um-parceiro" element={<SejaParceiro />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
