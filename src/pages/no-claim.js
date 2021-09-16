import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const NoClaimPage = () => {

  return (

  <Layout>
      <div className="container h-full">
    
      <div>
          <section className="section">
          <h2>Sorry, you will not have a Plevin claim unless you were sold PPi when you took out a loan, mortgage or credit card.</h2>
          <p>In order to have a Plevin claim you must have had PPI. If you have had PPI and wish to proceed click below.</p>
          <Link className="btn-start m-2 text-center" to="/form/">Start Your FREE Plevin Check Now</Link>
          </section>  
      </div>
    </div>
  </Layout>
)

  }

export default NoClaimPage