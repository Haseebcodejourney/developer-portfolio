const logoUrl = new URL('../assets/images/Saleem Logo.svg', import.meta.url).href;

const Footer = () => {
  return (
<section className="container inbio-wrapper">
      <figure>
        <img src={logoUrl} alt="Footer Logo" width="78" height="35" className="lazy-load" />
      </figure>
      <div className="inbio-text">
        <p>© 2026. All rights reserved by
          <a href="#main-section" aria-describedby="name-description"> Muhammad Nawaz</a>
          <span id="name-description" className="sr-only">Full name: Muhammad Nawaz</span>
          
        </p>
      </div>
    </section>
  )
}

export default Footer
