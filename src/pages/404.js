import React from "react"
import { graphql } from "gatsby"

import Container from "../components/container"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
