import React, { useContext, useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import CustomFade from "../Animation/CustomFade"
import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { title, name, subtitle, cta } = hero

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <CustomFade
          triggerOnce
          direction={isDesktop ? "left" : "up"}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            {title || "Hi, my name is"}{" "}
            <span className="text-color-main">{name || "Raphael Discky"}</span>
            <br />
            {subtitle || (
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={tp => {
                  tp.typeString("I'm a Software Engineer")
                    .pauseFor(2000)
                    .deleteChars(17)
                    .typeString("Lifetime Learner")
                    .pauseFor(2000)
                    .deleteChars(17)
                    .start()
                }}
              />
            )}
          </h1>
        </CustomFade>
        <CustomFade
          triggerOnce
          direction={isDesktop ? "left" : "up"}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || "more about me"}
              </Link>
            </span>
          </p>
        </CustomFade>
      </Container>
    </section>
  )
}

export default Header
