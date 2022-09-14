import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="siteHeader">
      <a href="/" className="headerLinkBox">
        <img class="logo-icon" src="/icons/icon-192x192.png" alt="Stods Sparks logo"></img>
        <div className="headerTitle">
          <span className="headerTitle-title">Stods Sparks 12u</span>
          <span className="headerTitle-tagline">Practice plans</span>
        </div>
      </a>
    </header>
  );
}

export default Header;

