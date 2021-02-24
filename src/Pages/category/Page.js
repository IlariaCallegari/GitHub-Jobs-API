import useStyles from "../../styles/General-style";

function Page({ children }) {
  const classes = useStyles();
  const { general } = classes;
  return <section className={general}>{children}</section>;
}

export default Page;
