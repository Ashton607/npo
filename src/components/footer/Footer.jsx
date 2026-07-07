import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span className="footer-logo-main">Common Ground</span>
          <span className="footer-logo-sub">International</span>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Policies</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/online-security">Online Security</a></li>
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
            hello@commonground.org
          </p>
        </div>
      </div>

      <div className="footer-description">
        <p>
          Common Ground International is a registered Non-Profit Organization
          committed to ending poverty and restoring dignity in communities
          worldwide. Over the past 20 years, thousands of families have been
          empowered to take charge of their own lives and futures. We work
          with a diversity of people in need — from the most vulnerable to
          those who have the potential, but lack the opportunity, to become
          self-supporting.
        </p>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © 2026 Common Ground International. All rights reserved.
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