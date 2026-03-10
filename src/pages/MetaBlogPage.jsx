import React from 'react';
import Header from '../components/Header';
import HeroPost from '../components/HeroPost';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import { featuredPost, posts } from '../data/posts';
import '../styles/blog.css';

const MetaBlogPage = () => {
  return (
    <div className="blog-page" id="home">
      <Header />

      <main className="container">
        <section className="page-title-block">
          <h1>Page Title</h1>
          <p>Home · Link One</p>
        </section>

        <HeroPost post={featuredPost} />

        <section className="posts-grid" id="blog">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>

        <div className="load-more-row">
          <button type="button">Load More</button>
        </div>

        <div className="ads-box">
          <small>Advertisement</small>
          <p>You can place ads</p>
          <span>750x100</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MetaBlogPage;
