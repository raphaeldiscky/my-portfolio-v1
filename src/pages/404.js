import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { headData } from "../mock/data"
import "../style/main.scss"
import CustomFade from "../components/Animation/CustomFade"

const NotFound = () => {
  const { lang } = headData

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || "en"} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <CustomFade
            triggerOnce
            direction="down"
            duration={1000}
            delay={500}
            distance="30px"
          >
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{" "}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </CustomFade>
          <CustomFade
            triggerOnce
            direction="down"
            duration={1000}
            delay={1000}
            distance="30px"
          >
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </CustomFade>
        </Container>
      </section>
    </>
  )
}

export default NotFound
