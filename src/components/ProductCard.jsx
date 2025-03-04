import { useState, useEffect } from 'react'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`product-card ${isVisible ? 'fade-in' : ''}`}>
      <div className="card-content">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="stock-info">
          <span>Available: {product.quantity}</span>
        </div>
        <button className="inquiry-btn">Request Quote</button>
      </div>
    </div>
  )
}