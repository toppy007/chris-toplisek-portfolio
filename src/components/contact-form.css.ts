import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { colors } from "../colors.css"

export const form = style({
  textAlign: "left",
  maxWidth: "100%",
});

export const formElement = style({
  fontFamily: "inherit",
  fontSize: theme.fontSizes[4],
  color: colors.white,
  border: "none",
  width: "100%",
  marginTop: theme.space[2],
  background: colors.primary,
  padding: theme.space[3],
});


export const textarea = style({
  fontFamily: "inherit",
  fontSize: theme.fontSizes[4],
  color: colors.white,
  border: "none",
  width: "100%",
  marginTop: theme.space[2],
  background: colors.primary,
  padding: theme.space[3],
});

export const button = style({
  fontFamily: "inherit",
  fontSize: theme.fontSizes[4],
  backgroundColor: theme.colors.background, 
  color: theme.colors.active, 
  padding: theme.space[3],
  justifySelf: "start",
  cursor: "pointer",
  border: `1px solid ${theme.colors.active}`,  
  borderRadius: "50px",  
  ":hover": {
    backgroundColor: theme.colors.black, 
    borderColor: theme.colors.white,  
  },
});

export const fieldErrors = style({
  marginTop: "-0.5rem",
  fontSize: "small",
  color: "crimson",
  justifySelf: "right",
  gridColumn: "1/span 2",
});

export const formErrors = style({
  marginTop: "0.5rem",
  color: "crimson",
  alignSelf: "center",
  gridColumn: "2/span 1",
});
