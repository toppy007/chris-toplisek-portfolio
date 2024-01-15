import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"
import { mobileNavLink } from "./header.css"

export const navItemText = style({
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease-in-out', // Add a transition for a smooth color change
  });
  
  // Add hover effect
  export const navItemTextHover = style({
    ':hover': {
      color: 'orange', // Change the color to your desired hover color
    },
  });