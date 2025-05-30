import React, { useContext, useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Title from "../Title/Title"
import AboutImg from "../Image/AboutImg"
import PortfolioContext from "../../context/context"
import CustomFade from "../Animation/CustomFade"

const About = () => {
  const { about } = useContext(PortfolioContext)
  const {
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    resume,
    portfolio,
  } = about

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <CustomFade triggerOnce duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </CustomFade>
          </Col>
          <Col md={6} sm={12}>
            <CustomFade
              triggerOnce
              direction={isDesktop ? "right" : "down"}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne || ""}</p>
                <p className="about-wrapper__info-text">{paragraphTwo || ""}</p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ""}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || ""}
                </p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                    {portfolio && (
                      <span className="mx-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--resume"
                          href={portfolio}
                        >
                          Portfolio
                        </a>
                      </span>
                    )}
                  </span>
                )}
              </div>
            </CustomFade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
