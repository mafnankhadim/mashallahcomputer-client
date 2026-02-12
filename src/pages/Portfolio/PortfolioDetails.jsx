import { Link } from "react-router-dom";

// Image imports
import product2Img from "/assets/images/inner-img/product2.png";

const PortfolioDetails = () => {
  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Portfolio Details</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Portfolio Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Details Area */}
      <section className="portfolio_details">
        <div className="container">
          <div className="porfolio_dtls_container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="port_dtls_thumb">
                  <img src={product2Img} alt="Portfolio" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-content portfolio-details-box">
                  <div className="portfolio_info">
                    <h3>Project Information</h3>
                    <ul>
                      <li>
                        <strong>Project Name :</strong>Printmax Tsirt Template
                        Design
                      </li>
                      <li>
                        <strong>Category :</strong>Graphics Design / Ti – Shirt
                        Design / Printing / Package
                      </li>
                      <li>
                        <strong>Client :</strong>MD Abu Taleb
                      </li>
                      <li>
                        <strong>Complete :</strong>Date 01 Aug, 2025
                      </li>
                      <li>
                        <strong>Skills :</strong>Photoshop / Illustrator
                      </li>
                    </ul>
                    <div className="port_dtl_social">
                      Share:
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-30">
              <div className="col-lg-12">
                <div className="service_details_content">
                  <h2>A Collection of T-Shirt Art</h2>
                  <p className="details_decs1">
                    Detail your process from concept to completion. Mention any
                    research you do, the tools you use (like Adobe Illustrator
                    or Photoshop), and how you ensure that the final print is of
                    the highest quality. If you collaborate with printers or use
                    specific printing techniques (like screen printing, DTG, or
                    heat press), include that here.
                  </p>
                  <p className="details_decs2">
                    Conclude with a call to action, inviting potential clients
                    or collaborators to reach out. Provide your contact details,
                    social media links, and any other relevant information.
                  </p>
                  <p className="details_decs3">
                    Introduce yourself and your expertise in T-shirt design.
                    Mention your background in design, the styles you specialize
                    in, and any unique techniques you use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;
