import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Success = () => {
  // Protect the Success page
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");

    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    // Redirect
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <h3>You have successfully logged in!!</h3>
      </div>
    );
  }
};

export default Success;
