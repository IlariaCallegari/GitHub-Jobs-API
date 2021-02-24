import useStyles from "../styles/Button-style.js";

function Button({ text, handleclick }) {
  const classes = useStyles();
  const { button } = classes;

  return (
    <button className={button} onClick={handleclick}>
      {text}
    </button>
  );
}

export default Button;
