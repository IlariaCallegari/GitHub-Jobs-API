import React, { memo, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { parseURL } from "../utils/helpers";
import imagePlaceHolder from "../assets/desktop/imagePlaceholder.svg";
import useStyles from "../styles/ComapanyInfo-style";

function CompanyInfo({ jobSelected }) {
  const { company_logo, company, company_url } = jobSelected;
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { header, logo, infos, companyName, url, button } = classes;
  return (
    <div className={header}>
      <div className={logo}>
        <img
          className={logo}
          src={company_logo !== null ? company_logo : imagePlaceHolder}
          alt={`${company} logo`}
        />
      </div>
      <div className={infos}>
        <div>
          <h3 className={companyName}>{jobSelected.company}</h3>
          <p className={url}>{parseURL(company_url)}</p>
        </div>
        <div>
          <a href={`${company_url}`} className={button}>
            Company Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(CompanyInfo);
