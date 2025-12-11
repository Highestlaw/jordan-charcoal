
import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // add your form summission logic here
    alert('Thank you for your enquiry! we will get back to you soon.');
    console.log('Form summitted:', formData);
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>we are here to help with all hardwood charcoal neen</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p className="form-title">fill out the form below and we will get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Product Intrest</label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                    >
                      <option value="">Select a product</option>
                      <option value="premium">Premium Hardwood Charcoal</option>
                      <option value="restaurant">Restaurant Grade Charcoal</option>
                      <option value="industrial">Industrial Grade Charcoal</option>
                      <option value="bbq">BBQ Charcoal</option>
                      <option value="specialty">Specialty Charcoal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 100 bags"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  send Message
                </button>
              </form>
            </div>

            {/* Contact Info*/}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p className="info-subtitle">Reach out to us through any of this channels</p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">phone icon</div>
                  <h3>phone</h3>
                  <p>+2348136218217</p>
                  <p>+2348136218217</p>
                  <a href="tel:+2348136218217" className="info-link">Call Now</a>
                </div>

                <div className='info-card'>
                  <div className="info-icon">mail</div>
                  <h3>Email</h3>
                  <p>info@frazierinternationalltd.com</p>
                  <p>sales@frazierinternationalltd.com</p>
                  <a href="mailto:info@frazierinternationalltd.com" className="info-link">Send Email</a>
                </div>

                <div className="info-card">
                  <div className="info-icon">📍</div>
                    <h3>Location</h3>
                    <p>Lagos,Nigeria</p>
                    <p>Sub Saharan Africa</p>
                    <a href="#map" className="info-link">View on Map</a>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">💬</div>
                    <h3>WhatsApp</h3>
                    <p>Quick Response</p>
                    <p>Available 24/7</p>
                    <a href="https://wa.me/2348136218217" target="_blank" rel="noopener noreferrer" className="info-link">Chat with Us</a>
                  </div>
                </div>

                {/* Business Hour */}
                <div className="business-hours">
                  <h3>Business Hours</h3>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Jordan Charcoal?</h2>
          <div className="choose-grid">
            <div className="choose-card">
              <div className="choose-icon">📦</div>
              <h3>Bulk Orders</h3>
              <p>We Handle Bulk Orders Efficiently</p>
            </div>
              <div className="choose-card">
              <div className="choose-icon">🤝</div>
              <h3>Reliable Partner</h3>
              <p>Years of experience and trusted by many</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
