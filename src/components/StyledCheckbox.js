import React from 'react';
import clsx from 'clsx';
import useStyles from "../styles/StyledCheckbox-style"
import Checkbox from '@material-ui/core/Checkbox';

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();
  const {root, icon, checkedIcon} = classes; 
  return (
    <Checkbox
      className={root}
      disableRipple
      checkedIcon={<span className={clsx(icon, checkedIcon)} />}
      icon={<span className={icon} />}
      inputProps={{ 'aria-label': 'checkbox' }}
      {...props}
    />
  );
}

export default StyledCheckbox; 