import { useState,useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky,setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={sticky ? 'blur-nav' : ''}>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ourwork">our work</Link></li>
        <li className="nav-item has-dropdown">
        <span className="nav-link">
        Programmes <span className="dropdown-arrow">▾</span>
        </span>
        <ul className="dropdown-menu">
        <li>
        <Link to="/relief">Immediate Relief Programme</Link>
        </li>
        <li>
        <Link to="/dignity">Dignity Programme</Link>
        </li>
        <li>
        <Link to="/outreach">Community Outreach Programme</Link>
        </li>
        </ul>
        </li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/donate">donate</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar
