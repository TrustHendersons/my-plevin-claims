import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FeatherIcon from "feather-icons-react"


const Header = ({ siteTitle }) => (
  <header>
    <div className="lg:container px-4 flex justify-between">
      <div>
        <a href="" onClick={()=>{navigate("/")}}>
        <StaticImage
          src="../images/ypc-logo.png"
          width={150}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Your Plevin Claims"
        />
        </a>
      </div>
      <div className="pt-4">
        <FeatherIcon icon="shield" fill="#7BAE7A" color="#394053" size="36" className="mb-2 mx-auto"/>
        <p className="mt-2 mb-0">SSL Encrypted</p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
