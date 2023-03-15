import React, { useState } from "react";

const Login = ({ onFormSwitch }) => {
  // manage email and password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSubmit function to submit form inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"
          alt="ps5"
        />
      </div>

      <div className="form-input">
        <h1>Login to the site</h1>
        <form onSubmit={handleSubmit} className="form">
          {/* form input */}
          <div className="inline-input">
            <i id="icon" class="ri-mail-unread-line"></i>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
            />
          </div>

          <div className="inline-input">
            <i id="icon" class="ri-lock-2-line"></i>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="main-btn">
            Login <i class="ri-arrow-right-line"></i>
          </button>
        </form>

        <div>
          <p className="forgot-p">
            Forgot Password? <br />
          </p>
          <p>OR</p>

          <button
            className="signup-btn main-btn"
            onClick={() => onFormSwitch("Register")}
          >
            Sign Up <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
