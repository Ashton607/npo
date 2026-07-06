import React from 'react'
import './OurWork.css'
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.svg'


const OurWork = () => {
  return (
    <div className='OurWork'>
    
    <div className="our-work-content">
    <span className="our-work-badge">our work</span>
    <h1 className="our-work-title">
          <span className="line1">Rooted in community.</span>
          <span className="line2">Build to last.</span>
    </h1>
    <p className="our-work-subtitle">Founded and led by a local community pastor, 
      our registered Non-Profit Organization is dedicated to uplifting vulnerable families through practical, 
      transparent support. We bridge the gap for those in need by providing daily food security, 
      essential clothing donations, and sustainable community outreach programs designed to restore 
      hope and personal dignity from the ground up.</p>

    <div className="our-work-impact">
    {/*The Scale Metric*/}
    <div className="impact-item">
    <span className="impact-number">50</span>
    <span className="impact-label">Emergency parcels packed</span>
    <span className="impact-caption">delivered to vulnerable homes weekly</span>
    </div>
    {/*The Integrity Metric*/}
   <div className="impact-item">
    <span className="impact-number">100%</span>
    <span className="impact-label">Direct impact model</span>
    <span className="impact-caption">zero administrative overhead</span>
   </div>
   {/*The Cost Metric*/}
   <div className="impact-item">
    <span className="impact-number">R25</span>
    <span className="impact-label">Per meal provided</span>
    <span className="impact-caption">through our nutrition drives</span>
   </div>
    {/*The Growth Target Metric*/}
   <div className="impact-item">
    <span className="impact-number">5,000</span>
    <span className="impact-label">First-year target</span>
    <span className="impact-caption">hot meals for children in need</span>
   </div>
   </div>

   <span className="our-work-badge">what we offer</span>
    <h2 className="our-work-title">
          <span className="line1">Three pillars.</span>
          <span className="line2">One mission.</span>
    </h2>
    <p className="our-work-subtitle">As a registered NPO, we provide transparent, 
      grass-roots social relief to support vulnerable families. 
      From immediate food security to clothing drives and local social support, 
      our programs are structured to deliver measurable community impact and fulfill corporate CSI goals.</p>
    
    <div className="our-work-cards">
    <div className="card1">
    <div className="card-img card1-img">
    <img src={card1} alt="" />
    <div className="card-label">
    <h3>The Immediate Relief Program</h3>
    </div>
    </div>
    <div className="card-info">
      <ul>
        <li>
        <span className="card-info-title">Focus</span>
        <span className="card-info-subtitle">Alleviating hunger and household food insecurity by 
        distributing emergency grocery parcels, hot meals, and nutritional hampers directly to 
        child-headed homes, child care centers, and vulnerable elderly residents.</span>
        </li>
        <li>
        <span className="card-info-title">Impact</span>
        <span className="card-info-subtitle">Ensures immediate physical relief for families facing 
        extreme poverty, offering a reliable, weekly food source that restores strength and 
        health to the community.</span>
        </li>
      </ul>
    </div>
    </div>

    <div className="card2">
    <div className="card-img card2-img">
    <img src={card2} alt="" />
    <div className="card-label">
    <h3>The Dignity Program</h3>
    </div>
    </div> 
    <div className="card-info">
      <ul>
        <li>
        <span className="card-info-title">Focus</span>
        <span className="card-info-subtitle">Restoring personal pride and comfort through targeted 
        clothing drives, warm winter blanket distributions, and supplying essential school shoes or 
        uniforms to children who would otherwise go without.</span>
        </li>
        <li>
        <span className="card-info-title">Impact</span>
        <span className="card-info-subtitle">Protects individuals from harsh seasonal weather while 
        removing the social and economic barriers that prevent children from attending school 
        confidently.</span>
        </li>
      </ul>
    </div>
    </div>

    <div className="card3">
    <div className="card-img card3-img">
    <img src={card3} alt="" />
    <div className="card-label">
    <h3>The Community Outreach Program</h3>
    </div>
    </div>
    <div className="card-info">
      <ul>
        <li>
        <span className="card-info-title">Focus</span>
        <span className="card-info-subtitle">Creating safe spaces, youth programs, and counseling support 
        under trusted pastoral leadership to foster social cohesion, address emotional trauma, 
        and build a resilient neighborhood network.</span>
        </li>
        <li>
        <span className="card-info-title">Impact</span>
        <span className="card-info-subtitle">Moves beyond physical aid to cultivate long-term emotional 
        well-being, providing the social support and guidance needed to help individuals break cycles of 
        hardship.</span>
        </li>
      </ul>
    </div>
    </div>
    </div>

    </div>

      
    </div>
  )
}

export default OurWork
