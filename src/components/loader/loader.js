import React, { useEffect, useState } from "react";
import "./style.css"; // Ensure to include your CSS for the loader


const Loader = () => {

  return (
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
  );
};

export default Loader;
