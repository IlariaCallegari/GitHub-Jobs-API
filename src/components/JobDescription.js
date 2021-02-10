import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ButtonPrimary } from "./Buttons";
import useStyles from "../assets/styles/JobDescription-style";

function JobDescription() {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { container, position, description } = classes;
  return (
    <div className={container}>
      <div className={position}>
        <div>
          <p>
            <span>Time</span> • <span>Fulltime</span>{" "}
          </p>
          <h1>Job Title</h1>
          <p>Location</p>
        </div>
        <ButtonPrimary text="Apply Now" />
      </div>
      <div className={description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
        varius sagittis. Aenean mollis lacus enim, sed maximus neque convallis
        quis. Sed non tellus dictum, luctus magna vel, suscipit felis. Fusce
        hendrerit tortor mattis dapibus lacinia. Aliquam erat volutpat. Integer
        dolor dui, convallis vitae mi ut, tincidunt tincidunt felis. Proin at
        maximus quam. Proin in tincidunt nunc. Mauris imperdiet nec quam
        sollicitudin scelerisque. Proin non felis vehicula, molestie dolor in,
        malesuada mi. Integer velit ipsum, volutpat eget erat sit amet,
        ullamcorper posuere ligula. Maecenas blandit sit amet odio non
        vulputate. Phasellus ultricies orci in lectus finibus, sit amet viverra
        ipsum commodo. Fusce tortor sem, aliquam ac turpis non, vestibulum
        semper justo. Nulla gravida pulvinar blandit. Donec imperdiet leo vel
        massa luctus, nec ornare diam vulputate. Integer iaculis velit non velit
        sollicitudin sodales. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Duis rhoncus eros sapien,
        euismod viverra tellus dapibus nec. Phasellus at lorem a dui volutpat
        consectetur. Quisque aliquam id quam fringilla vehicula. Vivamus
        elementum ullamcorper ipsum et molestie.
      </div>
    </div>
  );
}

export default JobDescription;
