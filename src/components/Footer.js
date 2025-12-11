
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-icon">fire</span>
              fire Jordan Charcoal
            </h3>
            <p className="footer-description">
              Premium hardwood charcoal supplier delivering quality products across Nigeria. Your trusted partner for all charcoal needs.   
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Link */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li><a href="#premium">Premium Hardwood Charcoal</a></li>
              <li><a href="#Restaurant">Restaurant Grade </a></li>
              <li><a href="#industrial">Industrial Charcoal</a></li>
              <li><a href="#bbq">BBQ Charcoal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">L</span>
                <span>Lagos, Nigeria</span>
              </li>
              <li>
                <span className="contact-icon">P</span>
                <span>2348136218217</span>
              </li>
              <li>
                <span className="contact-icon">Mail</span>
                <span>info@jordanchacoal.com</span>
              </li>
              <li>
                <span className="contact-icon">Time</span>
                <span>Mon-Sat: 8am - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear}FIRE Jordan charcoal. All Right Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy policy</a>
            <span>I</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
