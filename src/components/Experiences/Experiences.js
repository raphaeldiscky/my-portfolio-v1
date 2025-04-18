import React, { useContext, useState, useEffect } from "react"
import CustomFade from "../Animation/CustomFade"
import { Container, Row, Col } from "react-bootstrap"
import Title from "../Title/Title"
import ExperienceImg from "../Image/ExperienceImg"
import PortfolioContext from "../../context/context"

const Experiences = () => {
  const { experiences } = useContext(PortfolioContext)

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="experiences">
      <Container>
        <Title title="Selected Work Experiences" />
        {experiences.map((experience, i) => {
          const {
            img,
            company,
            companyUrl,
            jobTitle,
            date,
            descriptionOne,
            descriptionTwo,
            descriptionThree,
          } = experience

          return (
            <Row key={i} className="experience-wrapper">
              <Col md={2} sm={12}>
                <CustomFade
                  triggerOnce
                  direction={isDesktop ? "left" : "down"}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="experience-wrapper__image">
                    <ExperienceImg alt="profile picture" filename={img} />
                  </div>
                </CustomFade>
              </Col>
              <Col md={10} sm={12}>
                <CustomFade
                  triggerOnce
                  direction={isDesktop ? "right" : "down"}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="experience-wrapper__info">
                    <p className="date">{date || "Date"}</p>
                    <h1>{jobTitle || "Job Title"}</h1>
                    <p className="company">
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {company || "Company Name"}
                      </a>
                    </p>
                    <p className="experience-wrapper__info-text">
                      {descriptionOne || ""}
                    </p>
                    <p className="experience-wrapper__info-text">
                      {descriptionTwo || ""}
                    </p>
                    <p className="experience-wrapper__info-text">
                      {descriptionThree || ""}
                    </p>
                  </div>
                </CustomFade>
              </Col>
            </Row>
          )
        })}
        <CustomFade
          triggerOnce
          direction="down"
          duration={1000}
          delay={800}
          distance="30px"
        >
          <p className="p-linkedlin">
            Please see my LinkedIn for the complete list of my past work
            experiences
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--hero"
            href="https://www.linkedin.com/in/raphaeldiscky/"
          >
            My LinkedIn
          </a>
        </CustomFade>
      </Container>
    </section>
  )
}

export default Experiences
