import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./Sidebar/Sidebar";
import AdminTopbar from "./Topbar/Topbar";
import "./admin.css";
import "./Dashboard/Dashboard.css";

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed((p) => !p);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      setSidebarCollapsed(mobile ? true : false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`admin-layout${sidebarCollapsed ? " sidebar-collapsed" : ""}`}>
      <AdminSidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        onItemClick={() => { if (isMobile) setSidebarCollapsed(true); }}
      />

      {isMobile && !sidebarCollapsed && (
        <div
          className="admin-sidebar-overlay"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <div className="admin-main">
        <AdminTopbar onSidebarToggle={toggleSidebar} />

        <div className="admin-content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
