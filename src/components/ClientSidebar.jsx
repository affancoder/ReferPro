import {
  LayoutDashboard,
  UserPlus,
  Users,
  Gift,
  Bell,
  UserCircle,
  CircleHelp,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function ClientSidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Refer a Client",
      path: "/refer-client",
      icon: UserPlus,
    },
    {
      label: "My Referrals",
      path: "/my-referrals",
      icon: Users,
    },
    {
      label: "My Rewards",
      path: "/my-rewards",
      icon: Gift,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: Bell,
      badge: 3,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: UserCircle,
    },
  ];

  return (
    <aside className="client-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">R</div>
        <span>ReferPro</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={17} strokeWidth={2} />

              <span>{item.label}</span>

              {item.badge && (
                <span className="notification-badge">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

      </nav>

      {/* Bottom support */}
      <div className="sidebar-bottom">

        <button className="support-link">
          <CircleHelp size={17} />
          <span>Help & Support</span>
        </button>

      </div>

    </aside>
  );
}

export default ClientSidebar;