import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import ProjectCarousel from '../components/ProjectCarousel'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'

import '../css/Content.css'

function Content() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <Sidebar />
        <main>

          {/* About — Hero + About text + Education */}
          <HeroSection />

          {/* Projects */}
          <section id="projects">
            <ProjectCarousel />
          </section>

          {/* Contact */}
          <section id="contact">
            <div className="section-inner contact-inner">
              <ContactForm />
              <ContactInfo />
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Content
