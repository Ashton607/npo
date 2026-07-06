import React from 'react'
import './Programmes.css'

const Relief = () => {
  return (
    <div className='Programmes'>

    <div className="programmes-content">
    
    {/*Overview*/}
    <span className="programmes-badge">overview</span>
    <h1 className="programmes-title">
          <span className="line1">Three programmes.</span>
          <span className="line2">One framework.</span>
    </h1>
    <p className="programmes-subtitle">Providing vital food security, essential clothing donations, and 
    local social support programs to uplift vulnerable families and 
    foster community development in Douglas.</p>
    
    {/*Methods*/}
    <span className="programmes-badge">our method</span>
    <h2 className="programmes-title-h2">
          <span className="line1">The Immediate Relief Programme.</span>
          <span className="line2">How it comes to life.</span>
    </h2>

    <div className="programmes-method">
    {/*The Scale Metric*/}
    <div className="method-item">
    <span className="method-number">01</span>
    <span className="method-label">Community Assessment</span>
    <span className="method-caption">We utilize deep local networks, church home visits, 
    and community leaders to identify the households facing the most severe crisis, extreme poverty, 
    or food insecurity.</span>
    </div>
    {/*The Integrity Metric*/}
   <div className="method-item">
    <span className="method-number">02</span>
    <span className="method-label">Resource Mobilization</span>
    <span className="method-caption">Activating the local network to pool resources organizing 
    church clothing drives, securing food surplus from local businesses, and setting up secure donation 
    channels for funding partners.</span>
   </div>
   {/*The Cost Metric*/}
   <div className="method-item">
    <span className="method-number">03</span>
    <span className="method-label">Dignified Preparation</span>
    <span className="method-caption">Utilizing secure church facilities as a central hub where a 
    dedicated force of local volunteers sorts clothing by size, checks quality, and packs balanced, 
    nutritious emergency food parcels.</span>
   </div>
    {/*The Growth Target Metric*/}
   <div className="method-item">
    <span className="method-number">04</span>
    <span className="method-label">Direct-to-Hand Delivery</span>
    <span className="method-caption">Executing weekly scheduled distribution days directly from the safe 
    church grounds or hand-delivering parcels to child-headed and elderly households who cannot walk to 
    the center.</span>
   </div>
   </div>

    </div>

    </div>
  )
}

export default Relief
