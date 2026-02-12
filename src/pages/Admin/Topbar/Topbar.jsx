import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Topbar.css";

const AdminTopbar = ({ onSidebarToggle }) => {
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  // sample notifications (used for testing and toolbar count)
  const notifications = [
    { id: 1, icon: '🧾', color: 'blue', title: 'New order received', text: "Order #5342 has been placed — check details.", time: '15 minutes ago' },
    { id: 2, icon: '🔴', color: 'red', title: 'High server load', text: 'CPU usage reached 92% on instance A.', time: '1 hour ago' },
    { id: 3, icon: '⚠️', color: 'yellow', title: 'Payment failed', text: "Payment for subscription couldn't be processed.", time: 'Yesterday' },
    { id: 4, icon: '📦', color: 'blue', title: 'Shipment updated', text: 'Tracking number for order #5321 has a new status.', time: '2 hours ago' },
    { id: 5, icon: '💬', color: 'blue', title: 'New message', text: 'You have a new message from support.', time: '10 minutes ago' },
    { id: 6, icon: '✅', color: 'green', title: 'Backup completed', text: 'Daily backup finished successfully.', time: '3 hours ago' },
    { id: 7, icon: '🔔', color: 'blue', title: 'Reminder', text: 'Team meeting starts in 30 minutes.', time: '30 minutes ago' },
    { id: 8, icon: '🛠️', color: 'red', title: 'Deploy failed', text: 'Staging deploy failed: see logs.', time: '4 hours ago' },
    { id: 9, icon: '⭐', color: 'yellow', title: 'New review', text: 'A user left a new review on product XYZ.', time: 'Yesterday' },
    { id: 10, icon: '🔒', color: 'blue', title: 'Password changed', text: 'Your account password was changed.', time: '2 days ago' },
    { id: 11, icon: '📈', color: 'green', title: 'Sales report', text: 'Weekly sales report is ready to view.', time: 'Today' },
    { id: 12, icon: '🧾', color: 'blue', title: 'Invoice ready', text: 'Invoice #90123 is ready for download.', time: '5 minutes ago' }
  ];

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      // ignore errors
    }
  };
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);

  const toggleNotif = () => setNotifOpen(v => !v);

  useEffect(() => {
    const onDocClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setNotifOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);
  const toggleUser = () => setUserOpen(v => !v);

  useEffect(() => {
    const onDocClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setUserOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("adminToken");
      try { window.dispatchEvent(new Event('authChanged')); } catch (e) {}
    } catch (e) {}
    setUserOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="admin-topbar">
      <div className="admin-topbar-inner">
        {/* Left side */}
        <div className="topbar-left">
          <button className="topbar-menu-btn" onClick={onSidebarToggle} aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
          </button>
          <button className="topbar-icon-btn icon-plain" onClick={toggleFullscreen} aria-label={isFull ? "Exit fullscreen" : "Enter fullscreen"}>
            <i className={"bi " + (isFull ? "bi-fullscreen-exit" : "bi-fullscreen")} aria-hidden="true" />
          </button>
        </div>

        {/* Right side */}
        <div className="topbar-right">
          {/* Notifications */}
          {!isLogin && (
            <div className="notif-wrap" ref={notifRef}>
            <button onClick={toggleNotif} className="topbar-icon-btn notif-btn icon-plain" aria-label="Notifications" aria-expanded={notifOpen}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              {notifications && notifications.length > 0 && (
                <span className="topbar-badge green">{notifications.length}</span>
              )}
            </button>

            {notifOpen && (
              <div className="topbar-notif-dropdown" role="region" aria-label="Notifications">
                <div className="notif-header">
                  <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                    <strong>NOTIFICATIONS</strong>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <button className="mark-read" onClick={() => { /* placeholder */ }} style={{background:'none',border:'none',color:'#64748b',cursor:'pointer'}}>Mark all read</button>
                  </div>
                </div>
                <div className="notif-list">
                  {/* Sample notifications for testing */}
                  {notifications.map(n => (
                    <div className="notif-item" key={n.id}>
                      <div className={`notif-icon ${n.color}`}>{n.icon}</div>
                      <div className="notif-body">
                        <div className="notif-title">{n.title}</div>
                        <div className="notif-text">{n.text}</div>
                        <div className="notif-time">{n.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          )}

          {/* User */}
          {!isLogin && (
            <div className="user-wrap" ref={userRef}>
            <button className="topbar-user" onClick={toggleUser} aria-haspopup="true" aria-expanded={userOpen}>
              <div className="user-avatar">
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=eee&color=333&size=36" alt="John Doe" />
              </div>
              <span className="user-name">John Doe</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>

            {userOpen && (
              <div className="user-dropdown" role="menu" aria-label="User menu">
                <button className="user-dropdown-item" role="menuitem" onClick={() => { /* navigate to edit profile */ }}>
                  <span className="ud-icon">👤</span>
                  <span className="ud-label">Edit Profile</span>
                </button>
                <div className="user-divider" />
                <button className="user-dropdown-item" role="menuitem" onClick={handleLogout}>
                  <span className="ud-icon">⏻</span>
                  <span className="ud-label">Logout</span>
                </button>
              </div>
            )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
