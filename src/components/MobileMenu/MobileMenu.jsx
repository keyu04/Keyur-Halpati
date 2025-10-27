import { useState, useEffect } from 'react'
import './MobileMenu.css'

const MobileMenu = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState('EN')

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mobileMenu">
      <div className="mobile-social-links">
        <a href="https://www.instagram.com/keyu4/" aria-label="Instagram" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>Instagram</span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008693742219" target="_blank" rel="noopener noreferrer" aria-label="Facebook" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <span>Facebook</span>
        </a>
        <a href="https://www.linkedin.com/in/keyurhalpati/" aria-label="LinkedIn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="mobile-lang">
        <span 
          className={language === 'EN' ? 'active' : ''} 
          onClick={() => handleLanguageChange('EN')}
        >
          EN
        </span>
        /
        <span 
          className={language === 'HI' ? 'active' : ''} 
          onClick={() => handleLanguageChange('HI')}
        >
          HI
        </span>
      </div>
    </div>
  )
}

export default MobileMenu