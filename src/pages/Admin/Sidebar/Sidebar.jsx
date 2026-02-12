import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from "/assets/images/logo3.png";

const AdminSidebar = ({ collapsed, onToggle, onItemClick }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isInvoicesRoute = location.pathname.startsWith("/admin/invoices");

  useEffect(() => {
    // ensure invoices submenu stays open when we're on any invoices route (including nested)
    setOpenMenus((prev) => ({ ...prev, invoices: !!isInvoicesRoute }));
  }, [isInvoicesRoute]);

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside 
      className={`admin-sidebar${collapsed ? " collapsed" : ""}${isHovered ? " hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Brand / Logo - use site logo and header-style name/tagline */}
      <div className="sidebar-brand">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
        <button
          className={`sidebar-toggle-btn switch ${collapsed ? '' : 'active'}`}
          onClick={onToggle}
          aria-label="Toggle sidebar"
          aria-pressed={!collapsed}
        >
          <span className="switch-track">
            <span className="switch-thumb" />
          </span>
        </button>
      </div>

      <div className="sidebar-scroll">
        {/* GENERAL Section */}
        <div className="sidebar-section">
          <span className="section-label">GENERAL</span>
          <ul className="sidebar-menu">
            <li>
              <NavLink
                to="/admin/dashboard"
                end
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={onItemClick}
              >
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                </span>
                <span className="menu-text">Dashboard</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="sidebar-section">
          <span className="section-label">Inventory</span>
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/admin/products" className={({ isActive }) => isActive ? "active" : ""} onClick={onItemClick}>
                <span className="menu-icon">
                  <i className="bi bi-box-seam" aria-hidden="true"></i>
                </span>
                <span className="menu-text">Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/category" className={({ isActive }) => isActive ? "active" : ""} onClick={onItemClick}>
                <span className="menu-icon">
                  <i className="bi bi-grid" aria-hidden="true"></i>
                </span>
                <span className="menu-text">Category</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/low-stock" className={({ isActive }) => isActive ? "active" : ""} onClick={onItemClick}>
                <span className="menu-icon">
                  <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
                </span>
                <span className="menu-text">Low Stock</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* JOBS Section */}
        <div className="sidebar-section">
          <span className="section-label">Jobs</span>
          <ul className="sidebar-menu">
            {/* <li>
              <button className="menu-btn" onClick={() => toggleMenu("jobs")}>
                <span className="menu-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <span className="menu-text">Jobs</span>
                <span className={`menu-arrow ${openMenus.jobs ? "open" : ""}`}>›</span>
              </button>
            </li> */}
            <li>
              <NavLink to="/admin/jobs" className={({ isActive }) => isActive ? "active" : ""} onClick={onItemClick}>
                <span className="menu-icon">
                  <i className="bi bi-briefcase" aria-hidden="true"></i>
                </span>
                <span className="menu-text">Jobs</span>
              </NavLink>
            </li>
          </ul>
        </div> 
        
        {/* Invoice Section */}
         <div className="sidebar-section">
  <span className="section-label">Invoices</span>

      <ul className="sidebar-menu">
    <li>
      <button
        className={`menu-btn ${openMenus.invoices ? "active" : ""}`}
        onClick={() => toggleMenu("invoices")}
      >
        <span className="menu-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>

        <span className="menu-text">Invoices</span>
        <span className={`menu-arrow ${openMenus.invoices ? "open" : ""}`}>
          ›
        </span>
      </button>

      {/* SUBMENU */}
      {openMenus.invoices && (
        <ul className="submenu">

          <li>
            <NavLink
              to="/admin/invoices/create"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onItemClick}
            >
              Create Invoice
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/invoices/paid"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onItemClick}
            >
              Invoice Report
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to="/admin/invoices"
              end
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onItemClick}
            >
              Invoices
            </NavLink>
          </li> */}
        </ul>
      )}
    </li>
  </ul>
</div>

      </div>
    </aside>
  );
};

export default AdminSidebar;
