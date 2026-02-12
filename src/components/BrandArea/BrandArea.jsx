import { useEffect } from "react";
import "./BrandArea.css";

// Import images from public folder
import b01 from "/assets/images/home_one/01.png";
import b02 from "/assets/images/home_one/02.png";
import b03 from "/assets/images/home_one/03.png";
import b04 from "/assets/images/home_one/04.png";
import b05 from "/assets/images/home_one/05.png";

const BrandArea = () => {
  const brands = [
    { id: 1, image: b01 },
    { id: 2, image: b02 },
    { id: 3, image: b03 },
    { id: 4, image: b04 },
    { id: 5, image: b05 },
  ];

  useEffect(() => {
    // Initialize owl carousel after component mounts
    if (window.jQuery) {
      window.jQuery(".brand_list").owlCarousel({
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
  }, []);

  return (
    <section className="brand_area">
      <div className="container">
        <div className="row">
          <div className="brand_container">
            <div className="brand_list owl-carousel">
              {brands.map((brand) => (
                <div className="col-lg-12" key={brand.id}>
                  <div className="single_brnd_item">
                    <img src={brand.image} alt={`brand ${brand.id}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandArea;
