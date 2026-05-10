import '../css/Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span className="footer-copy">© {year} Gerome Ian</span>
      <span className="footer-built">Built with Love ❤️</span>
    </footer>
  )
}

export default Footer
