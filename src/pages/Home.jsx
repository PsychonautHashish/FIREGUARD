// Home.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">Professional Fire Safety Solutions</h1>
        <p className="hero-subtitle">Premium fire equipment for commercial and industrial use</p>
        
        <button 
          className="btn btn-background-slide" 
          onClick={() => navigate('/products')}
        >
          View Products
          <div className="btn-background-slide--orange btn-background-slide-bg"></div>
        </button>
      </div>
    </div>
  )
}