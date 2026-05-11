import { useCallback, useEffect, useState } from 'react';
import '../styles/components/_clients.scss';

const AUTOPLAY_MS = 7000;

const Clients = () => {
  const reviews = [
    {
      image: new URL('../assets/images/testimonial-1-img.webp', import.meta.url).href,
      name: 'Davei Luace',
      role: 'Chief Operating Manager',
      title: 'Android App Development',
      date: 'via Upwork - Mar 4, 2015 - Aug 30, 2021',
      quoteImage: new URL('../assets/images/quote-icon.webp', import.meta.url).href,
      review:
        'When management is so important. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
    },
    {
      image: new URL('../assets/images/testimonial-2-img.webp', import.meta.url).href,
      name: 'Janet Foster',
      role: 'Product Design Lead',
      title: 'UI/UX Strategy',
      date: 'via Dribbble - Jul 12, 2022 - Dec 18, 2022',
      quoteImage: new URL('../assets/images/quote-icon.webp', import.meta.url).href,
      review:
        'A thoughtful and modern approach to product design. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit.',
    },
    {
      image: new URL('../assets/images/testimonial-3-img.webp', import.meta.url).href,
      name: 'Mia Carter',
      role: 'Marketing Director',
      title: 'Campaign Creative',
      date: 'via Freelancer - Jan 2, 2023 - May 20, 2023',
      quoteImage: new URL('../assets/images/quote-icon.webp', import.meta.url).href,
      review:
        'Consistent communication and excellent delivery. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit.',
    },
  ];

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

  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 6.827 6.827"
      aria-hidden="true"
    >
      <path
        fill="#ff8f00"
        d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
      />
      <path
        fill="#e68100"
        d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923V.98z"
      />
    </svg>
  );

  return (
    <section className="container testimonial-wrapper" id="clients">
      <span>What Clients Say</span>
      <h3>Testimonial</h3>

      <div
        className="testimonial-slider-region"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
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
                        <span>Client story</span>
                        <div className="detail">
                          <strong>{review.name}</strong>
                          <span>{review.role}</span>
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <div className="main-box">
                        <figure>
                          <img
                            src={review.quoteImage}
                            alt=""
                            width="130"
                            height="130"
                          />
                        </figure>
                      </div>

                      <div className="detail-box">
                        <div className="left">
                          <div className="left-inner">
                            <h4>{review.title}</h4>
                            <p>{review.date}</p>
                          </div>
                          <div className="right-image">
                            <span>{starIcon}</span>
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
            aria-label="Previous testimonial"
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
            aria-label="Next testimonial"
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

          <ul className="testimonial-carousel-dots" aria-label="Choose testimonial slide">
            {reviews.map((review, index) => (
              <li key={review.name}>
                <button
                  type="button"
                  className={index === active ? 'is-active' : undefined}
                  aria-label={`Show testimonial ${index + 1} of ${count}`}
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
