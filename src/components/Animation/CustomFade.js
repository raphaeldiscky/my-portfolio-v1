import React from "react"
import { keyframes } from "@emotion/react"
import { Fade } from "react-awesome-reveal"

const CustomFade = ({
  children,
  triggerOnce = true,
  duration = 1000,
  delay = 0,
  direction = "down",
  distance = "0px",
}) => {
  let xDistance = "0px"
  let yDistance = "0px"

  switch (direction) {
    case "up":
      yDistance = `-${distance}`
      break
    case "down":
      yDistance = distance
      break
    case "left":
      xDistance = `-${distance}`
      break
    case "right":
      xDistance = distance
      break
    default:
      break
  }

  const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(${xDistance}, ${yDistance}, 0);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `

  return (
    <Fade
      triggerOnce={triggerOnce}
      duration={duration}
      delay={delay}
      distance={distance}
      direction={direction}
      keyframes={customAnimation}
    >
      {children}
    </Fade>
  )
}

export default CustomFade
