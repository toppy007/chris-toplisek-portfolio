import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";
import { colors } from "../colors.css";

export const arrow = style({
  color: "black",
});

export const nextArrow = style([arrow, { right: "10px" }]);
export const prevArrow = style([arrow, { left: "10px" }]);