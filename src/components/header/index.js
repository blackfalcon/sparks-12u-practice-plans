import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="siteHeader">
      <a href="/" className="headerLinkBox">
        <div className="headerTitle">
          <span className="headerTitle-title">Stods Sparks 12u</span>
          <span className="headerTitle-tagline">Practice plans</span>
        </div>
      </a>
    </header>
  );
}

export default Header;
