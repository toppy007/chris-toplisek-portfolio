import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const backgroundImageContainer = style({
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minWidth: theme.sizes.container
  });

export const textContainer = style({
    position: "absolute",
    top: "200px",
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    padding: theme.space[5],
    maxWidth: theme.sizes.container
  });
  