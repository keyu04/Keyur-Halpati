import { useEffect } from 'react'
import './Hero.css'

const Hero = ({ id }) => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('[data-scroll]').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section" id={id}>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="hero-content">
        <div className="tagline">Welcome to my space</div>
        <h1 className="main-title">
          <span className="word">KEYUR</span>
          <span className="word">HALPATI</span>
        </h1>
        <div className="developer-title">Backend Developer</div>
        <a href="#" className="resume-download">
          <div className="resume-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <span>Download Resume</span>
        </a>
      </div>

      <div className="scroll-indicator">Scroll to explore ↓</div>
    </section>
  )
}

export default Hero