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
      
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
          dangerouslySetInnerHTML={{
          __html: `
          IdealPostcodes.PostcodeLookup.setup({
            apiKey: "ak_kt1m9kndpJwBiEP6CXPnLaPdfdoYH",
            context: "#postcode_lookup",
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
