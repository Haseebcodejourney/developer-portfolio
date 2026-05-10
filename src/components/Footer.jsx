const logoUrl = new URL('../assets/images/Saleem Logo.svg', import.meta.url).href;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <figure>
            <img
              src={logoUrl}
              alt="Saleem Logo"
              width="120"
              height="45"
            />
          </figure>
          <h4>Faisal Saleem</h4>
          <p>Building polished digital experiences for modern brands and freelancers.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact-us">Contact</a>
        </div>

        <div className="footer-meta">
          <a href="mailto:admin@example.com">admin@example.com</a>
          <a href="tel:+01234567890">+0123 456 7890</a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2024. All rights reserved by Faisal Saleem.</p>
      </div>
    </footer>
  )
}

export default Footer
