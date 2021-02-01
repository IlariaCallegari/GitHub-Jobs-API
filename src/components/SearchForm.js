import React, { useState } from "react";
import useFormState from "../hooks/useFormState";
import classNames from "classnames";
import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import useStyles from "../styles/SearchForm-style";
import StyledCheckbox from "./StyledCheckbox";

function SearchForm(props) {
  //FORM STATE
  const [description, setDescription, resetDescription] = useFormState("");
  const [location, setLocation, resetLocation] = useFormState("");
  const [checked, setChecked] = useState(false);
  const { searchJobs } = props;

  //styles variables
  const classes = useStyles();
  const {
    searchInputs,
    bar,
    icon,
    input,
    form,
    searchButton,
    descriptionInput,
    locationInput,
    checkboxInput,
  } = classes;

  //event handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    searchJobs({ description, location, checked });
  };

  const handleReset = () => {
    resetDescription();
    resetLocation();
    setChecked(false);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <form className={searchInputs} onSubmit={handleSubmit}>
      {/* description */}
      <div className={classNames(bar, descriptionInput)}>
        <div className={icon}>
          <img src={iconSearch} alt="search icon" />
        </div>
        <input
          className={classNames(input, form)}
          type="search"
          placeholder="Filter by title, companies, expertise..."
          value={description}
          onChange={setDescription}
        />
      </div>

      {/* location */}
      <div className={classNames(bar, locationInput)}>
        <div className={icon}>
          <img src={iconLocation} alt="location icon" />
        </div>
        <input
          className={classNames(input, form)}
          type="search"
          placeholder="Filter by location..."
          value={location}
          onChange={setLocation}
        />
      </div>

      {/* full_time */}
      <div className={classNames(bar, checkboxInput, icon)}>
        <div className={form}>
          <StyledCheckbox
            checked={checked}
            onChange={handleChecked}
            inputProps={{ "aria-label": "checkbox" }}
          />
          <label htmlFor="checkbox">Full Time Only</label>
          <button className={searchButton} onClick={handleReset}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
