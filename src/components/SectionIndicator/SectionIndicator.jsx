import './SectionIndicator.css'

const SectionIndicator = ({ activeSection }) => {
  const sections = ['hero', 'experience', 'skills', 'projects', 'about']

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="section-indicator">
      <div className="indicator-dots">
        {sections.map(section => (
          <div
            key={section}
            className={`dot ${activeSection === section ? 'active' : ''}`}
            data-section={section}
            onClick={() => scrollToSection(section)}
          ></div>
        ))}
      </div>
      <div className="indicator-line"></div>
    </div>
  )
}

export default SectionIndicator