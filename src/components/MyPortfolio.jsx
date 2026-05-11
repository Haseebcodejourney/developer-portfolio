import React from 'react'

const MyPortfolio = () => {
  return (
    <section className="container my-portfolio" id="portfolio">
      <span>Visit my portfolio and keep your feedback</span>
      <h3>My Portfolio</h3>
      <div className="cards-wrapper">
        <div className="cards" id="openModalBtn">
          <figure>
              <img data-src="assets/images/development-portfolio-img.webp" alt="Development" width="342"
              height="256" className="lazy-load" />
          </figure>
          <div className="detail-wrapper">
            <div className="detail">
              <span>Development</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
                </svg>
                600
              </span>
            </div>
            <strong>The services provide for design
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </strong>
          </div>
        </div>
      
        <div className="cards">
          <figure>
              <img data-src="assets/images/Application-porfolio-img.webp" alt="Development" width="342"
              height="256" className="lazy-load" />
          </figure>
          <div className="detail-wrapper">
            <div className="detail">
              <span>Application</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
                </svg>
                600
              </span>
            </div>
            <strong>Mobile app landing design & app
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </strong>
          </div>
        </div>
        {/* For PhotoShop services */}
        <div className="cards">
          <figure>
              <img data-src="assets/images/photoshop-portfolio-img.webp" alt="Development" width="342"
              height="256" className="lazy-load" />
          </figure>
          <div className="detail-wrapper">
            <div className="detail">
              <span>Photoshop</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
                </svg>
                600
              </span>
            </div>
            <strong>Logo design creativity & Application
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </strong>
          </div>
        </div>
        {/* For Figma services */}
        <div className="cards">
          <figure>
              <img data-src="assets/images/Figma-portfolio-img.webp" alt="Development" width="342"
              height="256" className="lazy-load" />
          </figure>
          <div className="detail-wrapper">
            <div className="detail">
              <span>Figma</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
                </svg>
                600
              </span>
            </div>
            <strong>Mobile app landing design &
              Services
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </strong>
          </div>
        </div>
        {/* For Web-Design */}
        <div className="cards">
          <figure>
              <img data-src="assets/images/webdesign-portfolio-img.webp" alt="Development" width="342"
              height="256" className="lazy-load" />
          </figure>
          <div className="detail-wrapper">
            <div className="detail">
              <span>Web Design</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
                </svg>
                600
              </span>
            </div>
            <strong>Design for tecnology & services
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </strong>
          </div>
        </div>
        {/* For Technology */}
        <div className="cards">
          <figure>
              <img data-src="assets/images/webdesign-portfolio-img2.webp" alt="Development" width="342"
              height="256" className="lazy-load" />

          </figure>
          <div className="detail-wrapper">
            <div className="detail">
              <span>Web Design</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78" />
                </svg>
                600
              </span>
            </div>
            <strong>App for tecnology & services
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPortfolio
