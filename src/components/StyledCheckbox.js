import React from 'react';
import clsx from 'clsx';
import useStyles from "../styles/StyledCheckbox-style"
import Checkbox from '@material-ui/core/Checkbox';

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'checkbox' }}
      {...props}
    />
  );
}

export default StyledCheckbox; 