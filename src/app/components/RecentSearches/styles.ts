/* eslint-disable @typescript-eslint/naming-convention */
import { makeStyles } from "tss-react/mui";

import colors from "core/styles/colors";

const useStyles = makeStyles()(() => ({
  container: {
    margin: "0 15px",
  },
  recentSearchWrapper: {
    display: "flex",
    marginTop: "15px",
    flexWrap: "wrap",
  },
  recentSearch: {
    color: colors.black.primary,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: "8px 15px",
    border: `1px solid ${colors.black.primary}`,
    borderRadius: 20,
    marginBottom: "10px",
    marginRight: "10px",

    ":hover": {
      cursor: "pointer",
      border: `1px solid ${colors.blue.primary}`,
      backgroundColor: colors.blue.light11,
    },
  },
}));

export default useStyles;
