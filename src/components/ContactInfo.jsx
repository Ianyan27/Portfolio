import '../css/ContactInfo.css'

const contactDetails = [
  { label: 'Phone', value: '+63 947 819 4875', href: 'tel:+639478194875' },
  { label: 'Email', value: 'gerome5252005@gmail.com', href: 'mailto:gerome5252005@gmail.com' },
  { label: 'Location', value: 'Baguio City, Philippines', href: null },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Ianyan27' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/gerome.ducusin.7/' },
]

function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <p className="section-eyebrow">Details</p>
      <h3 className="contact-info-heading">Contact Info</h3>

      <div className="contact-details">
        {contactDetails.map(item => (
          <div key={item.label} className="contact-detail-row">
            <span className="detail-label">{item.label}</span>
            {item.href ? (
              <a href={item.href} className="detail-value">{item.value}</a>
            ) : (
              <span className="detail-value">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="contact-socials">
        <p className="socials-label">Online</p>
        {socials.map(item => (
          <a
            key={item.label}
            href={item.href}
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
            <span className="social-arrow">↗</span>
          </a>
        ))}
      </div>

      <div className="contact-thankyou">
        <span className="thankyou-line" />
        <p className="thankyou-text">
          Thank you for visiting my portfolio. Feel free to reach out for collaborations,
          freelance work, or opportunities.
        </p>
      </div>
    </div>
  )
}

export default ContactInfo
