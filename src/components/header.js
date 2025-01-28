import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  render() {
    const { visible = true } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <header className="mainHeader">
        <h1><Link to="/">Bloco de notas</Link></h1>
      </header>
    );
  }
}
  
export default Header;
