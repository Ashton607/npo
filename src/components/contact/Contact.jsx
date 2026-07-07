import React, { useState } from 'react'
import './Contact.css'
import { IoIosArrowForward } from "react-icons/io";

const topics = [
  'General enquiry',
  'Partnership & funding',
  'Volunteering',
  'Press & media',
  'Programme referral',
  'Other',
]

const Contact = () => {
const [activeTopic, setActiveTopic] = useState('General enquiry')

  return (
    <div className='Contact'>
    <div className="contact-content">
    <span className="contact-badge">contact us</span>
        <h1 className="contact-title">
            <span className="line1">Partner With a Trusted NPO</span>
            <span className="line2">in the Northern Cape.</span>
        </h1>
        <p className="contact-subtitle">Get in touch with us today to find out how you can sponsor a 
        programme, make a donation, or partner with us for your corporate social investment (CSI) initiatives. 
        Whether you are a local resident looking to volunteer or a corporate foundation seeking a transparent,
        registered NPO to fulfill your socio-economic development goals, your communication starts a journey 
        toward meaningful transformation. Reach out to our team via phone, email, or our secure contact form 
        below to join our mission.</p>
    
    <div className="contact-page">
      <div className="contact-form-side">
        <h2 className="contact-heading">Send us a message</h2>

        <div className="form-group">
          <label className="form-label">Topic</label>
          <div className="topic-grid">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`topic-btn ${activeTopic === topic ? 'active' : ''}`}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Full name</label>
            <input type="text" className="form-input" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input type="email" className="form-input" placeholder="you@example.com" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Organisation <span className="optional">(optional)</span>
          </label>
          <input type="text" className="form-input" placeholder="Where you work or volunteer" />
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea className="form-textarea" placeholder="Tell us what you have in mind…"></textarea>
        </div>

        <button className="submit-btn">
          Send message <span className="arrow"><IoIosArrowForward style={{marginBottom:'-3px'}}/></span>
        </button>
      </div>

      <div className="contact-info-side">
        <span className="info-eyebrow">Global headquarters</span>
        <h3 className="info-org">Common Ground International</h3>
        <p className="info-address">
          340 West 53rd Street, Suite 4B<br />
          New York, NY 10019, USA
        </p>

        <div className="info-line">
          <span className="info-icon">✉</span>
          <a href="mailto:hello@commonground.org">hello@commonground.org</a>
        </div>
        <div className="info-line">
          <span className="info-icon">☎</span>
          <a href="tel:+12128880100">+1 212 888 0100</a>
        </div>

        <div className="info-divider"></div>

        <span className="info-eyebrow">Direct contacts</span>

        <div className="contact-block">
          <span className="contact-role">Press & media</span>
          <span className="contact-name">Sofia Andreou</span>
          <a href="mailto:press@commonground.org" className="contact-email">
            press@commonground.org
          </a>
        </div>

        <div className="contact-block">
          <span className="contact-role">Partnership & grants</span>
          <span className="contact-name">David Osei-Bonsu</span>
          <a href="mailto:partners@commonground.org" className="contact-email">
            partners@commonground.org
          </a>
        </div>

        <div className="contact-block">
          <span className="contact-role">Volunteer programme</span>
          <span className="contact-name">Lena Hartmann</span>
          <a href="mailto:volunteer@commonground.org" className="contact-email">
            volunteer@commonground.org
          </a>
        </div>

        <div className="info-divider"></div>

        <div className="donate-callout">
        <h3 className="donate-callout-title">Ready to donate?</h3>
        <p className="donate-callout-subtitle">We accept direct bank transfers in ZAR</p>
        <a href="/donate" className="donate-link">
        View bank details
        <span className="arrow">
        <IoIosArrowForward />
        </span></a>
        </div>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Contact
