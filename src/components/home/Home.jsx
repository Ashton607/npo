import React, { useState } from "react";
import './Home.css'
import preview1 from '../../assets/previewImg1.jpg'
import preview2 from '../../assets/previewImg2.jpg'
import preview3 from '../../assets/previewImg3.jpg'
import { FaArrowRight } from "react-icons/fa6";
import foodSystemsImg from '../../assets/foodSystemsImg.jpg'
import economicImg from '../../assets/economicImg.png'
import infrastructureImg from '../../assets/infrastructureImg.png'


const Home = () => {
  const [activeTab, setActiveTab] = useState('relief');
  

  const programmeData = {
  relief: {
    badge: 'Food Systems',
    eyebrow: 'Program 01',
    title: 'The Immediate Relief Program',
    description:
      'We establish community-led seed banks, cooperative farms, and local distribution networks that reduce dependence on fragile supply chains and restore indigenous growing traditions.',
    image: foodSystemsImg,
    stats: [
      { number: '61K people', label: 'Directly reached' },
      { number: '22 countries', label: 'Active programs' },
    ],
  },
  dignity: {
    badge: 'Economic Growth',
    eyebrow: 'Program 02',
    title: 'The Dignity Program',
    description:
      'We provide microloans, vocational training, and market access so families can build sustainable income streams independent of external aid.',
    image: economicImg,
    stats: [
      { number: '34K people', label: 'Directly reached' },
      { number: '15 countries', label: 'Active programs' },
    ],
  },
  outreach: {
    badge: 'Infrastructure',
    eyebrow: 'Program 03',
    title: 'The Community Outreach Program',
    description:
      'We build wells, clinics, and schools alongside local leaders, ensuring every project is maintained and owned by the community it serves.',
    image: infrastructureImg,
    stats: [
      { number: '48 projects', label: 'Completed' },
      { number: '9 countries', label: 'Active programs' },
    ],
  },
}
const active = programmeData[activeTab]
  return (
    <div className='Home'>
    <div className="home-content">

    <span className="home-badge">what we do for you</span>

    <h2 className="home-about-title">For Corporate & Funding Partners</h2>
    
    <p className="home-about-subtitle">Empowering your Corporate Social Investment to create measurable, 
    dignified change in our communities in Douglas</p>


    {/*Should add an on click function to the images later when our work page is done*/}
    <div className="home-about-preview">
      <div className="preview-card">

        <div className="preview-img1">
        <img src={preview1} alt="Founder Pastor Deon Ellison speaking in Bongani Douglas Northern Cape" />
        <div className="preview-overlay">
          <span className="preview-title">Why Partner With Deon Ellison Foundation</span>
          <span className="preview-subtitle">Partnership Benefits <FaArrowRight size={14} style={{marginBottom:'-2px'}}/></span>
        </div>
        </div>

        <div className="preview-img2">
        <img src={preview2} alt="Community members gathering for a local event from the Deon Ellison Foundation in Douglas Bongani" />
        <div className="preview-overlay">
          <span className="preview-title">Impact & Innovation</span>
          <span className="preview-subtitle">See how we're making a difference <FaArrowRight size={14} style={{marginBottom:'-2px'}}/></span>
        </div>
        </div>

        <div className="preview-img3">
        <img src={preview3} alt="Founder Pastor Deon Ellison with community members in Douglas Bongani" />
        <div className="preview-overlay">
          <span className="preview-title">About Deon Ellison Foundation</span>
          <span className="preview-subtitle">Learn more about our mission <FaArrowRight size={14} style={{marginBottom:'-2px'}}/></span>
        </div>
        </div>

      </div>
    </div>
    
    <div className="home-programmes">
    <span className="home-badge">our programmes</span>

    <h2 className="home-programmes-title">How We Serve Our Communities in Douglas</h2>
    
    <p className="home-programmes-subtitle">As a trusted NPO, we provide essential food relief, clothing donations, 
      and community outreach programs to support vulnerable families and restore dignity.</p>

  <div className="home-programmes-tabs">
  <ul>
  {Object.entries(programmeData).map(([key, data], index) => (
            <li
              key={key}
              className={activeTab === key ? 'active' : ''}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-number">0{index + 1}</span>
              <span className="tab-title">{data.title}</span>
            </li>
          ))}
  </ul>
  </div>

  <div className="home-programmes-content">
     <div className="programme-image">
          <img src={active.image} alt={active.title} />
          <span className="programme-badge">{active.badge}</span>
        </div>

        <div className="programme-details">
          <span className="programme-eyebrow">{active.eyebrow}</span>
          <h2 className="programme-title">{active.title}</h2>
          <p className="programme-description">{active.description}</p>

          <div className="programme-divider"></div>

          <div className="programme-stats">
            {active.stats.map((stat, i) => (
              <div className="programme-stat" key={i}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="programme-link">
            Read full program overview <span className="arrow">→</span>
          </a>
        </div>
  </div>
  </div>




    </div>
      
    </div>
  )
}

export default Home
