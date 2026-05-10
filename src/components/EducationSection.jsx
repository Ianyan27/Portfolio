import '../css/EducationSection.css'

const education = [
  {
    id: 1,
    type: 'High School',
    school: 'Mil-an National High School',
    years: '2017 – 2022',
    program: 'Electrical Installation and Maintenance (EIM) Strand',
    description:
      'Completed a comprehensive curriculum focused on electrical systems, circuitry, and maintenance. Gained practical experience through hands-on projects and internships, which sparked an interest in technology and software development.',
    initials: 'MNHS',
  },
  {
    id: 2,
    type: 'College',
    school: 'University of the Baguio',
    years: '2022 – Present',
    program: 'Bachelor of Applied Software Engineering',
    description:
      'Pursuing a degree in Applied Software Engineering, with coursework covering software development, data structures, algorithms, and project management. Engaged in various projects and internships that provided real-world experience in building web applications and collaborating in team environments.',
    initials: 'UB',
  },
]

function EducationSection() {
  return (
    <div className="edu-wrapper section-inner">
      <p className="section-eyebrow">Background</p>
      <h2 className="section-heading">Education</h2>

      <div className="edu-timeline">
        {education.map((item, index) => (
          <div className="edu-card" key={item.id}>
            <div className="edu-card-left">
              <div className="edu-logo-placeholder">
                <span>{item.initials}</span>
              </div>
              {index < education.length - 1 && <div className="edu-connector" />}
            </div>

            <div className="edu-card-body">
              <span className="edu-type">{item.type}</span>
              <h3 className="edu-school">{item.school}</h3>
              <span className="edu-years">{item.years}</span>
              <p className="edu-program">{item.program}</p>
              <p className="edu-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationSection
