import { useState } from "react";
import "./Auth.css";

function Login({ onLogin, onCreateAccount }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Frontend only for now
    onLogin();
  };

  return (
    <div className="auth-screen">
      <div className="auth-card">

        {/* Logo */}
        <div className="referpro-brand">
          <div className="brand-icon">P</div>
          <span>ReferPro</span>
        </div>

        {/* Heading */}
        <div className="auth-heading">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          <div className="auth-field">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="auth-field">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          <div className="forgot-row">
            <button type="button">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="auth-main-button"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        {/* Social Login */}
        <div className="social-login">

          <button type="button">
            <span className="google-icon">G</span>
            Google
          </button>

          <button type="button">
            <span className="microsoft-icon">▦</span>
            Microsoft
          </button>

        </div>

        {/* Signup Navigation */}
        <div className="auth-bottom-text">
          <span>Don't have an account?</span>

          <button
            type="button"
            onClick={onCreateAccount}
          >
            Create Account
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;