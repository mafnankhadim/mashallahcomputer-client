import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Service.css";

import services from "../../data/services";

// Map service titles to icons
const iconFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("photocopy")) return "fas fa-copy";
  if (t.includes("b/w") || t.includes("printing") || t.includes("print")) return "fas fa-print";
  if (t.includes("color")) return "fas fa-paint-brush";
  if (t.includes("scan") || t.includes("scanning") || t.includes("document")) return "fas fa-file-alt";
  if (t.includes("computer")) return "fas fa-desktop";
  if (t.includes("mobile") || t.includes("phone")) return "fas fa-mobile-alt";
  if (t.includes("duplicate") || t.includes("id")) return "fas fa-id-card";
  if (t.includes("online")) return "fas fa-globe";
  if (t.includes("photo") || t.includes("studio")) return "fas fa-camera";
  if (t.includes("laminat")) return "fas fa-file";
  if (t.includes("mug")) return "fas fa-mug-hot";
  if (t.includes("t-shirt") || t.includes("tshirt")) return "fas fa-shirt";
  if (t.includes("graphic") || t.includes("design")) return "fas fa-palette";
  return "fas fa-concierge-bell";
};

// Service card component
const ServiceCard = ({ service, index }) => {
  const colors = ['color-1', 'color-2', 'color-3', 'color-4'];
  const colorClass = colors[index % 4];
  
  return (
    <article className={`service_single_item ${colorClass}`}>
      <div className="service_image_box">
        <i className={`${iconFor(service.title)} service_icon_svg`} aria-hidden="true"></i>
      </div>
      <div className="service_content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service_button">
        <div className="printmax_btn service_btn">
          <Link to="/service-details">
            View Details
            <span></span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

const Service = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const $ = window.jQuery;
    const selector = carouselRef.current;
    if ($ && selector && $.fn && $.fn.owlCarousel) {
      const $el = $(selector);
      if (!$el.hasClass("owl-loaded") && !$el.data("owl.carousel")) {
        $el.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          navText: [
            "<i class='flaticon flaticon-left-arrow'></i>",
            "<i class='flaticon flaticon-right-arrow'></i>",
          ],
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        });
      }
      return () => {
        try {
          if ($el && $el.data && $el.data("owl.carousel")) {
            $el.trigger("destroy.owl.carousel");
            $el.find(".owl-stage-outer").children().unwrap();
          }
        } catch (err) {}
      };
    }
    return undefined;
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
                  <h4>Service</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <section className="service_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>Our Services</h4>
                <h1>
                  Explore Our Wide Range of <br />
                  Services
                </h1>
              </div>
            </div>
          </div>
          <div className="banner-slider">
            <div className="row">
              <div className="service_list owl-carousel" ref={carouselRef}>
                {services.map((service, index) => (
                  <div className="col-lg-12" key={service.id}>
                    <ServiceCard service={service} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <ServiceCard service={service} key={service.id} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
