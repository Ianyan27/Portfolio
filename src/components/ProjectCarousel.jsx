import { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import '../css/ProjectCarousel.css'

const projects = [
  {
    id: 1,
    title: 'DevTrack',
    description:
      'A project management system built for small dev teams. Features task boards, sprint planning, and real-time progress tracking.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#',
    caseStudy: '#',
    imagePlaceholder: 'DevTrack — Project Management',
  },
  {
    id: 2,
    title: 'ShopLite',
    description:
      'A lightweight e-commerce platform with product catalog, cart management, and order tracking for small businesses.',
    stack: ['Next.js', 'Laravel', 'MySQL', 'Tailwind'],
    github: '#',
    demo: '#',
    caseStudy: null,
    imagePlaceholder: 'ShopLite — E-Commerce',
  },
  {
    id: 3,
    title: 'BarangayConnect',
    description:
      'A community information portal for local government units, featuring resident registration and announcements.',
    stack: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    github: '#',
    demo: null,
    caseStudy: '#',
    imagePlaceholder: 'BarangayConnect — Gov Portal',
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
