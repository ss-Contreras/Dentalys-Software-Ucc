import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Aside from "../../../App.js";
import Pacientes from "../PacientesScreen";
import AgendamientoPacientesScreen from "../AgendamientoPacienteScreen"

const AsideRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Aside />} /> */}

      <Route path="aside">
        <Route path="pacientes" element={<Pacientes />} />

        <Route path="agendamiento-pacientes" element={<AgendamientoPacientesScreen />} />

      </Route>
    </Routes>
  );
};

export default AsideRoutes;
