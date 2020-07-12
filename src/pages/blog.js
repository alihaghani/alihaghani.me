import React from 'react';
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from "../components/seo"

const Blog = ({ data }) =>
  (
    <Layout shouldRenderTitle shouldRenderFooter>
      <SEO title="Blog"/>
      <div className="page-content">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="blog-post-preview" key={node.id}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <h5>
              {`${node.frontmatter.date} · ${node.timeToRead} min read`}
            </h5>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 300) {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
