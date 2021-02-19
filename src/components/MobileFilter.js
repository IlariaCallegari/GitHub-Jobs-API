import React from "react";
import useStyles from "../styles/MobileFilter-style";
import search from "../assets/mobile/icon-search-mobile.svg";
import filter from "../assets/mobile/icon-filter.svg";

function MobileFilter() {
  const classes = useStyles();
  const { mobileFilter, searchIcon, filterIcon } = classes;
  return (
    <div className={mobileFilter}>
      <div className={filterIcon}>
        <img src={filter} alt="icon filter" />
      </div>
      <div className={searchIcon}>
        <img src={search} alt="search icon" />
      </div>
    </div>
  );
}
export default MobileFilter;
