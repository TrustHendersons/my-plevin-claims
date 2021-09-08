import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          key="https://cdn.jsdelivr.net/npm/@ideal-postcodes/postcode-lookup-bundled@2.0.0/dist/postcode-lookup.js"
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/postcode-lookup-bundled@2.0.0/dist/postcode-lookup.js"
          async
  />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script type="text/javascript"
          dangerouslySetInnerHTML={{
          __html: `
          IdealPostcodes.PostcodeLookup.setup({
            apiKey: "iddqd",
            context: "#lookup_field",
            outputFields: {
              line_1: "#line_1",
              line_2: "#line_2",
              line_3: "#line_3",
              post_town: "#post_town",
              postcode: "#postcode",
            },
          });
          `,
          }}
        />       
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
