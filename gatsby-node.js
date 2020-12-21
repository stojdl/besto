const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogPost.jsx")
  const res = await graphql(`
    query {
      allDatoCmsBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allDatoCmsBlog.edges.map(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
