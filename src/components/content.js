import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Minimal Features"
      description=" The smarty news app gives you the latest news to keep you updated with everything happening in the world."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Why ?</h3>
        <p style={{ color: COLORS.gray }}>
       

 All newest and most interesting trends available with the smarty news application.

        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
