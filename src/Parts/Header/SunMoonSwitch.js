import {memo} from "react";
import CostumSwitch from "./CostumSwitch";
import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import useStyles from "../../styles/SunMoonSwitch-style";

function SunMoonSwitch() {
  const classes = useStyles();
  const { sunMoonSwitch } = classes;
  return (
    <div className={sunMoonSwitch}>
      <div>
        <img src={iconSun} alt="little white sun" />
      </div>
      <CostumSwitch />
      <div>
        <img src={iconMoon} alt="little white moon" />
      </div>
    </div>
  );
}

export default memo(SunMoonSwitch);
