import React from 'react';

const Footer = () => {
  return (
    <footer className="blog-footer">
      <div className="container footer-grid">
        <section>
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p>
            <strong>Email :</strong> info@js-template.net
            <br />
            <strong>Phone :</strong> 880 123 456 789
          </p>
        </section>

        <section>
          <h4>Quick Link</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </section>

        <section>
          <h4>Category</h4>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </section>

        <section className="newsletter">
          <h4>Weekly Newsletter</h4>
          <p>Get blog articles and offers via email</p>
          <input type="email" placeholder="Your Email" />
          <button type="button">Subscribe</button>
        </section>
      </div>
      <div className="container footer-bottom">
        <span>MetaBlog © JS Template 2023. All Rights Reserved.</span>
        <div>
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookie">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
