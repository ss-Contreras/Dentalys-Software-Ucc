// import "../static/vendor/fontawesome-free/css/all.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Aside = () => {

  const dispatch = useDispatch();

  return (
    // <aside
    //   className="sidenav navbar navbar-vertical border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark"
    //   id="sidenav-main"
    // >
    //   <Scrollbars style={{ width: "100%", height: "100%" }}>
    //   <div className="sidenav-header">
    //       <Link className="navbar-brand m-0" to="/dashboard">
    //         {/* <img
    //           src={LogoCormacarena}
    //           className="navbar-brand-img h-100"
    //           alt="main_logo"
    //         /> */}
    //         <span className="ms-1 font-weight-bold text-white">
    //           Bia - Cormacarena
    //         </span>
    //       </Link>
    //     </div>
    //     <hr className="horizontal light mt-0 mb-2" />

    //     <div
    //       className="collapse navbar-collapse w-auto h-auto"
    //       id="sidenav-collapse-main"
    //     >
          
    //     </div>


    //   </Scrollbars>
    // </aside>


    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Cuenta
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="agendamiento" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Agendamiento</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="pacientes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Pacientes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="finanzas" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Finanzas</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="radiografia" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Radiografia</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="inventario" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Inventario</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="configuracion" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="lock">configuracion</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Tu software odontologico
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default Aside;
