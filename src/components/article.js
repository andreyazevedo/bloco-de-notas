import React from 'react';
import '../assets/styles/article.css';

const Article = (props) => {
  const { post } = props;
  return (
    <article>
      <header className="postHeader">
        <h1 className="postTitle">{post.frontmatter.title}</h1>
        <p className="postDate">{post.frontmatter.date}</p>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
    );
  };
  
  export default Article;
  