import { useState, useEffect } from 'react'
import '../css/Sidebar.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Sidebar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = main.scrollTop + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(navItems[i].id)
          break
        }
      }
    }

    main.addEventListener('scroll', handleScroll)
    return () => main.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-link ${active === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <span className="sidebar-indicator" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <span className="sidebar-line" />
      </div>
    </aside>
  )
}

export default Sidebar
