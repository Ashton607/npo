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
        <Link to="/programmes">
        Programmes <span className="dropdown-arrow">▾</span>
        </Link>
        <ul className="dropdown-menu">
        <li>
        <Link to="/programmes/relief">Immediate Relief Program</Link>
        </li>
        <li>
        <Link to="/programmes/dignity">Dignity Program</Link>
        </li>
        <li>
        <Link to="/programmes/outreach">Community Outreach Program</Link>
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
