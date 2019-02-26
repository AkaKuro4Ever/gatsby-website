import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p style= {{color: 'purple', fontSize: `72px`}}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p> Woohoo! :D </p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Footer footerText="This is the footer"/>
  </Layout>
)

export default IndexPage
