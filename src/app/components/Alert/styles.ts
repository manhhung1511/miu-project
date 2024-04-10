import { makeStyles } from "tss-react/mui";

import colors from "core/styles/colors";

export const useStyles = makeStyles({
  name: "Alert",
})((_theme, _) => ({
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    padding: "10px 15px",
    margin: "0 auto"
  },

  success: {
    backgroundColor: colors.green.light,
  },

  error: {
    backgroundColor: colors.red.light2,
  },

  warning: {
    backgroundColor: colors.yellow.light,
  },

  text: {
    marginLeft: "10px",
  },
}));
