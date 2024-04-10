import colors from "./colors";

export const commonText = {
  fontSize: "16px",
  lineHeight: "140%",
  letterSpacing: "0.25px",
  fontFamily: "AvertaStdCY",
  textOverflow: "ellipsis",
  overflow: "hidden",
  color: colors.black.primary,
} as any;

export const boldText = {
  ...commonText,
  fontSize: "18px",
  fontFamily: "AvertaStdCY-Semibold",
} as any;

export const extraBoldText = {
  ...commonText,
  fontSize: "18px",
  fontFamily: "AvertaStdCY-Bold",
};

export const strongText = {
  ...commonText,
  fontSize: "20px",
  fontFamily: "AvertaStdCY-ExtraBold",
  textTransform: "uppercase",
} as any;
