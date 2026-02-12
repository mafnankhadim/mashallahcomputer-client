import { useEffect } from "react";
import "./TestimonialArea.css";

// Import images from public folder
import testi1 from "/assets/images/home_one/testi1.png";
import testi2 from "/assets/images/home_one/testi2.png";
import testiArrow from "/assets/images/home_one/testi_arrow.png";
import testiShpe from "/assets/images/home_one/testi_shpe.png";

const TestimonialArea = () => {
  const testimonials = [
    {
      id: 1,
      image: testi2,
      name: "Urmila Jahan",
      designation: "UX Engineer",
      quote:
        '"Competently enable equity invested matrix alternative catalysts for change vertical web fully test disinte',
    },
    {
      id: 2,
      image: testi1,
      name: "Urmila Jahan",
      designation: "UX Engineer",
      quote:
        '"Competently enable equity invested matrix alternative catalysts for change vertical web fully test disinte',
    },
    {
      id: 3,
      image: testi2,
      name: "Urmila Jahan",
      designation: "UX Engineer",
      quote:
        '"Competently enable equity invested matrix alternative catalysts for change vertical web fully test disinte',
    },
  ];

  useEffect(() => {
    // Initialize owl carousel after component mounts
    if (window.jQuery) {
      window.jQuery(".testimonial").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          992: { items: 2 },
        },
      });
    }
  }, []);

  return (
    <section className="testimonial_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section_title pb-40">
              <h4>Testimonials</h4>
              <h1>
                What Saying Our <br />
                Customers About <br />
                Printing Service
              </h1>
            </div>
            <div className="testi_rating">
              <div className="testi_rating_content">
                <div className="rating-_number">
                  <h1 className="counter">4.98</h1>
                </div>
                <div className="rating_title">
                  <div className="rating-star">
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <h5 className="title_two">Avg. Clients Ratings</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="testimonial owl-carousel">
              {testimonials.map((testimonial) => (
                <div className="col-lg-12" key={testimonial.id}>
                  <div className="testimonial_item">
                    <div className="testimonial-content">
                      <div className="testi_icon">
                        <img src={testiArrow} alt="quote" />
                      </div>
                      <p>{testimonial.quote}</p>
                      <div className="testi-star">
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                        <i className="fa fa-star active"></i>
                      </div>
                    </div>
                    <div className="tesit-auothor">
                      <div className="testi-author-thumb">
                        <img src={testimonial.image} alt="" />
                      </div>
                      <div className="testi_bio">
                        <h4 className="name">{testimonial.name}</h4>
                        <h5 className="designation">
                          {testimonial.designation}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="testi_shape bounce-animate-3">
        <img src={testiShpe} alt="shape" />
      </div>
    </section>
  );
};

export default TestimonialArea;
