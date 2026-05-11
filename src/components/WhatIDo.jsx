

const WhatIDo = () => {
  return (
 <section className="container what-i-do-section" id="features">
      <div className="what-i-do-section-inner">
        <span>Features</span>
        <h2>What I Do</h2>
        {/* <p className="section-description">
          I specialize in delivering high-quality solutions across various domains, combining technical expertise with strategic thinking to bring your ideas to life.
        </p> */}
        <div className="box-wrapper">
          {/* Business Strategy */}
            <div className="box">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-trending-up">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </span>
                <h3>Business Strategy</h3>
                <p>Developing comprehensive business strategies that align technology with organizational goals, ensuring sustainable growth and competitive advantage.</p>
                {/* <span>I specialize in delivering high-quality solutions across various domains, combining technical expertise with strategic thinking to bring your ideas to life.
                </span> */}
            </div>
          {/* Web Development */}
          <div className="box">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="feather feather-code">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </span>
            <h3>Web Development</h3>
            <p>Building responsive, scalable web applications using modern technologies like React, Node.js, and cloud services for optimal performance and user experience.</p>
            <span>
               
            </span>
          </div>
          {/* Game Development */}
          <div className="box">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="feather feather-play-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </span>
            <h3>Game Development</h3>
            <p>Creating engaging interactive experiences with cutting-edge game engines, focusing on immersive gameplay, graphics, and cross-platform compatibility.</p>
            <span>
               
            </span>
          </div>
          {/* Mobile App Development */}
          <div className="box">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="feather feather-smartphone">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </span>
            <h3>Mobile App Development</h3>
            <p>Designing and developing native and cross-platform mobile applications with intuitive interfaces, robust functionality, and seamless user experiences.</p>
            <span>
               
            </span>
          </div>
          {/* Digital Marketing */}
          <div className="box">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="feather feather-target">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </span>
            <h3>Digital Marketing</h3>
            <p>Leveraging data-driven marketing strategies, SEO, and social media to enhance online presence and drive targeted audience engagement.</p>
            <span>
               
            </span>
          </div>
          {/* <!-- For Personal Portfolio --> */}
          <div className="box">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="feather feather-briefcase">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>

              </svg>
            </span>
            <h3>Portfolio Development</h3>
            <p>Crafting personalized portfolios and professional websites that showcase skills, projects, and achievements with modern design and functionality.</p>
            <span>
               
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatIDo
