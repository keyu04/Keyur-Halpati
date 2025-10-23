import { useEffect } from 'react'
import './Skills.css'

const Skills = ({ id }) => {
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

  const skillsData = [
    {
      category: "Frontend",
      icon: "⚡",
      background: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&auto=format",
      skills: [
        { name: "React.js", level: "beginner" },
        { name: "JavaScript", level: "intermediate" },
        { name: "HTML/CSS", level: "intermediate" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      background: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
      skills: [
        { name: "Node.js", level: "intermediate" },
        { name: "Express.js", level: "advanced" },
        { name: "REST APIs", level: "advanced" }
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      background: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&auto=format",
      skills: [
        { name: "MSSQL", level: "advanced" },
        { name: "MongoDB", level: "beginner" }
      ]
    },
    {
      category: "DevOps",
      icon: "🚀",
      background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format",
      skills: [
        { name: "Git/GitHub", level: "intermediate" },
        { name: "Docker", level: "intermediate" },
        { name: "AWS", level: "beginner" }
      ]
    }
  ]

  return (
    <section className="skills-section" id={id}>
      <div className="parallax-bg">
        <div className="parallax-shape p-shape1"></div>
        <div className="parallax-shape p-shape2"></div>
        <div className="parallax-shape p-shape3"></div>
      </div>

      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">My Technical Expertise</p>

      <div className="skills-container">
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div 
              key={index} 
              className="skill-card" 
              data-scroll
              style={{ backgroundImage: `url(${skillCategory.background})` }}
            >
              <div className="skill-card-overlay"></div>
              <div className="skill-card-content">
                <div className="skill-card-header">
                  <div className="skill-icon">{skillCategory.icon}</div>
                  <h3 className="skill-category-title">{skillCategory.category}</h3>
                </div>
                <ul className="skill-list">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="skill-item" 
                      data-level={skill.level}
                    >
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-level"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills