import { useCallback, useEffect, useState } from 'react';
import { profile } from '../data/profile';
import '../styles/components/_clients.scss';

const AUTOPLAY_MS = 7000;

const Clients = () => {
  const testimonialImage = new URL('../assets/images/testimonial-1-img.webp', import.meta.url).href;
  const quoteImage = new URL('../assets/images/quote-icon.webp', import.meta.url).href;

  const slides = [
    {
      name: 'Education',
      role: profile.education[0].institution,
      title: profile.education[0].degree,
      date: profile.education[0].status || profile.education[0].location || '',
      review: profile.education
        .map((item) => {
          const details = [item.institution, item.location, item.status].filter(Boolean).join(' · ');
          return `${item.degree} — ${details}`;
        })
        .join(' '),
    },
    {
      name: profile.experience[0].company,
      role: profile.experience[0].role,
      title: profile.experience[0].period,
      date: profile.experience[0].location,
      review: profile.experience[0].description,
    },
    {
      name: 'Skills & Languages',
      role: profile.languages.map((lang) => `${lang.name}: ${lang.level}`).join(' · '),
      title: 'Technical Skills',
      date: `Interests: ${profile.interests.join(', ')}`,
      review: profile.skills.join(' · '),
    },
  ];

  const reviews = slides.map((slide) => ({
    ...slide,
    image: testimonialImage,
    quoteImage,
  }));

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = reviews.length;

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused || count <= 1) return undefined;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count, goNext]);

  return (
    <section className="container testimonial-wrapper" id="clients">
      <span>Background</span>
      <h3>Education & Experience</h3>

      <div
        className="testimonial-slider-region"
        role="region"
        aria-roledescription="carousel"
        aria-label="Education and experience"
      >
        <div
          className="single-item testimonial-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonial-carousel-viewport" aria-live="polite">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="testimonial-carousel-slide"
                hidden={index !== active}
                aria-hidden={index !== active}
              >
                <div className="testiminial-inner-wrapper">
                  <div className="testimonial-wrapper-inside">
                    <div className="left">
                      <div className="box-portfolio">
                        <figure>
                          <img
                            src={review.image}
                            alt=""
                            width="342"
                            height="256"
                            className="lazy-load"
                          />
                        </figure>
                        <span>{review.name}</span>
                        <div className="detail">
                          <strong>{review.title}</strong>
                          <span>{review.role}</span>
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <div className="main-box">
                        <figure>
                          <img src={review.quoteImage} alt="" width="130" height="130" />
                        </figure>
                      </div>
                      <div className="detail-box">
                        <div className="left">
                          <div className="left-inner">
                            <h4>{review.title}</h4>
                            <p>{review.date}</p>
                          </div>
                        </div>
                        <p>{review.review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="testimonial-carousel-arrow testimonial-carousel-arrow--prev"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m7 7l-7-7l7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            className="testimonial-carousel-arrow testimonial-carousel-arrow--next"
            aria-label="Next slide"
            onClick={goNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7l-7 7"
              />
            </svg>
          </button>

          <ul className="testimonial-carousel-dots" aria-label="Choose slide">
            {reviews.map((review, index) => (
              <li key={review.name}>
                <button
                  type="button"
                  className={index === active ? 'is-active' : undefined}
                  aria-label={`Show slide ${index + 1} of ${count}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => setActive(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
