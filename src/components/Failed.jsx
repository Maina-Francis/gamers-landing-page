import React from "react";
import { useNavigate } from "react-router-dom";

const Failed = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h3>Your credentials were wrong!!</h3>;
      <div className="gif">
        <iframe
          src="https://giphy.com/embed/Wq9RLX06zRg4UM42Qf"
          width="350px"
          height="350px"
          frameBorder="0"
          className="giphy-embed"
          title="wrong"
          allowFullScreen
        ></iframe>
      </div>
      <p className="failed-login">
        Do you want to try again?{" "}
        <span className="login-here" onClick={() => navigate("/login")}>
          Login here.
        </span>
      </p>
    </div>
  );
};

export default Failed;
