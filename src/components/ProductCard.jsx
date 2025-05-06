import { useState, useEffect } from 'react'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleRequestQuote = () => {
    const email = "mbuthiaeddy@gmail.com"; // Replace with your email address
    const subject = `Quote Request for ${product.name}`;
    const body = `Hello,\n\nI would like to request a quote for the following product:\n\nProduct Name: ${product.name}\nDescription: ${product.description}\nQuantity Available: ${product.quantity}\n\nThank you.`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank'); // Opens Gmail in a new tab
  };

  return (
    <div className={`product-card ${isVisible ? 'fade-in' : ''}`}>
      <div className="card-content">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="stock-info">
          <span>Available: {product.quantity}</span>
        </div>
        <button className="inquiry-btn" onClick={handleRequestQuote}>Request Quote</button>
      </div>
    </div>
  )
}