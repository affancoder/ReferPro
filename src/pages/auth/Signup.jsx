import { useState } from "react";
import "./Auth.css";

function Signup({ onSignup, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // Frontend only for now
    onSignup();
  };

  return (
    <div className="auth-screen">
      <div className="auth-card signup-card">

        {/* Logo */}
        <div className="referpro-brand">
          <div className="brand-icon">P</div>
          <span>ReferPro</span>
        </div>

        {/* Heading */}
        <div className="auth-heading">
          <h1>Create Your Account</h1>
          <p>Join our referral program and earn rewards</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>

          {/* Full Name */}
          <div className="auth-field">
            <label>
              Full Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="auth-field">
            <label>
              Email Address <span>*</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="auth-field">
            <label>
              Phone Number <span>*</span>
            </label>

            <div className="phone-box">

              <div className="country-code">
                🇮🇳 <span>+91</span>
              </div>

              <input
                type="tel"
                placeholder="Enter phone number"
                required
              />

            </div>
          </div>

          {/* Password */}
          <div className="auth-field">
            <label>
              Create Password <span>*</span>
            </label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
              />

              <button
                type="button"
                className="password-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "◉" : "◌"}
              </button>

            </div>
          </div>

          {/* Terms */}
          <label className="terms-row">

            <input
              type="checkbox"
              defaultChecked
              required
            />

            <span>
              I agree to{" "}
              <a href="#">
                Terms & Conditions
              </a>
            </span>

          </label>

          {/* Create Account */}
          <button
            type="submit"
            className="auth-main-button"
          >
            Create Account
          </button>

        </form>

        {/* Login Navigation */}
        <div className="auth-bottom-text signup-bottom">

          <span>Already have an account?</span>

          <button
            type="button"
            onClick={onLogin}
          >
            Login
          </button>

        </div>

      </div>
    </div>
  );
}

export default Signup;