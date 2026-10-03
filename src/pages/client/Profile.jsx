import { useState } from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar";

function Profile({ currentPage, onNavigate }) {
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

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


            <div className="profile-mini">
              <div className="profile-avatar">
                P
              </div>

              <div className="profile-information">
                <strong>AAAAAA</strong>
                <small>01010101</small>
              </div>

              <span className="profile-arrow">
                ⌄
              </span>
            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}
        <section className="dashboard-content profile-content">

          {/* PAGE HEADER */}
          <div className="profile-page-header">

            <div>
              <h1>Profile &amp; Settings</h1>

              <p>
                Manage your personal information and account settings.
              </p>
            </div>

          </div>


          {/* ================= PROFILE CARD ================= */}
          <div className="profile-card">

            <div className="profile-card-header">

              <div className="large-profile-avatar">
                P
              </div>

              <div className="profile-header-information">
                <h2>AAAAAA</h2>
                <p>01010101</p>
                <span>Member since September 2026</span>
              </div>

            </div>


            {/* ================= PERSONAL INFORMATION ================= */}
            <form onSubmit={handleSave}>

              <div className="profile-section">

                <div className="profile-section-heading">
                  <h2>Personal Information</h2>

                  <p>
                    Update your personal contact information.
                  </p>
                </div>


                <div className="profile-form-grid">

                  <div className="profile-field">
                    <label>Full Name</label>

                    <input
                      type="text"
                      defaultValue="AAAAAA"
                    />
                  </div>


                  <div className="profile-field">
                    <label>Email Address</label>

                    <input
                      type="email"
                      defaultValue="aaas@example.com"
                    />
                  </div>


                  <div className="profile-field">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      defaultValue="+91 01010101010"
                    />
                  </div>


                  <div className="profile-field">
                    <label>Company</label>

                    <input
                      type="text"
                      defaultValue="ABC CS"
                    />
                  </div>


                  <div className="profile-field">
                    <label>Designation</label>

                    <input
                      type="text"
                      defaultValue="Client Partner"
                    />
                  </div>


                  <div className="profile-field">
                    <label>Location</label>

                    <input
                      type="text"
                      defaultValue="Italy, UX"
                    />
                  </div>

                </div>

              </div>


              {/* ================= NOTIFICATION SETTINGS ================= */}
              <div className="profile-section">

                <div className="profile-section-heading">
                  <h2>Notification Preferences</h2>

                  <p>
                    Choose how you want to receive account updates.
                  </p>
                </div>


                <div className="settings-options">

                  <label className="setting-row">

                    <div>
                      <strong>Email Notifications</strong>

                      <span>
                        Receive referral and reward updates by email.
                      </span>
                    </div>

                    <input
                      type="checkbox"
                      defaultChecked
                    />

                  </label>


                  <label className="setting-row">

                    <div>
                      <strong>Referral Updates</strong>

                      <span>
                        Get notified when your referrals change status.
                      </span>
                    </div>

                    <input
                      type="checkbox"
                      defaultChecked
                    />

                  </label>


                  <label className="setting-row">

                    <div>
                      <strong>Reward Notifications</strong>

                      <span>
                        Get notified when rewards become available.
                      </span>
                    </div>

                    <input
                      type="checkbox"
                      defaultChecked
                    />

                  </label>

                </div>

              </div>


              {/* ================= SECURITY ================= */}
              <div className="profile-section">

                <div className="profile-section-heading">
                  <h2>Security</h2>

                  <p>
                    Manage your account security settings.
                  </p>
                </div>


                <div className="security-row">

                  <div>
                    <strong>Password</strong>

                    <span>
                      Last changed recently
                    </span>
                  </div>

                  <button
                    type="button"
                    className="change-password-button"
                  >
                    Change Password
                  </button>

                </div>

              </div>


              {/* ================= ACTIONS ================= */}
              <div className="profile-actions">

                {saved && (
                  <span className="profile-saved-message">
                    ✓ Changes saved successfully
                  </span>
                )}

                <button
                  type="button"
                  className="profile-cancel-button"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="profile-save-button"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;