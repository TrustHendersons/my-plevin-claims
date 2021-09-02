/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

//gatsby-node.js
exports.onCreateWebpackConfig = ({
    actions,
  }) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
      externals: {
        jquery: 'jQuery', // important: 'Q' capitalized
      }
    })
  }
