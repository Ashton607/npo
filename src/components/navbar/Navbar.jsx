import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav className={sticky ? 'blur-nav' : ''}>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => {
          if (menuOpen) {
            closeMenu()
          } else {
            setMenuOpen(true)
          }
        }}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? 'show-mobile-menu' : ''}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/ourwork" onClick={closeMenu}>our work</Link></li>
        <li className={`nav-item has-dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}>
          <span
            className="nav-link"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Programmes <span className="dropdown-arrow">▾</span>
          </span>
          <ul className="dropdown-menu">
            <li><Link to="/relief" onClick={closeMenu}>Immediate Relief Programme</Link></li>
            <li><Link to="/dignity" onClick={closeMenu}>Dignity Programme</Link></li>
            <li><Link to="/outreach" onClick={closeMenu}>Community Outreach Programme</Link></li>
          </ul>
        </li>
        <li><Link to="/contact" onClick={closeMenu}>contact</Link></li>
        <li><Link to="/donate" onClick={closeMenu}>donate</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar