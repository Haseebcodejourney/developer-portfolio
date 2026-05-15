import { profile } from '../data/profile';
import "../styles/components/_portfolio.scss";

const projectImages = [
  new URL('../assets/images/development-portfolio-img.webp', import.meta.url).href,
  new URL('../assets/images/Application-porfolio-img.webp', import.meta.url).href,
];

const Portfolio = () => {
  const portfolioItems = profile.projects.map((project, index) => ({
    ...project,
    image: projectImages[index],
    label: project.category,
  }));

  return (
    <section className="container my-portfolio" id="portfolio">
      <span>Visit my portfolio and keep your feedback</span>
      <h3>My Portfolio</h3>

      <div className="cards-wrapper">
        {portfolioItems.map((item) => (
          <div className="cards" key={item.title}>
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
                <span>{item.category}</span>
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
                {item.title}: {item.subtitle}
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
