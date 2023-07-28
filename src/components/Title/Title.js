import React from "react"
import CustomFade from "../Animation/CustomFade"
import PropTypes from "prop-types"

const Title = ({ title }) => (
  <CustomFade
    triggerOnce
    direction="down"
    duration={1000}
    delay={300}
    distance="0px"
  >
    <h2 className="section-title">{title}</h2>
  </CustomFade>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
