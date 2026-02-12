import { useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceDetails.css";

// Image imports
import serviceIcon from "/assets/images/home-two/service_icon.png";
import serviceIcon2 from "/assets/images/home-two/service_icon2.png";
import serviceDetailsImg from "/assets/images/inner-img/service-details.jpg";

const ServiceDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const serviceItems = [
    {
      icon: serviceIcon,
      title: "Printing Method",
      description:
        "Choose the material of the t-shirts, such as cotton, polyester, or blends.",
    },
    {
      icon: serviceIcon2,
      title: "Shirt Selection",
      description:
        "Choose the material of the t-shirts, such as cotton, polyester, or blends.",
    },
  ];

  const benefits = [
    "Professional Team Member",
    "Any Problem Solving",
    "Implement Business",
    "Implement Business",
  ];

  const faqs = [
    {
      question: "How to Install Booking Plugin on WP?",
      answer:
        "Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally",
    },
    {
      question: "What is the Best Extension for Marketing?",
      answer:
        "Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally",
    },
    {
      question: "Do You have any custom Service?",
      answer:
        "Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally",
    },
    {
      question: "How to Change my Username from cPannel?",
      answer:
        "Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally",
    },
  ];

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Service Details</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Area */}
      <section className="service_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service_details_img">
                <img src={serviceDetailsImg} alt="" />
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-8">
              <div className="service_details_content">
                <h2>Design Your Dream Tee!</h2>
                <p className="details_decs1">
                  Globally engage cross-media leadership skills before
                  cross-media innovation forward morph flexible whereas
                  process-centric models. Efficiently transform customer
                  directed alignments for front-end meta Dramatically harness
                  cross-platform best practices whereas business services.
                  Conveniently formula standards in innovation with wireless
                  vertical intellectual capital before global architectures
                  engage based results with visionary models.
                </p>
                <p className="details_decs2">
                  Dramatically harness cross-platform best practices whereas
                  business services. Conveniently formula standards in
                  innovation with wireless Globally engage cross-media
                  leadership best breed experience rather than bricks-and-clicks
                  infomediaries monotonectally
                </p>
                <p className="details_decs3">
                  Globally engage cross-media leadership skills before
                  cross-media innovation forward morph whereas process-centric
                  models. Efficiently transform customer directed alignments
                </p>
              </div>
              <div className="row pt-22">
                {serviceItems.map((item, index) => (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <div className="service_details_item">
                      <div className="service_detls_icon">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="service_dtls_content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar_box">
                <h2 className="sidebar_title">Benifit's the Services</h2>
                <p>
                  Leadership skill before media innovation customer directed
                  alignments
                </p>
                <div className="sidebar-list">
                  <ul>
                    {benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="printmax_btn pt-30">
                  <Link to="/contact">
                    Contact With Us<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Area */}
      <section className="faq_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>FAQ's</h4>
                <h1>Freequently Asked Questions</h1>
                <h1>Portable Services</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab_container">
                <div id="tab1" className="tab_content">
                  <ul className="accordion">
                    {faqs.map((faq, index) => (
                      <li
                        key={index}
                        className={activeAccordion === index ? "active" : ""}
                      >
                        <a onClick={() => toggleAccordion(index)}>
                          <span>{faq.question}</span>
                          <i className="bi bi-chevron-right"></i>
                        </a>
                        <p
                          style={{
                            display:
                              activeAccordion === index ? "block" : "none",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
