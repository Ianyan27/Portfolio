import { useState, useEffect } from 'react'
import EducationSection from './EducationSection'
import '../css/HeroSection.css'

const roles = [
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Project Lead',
]

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex(prev => (prev + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about">
      {/* Hero / Intro */}
      <div className="section-inner hero-inner">
        <div className="hero-meta">
          <span className="hero-tag">Available for work</span>
        </div>

        <h1 className="hero-name">Gerome Ian</h1>

        <div className="hero-role-wrapper">
          <span className="hero-role-prefix">—</span>
          <span className={`hero-role ${visible ? 'role-visible' : 'role-hidden'}`}>
            {roles[roleIndex]}
          </span>
        </div>

        <p className="hero-intro">
          I build clean, performant web applications with a focus on user experience
          and scalable architecture. Passionate about both frontend precision and
          backend reliability.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">12+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Tech Stacks</span>
          </div>
        </div>
      </div>

      {/* About / Description */}
      <div className="section-inner about-inner">
        <p className="section-eyebrow">Background</p>
        <h2 className="section-heading">About Me</h2>
        <p className="section-body">
          I'm a software developer with a deep passion for crafting digital experiences
          that are both functional and thoughtful. My work spans frontend and backend
          technologies — from designing responsive interfaces to architecting RESTful APIs
          and managing databases.
        </p>
        <p className="section-body">
          I've handled end-to-end system development and led small project teams,
          giving me a well-rounded perspective on the software development lifecycle.
          Currently focused on deepening my expertise in modern JavaScript frameworks
          and cloud-native development.
        </p>
      </div>

      {/* Education */}
      <EducationSection />
    </section>
  )
}

export default HeroSection
