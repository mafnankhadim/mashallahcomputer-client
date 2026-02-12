import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProductSection.css";

// Import images from public folder
import productImg1 from "/assets/images/home_one/product_img1.png";
import productImg2 from "/assets/images/home_one/product_img2.png";
import productImg3 from "/assets/images/home_one/product_img3.png";
import productImg4 from "/assets/images/home_one/product_img4.png";

// Small presentational product card used for both carousel and grid
const ProductCard = ({ product }) => {
  return (
    <article className="product_single_item">
      <div className="product-box-thumb">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-icon">
          <ul>
            <li>
              <button
                className="product-action-btn cartConfirm"
                data-tooltip-text="Add to Wishlist"
                aria-label={`Add ${product.name} to wishlist`}
              >
                <i className="far fa-heart" />
              </button>
            </li>
            <li>
              <button
                className="product-action-btn product_btn"
                aria-label={`Add ${product.name} to cart`}
              >
                <i className="bi bi-cart3" />
              </button>
            </li>
            <li>
              <button
                className="product-action-btn cartConfirm"
                data-tooltip-text="Compare"
                aria-label={`Compare ${product.name}`}
              >
                <i className="bi bi-arrow-left-right" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="product_contnet">
        <h6>{product.name}</h6>
        <p>{product.price}</p>
      </div>
    </article>
  );
};

const ProductSection = () => {
  const products = [
    {
      id: 1,
      image: productImg1,
      name: "Cotton Blue Hooddy",
      // price: "$ 59.00",
    },
    {
      id: 2,
      image: productImg2,
      name: "Product Package",
      // price: "$ 39.50",
    },
    {
      id: 3,
      image: productImg4,
      name: "Coffe and Tea Cup",
      // price: "$ 39.00",
    },
    {
      id: 4,
      image: productImg3,
      name: "Book Cover & Flyer",
      // price: "$ 39.00",
    },
    {
      id: 5,
      image: productImg2,
      name: "Paper Milk Container",
      // price: "$ 39.20",
    },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize owl carousel after component mounts and clean up on unmount
    const $ = window.jQuery;
    const selector = carouselRef.current;
    if ($ && selector && $.fn && $.fn.owlCarousel) {
      const $el = $(selector);

      // prevent double-init
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
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
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
        } catch (err) {
          // ignore cleanup errors
        }
      };
    }
    return undefined;
  }, []);

  return (
    <section className="product-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center">
              <h4>New Arraival</h4>
              <h1>
                Arrivale New Products <br />
                See Our Store
              </h1>
            </div>
          </div>
        </div>
        <div className="banner-slider">
          <div className="row">
            <div className="product_list owl-carousel" ref={carouselRef}>
              {products.map((product) => (
                <div className="col-lg-12" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Grid layout for large screens - visible only on large viewports */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {/* Show All Products button (visible under carousel on small screens and under grid on large screens) */}
        <div className="section_all_btn">
          <div className="printmax_btn">
            <Link to="/shop">
              Show All Products{" "}
              <i className="flaticon flaticon-right-arrow"></i>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
