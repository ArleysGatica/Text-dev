import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InputPage } from "../Components/Input/inputt";
import App from "../Page/page";

export function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Inputs" element={<InputPage />} />
        <Route index element={<InputPage />} />
        <Route path="*" element={<h1 className="notFound">404</h1>} />
      </Routes>
    </Router>
  );
}
export default app;
