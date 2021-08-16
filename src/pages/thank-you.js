import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"


const IndexPage = () => {

  return (

  <Layout>
    <div class="container">
    
      <div>
          <section className="section">
              <h1>THANK YOU BOB</h1>
              <p>We now have your application for a Plevin claim. Our dedicated team of lawyers are now working on your
              case on your behalf. We will send you all the relevant documentation via email in the next 7 days.If a
              member of the team needs to discuss your claim they will contact you.</p>
          </section>  
      </div>
    </div>
  </Layout>
)

  }

export default IndexPage
