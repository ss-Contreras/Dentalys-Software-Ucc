// import "../static/vendor/fontawesome-free/css/all.min.css";
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <div  style={{ display: 'flex', height: '85.3vh', overflow: 'scroll initial', position: 'sticky',top: '11.5vh', padding: '5px', backgroundColor: '#333', borderRadius: '10px'} }>
      <CDBSidebar textColor="#fff" backgroundColor="#333" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Cuenta
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact  activeClassName="activeClicked" to="/listado/pacientes">
              <CDBSidebarMenuItem icon="columns">Agendamiento</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact  activeClassName="activeClicked" to="/tables">
              <CDBSidebarMenuItem icon="table">Recordatorio</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact  activeClassName="activeClicked" to="/profile">
              <CDBSidebarMenuItem icon="user">Pacientes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact  activeClassName="activeClicked" to="/analytics">
              <CDBSidebarMenuItem icon="chart-line">Calendario</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact  activeClassName="activeClicked" to="/form/medicalrecord">
              <CDBSidebarMenuItem icon="chart-line">Form</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};


export default Aside;
