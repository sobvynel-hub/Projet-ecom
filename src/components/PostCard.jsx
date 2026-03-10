import React from 'react';

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <img src={post.image} alt={post.title} loading="lazy" />
      <div className="card-body">
        <span className="tag">{post.category}</span>
        <h3>{post.title}</h3>
        <p>
          <strong>{post.author}</strong> <span>{post.date}</span>
        </p>
      </div>
    </article>
  );
};

export default PostCard;
