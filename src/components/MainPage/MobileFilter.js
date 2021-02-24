import React from "react";
import useStyles from "../../styles/MobileFilter-style";
import search from "../../assets/mobile/icon-search-mobile.svg";
import filter from "../../assets/mobile/icon-filter.svg";

function MobileFilter({ handleClick, fetchData }) {
  const classes = useStyles();
  const { mobileFilter, searchIcon, filterIcon } = classes;

  return (
    <div className={mobileFilter}>
      <div className={filterIcon} onClick={handleClick}>
        <img src={filter} alt="icon filter" />
      </div>
      <div className={searchIcon} onClick={fetchData}>
        <img src={search} alt="search icon" />
      </div>
    </div>
  );
}
export default MobileFilter;
