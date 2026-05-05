import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* Old multi-page paths redirect to anchors on the long-scroll Home. */}
    <Route path="/about"     element={<Navigate to="/#about"     replace />} />
    <Route path="/portfolio" element={<Navigate to="/#work"      replace />} />
    <Route path="/work"      element={<Navigate to="/#work"      replace />} />
    <Route path="/services"  element={<Navigate to="/#services"  replace />} />
    <Route path="/blog"      element={<Navigate to="/"           replace />} />
    <Route path="/contact"   element={<Navigate to="/#contact"   replace />} />
    <Route path="*"          element={<Navigate to="/"           replace />} />
  </Routes>
);

export default AppRoutes;
