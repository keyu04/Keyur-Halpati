import { useEffect } from 'react'
import './Experience.css'

const Experience = ({ id }) => {
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

    document.addEventListener('mousemove', handleMouseMove)
    updateParallaxShapes()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const experiences = [
    {
      title: "Associate Software Engineer, Back-end",
      company: "SRKay Consulting Group Pvt. Ltd. - Surat",
      duration: "May 2023 - Present",
      description: "Developing and maintaining multiple client projects from conception to deployment. Collaborating with cross-functional teams to deliver high-quality products. Implementing backend solutions using Node.js, Express.js, and MSSQL.",
      tags: ["Node.js", "Express.js", "Sails.js", "MSSQL", "Git"]
    },
    {
      title: "Backend Developer Intern",
      company: "SRKay Consulting Group Pvt. Ltd. - Surat",
      duration: "Jan 2023 – Apr 2023",
      description: "Gained hands-on experience in backend development with Node.js and MSSQL. Assisted in developing RESTful APIs and database management. Collaborated with senior developers on various client projects.",
      tags: ["Node.js", "JavaScript", "MSSQL", "MongoDB"]
    }
  ]

  return (
    <section className="experience-section" id={id}>
      <div className="parallax-bg">
        <div className="parallax-shape p-shape1"></div>
        <div className="parallax-shape p-shape2"></div>
        <div className="parallax-shape p-shape3"></div>
      </div>

      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My Professional Journey</p>

      <div className="experience-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" data-scroll>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="duration">{exp.duration}</div>
                <p>{exp.description}</p>
                <div className="experience-tags">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience