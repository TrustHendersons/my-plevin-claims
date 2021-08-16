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
          <div className="container">
            {children}
          </div>  
        </main>

        <div className="subfooter">
          <div className="container">    
            <div className="grid grid-cols-3 justify-items-center gap-4 text-center">
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>
                <h4 className="mb-2">Easy process</h4>
                <p>Start the simple online form today</p>
              </div>
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>                
                <h4 className="mb-2">Expert Assistance</h4>
                <p>Over 10 years reclaiming money for people like you</p>
              </div>
              <div>
                <FeatherIcon icon="award" size="36" className="mb-2 mx-auto"/>                
                <h4 className="mb-2">Friendly Team</h4>
                <p>We will take care of everything</p>
              </div>
            </div>
           </div> 
        </div>


        <footer>
          <div className="container">          
            © {new Date().getFullYear()} Built by
            {` `}
            <a href="https://2owls.co.uk">Owls</a>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
