import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "../Page/page";

export function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Buttons" element={<App />} />
        <Route index element={<App />} />

        <Route path="*" element={<h1 className="notFound">404</h1>} />
      </Routes>
    </Router>
  );
}
export default app;
