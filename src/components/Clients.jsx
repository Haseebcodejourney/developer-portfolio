import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_clients.scss";

const Clients = () => {
  const reviews = [
    {
      image: new URL('../assets/images/testimonial-1-img.webp', import.meta.url).href,
      name: "Davei Luace",
      role: "Chief Operating Manager",
      title: "Android App Development",
      date: "via Upwork - Mar 4, 2015 - Aug 30, 2021",
      quoteImage: new URL('../assets/images/quote-icon.webp', import.meta.url).href,
      review:
        "When management is so important. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    },
    {
      image: new URL('../assets/images/testimonial-2-img.webp', import.meta.url).href,
      name: "Janet Foster",
      role: "Product Design Lead",
      title: "UI/UX Strategy",
      date: "via Dribbble - Jul 12, 2022 - Dec 18, 2022",
      quoteImage: new URL('../assets/images/quote-icon.webp', import.meta.url).href,
      review:
        "A thoughtful and modern approach to product design. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit.",
    },
    {
      image: new URL('../assets/images/testimonial-3-img.webp', import.meta.url).href,
      name: "Mia Carter",
      role: "Marketing Director",
      title: "Campaign Creative",
      date: "via Freelancer - Jan 2, 2023 - May 20, 2023",
      quoteImage: new URL('../assets/images/quote-icon.webp', import.meta.url).href,
      review:
        "Consistent communication and excellent delivery. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit.",
    },
  ];

  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 6.827 6.827"
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="container testimonial-wrapper" id="clients">
      <span>What Clients Say</span>
      <h3>Testimonial</h3>

      <Slider {...settings} className="single-item">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="testiminial-inner-wrapper">
              <div className="testimonial-wrapper-inside">
                <div className="left">
                  <div className="box-portfolio">
                    <figure>
                      <img
                        src={review.image}
                        alt={review.name}
                        width="342"
                        height="256"
                        className="lazy-load"
                      />
                    </figure>
                    <span>Default name</span>
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
                        alt="quote symbol"
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
      </Slider>
    </section>
  );
};

export default Clients;
