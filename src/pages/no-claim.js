import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"


const NoClaimPage = () => {

  return (

  <Layout>
    <div class="container">
    
      <div>
          <section className="section">
          <h1>SORRY, YOU WILL NOT HAVE A PLEVIN CLAIM UNLESS YOU WERE SOLD PPI WHEN YOU TOOK OUT A LOAN, MORTGAGE OR CREDIT CARD.</h1>
          <p>In order to have a Plevin claim you must have had PPI. If you have had PPI and wish to proceed click below.</p>

          <Link className="btn-start m-2" to="/form/">Start Your FREE Plevin Check Now</Link>
          </section>  
      </div>
    </div>
  </Layout>
)

  }

export default NoClaimPage