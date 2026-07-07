import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import logoImg from '../../assets/DEF.jpg'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">
        <img src={logoImg} alt="Deon Ellison Foundation" className="footer-logo-img" />
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Policies</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Location</h4>
          <p className="footer-address">
            340 West 53rd Street, Suite 4B<br />
            New York, NY 10019, USA
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <p className="footer-contact">
            <strong>Tel:</strong> +1 212 888 0100<br />
            <strong>WhatsApp:</strong> +1 212 888 0199<br />
            <strong>Email:</strong> hello@commonground.org
          </p>
        </div>
      </div>

      <div className="footer-description">
        <p>
          The Deon Ellison Foundation is a newly established Non-Profit Organization passionately 
          committed to breaking cycles of local poverty and restoring personal dignity from the ground 
          up. Launched within the past year, our mission is built on immediate accountability and direct 
          community action. We work hand in hand with a diversity of people in need delivering urgent 
          physical relief to our most vulnerable neighbors while building the foundational support 
          networks that empower individuals to become entirely self supporting. We believe that true 
          transformation starts on day one, and we are moving rapidly to build a resilient future for 
          every family in our care.
        </p>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © 2026 Deon Ellison Foundation. All rights reserved.
        </span>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer