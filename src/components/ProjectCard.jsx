import '../css/ProjectCard.css'

function ProjectCard({ project }) {
  const { title, description, stack, github, demo, caseStudy, imagePlaceholder } = project

  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-image-placeholder">
          <span className="project-image-label">{imagePlaceholder || title}</span>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-stack">
          {stack.map(tech => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {github && (
            <a href={github} className="project-btn" target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} className="project-btn" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {caseStudy && (
            <a href={caseStudy} className="project-btn project-btn-outline" target="_blank" rel="noreferrer">
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
