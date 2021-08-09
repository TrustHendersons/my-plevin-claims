import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <StaticImage
        src="../images/ypc-logo.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Your Plevin Claims"
      />
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
