import React, { useContext } from "react";
import { ButtonSecondary } from "./Buttons";
import useStyles from "../assets/styles/ComapanyInfo-style";
import { ThemeContext } from "../contexts/ThemeContext";

function CompanyInfo({jobSelected}) {
  const {company_logo, company, company_url} = jobSelected; 
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { header, logo, infos, companyName, url } = classes;
  return (
    <div className={header}>
      <div className={logo}>
        <img src={company_logo} alt={`${company}logo`}/>
      </div>
      <div className={infos}>
        <div>
          <h3 className={companyName}>{jobSelected.company}</h3>
          <a href={`${company_url}`} className={url}>
          {company_url}
          </a>
        </div>
        <ButtonSecondary text="Company Site" />
      </div>
    </div>
  );
}

export default CompanyInfo;
