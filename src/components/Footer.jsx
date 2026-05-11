const logoUrl = new URL('../assets/images/Saleem Logo.svg', import.meta.url).href;

const Footer = () => {
  return (
<section className="container inbio-wrapper">
      <figure>
        <img src={logoUrl} alt="Footer Logo" width="78" height="35" className="lazy-load" />
      </figure>
      <div className="inbio-text">
        <p>© 2026. All rights reserved by
          <a href="#" aria-describedby="name-description"> Hamza Haeeb</a>
          <span id="name-description" className="sr-only">Full name: Hamza Haseeb</span>
          
        </p>
      </div>
    </section>
  )
}

export default Footer
