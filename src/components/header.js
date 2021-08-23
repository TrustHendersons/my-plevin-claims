import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="lg:container px-4">
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
