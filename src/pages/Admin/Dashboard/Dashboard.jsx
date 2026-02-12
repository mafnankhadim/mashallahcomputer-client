import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import AdminSidebar from "../Sidebar/Sidebar";
import AdminTopbar from "../Topbar/Topbar";
import "./Dashboard.css";

/* ---------- Chart Data ---------- */
const powerData = [
  { day: "Mon", kwh: 18.2 },
  { day: "Tue", kwh: 18.8 },
  { day: "Wed", kwh: 19.4 },
  { day: "Thu", kwh: 21.5 },
  { day: "Fri", kwh: 21.2 },
  { day: "Sat", kwh: 19.0 },
  { day: "Sun", kwh: 20.5 },
];

const salesData = [
  { month: "Jan", sales: 600 },
  { month: "Feb", sales: 800 },
  { month: "Mar", sales: 950 },
  { month: "Apr", sales: 1100 },
  { month: "May", sales: 1400 },
  { month: "Jun", sales: 1200 },
];

const regionData = [
  { name: "Region A", value: 26, color: "#ff9f43" },
  { name: "Region B", value: 44, color: "#ff6b6b" },
  { name: "Region C", value: 28, color: "#00d4aa" },
];

const trackingData = [
  { label: "General task loading", progress: 75 },
  { label: "Server performance", progress: 60 },
  { label: "Database optimization", progress: 88 },
];

