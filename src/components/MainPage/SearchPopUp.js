import { memo, useContext } from "react";
import StyledCheckbox from "./StyledCheckbox";
import iconLocation from "../../assets/desktop/icon-location.svg";
import useStyles from "../../styles/SearchPopUp-style";
import Button from "../Button";
import { ThemeContext } from "../../contexts/ThemeContext";

function SearchPopUp({
  isOpen,
  handleSubmit,
  location,
  setLocation,
  checked,
  handleChecked,
}) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { form, formBackground, locationBox, checkBox } = classes;
  return isOpen ? (
    <div className={formBackground}>
      <form onSubmit={handleSubmit} className={form}>
        <div className={locationBox}>
          <div>
            <img src={iconLocation} alt="location icon" />
          </div>
          <input
            type="search"
            placeholder="Filter by location..."
            value={location}
            onChange={setLocation}
            aria-label="Filter by location..."
          />
        </div>
        <div className={checkBox}>
          <StyledCheckbox
            checked={checked}
            onChange={handleChecked}
            inputProps={{ "aria-label": "checkbox" }}
          />
          <label htmlFor="checkbox">Full Time Only</label>
        </div>
        <Button text="Search" />
      </form>
    </div>
  ) : null;
}

export default memo(SearchPopUp);
