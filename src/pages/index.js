import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="uppercase text-green-500 mb-1">Missed the PPI deadline?</h1>
    <h2 className="uppercase text-green-500">PPI claim rejected?</h2>
    <p>£billions can now be claimed in PPI2 'Plevin' cases after a crucial court ruling, which means the deadline no longer applies.</p>

    <Link className="btn-green mb-2" to="/form/">Start Claim</Link>

    <br/>

    <br/>
    <StaticImage
      src="../images/home-img-test.jfif"
      width={500}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export default IndexPage