/* ---------- Component ---------- */
const AdminDashboard = () => {
  const [powerView, setPowerView] = useState("week");
  const [salesTab, setSalesTab] = useState("charts");

  return (
    <>
      {/* ===== Stat Cards Row ===== */}
      <div className="stat-cards-row">
        <StatCard
          icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8l-2 4h12z"/></svg>}
          iconBg="#e6faf5"
          value="$95k"
          label="Revenue"
          change="+5.2%"
          changeType="up"
        />
        <StatCard
          icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b81" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
          iconBg="#fff0f3"
          value="18.63%"
          label="Growth Rate"
          change="+2.0%"
          changeType="down"
        />
        <StatCard
          icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>}
          iconBg="#e6faf5"
          value="$27k"
          label="Sales"
          change="+10.0%"
          changeType="up"
        />
        <StatCard
          icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9f43" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8l-2 4h12z"/></svg>}
          iconBg="#fff5eb"
          value="13700"
          label="Orders"
          change="+13.6%"
          changeType="down"
        />
      </div>

      {/* ===== Middle Row: Chart + Sales + Region ===== */}
      <div className="dashboard-row-3col">
        {/* Power Consumption Chart */}
        <div className="dash-card chart-card">
          <div className="card-header">
            <h3>Power consumption <span className="header-unit">(kWh/100km)</span></h3>
            <div className="header-tabs">
              <button className={powerView === "week" ? "active" : ""} onClick={() => setPowerView("week")}>Week</button>
              <button className={powerView === "month" ? "active" : ""} onClick={() => setPowerView("month")}>Month</button>
            </div>
          </div>
          <div className="chart-container" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={powerData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d4aa" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#00d4aa" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#999" }} axisLine={false} tickLine={false} />
                <YAxis domain={[17, 24]} tick={{ fontSize: 12, fill: "#999" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#2f3b48", border: "none", borderRadius: 6, color: "#fff", fontSize: 13 }}
                  formatter={(v) => [`${v} kWh`, ""]}
                />
                <Area type="monotone" dataKey="kwh" stroke="#00d4aa" strokeWidth={2.5} fillOpacity={1} fill="url(#colorKwh)" dot={{ r: 4, fill: "#00d4aa", stroke: "#fff", strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales / Charts + Tracking */}
        <div className="dash-card sales-card">
          <div className="card-header">
            <div className="header-tabs bordered">
              <button className={salesTab === "charts" ? "active" : ""} onClick={() => setSalesTab("charts")}>Charts</button>
              <button className={salesTab === "tracking" ? "active" : ""} onClick={() => setSalesTab("tracking")}>Tracking</button>
            </div>
          </div>
          {salesTab === "charts" ? (
            <div className="sales-chart-content">
              <div className="sales-number">
                <h2>1,934</h2>
                <span className="sales-badge up">↑ +8.0%</span>
              </div>
              <p className="sales-label">Sales</p>
              <div className="chart-container" style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#999" }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Bar dataKey="sales" radius={[3, 3, 0, 0]} fill="#00d4aa" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="tracking-content">
              <p style={{ color: "#888", fontSize: 13 }}>Tracking overview data...</p>
            </div>
          )}
        </div>

        {/* Region Statistics Donut */}
        <div className="dash-card region-card">
          <div className="card-header">
            <h3 className="region-title">Region Statistics</h3>
          </div>
          <div className="region-chart-wrap">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                >
                  {regionData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="region-center-label">
              <span className="region-amount">$6.9k</span>
              <span className="region-sub">Total</span>
            </div>
          </div>
          <div className="region-legend">
            {regionData.map((r, i) => (
              <span key={i} className="legend-item">
                <span className="legend-dot" style={{ background: r.color }} />
                {r.value}%
              </span>
            ))}
          </div>
          <div className="region-stats-row">
            <div className="region-stat">
              <span className="stat-val">$6.9k</span>
              <span className="stat-lbl">Revenue</span>
            </div>
            <div className="region-stat">
              <span className="stat-val">25</span>
              <span className="stat-lbl">Sales</span>
            </div>
            <div className="region-stat">
              <span className="stat-val">11</span>
              <span className="stat-lbl">Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Row ===== */}
      <div className="dashboard-row-2col">
        {/* Latest Update */}
        <div className="dash-card">
          <div className="card-header">
            <h3>Latest Update</h3>
            <button className="header-year-btn">2019 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></button>
          </div>
          <div className="latest-list">
            <LatestItem icon="📦" label="Total Products" sub="1.2k Products" value="$10.5k" />
            <LatestItem icon="📈" label="Total Sales" sub="39.2k Sales" value="26M" />
            <LatestItem icon="💰" label="Net Revenue" sub="12.4k Revenue" value="$8.2k" />
            <LatestItem icon="🛒" label="Total Orders" sub="8.3k Orders" value="1,934" />
          </div>
        </div>

        {/* Information Time Tracking */}
        <div className="dash-card">
          <div className="card-header">
            <h3>Information Time Tracking</h3>
            <button className="header-icon-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
            </button>
          </div>
          <div className="tracking-list">
            {trackingData.map((t, i) => (
              <div className="tracking-item" key={i}>
                <div className="tracking-info">
                  <span className="tracking-label">{t.label}</span>
                  <span className="tracking-desc">The system automatically detects the loading</span>
                </div>
                <div className="tracking-bar-wrap">
                  <div className="tracking-bar">
                    <div className="tracking-bar-fill" style={{ width: `${t.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Stats mini card */}
          <div className="total-stats-mini">
            <h4>Total Stats</h4>
            <p>Your critically analyzed success data regarding revenue and sales for the last quarter.</p>
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------- Sub Components ---------- */
const StatCard = ({ icon, iconBg, value, label, change, changeType }) => (
  <div className="stat-card">
    <div className="stat-card-icon" style={{ background: iconBg }}>{icon}</div>
    <div className="stat-card-info">
      <h3 className="stat-value">{value}</h3>
      <span className={`stat-change ${changeType}`}>{changeType === "up" ? "↑" : "↓"} {change}</span>
    </div>
    <p className="stat-label">{label}</p>
  </div>
);

const LatestItem = ({ icon, label, sub, value }) => (
  <div className="latest-item">
    <span className="latest-icon">{icon}</span>
    <div className="latest-info">
      <span className="latest-label">{label}</span>
      <span className="latest-sub">{sub}</span>
    </div>
    <span className="latest-value">{value}</span>
  </div>
);

export default AdminDashboard;
