import React, { useEffect, useState } from "react";
import "./style.css";
import { logotext, navLinks } from "../content_option";

const Headermain = () => {
  const [t, setT] = useState(() => new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("ovhidden", open);
  }, [open]);

  const fmt = t.toLocaleTimeString("en-CA", { hour12: false, timeZone: "America/Toronto" });

  const handleAnchor = (id) => (e) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "#" + id);
    }
  };

  return (
    <>
      <a href="#app-root" className="skip-link">Skip to main content</a>
      <nav className="nav">
        <a className="brand" href="#top" onClick={handleAnchor("top")}>
          <span className="dot" />
          <span>{logotext}</span>
          <span className="brand-sub">/ portfolio.v3</span>
        </a>

        <div className="links">
          {navLinks.map(([id, label], i) => (
            <a key={id} href={"#" + id} onClick={handleAnchor(id)}>
              <span className="n">0{i + 1}</span>{label}
            </a>
          ))}
        </div>

        <div className="right">
          <span className="clock tabular">{fmt} EST</span>
          <button
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "× CLOSE" : "≡ MENU"}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <ul>
          {navLinks.map(([id, label], i) => (
            <li key={id}>
              <a href={"#" + id} onClick={handleAnchor(id)}>
                <span className="n">0{i + 1}</span>
                <span className="lbl">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Headermain;
