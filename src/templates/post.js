import React from "react";
import { graphql } from "gatsby";
import '../assets/styles/post.css';
import SEO from "../components/seo";
import Action from '../components/action';
import Article from '../components/article';
import Container from '../components/container';
import Navigation from '../components/navigation';

class PostPage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Container>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Action />
        <Article post={post} />
        <Navigation previous={previous} next={next} />
      </Container>
    );
  };
}

export default PostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
