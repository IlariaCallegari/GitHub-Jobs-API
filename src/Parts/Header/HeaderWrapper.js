import {memo} from "react";
import Logo from "./Logo";
import SunMoonSwitch from "./SunMoonSwitch";
import useStyles from "../../styles/HeaderWrapper-style";

function HeaderWrapper() {
  const classes = useStyles();
  const { headerWrapper } = classes;
  return (
    <div className={headerWrapper}>
      <Logo />
      <SunMoonSwitch/>
    </div>
  );
}

export default memo(HeaderWrapper);
