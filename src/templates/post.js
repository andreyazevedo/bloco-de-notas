import React from "react";
import { graphql } from "gatsby";
import '../assets/styles/post.css';
import Action from '../components/action';
import Article from '../components/article';
import Container from '../components/container';
import Navigation from '../components/navigation';

class PostPage extends React.Component {
  render() {
    console.log(this.props);

    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Container>
        <Action />
        <Article post={post} />
        <Navigation previous={previous} next={next} />
      </Container>
    );
  };
}

export default PostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
