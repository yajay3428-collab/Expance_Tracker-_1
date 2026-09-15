import React, { useState } from "react";
import {styles} from '../assets/dummyStyles'
import Navbar from "./Navbar";
import { Sidebar } from "lucide-react";





const Layout = ({onLogout, user}) => {
  const [sidebarCollapsed, setSidebarCollapsed] =useState(false);

  return (
    // <h2>hello world</h2>
    <div className={styles.layout.root}>
      
      <Navbar user={user} onLogout={onLogout}/>
      <Sidebar user={user} isCollapsed = {sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} /> 
    </div>
  );
};

export default Layout;
