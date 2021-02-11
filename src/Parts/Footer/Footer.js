import React, { useContext } from "react";
import useStyles from "../../assets/styles/Footer-style";
import Button from "../../components/Button";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer({jobSelected}) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const {company, title} = jobSelected; 
  const { footer, container, jobTitle} = classes;
  return (
    <div className={footer}>
      <div className={container}>
          <div>
              <h3 className={jobTitle}>{title}</h3>
              <p>{company}</p>
          </div>
          <Button text="Apply Now"/>
      </div>
    </div>
  );
}

export default Footer;
