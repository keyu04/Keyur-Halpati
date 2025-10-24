import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState('website');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = {
    website: {
      icon: "🌐",
      title: "PORTFOLIO WEBSITE",
      status: "completed",
      statusText: "COMPLETED",
      details: "Modern portfolio website with interactive animations, responsive design and optimized performance.",
      progress: 100,
      tech: "HTML5 • CSS3 • JavaScript • GSAP",
      team: [
        { name: "Keyur Halpati", role: "Full Stack Dev" }
      ],
      milestones: [
        { task: "Design System", completed: true },
        { task: "Development", completed: true },
        { task: "Testing", completed: true },
        { task: "Deployment", completed: true }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"]
    },
    mobile: {
      icon: "📱",
      title: "MOBILE APPLICATIONS",
      status: "completed",
      statusText: "COMPLETED",
      details: "Collection of mobile applications built with modern technologies including Flutter and Android Studio.",
      progress: 100,
      tech: "Flutter • Android Studio • Java • Dart",
      team: [
        { name: "Keyur Halpati", role: "Mobile Developer" }
      ],
      milestones: [
        { task: "UI/UX Design", completed: true },
        { task: "Core Features", completed: true },
        { task: "Backend Integration", completed: true },
        { task: "Testing & Launch", completed: true }
      ],
      technologies: ["Flutter", "Dart", "Android Studio", "Java", "Firebase", "Mobile Development"],
      projects: [
        {
          name: "Rent Your Equipments",
          description: "Consumer-to-consumer business model app for renting various equipment.",
          tech: "Flutter(Dart), Firebase",
          status: "Completed"
        },
        {
          name: "Attendance Management System",
          description: "Mobile app for faculty to manage student attendance and generate reports.",
          tech: "Android Studio(Java), PHP, MySQL",
          status: "Completed"
        }
      ]
    },
    dashboard: {
      icon: "📊",
      title: "MANAGEMENT SYSTEMS",
      status: "completed",
      statusText: "COMPLETED",
      details: "Various management systems and dashboards for efficient data handling and reporting.",
      progress: 100,
      tech: "Laravel • PHP • MySQL • Web Technologies",
      team: [
        { name: "Keyur Halpati", role: "Full Stack Developer" }
      ],
      milestones: [
        { task: "Database Design", completed: true },
        { task: "Backend Development", completed: true },
        { task: "Frontend Integration", completed: true },
        { task: "Deployment", completed: true }
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Web Development", "Management Systems"],
      projects: [
        {
          name: "Smart Photo Selection",
          description: "Platform allowing clients to select photos remotely, eliminating need for physical storage devices.",
          tech: "Laravel, MySQL",
          status: "Completed"
        }
      ]
    },
    ecommerce: {
      icon: "🛒",
      title: "WEB PLATFORMS",
      status: "planning",
      statusText: "IN PLANNING",
      details: "E-commerce and web platforms development for various business needs.",
      progress: 25,
      tech: "React • Node.js • MongoDB • Payment Gateway",
      team: [
        { name: "Keyur Halpati", role: "Full Stack Developer" }
      ],
      milestones: [
        { task: "Requirement Analysis", completed: true },
        { task: "UI/UX Design", completed: false },
        { task: "Development", completed: false },
        { task: "Testing", completed: false }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Payment Integration", "E-commerce"]
    },
    api: {
      icon: "⚡",
      title: "API SERVICES",
      status: "completed",
      statusText: "COMPLETED",
      details: "Professional backend API services for various management systems with authentication and database integration.",
      progress: 100,
      tech: "Node.js • Express.js • MSSQL • JWT • Sails.js",
      team: [
        { name: "Keyur Halpati", role: "Backend Developer" }
      ],
      milestones: [
        { task: "API Structure", completed: true },
        { task: "Authentication System", completed: true },
        { task: "Database Integration", completed: true },
        { task: "Testing & Documentation", completed: true }
      ],
      technologies: ["Node.js", "Express.js", "Sails.js", "MSSQL", "JWT", "REST APIs", "Backend Services"],
      projects: [
        {
          name: "PMS (Project Management System)",
          description: "Backend API for comprehensive project management system with user roles and task tracking.",
          tech: "Node.js, Express.js, MSSQL, JWT",
          status: "Completed"
        },
        {
          name: "GMS (Grievance Management System)",
          description: "API service for handling grievance management with workflow automation.",
          tech: "Sails.js, MSSQL, REST APIs",
          status: "Completed"
        }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleProjectClick = (projectId) => {
    setActiveProject(projectId);
  };

  const currentProject = projects[activeProject];

  const getProgressClass = (progress) => {
    return `progress-${progress}`;
  };

  const getStatusClass = (status) => {
    return `status-${status}`;
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="parallax-bg">
        <div className="parallax-shape p-shape1"></div>
        <div className="parallax-shape p-shape2"></div>
        <div className="parallax-shape p-shape3"></div>
      </div>

      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">My Creative Work</p>

      <div className="projects-container">
        <div className="projects-content">
          <div className="wheel-section">
            {/* Running lines */}
            <div className={`running-line line-website ${activeProject === 'website' ? 'active' : ''}`}></div>
            <div className={`running-line line-mobile ${activeProject === 'mobile' ? 'active' : ''}`}></div>
            <div className={`running-line line-dashboard ${activeProject === 'dashboard' ? 'active' : ''}`}></div>
            <div className={`running-line line-ecommerce ${activeProject === 'ecommerce' ? 'active' : ''}`}></div>
            <div className={`running-line line-api ${activeProject === 'api' ? 'active' : ''}`}></div>

            {/* Center Display */}
            <div className="center-display expanded">
              <div className="project-icon">{currentProject.icon}</div>
              <div className="project-title">{currentProject.title}</div>
              <div className={`project-status ${getStatusClass(currentProject.status)}`}>
                {currentProject.statusText}
              </div>
              <div className="project-details">{currentProject.details}</div>
              <div className="project-progress">
                <div className={`progress-bar ${getProgressClass(currentProject.progress)}`}></div>
              </div>
              <div className="project-tech">{currentProject.tech}</div>
            </div>

            {/* Project Cards */}
            {Object.entries(projects).map(([projectId, project]) => (
              <div
                key={projectId}
                className={`card ${projectId} ${isVisible ? 'visible' : ''} ${activeProject === projectId ? 'active' : ''}`}
                data-project={projectId}
                onClick={() => handleProjectClick(projectId)}
              >
                <div className="card-badge" style={{ background: '#64c8ff' }}></div>
                <div className="card-icon">{project.icon}</div>
                <div className="card-title">{project.title.split(' ')[0]}</div>
              </div>
            ))}

            <div className="instructions">
              Click on project cards to view detailed information
            </div>
          </div>

          <div className={`details-section ${isVisible ? 'visible' : ''}`}>
            <div className="detail-item">
              <div className="detail-title">PROJECT OVERVIEW</div>
              <div style={{ fontSize: '12px', lineHeight: '1.5', opacity: '0.9' }}>
                {currentProject.details}
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-title">TEAM MEMBERS</div>
              <div className="team-members">
                {currentProject.team.map((member, index) => (
                  <div key={index} className="member">
                    <div className="member-avatar">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '600' }}>{member.name}</div>
                      <div style={{ fontSize: '9px', opacity: '0.7' }}>{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-title">MILESTONES</div>
              <div className="milestones-list">
                {currentProject.milestones.map((milestone, index) => (
                  <div key={index} className={`milestone ${milestone.completed ? 'completed' : ''}`}>
                    <div className="milestone-check">
                      {milestone.completed ? '✓' : ''}
                    </div>
                    <div style={{ fontSize: '12px' }}>{milestone.task}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-title">TECHNOLOGY STACK</div>
              <div className="tech-tags">
                {currentProject.technologies.map((tech, index) => (
                  <div key={index} className="tech-tag">{tech}</div>
                ))}
              </div>
            </div>

            {currentProject.projects && currentProject.projects.length > 0 && (
              <div className="detail-item">
                <div className="detail-title">PROJECTS IN THIS CATEGORY</div>
                {currentProject.projects.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'rgba(100, 200, 255, 0.05)',
                      padding: '12px',
                      borderRadius: '8px',
                      marginBottom: '10px',
                      border: '1px solid rgba(100, 200, 255, 0.1)'
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '5px', color: '#64c8ff' }}>
                      {project.name}
                    </div>
                    <div style={{ fontSize: '10px', opacity: '0.8', marginBottom: '5px' }}>
                      {project.description}
                    </div>
                    <div style={{ fontSize: '9px', color: '#9d7fff' }}>
                      Tech: {project.tech}
                    </div>
                    <div style={{
                      fontSize: '8px',
                      marginTop: '3px',
                      padding: '2px 8px',
                      background: 'rgba(46, 204, 113, 0.2)',
                      color: '#2ecc71',
                      borderRadius: '4px',
                      display: 'inline-block'
                    }}>
                      {project.status}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;