import React from 'react';
import { Link } from 'gatsby';

const Navigation = (props) => {
  const { previous, next } = props;

  return(
    <ul className="postNavigation">
      <li>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
        </Link>
        )}
        </li>
      <li>
      {next && (
        <Link to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
        </Link>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
