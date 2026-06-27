import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import SetorPublico from "@/pages/SetorPublico";
import SetorPrivado from "@/pages/SetorPrivado";
import Solucoes from "@/pages/Solucoes";
import RecuperacaoTributaria from "@/pages/RecuperacaoTributaria";
import Residuos from "@/pages/Residuos";
import ResiduosHospitalares from "@/pages/ResiduosHospitalares";
import EstabilizadorSolo from "@/pages/EstabilizadorSolo";
import Sobre from "@/pages/Sobre";
import SejaParceiro from "@/pages/SejaParceiro";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setor-publico" element={<SetorPublico />} />
        <Route path="/setor-privado" element={<SetorPrivado />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/recuperacao-tributaria" element={<RecuperacaoTributaria />} />
        <Route path="/residuos" element={<Residuos />} />
        <Route path="/residuos-hospitalares" element={<ResiduosHospitalares />} />
        <Route path="/estabilizador-de-solo" element={<EstabilizadorSolo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/seja-um-parceiro" element={<SejaParceiro />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
