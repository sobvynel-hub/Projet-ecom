import React from 'react';

const HeroPost = ({ post }) => {
  return (
    <section className="hero-post" style={{ backgroundImage: `url(${post.image})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="tag">{post.category}</span>
        <h2>{post.title}</h2>
        <p>
          <strong>{post.author}</strong> <span>{post.date}</span>
        </p>
      </div>
    </section>
  );
};

export default HeroPost;
