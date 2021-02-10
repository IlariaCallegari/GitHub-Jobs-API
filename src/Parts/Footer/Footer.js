import React, { useContext } from "react";
import useStyles from "../../assets/styles/Footer-style";
import { ButtonPrimary } from "../../components/Buttons";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { isDark } = useContext(ThemeContext);

  const classes = useStyles(isDark);
  const { footer, container, jobTitle} = classes;
  return (
    <div className={footer}>
      <div className={container}>
          <div>
              <h3 className={jobTitle}>Job Title</h3>
              <p>Company</p>
          </div>
          <ButtonPrimary text="Apply Now"/>
      </div>
    </div>
  );
}

export default Footer;
