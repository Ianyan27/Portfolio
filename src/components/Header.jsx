import '../css/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">dev</span>
        <span className="logo-bracket"> /&gt;</span>
      </div>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
