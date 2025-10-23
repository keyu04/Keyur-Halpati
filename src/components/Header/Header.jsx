import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ onMenuToggle, isMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="logo">KH</div>
      <div className="social-links">
        <a href="https://www.instagram.com/keyu4/" target="_blank" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008693742219" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a> 
        <a href="https://www.linkedin.com/in/keyurhalpati/" target="_blank" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <div className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={onMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="lang">
        <span className="active">EN</span>/<span>HI</span>
      </div>
    </header>
  )
}

export default Header