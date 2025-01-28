import * as React from "react"
import { graphql } from "gatsby"
import '../assets/styles/post.css';
import Action from '../components/action';
import Article from '../components/article';
import Container from '../components/container';
import Navigation from '../components/navigation';

export default function BlogPostTemplate(props) {
  const { data } = props;
  const { markdownRemark } = data
  const { previous, next } = props.pageContext

  console.log(props);

  return (
    <Container>
      <Action />
      <Article post={markdownRemark} />
      <Navigation previous={previous} next={next} />
  </Container>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
