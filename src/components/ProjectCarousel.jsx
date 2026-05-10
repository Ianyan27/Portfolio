import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import '../css/ProjectCarousel.css'

const projects = [
  {
    id: 1,
    title: 'Contact Management System',
    description:
      'A contact management application integrated with the HubSpot API, allowing users to manage, import, export, and view contacts through a tabular interface. Designed to simplify customer and contact data management for teams and businesses.',
    stack: [
      'PHP Laravel',
      'Bootstrap 5',
      'JavaScript',
      'Microsoft OAuth',
      'HubSpot API',
    ],
    github: '#',
    demo: '#',
    caseStudy: '#',
    imagePlaceholder: 'Contact Management System — HubSpot Integration',
  },
  {
    id: 2,
    title: 'Ticketing System',
    description:
      'A ticket management system integrated with the ClickUp API, where users can submit and monitor tickets directly through the application. Instead of storing tickets in a local database, all ticket data is synchronized and managed within ClickUp.',
    stack: [
      'PHP Laravel',
      'Bootstrap 5',
      'JavaScript',
      'Microsoft OAuth',
      'ClickUp API',
    ],
    github: '#',
    demo: '#',
    caseStudy: '#',
    imagePlaceholder: 'Ticketing System — ClickUp Integration',
  },
  {
    id: 3,
    title: 'Upcoming Project',
    description:
      'Currently in planning and development. More details and features will be added soon.',
    stack: [],
    github: null,
    demo: null,
    caseStudy: null,
    imagePlaceholder: 'New Project — Coming Soon',
  },
]

function ProjectCarousel() {
  const trackRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - 16, behavior: 'smooth' })
    setCurrentIndex(index)
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const scrollLeft = track.scrollLeft
    const cardWidth = track.children[0]?.offsetWidth + 20 || 400
    const index = Math.round(scrollLeft / cardWidth)
    setCurrentIndex(Math.max(0, Math.min(index, projects.length - 1)))
  }

  return (
    <div className="carousel-wrapper section-inner">
      <div className="carousel-header">
        <div>
          <p className="section-eyebrow">Work</p>
          <h2 className="section-heading">Projects</h2>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="carousel-btn"
            onClick={() => scrollTo(Math.min(projects.length - 1, currentIndex + 1))}
            disabled={currentIndex === projects.length - 1}
          >
            →
          </button>
        </div>
      </div>

      <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="carousel-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === currentIndex ? 'dot-active' : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectCarousel
