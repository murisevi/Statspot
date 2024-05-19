import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Asegúrate de crear este archivo CSS para estilos

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar-item" to="/">Dashboard</Link>
      <Link className="sidebar-item" to="/settings">Settings</Link>
      <Link className="sidebar-item" to="/reports">Reports</Link>
      <Link className="sidebar-item" to="/logout">Logout</Link>
    </div>
  );
};

export default Sidebar;
