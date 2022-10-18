import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { EditarProducto } from "./components/EditarProducto";
import { Header } from "./components/Header";
import { NuevoProducto } from "./components/NuevoProducto";
import { Productos } from "./components/Productos";
import { BrowserRouter as Switch } from "react-router-dom";
import Aside from "./components/Aside";
import HomeScreen from "./screens/layout/HomeScreen";
import './App.css';

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

        <div className="com-container">
        <Aside/>
          <Routes>

            <Route path="/productos/nuevo" element={<AgendamientoPacienteScreen />} />
            
            <Route path="/productos/editar/:id" element={<EditarProducto />} />

            <Route path="/listado/pacientes" element={<Productos />} />

            <Route path="/header/recordatorio" element={<RecordatorioScreen />} />

          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;