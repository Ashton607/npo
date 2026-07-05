import React from 'react'
import './Home.css'
import preview1 from '../../assets/previewImg1.jpg'
import preview2 from '../../assets/previewImg2.jpg'
import preview3 from '../../assets/previewImg3.jpg'


const Home = () => {
  return (
    <div className='Home'>
    <div className="home-content">

    <span className="home-badge">what we do for you</span>

    <h2 className="home-about-title">For Corporate & Funding Partners</h2>
    
    <p className="home-about-subtitle">Empowering your Corporate Social Investment to create measurable, 
    dignified change in our communities in Douglas</p>

    <div className="home-about-preview">
      <div className="preview-card">

        <div className="preview-img1">
        <img src={preview1} alt="Founder Pastor Deon Ellison speaking in Bongani Douglas Northern Cape" />
        <div className="preview-overlay">
          <span className="preview-title">Why Partner With Deon Ellison Foundation</span>
          <span className="preview-subtitle">Partnership Benefits</span>
        </div>
        </div>

        <div className="preview-img2">
        <img src={preview2} alt="Community members gathering for a local event from the Deon Ellison Foundation in Douglas Bongani" />
        <div className="preview-overlay">
          <span className="preview-title">Impact & Innovation</span>
          <span className="preview-subtitle">See how we're making a difference</span>
        </div>
        </div>

        <div className="preview-img3">
        <img src={preview3} alt="Founder Pastor Deon Ellison with community members in Douglas Bongani" />
        <div className="preview-overlay">
          <span className="preview-title">About Deon Ellison Foundation</span>
          <span className="preview-subtitle">Learn more about our mission</span>
        </div>
        </div>

      </div>
    </div>




    </div>
      
    </div>
  )
}

export default Home
