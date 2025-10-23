import { useEffect, useRef } from 'react'
import './About.css'

const About = ({ id }) => {
  const aboutTextRef = useRef(null)
  const visualCardRef = useRef(null)
  const contactCardsRef = useRef([])

  useEffect(() => {
    // Parallax effect for background shapes
    const parallaxShapes = document.querySelectorAll('.parallax-shape')
    let mouseX = 0, mouseY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const updateParallaxShapes = () => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      parallaxShapes.forEach(shape => {
        const speed = 0.02
        const moveX = (mouseX - centerX) * speed
        const moveY = (mouseY - centerY) * speed
        
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
      
      requestAnimationFrame(updateParallaxShapes)
    }

    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          
          // Special handling for contact cards to stagger their animation
          if (entry.target.classList.contains('contact-card')) {
            const index = contactCardsRef.current.indexOf(entry.target)
            entry.target.style.transitionDelay = `${0.8 + index * 0.1}s`
          }
        }
      })
    }, { threshold: 0.2 })

    // Observe elements
    if (aboutTextRef.current) observer.observe(aboutTextRef.current)
    if (visualCardRef.current) observer.observe(visualCardRef.current)
    contactCardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    document.addEventListener('mousemove', handleMouseMove)
    updateParallaxShapes()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  // Function to add contact card refs
  const addContactCardRef = (element, index) => {
    contactCardsRef.current[index] = element
  }

  const openEmailClient = () => {
    const email = 'krhalpati@gmail.com'
    const subject = 'Contact from Portfolio Website'
    const body = 'Hello Keyur,\n\nI came across your portfolio and would like to connect with you.\n\nBest regards,'
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const openPhoneDialer = () => {
    const phoneNumber = '+919913364566'
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <section className="about-section" id={id}>
      <div className="parallax-bg">
        <div className="parallax-shape p-shape1"></div>
        <div className="parallax-shape p-shape2"></div>
        <div className="parallax-shape p-shape3"></div>
      </div>

      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Personal & Professional Details</p>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text" ref={aboutTextRef}>
            <h1>Hi, I'm <span>Keyur Halpati</span></h1>
            
            <p className="about-paragraph">
              I'm a <strong>Backend Developer</strong> from India. 
              I use <strong>Node.js, Express.js, and MSSQL</strong> to create robust server-side applications and RESTful APIs.
            </p>
            
            <div className="current-role">
              I currently work as an <strong>Associate Software Engineer, Back-end</strong> at SRKay Consulting Group.
            </div>
            
            <p className="about-paragraph">
              Previously, I worked as a <strong>Backend Developer Intern</strong> at SRKay Consulting Group, 
              where I gained hands-on experience in developing and maintaining server-side applications.
            </p>

            <div className="contact-cards">
              <div 
                className="contact-card" 
                ref={(el) => addContactCardRef(el, 0)}
              >
                <div className="contact-header">
                  <div className="contact-icon">📍</div>
                  <div className="contact-info">
                    <h3>Location</h3>
                    <p>Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div 
                className="contact-card" 
                ref={(el) => addContactCardRef(el, 1)}
                onClick={openEmailClient}
              >
                <div className="contact-header">
                  <div className="contact-icon">📧</div>
                  <div className="contact-info">
                    <h3>Email</h3>
                    <p className="email-link">krhalpati@gmail.com</p>
                  </div>
                </div>
              </div>

              <div 
                className="contact-card" 
                ref={(el) => addContactCardRef(el, 2)}
                onClick={openPhoneDialer}
              >
                <div className="contact-header">
                  <div className="contact-icon">📱</div>
                  <div className="contact-info">
                    <h3>Phone</h3>
                    <p>(+91) 99133 64566</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card" ref={visualCardRef}>
              <div className="tech-stack">
                <h3>Technical Stack</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MSSQL</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">Sails.js</span>
                  <span className="tech-tag">Backend Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About