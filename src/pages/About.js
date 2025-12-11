
import React from 'react';
import { Link } from 'react-router-dom';
import chacoal1 from '../images/chacoal1.jpg';
import chacoal2 from '../images/chacoal2.jpg';

function About() {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>About  Frazier Charcoal</h1>
          <p>Your Trusted Premium Hardwood Charcoal Supplier</p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src={chacoal1} alt="Our Story" />
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for quality and excellence,  Frazier Charcoal has become
                a leading supplier of premium hardwood charcoal in Lagos and Tunisia. Our journey
                began with a simple mission: to provide the highest quality charcoal products
                to businesses and individuals who demand the best.
              </p>
              <p>
                Over the years, we have built strong relationships with our customers through
                consistent quality, reliable delivery, and exceptional customer service. We
                source our hardwood from sustainable forests and use traditional methods
                combined with modern technology to produce charcoal that burns hotter,
                lasts longer, and produces less ash.
              </p>
              <p>
                Today, we serve restaurants, hotels, industrial facilities, and individual
                customers across Lagos and beyond. Our commitment to quality and customer
                satisfaction remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver premium quality hardwood charcoal products that exceed customer
                expectations while maintaining sustainable and environmentally responsible
                practices in all our operations.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and reliable hardwood charcoal supplier in West Africa
                and Europe, known for uncompromising quality, innovation, and exceptional
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Charcoal Charcoal?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3>Premium Quality</h3>
              <p>
                We source only the finest hardwood and use proven production methods to
                ensure consistent, high-quality charcoal that burns efficiently and produces
                minimal smoke and ash.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">02</div>
              <h3>Reliable Supply</h3>
              <p>
                With our extensive network and efficient logistics, we guarantee timely
                delivery of your orders. We maintain adequate stock levels to meet your
                demands at all times.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">03</div>
              <h3>Competitive Pricing</h3>
              <p>
                Our direct sourcing and efficient operations allow us to offer the best
                prices in the market without compromising on quality. Volume discounts
                available for bulk orders.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">04</div>
              <h3>Expert Support</h3>
              <p>
                Our knowledgeable team is always ready to assist you with product selection,
                usage recommendations, and any questions you may have. We're committed to
                your success.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">05</div>
              <h3>Sustainable Practices</h3>
              <p>
                We are committed to environmental sustainability. Our hardwood is sourced
                from responsibly managed forests, and we continuously work to minimize
                the impact on the environment.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">06</div>
              <h3>Wide Coverage</h3>
              <p>
                We deliver across Lagos and have established distribution networks that
                allow us to serve customers throughout Nigeria and in selected Africa
                markets including Tunisia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our products and services.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethics.</p>
            </div>
            <div className="value-card">
              <h3>Customer Focus</h3>
              <p>Our customers' satisfaction and success are our top priorities.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously improve our products and processes to serve you better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Tons Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the  Frazier charcoal Difference?</h2>
            <p>Join hundreds of satisfied customers who trust us for their charcoal needs</p>
            <Link to="/contact" className="cta-btn">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;