import "./Notifications.css";
import Sidebar from "../../components/Sidebar";

function Notifications({ currentPage, onNavigate }) {
  const notifications = [
    {
      id: 1,
      type: "success",
      icon: "✓",
      title: "Referral Successful",
      message:
        "Your referral XYZ Technologies has completed a purchase. You have earned a ₹5,000 reward.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "info",
      icon: "i",
      title: "Referral Status Updated",
      message:
        "Your referral ABC Pvt Ltd has moved to the Proposal stage.",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 3,
      type: "reward",
      icon: "₹",
      title: "Reward Available",
      message:
        "Your ₹2,000 reward for Global Traders is now available to redeem.",
      time: "3 days ago",
      unread: true,
    },
    {
      id: 4,
      type: "info",
      icon: "↗",
      title: "Referral Contacted",
      message:
        "Our sales team has contacted the client from your Future Enterprises referral.",
      time: "4 days ago",
      unread: false,
    },
    {
      id: 5,
      type: "success",
      icon: "✓",
      title: "Referral Submitted",
      message:
        "Your referral for TechNova Systems was successfully submitted.",
      time: "5 days ago",
      unread: false,
    },
    {
      id: 6,
      type: "reward",
      icon: "₹",
      title: "Reward Redeemed",
      message:
        "Your ₹5,000 reward has been successfully redeemed.",
      time: "1 week ago",
      unread: false,
    },
  ];

  return (
    <div className="client-dashboard">

      {/* ================= SIDEBAR ================= */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
      />


      {/* ================= MAIN ================= */}
      <main className="client-main">

        {/* ================= TOPBAR ================= */}
        <header className="dashboard-topbar">

          <div className="dashboard-search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search referrals, products..."
            />
          </div>


          <div className="topbar-right">

            <button
              className="topbar-notification"
              onClick={() => onNavigate("notifications")}
            >
              ♧
              <span></span>
            </button>


            <div
              className="profile-mini"
              onClick={() => onNavigate("profile")}
            >
              <div className="profile-avatar">
                P
              </div>

              <div className="profile-information">
                <strong>AAAAAA</strong>
                <small>Client Partner</small>
              </div>

              <span className="profile-arrow">
                ⌄
              </span>
            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}
        <section className="dashboard-content notifications-content">

          {/* PAGE HEADER */}
          <div className="notifications-page-header">

            <div>
              <h1>Notifications</h1>

              <p>
                Stay updated with your referrals, rewards and account activity.
              </p>
            </div>

            <button className="mark-all-button">
              Mark all as read
            </button>

          </div>


          {/* ================= NOTIFICATION CARD ================= */}
          <div className="notifications-card">

            <div className="notifications-card-header">

              <div>
                <h2>Recent Notifications</h2>

                <p>
                  You have <strong>3 unread</strong> notifications.
                </p>
              </div>

            </div>


            {/* ================= LIST ================= */}
            <div className="notifications-list">

              {notifications.map((notification) => (

                <div
                  key={notification.id}
                  className={`notification-item ${
                    notification.unread ? "unread" : ""
                  }`}
                >

                  <div
                    className={`notification-icon ${notification.type}`}
                  >
                    {notification.icon}
                  </div>


                  <div className="notification-details">

                    <div className="notification-title-row">

                      <h3>
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="unread-dot"></span>
                      )}

                    </div>


                    <p>
                      {notification.message}
                    </p>


                    <span className="notification-time">
                      {notification.time}
                    </span>

                  </div>


                  {notification.unread && (
                    <button className="notification-menu">
                      •••
                    </button>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Notifications;