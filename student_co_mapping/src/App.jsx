import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";
import SetEntry from "./components/SetEntry"; // Assuming this is the SetEntry component
import Name from "./components/Name";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route
          path="/setentry"
          element={isAuthenticated ? <SetEntry /> : <Navigate to="/" />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/name" element={<Name />} />
      </Routes>
      
    </Router>
  );
};

export default App;


