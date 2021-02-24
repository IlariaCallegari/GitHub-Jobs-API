import {memo} from "react";
import HeaderWrapper from "./HeaderWrapper";
import useStyle from "../../styles/Header-style";

function Header() {
  //style
  const classes = useStyle();
  const { header } = classes;
  return (
    <div className={header}>
      <HeaderWrapper/>
    </div>
  );
}

export default memo(Header);
