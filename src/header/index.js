import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import { VscGrabber, VscClose } from "react-icons/vsc";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden"); // your original overflow hidden class
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-around">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>

          {/* Desktop nav - show only on md+ */}
          <nav className="d-none d-md-flex align-items-center">
            <ul className="the_menu d-flex gap-4 m-0 p-0 text-sm">
              <li className="menu_item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu_item">
                <Link to="/about">About</Link>
              </li>
              <li className="menu_item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="menu_item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="menu_item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Toggle button - only show on small screens */}
          <button
            className="menu__button nav_ac d-md-none"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            {isActive ? <VscClose size={24} /> : <VscGrabber size={24} />}
          </button>
        </div>

        {/* Mobile menu - your original menu classes and structure */}
        <div className={`site__navigation ${isActive ? "menu__opend" : ""} d-md-none`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
              <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={socialprofils.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <p className="copyright m-0">copyright © {logotext}</p>
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
