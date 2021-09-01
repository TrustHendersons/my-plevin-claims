/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

 import React from 'react'

 export const onRenderBody = ({ setPostBodyComponents }) => {
   setPostBodyComponents([
     <script
       key="https://cdn.jsdelivr.net/npm/@ideal-postcodes/postcode-lookup-bundled@2.0.0/dist/postcode-lookup.js"
       src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/postcode-lookup-bundled@2.0.0/dist/postcode-lookup.js"
     />,
   ])
 }
