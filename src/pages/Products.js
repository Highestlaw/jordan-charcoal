
import React, {useState, usestate} from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
        id: 1,
        category: 'premium',
        name: 'premium hardwood charcoal',
        description: 'top grade hardword charcoal perfect for commercial use burn longer and hotter with animal ash production',
        features: ['Long burning time', 'High heat output', 'Low ash content', 'Eco-friendly'],
        price: '25,000',
        unit: 'per 50kg bag',
        badge: 'Best sellers',
        image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600'
    },
    {
        id: 2,
        category: 'restaurant',
        name: 'Restaurant Grade Charcoal',
        description: 'Specially selected for professional kitchens. Consistent heat and clean burn for perfect culinary results.',
        features: ['Consistent heat distribution', 'No chemical additives', 'Fast ignition', 'Minimal smoke'],
        price: '28,000',
        unit: 'per 50kg bag',
        badge: null,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600'
    },
    {
        id: 3,
        category: 'bbq',
        name: 'BBQ Master Charcoal',
        description: 'Perfect for outdoor grilling and BBQ. Provides authentic smoky flavor and long-lasting heat.',
        features: ['Rich smoky flavor', 'Easy to light', 'Burns up to 4 hours', 'Perfect for all meats'],
        price: '22,000',
        unit: 'per 50kg bag',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600'
    },
    {
        id: 4,
        category: 'industrial',
        name: 'Industrial Grade Charcoal',
        description: 'Heavy-duty charcoal for industrial applications. Maximum heat output and extended burn time.',
        features: ['Extreme heat capacity', 'Bulk packaging available', 'Consistent quality', 'Cost-effective'],
        price: '30,000',
        unit: 'per 50kg bag',
        badge: null,
        image: 'https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?w=600'
    },
    {
        id: 5,
        category: 'specialty',
        name: 'Coconut Shell Charcoal',
        description: 'Premium coconut shell charcoal for hookah and specialty applications. Burns clean with minimal odor.',
        features: ['100% natural coconut', 'Odorless burning', 'Long-lasting heat', 'Eco-sustainable'],
        price: '35,000',
        unit: 'per 25kg bag',
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600'
    },
    {
        id: 6,
        category: 'bbq',
        name: 'Quick Start BBQ Charcoal',
        description: 'Pre-treated for fast ignition. Perfect for casual BBQ enthusiasts and weekend grillers.',
        features: ['Lights in 10 minutes', 'No lighter fluid needed', 'Great for beginners', 'Consistent results'],
        price: '20,000',
        unit: 'per 40kg bag',
        badge: null,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600'
    },
  ];

  const categories = [
    { id: 'all', label: 'All products' },
    { id: 'premium', label: 'Premium' },
    { id: 'restaurant', label: 'Restaurant Grade' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'bbq', label: 'BBQ' },
    { id: 'specialty', label: 'Specialty' }
  ]

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(products => products.category === activeCategory)

  const handleOrder = (productName) => {
    alert(`Oder placed for ${productName}. connect this to your oder system.`);
  };

  return (
    <div className="product-pages">
      <section className="products-hero">
        <hi>Our Products</hi>
        <p>Premium Hardwood Charcoal For Every Need</p>
      </section>

      <section className="filter-section">
        <div className="filter-container">
          <span className="filter-label">Filter by:</span>
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-content">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="products-footer">
                  <div>
                    <span className="product-price">N{product.price}</span>
                    <span className="price-unit"> {product.unit}</span>
                  </div>

                  <button
                    className="order-btn"
                    onClick={() => handleOrder(product.name)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="cta-section">
        <h2>Need Help Choosing?</h2>
        <p>Our experts are ready to help you find the perfect charcoal for your needs</p>
        <button className="cta-btn">Get  a Custom Quote</button>
      </section>
    </div>
  );
};

export default Products;
    

    
  
