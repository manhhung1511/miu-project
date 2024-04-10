import { useShallow } from "zustand/react/shallow";

import { useTranslation } from "react-i18next";

import { getRecentSearches } from "core/localstorage/recentSearches";
import { useSearchStore } from "core/store/useCartStore";

import useStyles from "./styles";
import { Typography } from "@mui/material";

export const RecentSearches = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  // const handleSearchByRecentSearchValue = useSearchStore(
  //   useShallow(state => state.handleSearchByRecentSearchValue),
  // );

  return (
    <div className={classes.container}>
      <Typography component="strong" variant="bold">
        {t("search:recentSearches")}
      </Typography>

      <div className={classes.recentSearchWrapper}>
        {Array.from(getRecentSearches())
          .reverse()
          .map(text => (
            <Typography
              key={text}
              component="strong"
              variant="light"
              className={classes.recentSearch}
              onClick={() => }
            >
              {text}
            </Typography>
          ))}
      </div>
    </div>
  );
};
