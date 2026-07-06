import React from 'react'
import './Programmes.css'
import { IoIosArrowForward } from "react-icons/io";

const Dignity = () => {
  return (
    <div className='Programmes'>
    <div className="programmes-content">
    
        {/*Overview*/}
        <span className="programmes-badge">programmes</span>
        <h1 className="programmes-title">
              <span className="line1">Three programmes.</span>
              <span className="line2">One framework.</span>
        </h1>
        <p className="programmes-subtitle">Providing vital food security, essential clothing donations, and 
        local social support programs to uplift vulnerable families and 
        foster community development in Douglas, Breipaal and Bongani.</p>
    
        {/*Overview*/}
        <span className="programmes-badge">overview</span>
        <h2 className="programmes-title-h2">
              <span className="line1">The Immediate Dignity Programme.</span>
              <span className="line2">Combating Hunger in Douglas.</span>
        </h2>
        <p className="programmes-subtitle">Our Immediate Relief Programme focuses on stabilizing vulnerable 
        households in Douglas, Breipaal and Bongani by providing rapid, reliable food security. Under trusted local leadership, 
        we pack and distribute nutritionally balanced food hampers for those facing extreme hardship. 
        By focusing resources directly on child headed homes, child care centers, and
        elderly residents, this programme delivers immediate physical relief, curbs nutritional insecurity, and 
        restores foundational strength to our community.</p>
    
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
    
       <span className="our-work-badge">choose deon ellison foundation</span>
        <h2 className="our-work-title">
              <span className="line1">Three programmes.</span>
              <span className="line2">Your partnership.</span>
        </h2>
        <p className="our-work-subtitle">Partner with a registered non-profit organization built on deep roots,
         trusted local leadership, and complete financial accountability. 
         Under the guidance of a dedicated community pastor, we turn your personal generosity or 
         corporate social investment (CSI) into high-impact social relief. Whether you are an individual 
         looking to make a life-changing donation or a business seeking a compliant partner for socio-economic
         development, your support directly funds our verified food security, clothing drives, and community 
         development initiatives driving measurable, transparent transformation where it is needed most.</p>
    
         <div className="our-work-cta">
             <div className="cta-text">
             <h2 className="cta-title">Join the work.</h2>
             <p className="cta-subtitle">
               Whether you volunteer, partner, or donate — every form of commitment
               moves us closer to a world where no community is left behind.
             </p>
             </div>
            {/*Should add an on click function to the buttons later */}
            <div className="cta-buttons">
             <button className="cta-button primary">
               Donate now <span className="arrow"><IoIosArrowForward style={{marginBottom:'-3px'}}/></span>
             </button>
             <button className="cta-button secondary">Volunteer with us</button>
             </div>
             </div>
    </div>
    </div>
  )
}

export default Dignity
