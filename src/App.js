import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { EditarProducto } from "./components/EditarProducto";
import { Header } from "./components/Header";
import { NuevoProducto } from "./components/NuevoProducto";
import { Productos } from "./components/Productos";
import { BrowserRouter as Switch } from "react-router-dom";
import Aside from "./components/aside/Aside";
import HomeScreen from "./screens/layout/HomeScreen";
import './App.css';
import MedicalRecord from "./pages/medical_record/MedicalRecord";
import AgendamientoPacienteScreen from "./screens/AgendamientoPacienteScreen"
import RecordatorioScreen from "./screens/RecordatorioScreen";
import Index from "./screens/IndexScreen"
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <Header/>

        <div className="app-container">
          <div className="app-container__aside">
            <Aside/>
          </div>
          <div className="app-container__content">
            <Routes>
              <Route path="/productos/nuevo" element={<AgendamientoPacienteScreen />} />

              <Route path="/productos/editar/:id" element={<EditarProducto />} />

              <Route path="/listado/pacientes" element={<Productos />} />

              <Route path="/header/recordatorio" element={<RecordatorioScreen />} />

              <Route path="/form/medicalrecord" element={<MedicalRecord />} />

            </Routes>
          </div>
        
          
        </div>
      </Provider>
    </Router>
  );
}

export default App;