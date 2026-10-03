import "./ReferClient.css";
import Sidebar from "../../components/Sidebar";

function ReferClient({
  currentPage,
  onNavigate,
  onSubmitReferral,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReferral();
  };

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


        {/* ================= REFERRAL PAGE ================= */}
        <section className="refer-client-content">

          {/* ================= PAGE HEADING ================= */}
          <div className="refer-page-heading">

            <div>
              <h1>Refer a Client</h1>

              <p>
                Introduce a potential client and earn exciting rewards.
              </p>
            </div>

          </div>


          {/* ================= FORM CARD ================= */}
          <form
            className="referral-form-card"
            onSubmit={handleSubmit}
          >

            {/* Form Header */}
            <div className="form-card-header">

              <div className="form-header-icon">
                ♙
              </div>

              <div>
                <h2>Client Information</h2>

                <p>
                  Please provide the details of the client you want to
                  refer.
                </p>
              </div>

            </div>


            <div className="form-divider"></div>


            {/* ================= FORM GRID ================= */}
            <div className="referral-form-grid">

              {/* Client Name */}
              <div className="referral-field">

                <label>
                  Client Name <span>*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter client's full name"
                  defaultValue="ZZXA DEERDF"
                  required
                />

              </div>


              {/* Company */}
              <div className="referral-field">

                <label>
                  Company Name <span>*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter company name"
                  defaultValue="XYZ DET"
                  required
                />

              </div>


              {/* Email */}
              <div className="referral-field">

                <label>
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  placeholder="Enter client's email"
                  defaultValue="iopu@tiyohth.com"
                  required
                />

              </div>


              {/* Phone */}
              <div className="referral-field">

                <label>
                  Phone Number <span>*</span>
                </label>

                <div className="referral-phone-box">

                  <div className="referral-country">
                    <span>🇮🇳</span>
                    <span>+91</span>
                    <span className="country-arrow">
                      ⌄
                    </span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    defaultValue="0000000001"
                    required
                  />

                </div>

              </div>


              {/* Product */}
              <div className="referral-field">

                <label>
                  Product / Service <span>*</span>
                </label>

                <div className="select-wrapper">

                  <select
                    defaultValue="Enterprise Solution"
                    required
                  >
                    <option value="Enterprise Solution">
                      Enterprise Solution
                    </option>

                    <option value="Business Solution">
                      Business Solution
                    </option>

                    <option value="Cloud Services">
                      Cloud Services
                    </option>

                    <option value="Consulting">
                      Consulting
                    </option>
                  </select>

                  <span>⌄</span>

                </div>

              </div>


              {/* Relationship */}
              <div className="referral-field">

                <label>
                  Relationship with Client <span>*</span>
                </label>

                <div className="select-wrapper">

                  <select
                    defaultValue="Business Partner"
                    required
                  >
                    <option value="Business Partner">
                      Business Partner
                    </option>

                    <option value="Existing Client">
                      Existing Client
                    </option>

                    <option value="Friend / Colleague">
                      Friend / Colleague
                    </option>

                    <option value="Professional Network">
                      Professional Network
                    </option>
                  </select>

                  <span>⌄</span>

                </div>

              </div>

            </div>


            {/* ================= ADDITIONAL INFORMATION ================= */}
            <div className="referral-field full-width">

              <label>
                Additional Information
              </label>

              <textarea
                placeholder="Tell us anything else that may help us understand this referral..."
                defaultValue="The client is interested in exploring an enterprise solution for their growing technology team."
                rows="5"
              />

            </div>


            {/* ================= CONSENT ================= */}
            <label className="referral-consent">

              <input
                type="checkbox"
                defaultChecked
                required
              />

              <span>
                I confirm that I have permission to share this client's
                contact information with ReferPro.
              </span>

            </label>


            {/* ================= BUTTONS ================= */}
            <div className="referral-form-actions">

              {/* Cancel → Dashboard */}
              <button
                type="button"
                className="cancel-referral-button"
                onClick={() => onNavigate("dashboard")}
              >
                Cancel
              </button>


              {/* Submit → My Referrals */}
              <button
                type="submit"
                className="submit-referral-button"
              >
                <span>✓</span>
                Submit Referral
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  );
}

export default ReferClient;