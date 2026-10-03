import { useState } from "react";

function Sidebar({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);

  const navigate = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`client-sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="sidebar-logo">
          <div className="logo-circle">P</div>
          <span>ReferPro</span>
        </div>

        <nav className="sidebar-navigation">

          <button
            className={`sidebar-item ${
              currentPage === "dashboard" ? "active" : ""
            }`}
            onClick={() => navigate("dashboard")}
          >
            <span className="nav-icon">⌂</span>
            <span>Dashboard</span>
          </button>

          <button
            className={`sidebar-item ${
              currentPage === "refer-client" ? "active" : ""
            }`}
            onClick={() => navigate("refer-client")}
          >
            <span className="nav-icon">♙</span>
            <span>Refer a Client</span>
          </button>

          <button
            className={`sidebar-item ${
              currentPage === "my-referrals" ? "active" : ""
            }`}
            onClick={() => navigate("my-referrals")}
          >
            <span className="nav-icon">♧</span>
            <span>My Referrals</span>
          </button>

          <button
            className={`sidebar-item ${
              currentPage === "my-rewards" ? "active" : ""
            }`}
            onClick={() => navigate("my-rewards")}
          >
            <span className="nav-icon">▣</span>
            <span>My Rewards</span>
          </button>

          <button
            className={`sidebar-item ${
              currentPage === "notifications" ? "active" : ""
            }`}
            onClick={() => navigate("notifications")}
          >
            <span className="nav-icon">♧</span>
            <span>Notifications</span>
            <span className="notification-badge">3</span>
          </button>

          <button
            className={`sidebar-item ${
              currentPage === "profile" ? "active" : ""
            }`}
            onClick={() => navigate("profile")}
          >
            <span className="nav-icon">👤</span>
            <span>Profile</span>
          </button>

        </nav>

        <button className="support-button">
          <span className="support-icon">?</span>
          <span>Help &amp; Support</span>
        </button>
      </aside>
    </>
  );
}

export default Sidebar;