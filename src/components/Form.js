import React, { useContext, useState } from "react";
import classNames from "classnames";
import { ThemeContext } from "../contexts/ThemeContext";
import useFormState from "../hooks/useFormState";
import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import StyledCheckbox from "./StyledCheckbox";
import Button from "./Button";
import {fetchJobs} from "../services/api"
import useStyles from "../assets/styles/Form-style";

function Form() {
  //FORM STATE
  const [description, setDescription, resetDescription] = useFormState("");
  const [location, setLocation, resetLocation] = useFormState("");
  const [checked, setChecked] = useState(false);

  //CONTEXT
  const { isDark } = useContext(ThemeContext);

  //styles variables
  const classes = useStyles(isDark);
  const {
    form,
    bar,
    icon,
    input,
    insideForm,
    descriptionInput,
    locationInput,
    checkboxInput,
  } = classes;

  //event handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobs({ description, location, checked });
    resetDescription();
    resetLocation();
    setChecked(false);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      {/* description */}
      <div className={classNames(bar, descriptionInput)}>
        <div className={icon}>
          <img src={iconSearch} alt="search icon" />
        </div>
        <input
          className={classNames(input, insideForm)}
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
          className={classNames(input, insideForm)}
          type="search"
          placeholder="Filter by location..."
          value={location}
          onChange={setLocation}
        />
      </div>

      {/* full_time */}
      <div className={classNames(bar, checkboxInput, icon)}>
        <div className={insideForm}>
          <StyledCheckbox
            checked={checked}
            onChange={handleChecked}
            inputProps={{ "aria-label": "checkbox" }}
          />
          <label htmlFor="checkbox">Full Time Only</label>
          <Button text="Search"></Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
