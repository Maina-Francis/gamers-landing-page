import React, { useState } from "react";
import axios from "axios";

const Signup = ({ onFormSwitch }) => {
  // manage name, email and password state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // handle terms and conditions checkbox
  const [terms, setTerms] = useState(false);

  // handleSubmit function to submit form inputs
  const handleSubmit = (e) => {
    e.preventDefault();

    // Post New user Signup data to api
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("Registration response", response);
      })
      .catch((error) => {
        console.log("Registration error", error);
      });
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
        <form onSubmit={handleSubmit} className="form">
          {/* form input */}
          <div className="inline-input">
            <i id="icon" class="ri-profile-line"></i>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="User Name"
              name="name"
              id="name"
              required
            />
          </div>

          <div className="inline-input">
            <i id="icon" class="ri-mail-unread-line"></i>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              required
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
              required
            />
          </div>

          <div className="inline-input">
            <i id="icon" class="ri-lock-2-line"></i>
            <input
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              required
            />
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span className="terms">
              I accept the Terms of Use and Privacy Policy
            </span>
          </div>

          {/* Signup Button */}
          <button type="submit" className="main-btn signup">
            Sign Up <i class="ri-arrow-right-line"></i>
          </button>
        </form>

        <div>
          <p>
            Already have an account?{" "}
            <span className="login-here" onClick={() => onFormSwitch("Login")}>
              Login here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
