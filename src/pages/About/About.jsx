import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import AboutArea from "../../components/AboutArea/AboutArea";
import FeatureArea from "../../components/FeatureArea/FeatureArea";

// Import images from public folder
import MarqueeArea from "../../components/MarqueeArea/MarqueeArea";
import services from "../../data/services";
import testiArrow from "/assets/images/home_one/testi_arrow.png";
import testi1 from "/assets/images/home_one/testi1.png";
import testi2 from "/assets/images/home_one/testi2.png";
import testiShpe from "/assets/images/home_one/testi_shpe.png";

const About = () => {
  useEffect(() => {
    // Initialize testimonial carousel
    if (window.jQuery?.fn?.owlCarousel) {
      window.jQuery(".testimonial").owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          992: { items: 2 },
        },
      });

      window.jQuery(".brand_list").owlCarousel({
        items: 5,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 2 },
          576: { items: 3 },
          768: { items: 4 },
          992: { items: 5 },
        },
      });
    }

    // Initialize counter
    if (window.jQuery?.fn?.counterUp) {
      window.jQuery(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      quote:
        '"Competently enable equity invested matrix alternative catalysts for change vertical web fully test disinte',
      name: "Urmila Jahan",
      designation: "UX Engineer",
      image: testi2,
    },
    {
      id: 2,
      quote:
        '"Competently enable equity invested matrix alternative catalysts for change vertical web fully test disinte',
      name: "Urmila Jahan",
      designation: "UX Engineer",
      image: testi1,
    },
    {
      id: 3,
      quote:
        '"Competently enable equity invested matrix alternative catalysts for change vertical web fully test disinte',
      name: "Urmila Jahan",
      designation: "UX Engineer",
      image: testi2,
    },
  ];

  const marqueeItems = [
    "T-SHIRT PRINTING",
    "PACKAGING PRINTING",
    "PRODUCT DESIGNING",
    "CUSTOM PRINTING",
    "PACKAGING PRINTING",
  ];

  const serviceFeatures = services;

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>About Us</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutArea />
      <MarqueeArea items={marqueeItems} />

      {/* Reusable Feature Area (uses project services) */}
      {/* <FeatureArea items={serviceFeatures} /> */}
    </>
  );
};

export default About;
