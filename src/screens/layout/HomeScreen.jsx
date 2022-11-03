import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../components/aside/Aside";
import { Header } from "../../components/Header";

function HomeScreen() {
  const [showAside, setShowAside] = useState(true);

  return (
    <div className="g-sidenav-show  bg-gray-200">
      <Header setShowAside={setShowAside} showAside={showAside} />

      <main
        className={`main-content position-relative h-100 border-radius-lg pb-5 ${
          !showAside && "ms-0"
        }`}
      >
        <Aside showAside={showAside} />
        <div className="container-fluid ">
          {/* aqui debe ir lo que se renderiza condicional */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
