import { useEffect } from "react";
import { Link } from "react-router-dom";

// Image imports
import portfolioImg from "/assets/images/home-three/portfolio_img.png";
import portfolioImg2 from "/assets/images/home-three/portfolio_img2.png";
import portfolioImg3 from "/assets/images/home-three/portfolio_img3.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Book cover printing",
      image: portfolioImg,
    },
    {
      id: 2,
      title: "Business Flyer Printing",
      image: portfolioImg2,
    },
    {
      id: 3,
      title: "Product Box Printing",
      image: portfolioImg3,
    },
    {
      id: 4,
      title: "Book cover printing",
      image: portfolioImg,
    },
    {
      id: 5,
      title: "Business Flyer Printing",
      image: portfolioImg2,
    },
    {
      id: 6,
      title: "Product Box Printing",
      image: portfolioImg3,
    },
  ];

  useEffect(() => {
    if (window.$) {
      const $ = window.$;
      if ($(".portfolio_list").length) {
        $(".portfolio_list").owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        });
      }
    }
  }, []);

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Portfolio</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Area */}
      <section className="portfolio_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section_title pb-50">
                <h4>Latest Works</h4>
                <h1>
                  Browse latest finished <br />
                  creative works
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section_right_btn printmax_btn">
                <Link to="/portfolio-details">
                  Visit all Works
                  <i className="flaticon flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="port_container">
          <div className="container-fluid">
            <div className="row">
              <div className="portfolio_list owl-carousel">
                {portfolioItems.map((item) => (
                  <div className="col-lg-12" key={item.id}>
                    <div className="portfolio_single_item">
                      <div className="portfolio_thumb">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="portfolio_content">
                        <h3>
                          <Link to="/portfolio-details">{item.title}</Link>
                        </h3>
                        <div className="portfoli_btn">
                          <Link to="/portfolio-details">
                            <i className="flaticon flaticon-right-arrow"></i>
                            <span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
