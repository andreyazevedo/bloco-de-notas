import React from 'react';
import '../assets/styles/common.css';
import '../assets/styles/post.css';

const Container = ({ children }) => {
  return <div className="pageContainer">{children}</div>;
};

export default Container;
