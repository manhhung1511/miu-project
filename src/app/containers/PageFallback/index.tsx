import useStyles from "./styles";

export default function PageFallback() {
  const { classes } = useStyles();
  return <div className={classes.page}></div>;
}
