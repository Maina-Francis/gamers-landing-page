import React, { useState } from "react";

const Login = () => {
  // manage email and password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSubmit function to submit form inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <div className="console_img">
        <img
          src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"
          alt="ps5"
        />
      </div>

      <div className="form-input">
        <h1>Login to the site</h1>
        <form onSubmit={handleSubmit}>
          {/* form input */}
          <input
            value={email}
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          {/* Login Button */}
          <button type="submit">Login</button>
        </form>
      </div>

      <div>
        <p>Forgot Password?</p>
        <span>OR</span>
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
