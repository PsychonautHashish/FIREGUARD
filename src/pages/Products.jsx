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
  {
    id: 3,
    name: 'Fire Blankets',
    description: 'Used to smother small fires, often used in kitchens to put out cooking fires.',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  {
    id: 4,
    name: 'Fire Hose Reels',
    description: 'A device used to carry and deploy hoses that can be used to fight fires.',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  {
    id: 5,
    name: 'Smoke Detectors',
    description: 'Devices that sense smoke, typically as an indicator of fire.',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  {
    id: 6,
    name: 'Fire Safety Signs',
    description: 'Signs used to indicate the location of fire exits, extinguishers, and safety equipment.',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  {
    id: 7,
    name: 'Fire Resistant Suit',
    description: 'Full-body protection suit with heat resistance up to 1000°C',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  {
    id: 8,
    name: 'Fire Protection Sprinkler Systems',
    description: 'Automatic systems that release water to suppress fires when triggered by heat.',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0c'
  },
  {
    id: 9,
    name: 'Personal Protective Equipment (PPE)',
    description: 'Gear like gloves, helmets, and fire-resistant clothing worn by firefighters to protect against heat and flames.',
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