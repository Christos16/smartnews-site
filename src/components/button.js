import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

const Button = ({ children }) => (
  <a
  href="https://apps.apple.com/us/app/smartynews/id1583843156?itsct=apps_box_link&itscg=30200"
  target="_blank"
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: "#FFDE59",
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
    }}
  >
    {children}
  </a>
)

export default Button
