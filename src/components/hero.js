import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import mockupFrame from "../images/landing.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Smarty News </h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Your personal assistant for all breaking news related.
    </p>
    <Button link={`https://apps.apple.com/us/app/smartynews/id1583843156?itsct=apps_box_link&itscg=30200`}>Download now</Button>
    <div style={{ margin: 60, width: `300px`, position: "relative" }}>
      <img style={{borderRadius: '20px'}} src={mockupFrame}/>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
