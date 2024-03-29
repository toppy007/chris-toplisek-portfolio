import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const backgroundImageContainer = style({
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minWidth: theme.sizes.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '655px'
  });

export const textContainer = style({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    paddingTop: 0,
    paddingBottom: theme.space[5],
    paddingLeft: theme.space[5],
    paddingRight: theme.space[5],
    maxWidth: theme.sizes.container
  });

export const underlineHeading = style({
    textDecoration: 'underline',
  });
  