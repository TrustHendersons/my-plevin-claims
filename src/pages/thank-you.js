import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"


const ThanksPage = () => {

  return (

  <Layout>
    <div class="container">
    
      <div>
          <section className="section">
              <h1>Thank you</h1>

              <p>Our expert team will now begin checking whether you may be due a refund.  </p>

              <p>Please keep an eye out for the relevant documentation that we will send you either by email or post in the next 7 days.  We may also contact you by telephone to obtain further information if required and should you have any questions at any time, please do not hesitate to contact us on ___________(tel) or ___________ (email).</p>
          </section>  
      </div>
    </div>
  </Layout>
)

  }

export default ThanksPage
