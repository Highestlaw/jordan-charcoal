
import React from 'react';
import { Link } from 'react-router-dom';
import chacoal1 from '../images/chacoal1.jpg';
import chacoal2 from '../images/chacoal2.jpg';
import chacoal3 from '../images/chacoal3.jpg';
import chacoal4 from '../images/chacoal4.jpg';

function Home () {
  return (
    <div>
      {/* Hero Section*/}
      <section
        className="hero-section"
        style={{backgroundImage: `url(${chacoal1})`}}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Premium Hardwoods</h1>
          <h2>Delivered Anywhere in Nigeria</h2>
          <p>Quality charcoal and hardwood products for your business</p>
          <Link to="/contact" className="hero-btn">Get Started Today</Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>Premium Quality</h3>
              <p>highest grade hardwood and charcoal</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick Delivery Across Nigeria</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>Competitive Prices</h3>
              <p>Best Prices In The Market</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle"></div>
              </div>
              <h3>24/7 Support</h3>
              <p>Always Here To Help</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Premium Hardwood Charcoal Supplier In Nigeria</h2>
              <p>
                Jordan Charcoal is your trusted partner for premium quality hardwood charcoal.
                We specialize in providing top-grade products that meet international standards.
              </p>
              <p>
                With years of experience and dedication to excellence, we deliver the finest
                charcoal products to businesses across Nigeria and sub saharan Africa.
              </p>
              <Link to="/about" className="learn-more-btn">Learn More</Link>
            </div>
            <div className="about-image">
              <img src={chacoal1} alt="Premium Charcoal" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={chacoal1} alt="Premium Chacoal" />
              </div>
              <div className="product-info">
                <h3>Premium Hardwood Charcoal</h3>
                <p>High Quality Charcoal For Commercial Use</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image"> 
                <img src={chacoal2} alt="Restaurant Grade" />
              </div>
              <div className="product-info">
                <h3>Restaurant Grade Charcoal</h3>
                <p>Perfect For Grilling And Cooking</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src={chacoal3} alt="Industrial charcoal" />
              </div>
              <div className="product-info">
                <h3>Industrial Charcoal</h3>
                <p>Bulk Charcoal For Industrial Use</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src={chacoal4} alt="BBQ Charcoal" />
              </div>
              <div className="product-info">
                <h3>BBQ Charcoal</h3>
                <p>Ideal for outdoor cooking</p>
              </div>
            </div>
          </div>
          <div className="view-all-btn-container">
            <Link to="/products" className="view-all-btn">View all product</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ctasection">
        <div className="container">
          <h2>Looking For A Reliable Premium Hardwood Charcoal Supplier in Nigeria?</h2>
          <Link to="/contact" className="cta-btn">Contact Us Today</Link>
        </div>
      </section>
    </div>
    );
}

export default Home;
    






    


