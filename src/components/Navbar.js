import React from "react";
import CostumSwitch from "./CostumSwitch";
import useStyles from "../styles/Navbar-style";
import logo from "../assets/desktop/logo.svg";
import iconMoon from "../assets/desktop/icon-moon.svg";
import iconSun from "../assets/desktop/icon-sun.svg";

function Navbar() {
  const classes = useStyles();
  const { navbar, navContainer, navSwitch } = classes;
  return (
    <nav className={navbar}>
      <div className={navContainer}>
        <div>
          <img src={logo} alt="devjobs logo" />
        </div>
        <div className={navSwitch}>
          <div>
            <img src={iconSun} alt="little sun white icon" />
          </div>
          <CostumSwitch />
          <div>
            <img src={iconMoon} alt="little moon white icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
