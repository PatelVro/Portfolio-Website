import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="cursor-ring" id="cursorRing" />
      <div className="cursor-dot" id="cursorDot" />

      <Headermain />
      <div className="app-root" id="app-root">
        <AppRoutes />
      </div>
    </Router>
  );
}
