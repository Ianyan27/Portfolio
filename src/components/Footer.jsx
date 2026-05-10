import '../css/Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span className="footer-copy">© {year} Juan dela Cruz</span>
      <span className="footer-built">Built with React</span>
    </footer>
  )
}

export default Footer
