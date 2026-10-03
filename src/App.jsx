import { useState } from "react";

/* ================= AUTH ================= */
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

/* ================= CLIENT ================= */
import Dashboard from "./pages/client/Dashboard";
import ReferClient from "./pages/client/ReferClient";
import MyReferrals from "./pages/client/MyReferrals";
import MyRewards from "./pages/client/MyRewards";
import Notifications from "./pages/client/Notifications";
import Profile from "./pages/client/Profile";


function App() {
  /*
    ==================================================
    CENTRAL PAGE STATE
    ==================================================
  */

  const [currentPage, setCurrentPage] = useState("login");


  /*
    ==================================================
    AUTH NAVIGATION
    ==================================================
  */

  const handleLogin = () => {
    setCurrentPage("dashboard");
  };

  const handleSignup = () => {
    setCurrentPage("dashboard");
  };

  const handleCreateAccount = () => {
    setCurrentPage("signup");
  };

  const handleBackToLogin = () => {
    setCurrentPage("login");
  };


  /*
    ==================================================
    CENTRAL SIDEBAR NAVIGATION
    ==================================================

    Sidebar.jsx will use this single function.

    Example:
    onNavigate("dashboard")
    onNavigate("refer-client")
    onNavigate("my-referrals")
    onNavigate("my-rewards")
    onNavigate("notifications")
    onNavigate("profile")
  */

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };


  /*
    ==================================================
    REFERRAL ACTIONS
    ==================================================
  */

  const handleSubmitReferral = () => {
    setCurrentPage("my-referrals");
  };

  const handleReferralDetails = (referral) => {
    /*
      Save selected referral for the
      upcoming Referral Details page.
    */

    console.log("Selected referral:", referral);

    setCurrentPage("referral-details");
  };


  /*
    ==================================================
    REWARD ACTIONS
    ==================================================
  */

  const handleRedeemReward = () => {
    setCurrentPage("redeem-reward");
  };


  /*
    ==================================================
    AUTH PAGES
    ==================================================
  */

  if (currentPage === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onCreateAccount={handleCreateAccount}
      />
    );
  }


  if (currentPage === "signup") {
    return (
      <Signup
        onSignup={handleSignup}
        onLogin={handleBackToLogin}
      />
    );
  }


  /*
    ==================================================
    DASHBOARD
    ==================================================
  */

  if (currentPage === "dashboard") {
    return (
      <Dashboard
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    );
  }


  /*
    ==================================================
    REFER A CLIENT
    ==================================================
  */

  if (currentPage === "refer-client") {
    return (
      <ReferClient
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSubmitReferral={handleSubmitReferral}
      />
    );
  }


  /*
    ==================================================
    MY REFERRALS
    ==================================================
  */

  if (currentPage === "my-referrals") {
    return (
      <MyReferrals
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onReferralDetails={handleReferralDetails}
      />
    );
  }


  /*
    ==================================================
    MY REWARDS
    ==================================================
  */

  if (currentPage === "my-rewards") {
    return (
      <MyRewards
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRedeemReward={handleRedeemReward}
      />
    );
  }


  /*
    ==================================================
    FUTURE PAGES
    ==================================================
  */

  if (currentPage === "notifications") {
  return (
    <Notifications
      currentPage={currentPage}
      onNavigate={handleNavigate}
    />
  );
}


  if (currentPage === "profile") {
  return (
    <Profile
      currentPage={currentPage}
      onNavigate={handleNavigate}
    />
  );
}


  if (currentPage === "referral-details") {
    return (
      <div>
        Referral Details page coming next.
      </div>
    );
  }


  if (currentPage === "redeem-reward") {
    return (
      <div>
        Reward Redemption page coming next.
      </div>
    );
  }


  /*
    ==================================================
    SAFETY FALLBACK
    ==================================================
  */

  return (
    <Login
      onLogin={handleLogin}
      onCreateAccount={handleCreateAccount}
    />
  );
}

export default App;