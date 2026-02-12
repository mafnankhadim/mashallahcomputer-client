import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PopularProducts.css";

// Import images from public folder
import tshirtImg from "/assets/images/home_one/tshirt_img.png";
import popularImg from "/assets/images/home_one/popular_img.png";

const PopularProducts = () => {
  const popularProducts = [
    {
      id: 1,
      image: tshirtImg,
      name: "Cotton Blue Hooddy",
      quality: "Premium Quality",
      price: "$50 - $100",
    },
    {
      id: 2,
      image: tshirtImg,
      name: "Cotton Blue Hooddy",
      quality: "Premium Quality",
      price: "$50 - $100",
    },
    {
      id: 3,
      image: tshirtImg,
      name: "Cotton Blue Hooddy",
      quality: "Premium Quality",
      price: "$50 - $100",
    },
    {
      id: 4,
      image: tshirtImg,
      name: "Cotton Blue Hooddy",
      quality: "Premium Quality",
      price: "$50 - $100",
    },
  ];

  useEffect(() => {
    // Initialize owl carousel after component mounts
    if (window.jQuery) {
      window.jQuery(".card_list").owlCarousel({
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
          992: { items: 1 },
        },
      });
    }
  }, []);

  return (
    <section className="popular_product">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="popular_thumb">
              <img src={popularImg} alt="popular product" />
              <div className="popular_product_btn">
                <div className="popular_btn printmax_btn">
                  <Link to="/shop-details">
                    Shop Now <span></span>
                  </Link>
                </div>
                <div className="popular_btn_arrow printmax_btn">
                  <Link to="/contact">
                    <i className="bi bi-chevron-double-right"></i> <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 pl-130">
            <div className="section_title pb-40">
              <h4>Popular Products</h4>
              <h1>
                Visit Our Popular Items <br />
                Premium Design
              </h1>
            </div>
            <div className="row">
              <div className="card_list owl-carousel">
                {popularProducts.map((product) => (
                  <div className="col-lg-12" key={product.id}>
                    <div className="popular_product_card">
                      <div className="popular_product_card_inner">
                        <div className="product_img">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="popular_content">
                          <h3>{product.name}</h3>
                          <p>{product.quality}</p>
                          <span className="dolar">{product.price}</span>
                          <div className="star_icon">
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                          </div>
                          <div className="card_all_btn">
                            <div className="card_btn printmax_btn">
                              <Link to="/shop-details">
                                Add to Card <span></span>
                              </Link>
                            </div>
                            <div className="card_icon">
                              <button className="product-action-btn product_btn">
                                <i className="far fa-heart"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
