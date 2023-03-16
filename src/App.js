import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./components/Success";
import Signup from "./components/Signup";
import "./App.css";
import Failed from "./components/Failed";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="success" element={<Success />} />
          <Route path="signup" element={<Signup />} />
          <Route path="failed" element={<Failed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
