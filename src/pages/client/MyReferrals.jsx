import "./MyReferrals.css";
import Sidebar from "../../components/Sidebar";

function MyReferrals({
  currentPage,
  onNavigate,
  onReferralDetails,
}) {
  const referrals = [
    {
      id: "REF-0012",
      client: "XYZ Technologies",
      contact: "Rahul Mehta",
      product: "Enterprise Solution",
      date: "24 Sep 2026",
      status: "Successful",
      reward: "₹5,000",
    },
    {
      id: "REF-0011",
      client: "ABC Pvt Ltd",
      contact: "Amit Sharma",
      product: "Business Solution",
      date: "20 Sep 2026",
      status: "Proposal",
      reward: "₹3,000",
    },
    {
      id: "REF-0010",
      client: "Global Traders",
      contact: "Vikash Kumar",
      product: "Enterprise Solution",
      date: "15 Sep 2026",
      status: "Contacted",
      reward: "₹2,000",
    },
    {
      id: "REF-0009",
      client: "TechNova Systems",
      contact: "Arjun Singh",
      product: "Cloud Services",
      date: "10 Sep 2026",
      status: "In Progress",
      reward: "₹2,000",
    },
    {
      id: "REF-0008",
      client: "Bright Solutions",
      contact: "Neha Verma",
      product: "Business Solution",
      date: "05 Sep 2026",
      status: "Closed",
      reward: "₹0",
    },
    {
      id: "REF-0007",
      client: "Future Enterprises",
      contact: "Rohan Das",
      product: "Enterprise Solution",
      date: "01 Sep 2026",
      status: "Successful",
      reward: "₹5,000",
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
                <strong>
                  XADG</strong>
                <small>01010101</small>
              </div>

              <span className="profile-arrow">
                ⌄
              </span>
            </div>

          </div>

        </header>


        {/* ================= PAGE ================= */}
        <section className="dashboard-content">

          {/* ================= HEADER ================= */}
          <div className="referrals-page-header">

            <div>
              <h1>My Referrals</h1>

              <p>
                Track and manage all the clients you have referred.
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


          {/* ================= FILTER BAR ================= */}
          <div className="referrals-toolbar">

            <div className="referrals-search">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search by client name or referral ID..."
              />

            </div>


            <select defaultValue="All">

              <option value="All">
                All Status
              </option>

              <option value="Successful">
                Successful
              </option>

              <option value="Proposal">
                Proposal
              </option>

              <option value="Contacted">
                Contacted
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Closed">
                Closed
              </option>

            </select>


            <select defaultValue="All">

              <option value="All">
                All Products
              </option>

              <option value="Enterprise Solution">
                Enterprise Solution
              </option>

              <option value="Business Solution">
                Business Solution
              </option>

              <option value="Cloud Services">
                Cloud Services
              </option>

            </select>

          </div>


          {/* ================= TABLE ================= */}
          <div className="referrals-table-card">

            <div className="referrals-table-wrapper">

              <table className="referrals-table">

                <thead>
                  <tr>
                    <th>Referral ID</th>
                    <th>Client</th>
                    <th>Product</th>
                    <th>Referral Date</th>
                    <th>Status</th>
                    <th>Reward</th>
                    <th></th>
                  </tr>
                </thead>


                <tbody>

                  {referrals.map((referral) => (

                    <tr
                      key={referral.id}
                      onClick={() =>
                        onReferralDetails(referral)
                      }
                    >

                      {/* Referral ID */}
                      <td>
                        <span className="referral-id">
                          {referral.id}
                        </span>
                      </td>


                      {/* Client */}
                      <td>

                        <div className="client-cell">

                          <div className="client-avatar">
                            {referral.client
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>

                            <strong>
                              {referral.client}
                            </strong>

                            <small>
                              {referral.contact}
                            </small>

                          </div>

                        </div>

                      </td>


                      {/* Product */}
                      <td>

                        <span className="product-name">
                          {referral.product}
                        </span>

                      </td>


                      {/* Date */}
                      <td>
                        {referral.date}
                      </td>


                      {/* Status */}
                      <td>

                        <span
                          className={`status-badge ${referral.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          <i></i>
                          {referral.status}
                        </span>

                      </td>


                      {/* Reward */}
                      <td>

                        <strong className="reward-value">
                          {referral.reward}
                        </strong>

                      </td>


                      {/* View */}
                      <td>

                        <button
                          className="view-referral-button"
                          onClick={(event) => {
                            event.stopPropagation();
                            onReferralDetails(referral);
                          }}
                        >
                          View
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* ================= PAGINATION ================= */}
            <div className="referrals-pagination">

              <span>
                Showing <strong>1–6</strong> of{" "}
                <strong>12</strong> referrals
              </span>


              <div className="pagination-buttons">

                <button disabled>
                  ‹
                </button>

                <button className="pagination-active">
                  1
                </button>

                <button>
                  2
                </button>

                <button>
                  ›
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyReferrals;