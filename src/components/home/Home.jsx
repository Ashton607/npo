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
    dignified change in our communities</p>

    <div className="home-about-preview">
      <div className="preview-card">

        <div className="preview-img1">
        <img src={preview1} alt="Preview 1" />
        <div className="preview-overlay">
          <span className="preview-title">Preview Title</span>
          <span className="preview-subtitle">Preview Subtitle</span>
        </div>
        </div>

        <div className="preview-img2">
        <img src={preview2} alt="Preview 2" />
        <div className="preview-overlay">
          <span className="preview-title">Preview Title</span>
          <span className="preview-subtitle">Preview Subtitle</span>
        </div>
        </div>

        <div className="preview-img3">
        <img src={preview3} alt="Preview 3" />
        <div className="preview-overlay">
          <span className="preview-title">Preview Title</span>
          <span className="preview-subtitle">Preview Subtitle</span>
        </div>
        </div>

      </div>
    </div>




    </div>
      
    </div>
  )
}

export default Home
