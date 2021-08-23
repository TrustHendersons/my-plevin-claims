import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import FeatherIcon from "feather-icons-react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const feather = require('feather-icons')  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main class="flex-grow">
          <div className="lg:container h-full">
            {children}
          </div>  
        </main>

        <div className="subfooter">
          <div className="container">    
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 text-center">
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>
                <h4 className="mb-2">Easy Process</h4>
                <p>Start the simple <br/> online form today</p>
              </div>
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>                
                <h4 className="mb-2">Expert Assistance</h4>
                <p>For over 10 years we have been <br /> reclaiming money for consumers like you</p>
              </div>
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>                
                <h4 className="mb-2">Free Service</h4>
                <p>No cost to you and no obligation</p>
              </div>
            </div>
           </div> 
        </div>


        <footer>
          <div className="lg:container">          
            © {new Date().getFullYear()} Built by
            {` `}
            <a href="https://2owls.co.uk">Owls</a>
            <hr />
            <p className="text-xs text-center">My Plevin Claims is a trading style of Henderson Claims Limited. Henderson Claims Limited is authorised and regulated by the Financial Conduct Authority with reference number FRN:836041. Henderson Claims Limited is a Claims Management Company (CMC). Registered with the Information Commissioners Office: registration number ZA147049. Registered address: Unit 2, Ashbrook Office Park, Manchester, M22 5LB. Registered in England and Wales, Company number 7646017. VAT number: 240 8769 88.</p>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
