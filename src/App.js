import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  // Set state to handle which form to display
  const [currentForm, setCurrentForm] = useState("Login");

  // Toggle form between Login and Signup
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="app">
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Signup onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default App;
