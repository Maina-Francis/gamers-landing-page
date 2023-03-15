import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  // Set state to handle which form to display
  const [currentForm, setCurrentForm] = useState["Login"];

  return (
    <div className="app">
      currentForm ==="Login" ? <Login /> : <Signup />
    </div>
  );
};

export default App;
