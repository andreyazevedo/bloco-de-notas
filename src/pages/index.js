import React from "react"
import { Link, graphql } from "gatsby"
import Container from '../components/container'
import Menu from '../components/menu'
import Main from '../components/main'

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  console.log(data);

  return (
    <Container>
      <Main>
        <Menu />
        {posts.map((post) => {
          post = post.node
          const title = post.frontmatter.title

          return (
            <div className="postResume" key={post.frontmatter.slug}>
              <h3 className="postTitle">
                <Link style={{ boxShadow: `none` }} to={post.frontmatter.slug}>
                  {title}
                </Link>
              </h3>
              <small className="postDate">{post.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          )
        })}
      </Main>
    </Container>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
        allMarkdownRemark {
    edges {
      node {
        html
        excerpt(pruneLength: 160)
        headings {
          depth
          value
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
      }
    }
  }
  }
`
