import React from 'react';

const Header = () => {
  return (
    <header className="blog-header">
      <div className="container header-inner">
        <div className="brand">MetaBlog</div>

        <nav className="main-nav" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#single">Single Post</a>
          <a href="#pages">Pages</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Search" aria-label="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
