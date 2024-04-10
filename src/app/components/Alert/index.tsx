import clsx from "clsx";

import { FC } from "react";

import { Alert as MuiAlert } from "@mui/material";

import { useStyles } from "./styles";

interface AlertProps {
  icon: React.ReactNode;
  text: string;
  severity?: "success" | "error" | "warning";
  className?: string;
}

const Alert: FC<AlertProps> = ({
  icon,
  severity = "success",
  text,
  className,
}) => {
  const { classes } = useStyles();

  return (
    <MuiAlert
      icon={icon}
      className={clsx(classes.container, {
        [classes.success]: severity === "success",
        [classes.error]: severity === "error",
        [classes.warning]: severity === "warning",
        className,
      })}
    >
      {text}
    </MuiAlert>
  );
};

export default Alert;
