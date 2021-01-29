import React from "react";
import classNames from "classnames";
import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import useStyles from "../styles/SearchInputs-style";
import StyledCheckbox from "./StyledCheckbox";

function SearchInputs(props) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles();
  const {
    searchInputs,
    bar,
    icon,
    input,
    form,
    searchButton,
    positionInput,
    locationInput,
    checkboxInput,
  } = classes;
  const positionInputClass = classNames(bar, positionInput);
  const locationInputClass = classNames(bar, locationInput);
  const checkboxInputClass = classNames(bar, checkboxInput, icon);
  return (
    <div className={searchInputs}>
    
      {/* title, position */}
      <div className={positionInputClass}>
        <div className={icon}>
          <img src={iconSearch} alt="search icon" />
        </div>

        <form className={form}>
          <input
            className={input}
            type="search"
            placeholder="Filter by title, companies, expertise..."
          />
        </form>
      </div>

      {/* location */}
      <div className={locationInputClass}>
        <div className={icon}>
          <img src={iconLocation} alt="location icon" />
        </div>

        <form className={form}>
          <input
            className={input}
            type="search"
            placeholder="Filter by location..."
          />
        </form>
      </div>

      {/* full time */}
      <div className={checkboxInputClass}>
        <form className={form}>
          <StyledCheckbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "checkbox" }}
          />
          <label for="checkbox">Full Time Only</label>
          <button className={searchButton}>Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchInputs;
