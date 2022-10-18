import React from 'react';
import {
  CDBBadge,
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarSubmenu,
} from 'cdbreact-pro';
import { NavLink } from 'react-router-dom';

const ProSidebar = () => {
  return (

  <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
  <CDBSidebar textColor="#fff" backgroundColor="#333">
    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
      <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        Sidebar
      </a>
    </CDBSidebarHeader>

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

export default ProSidebar;