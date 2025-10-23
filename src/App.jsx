import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import SectionIndicator from './components/SectionIndicator/SectionIndicator'
import MobileMenu from './components/MobileMenu/MobileMenu'
import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Cursor glow effect
  useEffect(() => {
    const cursorGlow = document.getElementById('cursorGlow')
    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.1
      glowY += (mouseY - glowY) * 0.1
      if (cursorGlow) {
        cursorGlow.style.left = glowX + 'px'
        cursorGlow.style.top = glowY + 'px'
      }
      requestAnimationFrame(animateGlow)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateGlow()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Scroll progress and section detection
  useEffect(() => {
    const scrollProgress = document.getElementById('scrollProgress')
    const sections = document.querySelectorAll('section')

    const handleScroll = () => {
      // Scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%'
      }

      // Active section detection
      const scrollPosition = window.scrollY + window.innerHeight / 3
      let currentSection = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <div className="App">
      <div className="scroll-progress" id="scrollProgress"></div>
      <div className="cursor-glow" id="cursorGlow"></div>
      
      <SectionIndicator activeSection={activeSection} />
      
      <Header 
        onMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
      
      <main>
        <Hero id="hero" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Projects id="projects" />
        <About id="about" />
      </main>
    </div>
  )
}

export default App