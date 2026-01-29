import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AntLayout from "./components/antd/AntLayout";
import AntFooter from "./components/antd/AntFooter";
import HomeAnt from "./pages/HomeAnt";
import ListadoAnt from "./pages/ListadoAnt";
import EstadisticaAnt from "./pages/EstadisticasAnt";
import InformacionAnt from "./pages/InformacionAnt";


export default function App() {
  return (
    <BrowserRouter>
      <AntLayout>
        <Routes>
          <Route path="/" element={<HomeAnt />} />
          <Route path="/listado" element={<ListadoAnt/>} />
          <Route path="/estadisticas" element={<EstadisticaAnt/>} />
          <Route path="/informacion" element={<InformacionAnt/>} />
        </Routes>
      </AntLayout>

      <AntFooter />
    </BrowserRouter>
  );
}

