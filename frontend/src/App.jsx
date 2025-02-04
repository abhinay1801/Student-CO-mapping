import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import DetailsEntry from "./components/DetailsEntry";
import SetEntry from "./components/SetEntry"; // Assuming this is the SetEntry component
import TableEntry from "./components/TableEntry";

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
          path="/detailsentry"
          element={isAuthenticated ? <DetailsEntry /> : <Navigate to="/" />}
        />
        <Route path="/tableentry" element={<TableEntry />} />
      </Routes>
      
    </Router>
  );
};

export default App;


