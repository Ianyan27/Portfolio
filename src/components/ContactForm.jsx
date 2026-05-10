import { useState } from 'react'
import '../css/ContactForm.css'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: wire up to backend or email API here
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <div className="contact-form-wrapper">
      <p className="section-eyebrow">Reach Out</p>
      <h3 className="contact-form-heading">Send a Message</h3>

      {status === 'sent' && (
        <div className="form-success">
          Message sent. I'll get back to you soon.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        <button type="submit" className="form-submit">
          Send Message →
        </button>
      </form>
    </div>
  )
}

export default ContactForm
