import { useState,useEffect } from 'react'
import './Navbar.css'

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
        <li>Home</li>
        <li>our work</li>
        <li>programmes</li>
        <li>contact</li>
        <li>donate</li>
    </ul>
    </nav>
  )
}

export default Navbar
