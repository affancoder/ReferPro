import "./Client.css";
import Sidebar from "../../components/Sidebar";

function Dashboard({ currentPage, onNavigate }) {
  const activities = [
    {
      icon: "✓",
      type: "success",
      title: "Your referral XYZ Technologies has completed a purchase.",
      time: "2 hours ago",
    },
    {
      icon: "B",
      type: "blue",
      title: "Your referral ABC Pvt Ltd has moved to Proposal stage.",
      time: "1 day ago",
    },
    {
      icon: "₹",
      type: "warning",
      title: "Your ₹2,000 reward is now available.",
      time: "3 days ago",
    },
    {
      icon: "♙",
      type: "info",
      title: "Your referral Global Traders has been contacted.",
      time: "4 days ago",
    },
  ];

  return (
    <div className="client-dashboard">

      {/* ================= SIDEBAR ================= */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      {/* ================= MAIN AREA ================= */}
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
                <strong>XADG</strong>
                <small
                >01010101</small>
              </div>

              <span className="profile-arrow">
                ⌄
              </span>
            </div>

          </div>
        </header>


        {/* ================= CONTENT ================= */}
        <section className="dashboard-content">

          {/* ================= WELCOME ================= */}
          <div className="welcome-section">

            <div>
              <h1>Welcome, Priya!</h1>

              <p>
                Refer clients to us and earn exciting rewards.
              </p>
            </div>

            <button
              className="refer-client-button"
              onClick={() => onNavigate("refer-client")}
            >
              <span>+</span>
              Refer a Client
            </button>

          </div>


          {/* ================= STATISTICS ================= */}
          <div className="statistics-grid">

            <div className="stat-card">
              <div className="stat-icon stat-blue">
                ▣
              </div>

              <div className="stat-information">
                <strong>12</strong>
                <span>Total Referrals</span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon stat-orange">
                ♙
              </div>

              <div className="stat-information">
                <strong>8</strong>
                <span>In Progress</span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon stat-green">
                ✓
              </div>

              <div className="stat-information">
                <strong>3</strong>
                <span>Successful Sales</span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon stat-red">
                ▣
              </div>

              <div className="stat-information">
                <strong>1</strong>
                <span>Closed</span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon stat-purple">
                🎁
              </div>

              <div className="stat-information">
                <strong>₹12,000</strong>
                <span>Total Rewards Earned</span>
              </div>
            </div>

          </div>


          {/* ================= LOWER GRID ================= */}
          <div className="dashboard-lower-grid">

            {/* ================= RECENT ACTIVITY ================= */}
            <div className="dashboard-panel activity-panel">

              <div className="panel-header">
                <h2>Recent Activity</h2>

                <button>
                  View All
                </button>
              </div>


              <div className="activity-list">

                {activities.map((activity, index) => (

                  <div
                    className="activity-row"
                    key={index}
                  >

                    <div
                      className={`activity-icon ${activity.type}`}
                    >
                      {activity.icon}
                    </div>

                    <div className="activity-information">

                      <p>
                        {activity.title}
                      </p>

                      <span>
                        {activity.time}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* ================= PERFORMANCE ================= */}
            <div className="dashboard-panel performance-panel">

              <div className="panel-header">

                <h2>
                  Referral Performance
                </h2>

                <button className="month-selector">
                  This Month
                  <span>⌄</span>
                </button>

              </div>


              <div className="performance-chart">

                <div className="chart-area">

                  <div className="chart-y-axis">

                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>

                  </div>


                  <div className="bars-container">

                    <div className="bar-column">

                      <div
                        className="bar referral-bar"
                        style={{ height: "62px" }}
                      />

                      <span>
                        Jul
                      </span>

                    </div>


                    <div className="bar-column">

                      <div
                        className="bar referral-bar"
                        style={{ height: "88px" }}
                      />

                      <span>
                        Aug
                      </span>

                    </div>


                    <div className="bar-column">

                      <div
                        className="bar referral-bar"
                        style={{ height: "115px" }}
                      />

                      <span>
                        Sep
                      </span>

                    </div>


                    <div className="bar-column">

                      <div
                        className="bar successful-bar"
                        style={{ height: "82px" }}
                      />

                      <span>
                        Oct
                      </span>

                    </div>


                    <div className="bar-column">

                      <div
                        className="bar successful-bar"
                        style={{ height: "55px" }}
                      />

                      <span>
                        Nov
                      </span>

                    </div>

                  </div>

                </div>


                <div className="chart-legend">

                  <span>
                    <i className="legend-blue"></i>
                    Referrals
                  </span>

                  <span>
                    <i className="legend-orange"></i>
                    In Progress
                  </span>

                  <span>
                    <i className="legend-green"></i>
                    Successful
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;