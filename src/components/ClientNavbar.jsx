import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function ClientNavbar() {
  return (
    <header className="client-navbar">

      {/* Search */}
      <div className="navbar-search">
        <Search size={16} />

        <input
          type="text"
          placeholder="Search referrals, products..."
        />
      </div>

      {/* Right section */}
      <div className="navbar-right">

        <button className="navbar-notification">
          <Bell size={18} />

          <span className="navbar-notification-dot"></span>
        </button>

        <div className="navbar-user">

          <div className="navbar-avatar">
            PS
          </div>

          <div className="navbar-user-info">
            <strong>XADFTE</strong>
            <span>01010101</span>
          </div>

          <ChevronDown size={14} />

        </div>

      </div>

    </header>
  );
}

export default ClientNavbar;