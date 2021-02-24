import { memo } from "react";
import useStyles from "../../styles/Logo-style";
import logo from "../../assets/desktop/logo.svg";

function Logo() {
  const classes = useStyles();
  const { logoImg } = classes;
  return (
    <div>
      <img className={logoImg} src={logo} alt="devJobs Logo" />
    </div>
  );
}

export default memo(Logo);
