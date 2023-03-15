import React, { useState } from "react";

const Signup = () => {
  // manage name, email and password state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        <h1>Sign Up to the site</h1>
        <form onSubmit={handleSubmit}>
          {/* form input */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="User Name"
            name="name"
            id="name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            name="email"
            id="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />

          <input
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
            id="passwordConfirmation"
          />

          {/* Signup Button */}
          <button type="submit">Sign Up</button>
        </form>

        <div>
          <p>
            Already have an account? <span>Login here.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
