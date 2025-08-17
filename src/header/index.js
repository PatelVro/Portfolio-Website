import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between container head-container">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>

          <div className="d-flex align-items-center">
            {/* <Themetoggle /> */}
            <nav className="d-none d-md-flex align-items-center">
              <ul className="the_menu d-flex gap-4 m-0 p-0 text-sm">
                {["Home", "About", "Blog", "Portfolio", "Contact"].map((item) => (
                  <li key={item} className="menu_item">
                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="menu__button nav_ac"
              onClick={handleToggle}
              aria-expanded={isActive}
              aria-controls="site-navigation"
              aria-label={isActive ? "Close menu" : "Open menu"}
            >
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div
          id="site-navigation"
          className={`site__navigation ${isActive ? "menu__opend" : ""}`}
        >
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
                    <li key={item} className="menu_item">
                      <Link
                        onClick={handleToggle}
                        to={`/${item.toLowerCase()}`}
                        className="my-3"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer with accessible, crawlable links */}
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
              {Object.entries(socialprofils).map(([key, url]) => (
                <a
                  key={key}
                  href={url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
            <p className="copyright m-0">
              copyright __ {logotext}
            </p>
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
