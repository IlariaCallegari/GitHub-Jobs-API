import React, { useContext } from "react";
import { ButtonSecondary } from "./Buttons";
import useStyles from "../assets/styles/ComapanyInfo-style";
import { ThemeContext } from "../contexts/ThemeContext";

function CompanyInfo() {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { header, logo, infos, company, url } = classes;
  return (
    <div className={header}>
      <div className={logo}></div>
      <div className={infos}>
        <div>
          <h3 className={company}>Company Name</h3>
          <a href="#" className={url}>
            Website Address
          </a>
        </div>
        <ButtonSecondary text="Company Site" />
      </div>
    </div>
  );
}

export default CompanyInfo;
