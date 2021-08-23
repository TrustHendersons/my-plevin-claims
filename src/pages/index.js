import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <h1 className="uppercase text-green-500 mb-1 uppercase">Missed the PPI deadline?</h1>
          <h2 className="uppercase text-green-500">PPI claim rejected?</h2>
          <p>£billions can now be claimed in PPI2 'Plevin' cases after a crucial court ruling, which means the deadline no longer applies.</p>

          <div className="section-start w-full rounded-md ">
          <h1 className="text-center uppercase mb-1">Start your check today </h1>
          <h3 className="text-center uppercase">Did you take out PPI?</h3>

          <div className="flex flex-wrap justify-center">
            <Link className="btn-start m-2" to="/form/">YES</Link>
            <Link className="btn-start m-2" to="/form/">UNSURE</Link>
            <Link className="btn-start m-2" to="#">NO</Link>
          </div>
      </div>             

        </div>

        <div>  
        <StaticImage
          src="../images/home-img-test.jfif"
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        </div>     

      </div>



      <div className="section-grey w-full rounded-md grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-sm mb-2"><strong>We offer this free check</strong> to assess whether there was an undisclosed commission on a PPI policy that you held, before you decide whether you wish to make a claim.</p>
        </div>
        <div>  
          <p className="text-sm mb-2"><strong>This check is completely free of charge</strong> and you are under no obligation to pursue a claim once this free check has been completed.</p>
        </div>  
        <div>  
          <p className="text-sm mb-2"><strong>As part of the free check,</strong> we will contact the financial institution who sold you the PPI policy to obtain information relating to the policy.</p>
        </div>  
        <div>
          <p className="text-sm"><strong>Once the free check is complete,</strong> we will contact you with the results. You can then decide what to do next.</p>
        </div>
      </div>

      <div >
        <p className="text-sm text-center">You can pursue a claim yourself without using a Claims Management Company and without cost.  You will first need to complain directly to the appropriate third party who sold you the product and if this is unsuccessful, you can complain through the Financial Ombudsman Service or, if the third party is no longer trading, the Financial Services Compensation Scheme.</p>

      </div>

  </Layout>
)

export default IndexPage
