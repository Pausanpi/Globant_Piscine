/* function App() {
  return (
    <>
      <p>Hello World!</p>
    </>
  )
}

export default App */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import Dashboard from "./Dashboard.tsx";
import CallbackPage from "./CallbackPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;

