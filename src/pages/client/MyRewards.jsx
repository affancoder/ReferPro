import "./MyRewards.css";
import Sidebar from "../../components/Sidebar";

function MyRewards({
  currentPage,
  onNavigate,
  onRedeemReward,
}) {
  const rewards = [
    {
      id: "RWD-0012",
      referral: "XYZ Technologies",
      date: "24 Sep 2026",
      amount: "₹5,000",
      status: "Available",
    },
    {
      id: "RWD-0011",
      referral: "ABC Pvt Ltd",
      date: "20 Sep 2026",
      amount: "₹3,000",
      status: "Available",
    },
    {
      id: "RWD-0010",
      referral: "Global Traders",
      date: "15 Sep 2026",
      amount: "₹2,000",
      status: "Pending",
    },
    {
      id: "RWD-0009",
      referral: "Future Enterprises",
      date: "01 Sep 2026",
      amount: "₹5,000",
      status: "Redeemed",
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

            {/* Notification */}
            <button
              className="topbar-notification"
              onClick={() => onNavigate("notifications")}
            >
              ♧
              <span></span>
            </button>


            {/* Profile */}
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
        <section className="dashboard-content">

          {/* PAGE HEADER */}
          <div className="rewards-page-header">

            <div>
              <h1>My Rewards</h1>

              <p>
                View your earned rewards and redeem your available balance.
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


          {/* ================= REWARD SUMMARY ================= */}
          <div className="rewards-summary-grid">

            <div className="reward-summary-card">

              <div className="reward-summary-icon available-icon">
                ₹
              </div>

              <div>
                <strong>₹8,000</strong>
                <span>Available Rewards</span>
              </div>

            </div>


            <div className="reward-summary-card">

              <div className="reward-summary-icon earned-icon">
                ✓
              </div>

              <div>
                <strong>₹15,000</strong>
                <span>Total Rewards Earned</span>
              </div>

            </div>


            <div className="reward-summary-card">

              <div className="reward-summary-icon redeemed-icon">
                ↗
              </div>

              <div>
                <strong>₹7,000</strong>
                <span>Total Redeemed</span>
              </div>

            </div>

          </div>


          {/* ================= REDEEM SECTION ================= */}
          <div className="redeem-reward-card">

            <div className="redeem-reward-information">

              <div className="redeem-icon">
                ₹
              </div>

              <div>
                <h2>₹8,000 Available to Redeem</h2>

                <p>
                  Use your available reward balance to redeem exciting
                  rewards.
                </p>
              </div>

            </div>


            <button
              className="redeem-button"
              onClick={onRedeemReward}
            >
              Redeem Reward
            </button>

          </div>


          {/* ================= REWARD HISTORY ================= */}
          <div className="rewards-table-card">

            <div className="rewards-panel-header">

              <div>
                <h2>Reward History</h2>

                <p>
                  Your reward earnings and redemption history.
                </p>
              </div>


              <select defaultValue="All">
                <option value="All">
                  All Status
                </option>

                <option value="Available">
                  Available
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Redeemed">
                  Redeemed
                </option>
              </select>

            </div>


            <div className="rewards-table-wrapper">

              <table className="rewards-table">

                <thead>
                  <tr>
                    <th>Reward ID</th>
                    <th>Referral</th>
                    <th>Earned Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>


                <tbody>

                  {rewards.map((reward) => (

                    <tr key={reward.id}>

                      {/* Reward ID */}
                      <td>
                        <span className="reward-id">
                          {reward.id}
                        </span>
                      </td>


                      {/* Referral */}
                      <td>
                        <strong className="reward-referral">
                          {reward.referral}
                        </strong>
                      </td>


                      {/* Date */}
                      <td>
                        {reward.date}
                      </td>


                      {/* Amount */}
                      <td>
                        <strong className="reward-amount">
                          {reward.amount}
                        </strong>
                      </td>


                      {/* Status */}
                      <td>

                        <span
                          className={`reward-status ${reward.status
                            .toLowerCase()}`}
                        >
                          <i></i>
                          {reward.status}
                        </span>

                      </td>


                      {/* Redeem */}
                      <td>

                        {reward.status === "Available" && (
                          <button
                            className="small-redeem-button"
                            onClick={onRedeemReward}
                          >
                            Redeem
                          </button>
                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyRewards;