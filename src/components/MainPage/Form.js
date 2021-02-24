import React, { useContext, useState } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../contexts/ThemeContext";
import { JobContext } from "../../contexts/JobContext";
import useFormState from "../../hooks/useFormState";
import iconSearch from "../../assets/desktop/icon-search.svg";
import iconLocation from "../../assets/desktop/icon-location.svg";
import StyledCheckbox from "./StyledCheckbox";
import Button from "../Button";
import MobileFilter from "./MobileFilter";
import SearchPopUp from "./SearchPopUp";
import useStyles from "../../styles/Form-style";

function Form() {
  //FORM STATE
  const [description, setDescription, resetDescription] = useFormState("");
  const [location, setLocation, resetLocation] = useFormState("");
  const [checked, setChecked] = useState(false);

  //MOBILE FORM STATE
  const [isOpen, setOpen] = useState(false);

  //CONTEXT
  const { isDark } = useContext(ThemeContext);
  const { setIsLoading, fetchData } = useContext(JobContext);

  const classes = useStyles(isDark);
  const {
    form,
    bar,
    icon,
    searchIcon,
    input,
    insideForm,
    descriptionInput,
    locationInput,
    checkboxInput,
  } = classes;

  //event handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData({ description, location, checked });
    resetDescription();
    resetLocation();
    setChecked(false);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const closePopUp = (e) => {
    setOpen(false);
    handleSubmit(e);
  };

  return (
    <React.Fragment>
      <form className={form} onSubmit={handleSubmit}>
        {/* description */}
        <div className={classNames(bar, descriptionInput)}>
          <div className={classNames(icon, searchIcon)}>
            <img src={iconSearch} alt="search icon" />
          </div>
          <input
            required
            className={classNames(input, insideForm)}
            type="search"
            placeholder="Filter by title, companies, expertise..."
            value={description}
            onChange={setDescription}
            aria-label="Filter by title, companies, expertise..."
          />
          <MobileFilter handleClick={handleClick} fetchData={fetchData} />
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
            aria-label="Filter by location"
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
            <Button text="Search" />
          </div>
        </div>
      </form>
      <SearchPopUp
        isOpen={isOpen}
        location={location}
        setLocation={setLocation}
        checked={checked}
        handleSubmit={closePopUp}
        handleChecked={handleChecked}
      />
    </React.Fragment>
  );
}

export default Form;
