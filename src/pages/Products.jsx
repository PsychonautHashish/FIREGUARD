import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import './Products.css'

const products = [
  {
    id: 1,
    name: 'Industrial Fire Extinguisher',
    description: 'High-capacity CO2 extinguisher for industrial environments',
    quantity: 15,
    image: 'https://images.unsplash.com/photo-1618941719959-36a9c1307b3b'
  },
  {
    id: 2,
    name: 'Fire Resistant Suit',
    description: 'Full-body protection suit with heat resistance up to 1000°C',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  // Add more products
]

export default function Products() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`products-page ${loaded ? 'loaded' : ''}`}>
      <h2 className="page-title">Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}