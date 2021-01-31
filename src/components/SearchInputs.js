import React, { useState } from "react";
import classNames from "classnames";
import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import useStyles from "../styles/SearchInputs-style";
import StyledCheckbox from "./StyledCheckbox";

function SearchInputs(props) {
  //FORM STATE
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
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

  //events handlers
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJobs({ description, location, checked });
    setDescription("");
    setLocation("");
    setChecked(false);
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
          name="description"
          onChange={handleDescription}
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
          name="location"
          onChange={handleLocation}
        />
      </div>

      {/* full_time */}
      <div className={classNames(bar, checkboxInput, icon)}>
        <div form className={form}>
          <StyledCheckbox
            checked={checked}
            onChange={handleChecked}
            inputProps={{ "aria-label": "checkbox" }}
          />
          <label htmlFor="checkbox">Full Time Only</label>
          <button className={searchButton}>Search</button>
        </div>
      </div>
    </form>
  );
}

export default SearchInputs;
