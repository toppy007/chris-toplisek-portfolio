import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { colors } from "../colors.css"

export const form = style({
  textAlign: "left",
  maxWidth: "100%",
  margin: "1rem 0",
});

export const formElement = style({
  fontFamily: "inherit",
  fontSize: "inherit",
  border: "none",
  width: "100%",
  marginTop: theme.space[3],
  background: colors.primary,
  padding: theme.space[3],

});

export const textarea = style({
  fontFamily: "inherit",
  fontSize: "inherit",
  border: "none",
  width: "100%",
  marginTop: theme.space[3],
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
  border: `1px solid ${theme.colors.active}`,  // Set border color to orange
  borderRadius: "50px",  
  ":hover": {
    backgroundColor: theme.colors.black,  // Change background color on hover
    borderColor: theme.colors.white,  // Change border color on hover
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
