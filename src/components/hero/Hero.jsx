import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero img.jpg'

const Hero = () => {
  return (
    <div className='Hero'>
    
    <div className="hero-content">
    <span className="hero-badge">EST.2026 - National Outreach</span>
    <h1 className="hero-title"><span className="highlight">Deon Ellison</span> Foundation</h1>
    <p className="hero-subtitle">We work alongside families and neighborhoods to build lasting food security, 
        economic resilience, and belonging — one community at a time.</p>
    
    <div className="hero-buttons">
    <button className="hero-button primary">See Our Impact</button>
    <button className="hero-button secondary">Get Involved</button>
    </div>

    <div className="hero-impact">
    <div className="impact-stat">
    <span className="impact-number">200</span>
    <span className="impact-label">Lives reached</span>
    </div>
    <div className="impact-stat">
    <span className="impact-number">3</span>
    <span className="impact-label">Communities served</span>
    </div>
    <div className="impact-stat">
    <span className="impact-number">2</span>
    <span className="impact-label">Years on the ground</span>
    </div>
    </div>

    </div>

    <div className="hero-image">
    <img src={heroImg} alt="Hero" />
    <span className="hero-tag">2026 Report Out</span>
    </div>
      
    </div>
  )
}

export default Hero
