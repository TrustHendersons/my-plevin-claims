import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeatherIcon from "feather-icons-react"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <h1 className="uppercase text-green-500 mb-1 uppercase">Missed the PPI deadline?</h1>
          <h2 className="uppercase text-green-500">PPI claim rejected?</h2>
          <p>£billions can be claimed in 'Plevin' cases (also know as PPI2) after a landmark court ruling. <strong>Crucially, the PPI Deadline does NOT apply to these claims!</strong></p>

          <div className="section-start w-full rounded-md ">
          <h1 className="text-center uppercase mb-1">Start your check today </h1>
          <h3 className="text-center uppercase">Did you take out PPI?</h3>

          <div className="flex flex-wrap justify-center">
            <Link className="btn-start m-2" to="/form/">YES</Link>
            <Link className="btn-start m-2" to="/form/">UNSURE</Link>
            <Link className="btn-start m-2" to="#">NO</Link>
          </div>
      </div>    

          <div className="flex justify-center">
            <div className="flex w-50">
            <FeatherIcon icon="star" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <FeatherIcon icon="star" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <FeatherIcon icon="star" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <FeatherIcon icon="star" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <FeatherIcon icon="star" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            </div>
            <div className="ml-4 mt-1">
              <h3>CUSTOMER SATISFACTION</h3>
            </div>
          </div>         

        </div>

        <div>  
        <StaticImage
          src="../images/home-img-test.jfif"
          transformOptions={"cover"}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        </div>     

      </div>

      <div className="section-grey w-full rounded-md grid grid-cols-4 gap-4 text-center">
        <h1 className="col-span-4">How does the Plevin Free Check work?</h1>
        <div>
          <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
          <p className="text-sm mb-2"><strong>We offer this free check</strong> to assess whether there was an undisclosed commission on a PPI policy that you held, before you decide whether you wish to make a claim.</p>
        </div>
        <div>  
          <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
          <p className="text-sm mb-2"><strong>This check is completely free of charge</strong> and you are under no obligation to pursue a claim once this free check has been completed.</p>
        </div>  
        <div>  
          <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>          
          <p className="text-sm mb-2"><strong>As part of the free check,</strong> we will contact the financial institution who sold you the PPI policy to obtain information relating to the policy.</p>
        </div>  
        <div>
          <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
          <p className="text-sm"><strong>Once the free check is complete,</strong> we will contact you with the results. You can then decide what to do next.</p>
        </div>
      </div>

      <div className="section-grey w-full rounded-md grid grid-cols-1 gap-4 text-center">
        <div>
          <h1>WHAT IS A PLEVIN CLAIM?</h1>
          <p className="text-sm mb-2">These are claims which are related to Payment Protection Insurance (PPI), specifically the commission paid in relation to sale of the PPI. </p>
        </div>
        <div>  
          <p className="text-sm mb-2">In the landmark case Plevin v Paragon Personal Finance ('Plevin'), the Supreme Court ruled that a large commission that was not disclosed to the purchaser at the time of sale created an unfair relationship under the Consumer Credit Act. As a result the Claimant, Mrs Plevin, was entitled to a refund of the commission that was paid to the seller, plus any applicable interest. In the case of Plevin, the commission was over 71% of the PPI premium amount and the Financial Conduct Authority has subsequently confirmed that the average commission was a staggering 67%, and this was rarely disclosed. The good news is that the PPI deadline does not apply to Plevin claims and therefore potentially billions of pounds can still be reclaimed!</p>
        </div>  
      </div> 


      <div>
        <p className="text-sm text-center">You can pursue a claim yourself without using a Claims Management Company and without cost.  You will first need to complain directly to the appropriate third party who sold you the product and if this is unsuccessful, you can complain through the Financial Ombudsman Service or, if the third party is no longer trading, the Financial Services Compensation Scheme.</p>
      </div>

  </Layout>
)

export default IndexPage
