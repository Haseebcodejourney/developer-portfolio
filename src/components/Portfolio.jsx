import "../styles/components/_portfolio.scss";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: "openModalBtn",
      title: "Development",
      image: new URL('../assets/images/development-portfolio-img.webp', import.meta.url).href,
      subtitle: "The services provide for design",
      label: "600",
    },
    {
      title: "Application",
      image: new URL('../assets/images/Application-porfolio-img.webp', import.meta.url).href,
      subtitle: "Mobile app landing design & app",
      label: "600",
    },
    {
      title: "Photoshop",
      image: new URL('../assets/images/photoshop-portfolio-img.webp', import.meta.url).href,
      subtitle: "Logo design creativity & Application",
      label: "600",
    },
    {
      title: "Figma",
      image: new URL('../assets/images/Figma-portfolio-img.webp', import.meta.url).href,
      subtitle: "Mobile app landing design & Services",
      label: "600",
    },
    {
      title: "Web Design",
      image: new URL('../assets/images/webdesign-portfolio-img.webp', import.meta.url).href,
      subtitle: "Design for technology & services",
      label: "600",
    },
    {
      title: "Web Design",
      image: new URL('../assets/images/webdesign-portfolio-img2.webp', import.meta.url).href,
      subtitle: "App for technology & services",
      label: "600",
    },
  ];

  return (
    <section className="container my-portfolio" id="portfolio">
      <span>Visit my portfolio and keep your feedback</span>
      <h3>My Portfolio</h3>

      <div className="cards-wrapper">
        {portfolioItems.map((item, index) => (
          <div className="cards" id={item.id} key={index}>
            <figure>
              <img
                src={item.image}
                alt={item.title}
                width="342"
                height="256"
                className="lazy-load"
              />
            </figure>
            <div className="detail-wrapper">
              <div className="detail">
                <span>{item.title}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78"
                    />
                  </svg>
                  {item.label}
                </span>
              </div>

              <strong>
                {item.subtitle}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </span>
              </strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
