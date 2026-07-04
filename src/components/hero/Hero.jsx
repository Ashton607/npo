import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero img.jpg'

const Hero = () => {
  return (
    <div className='Hero'>
    
    <div className="hero-content">
    <span className="hero-badge">EST.2026 - National Outreach</span>
    <h1 className="hero-title">Welcome to Our Platform</h1>
    <p className="hero-subtitle">Discover the power of national outreach and make a difference in your community.</p>
    
    <div className="hero-buttons">
    <button className="hero-button primary">See Our Impact</button>
    <button className="hero-button secondary">Get Involved</button>
    </div>

    <div className="hero-impact">
    
    </div>

    </div>

    <div className="hero-image">
    <img src={heroImg} alt="Hero" />
    </div>
      
    </div>
  )
}

export default Hero
