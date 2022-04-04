import React from "react"
import { Helmet } from "react-helmet"
import App from "../components/App"
import { headData } from "../mock/data"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/main.scss"

const IndexPage = () => {
  const { title, lang, description } = headData
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Raphael Discky Portfolio"}</title>
        <html lang={lang || "en"} />
        <meta
          name="description"
          content={description || "Raphael Discky Portfolio"}
        />
      </Helmet>
      <App />
    </>
  )
}

export default IndexPage
