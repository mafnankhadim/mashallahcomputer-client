import { Link } from "react-router-dom";

// Image imports
import sortProduct1Img from "/assets/images/inner-img/sort_porduct1.png";
import sortProduct2Img from "/assets/images/inner-img/sort_porduct2.png";
import sortProduct3Img from "/assets/images/inner-img/sort_porduct3.png";
import sortProduct4Img from "/assets/images/inner-img/sort_porduct4.png";
import img6 from "/assets/images/inner-img/img-6.jpg";
import img7 from "/assets/images/inner-img/img-7.jpg";
import img8 from "/assets/images/inner-img/img-8.jpg";

const Shop = () => {
  const categories = [
    { name: "Uncategories", count: 18, checked: true },
    { name: "Accessories", count: 12, checked: false },
    { name: "Washing Tools", count: 23, checked: false },
    { name: "Equipments", count: 15, checked: false },
  ];

  const popularProducts = [
    {
      id: 1,
      name: "Measure Tape",
      price: "£30.00",
      image: sortProduct1Img,
      rating: 5,
    },
    {
      id: 2,
      name: "Electric Drill Machine",
      price: "£15.00",
      image: sortProduct2Img,
      rating: 4,
    },
    {
      id: 3,
      name: "Electric Meter",
      price: "£45.00",
      image: sortProduct3Img,
      rating: 4,
    },
    {
      id: 4,
      name: "Electricity Clip",
      price: "£22.00",
      image: sortProduct4Img,
      rating: 4,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Electricity Clip",
      price: "£20.00",
      image: img6,
      sale: true,
    },
    {
      id: 2,
      name: "Electric Meter",
      price: "£45.00",
      image: img7,
      sale: false,
    },
    {
      id: 3,
      name: "Measure Tape",
      price: "£30.00",
      image: img8,
      sale: true,
    },
    {
      id: 4,
      name: "Electric Drill",
      price: "£55.00",
      image: img6,
      sale: false,
    },
    {
      id: 5,
      name: "Safety Helmet",
      price: "£35.00",
      image: img7,
      sale: true,
    },
    {
      id: 6,
      name: "Tool Kit",
      price: "£65.00",
      image: img8,
      sale: false,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <li key={i}>
            <i className="bi bi-star-fill"></i>
          </li>,
        );
      } else {
        stars.push(
          <li key={i}>
            <i className="bi bi-star"></i>
          </li>,
        );
      }
    }
    return stars;
  };

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Our Shop</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div className="shop-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 pr-0 pl-0">
              {/* Categories Widget */}
              <div className="widget-check-box">
                <div className="categories-title">
                  <h4>Categories</h4>
                </div>
                {categories.map((cat, index) => (
                  <label className="widget-check" key={index}>
                    {cat.name} <span>({cat.count})</span>
                    <input type="checkbox" defaultChecked={cat.checked} />
                    <span className="checkmark"></span>
                  </label>
                ))}
              </div>

              {/* Price Range Widget */}
              <div className="range-wrapper-box">
                <div className="categories-title">
                  <h4>Price Range</h4>
                </div>
                <div id="slider-range"></div>
                <div className="slider-labels">
                  <div className="caption">
                    <strong>Filter</strong>{" "}
                    <span id="slider-range-value1">$0</span>
                  </div>
                  <div className="text-right caption">
                    <span>-</span> <span id="slider-range-value2">$500</span>
                  </div>
                </div>
              </div>

              {/* Popular Products Widget */}
              <div className="product-categories-box">
                <div className="categories-title">
                  <h4>Popular Products</h4>
                </div>
                {popularProducts.map((product) => (
                  <div className="products-collection" key={product.id}>
                    <div className="product-thumb">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="products-content">
                      <div className="products-title">
                        <h6>{product.name}</h6>
                      </div>
                      <div className="product-price">
                        <span>{product.price}</span>
                      </div>
                      <div className="product-icon-list">
                        <ul>{renderStars(product.rating)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="row products">
                <div className="col-lg-6 col-md-6">
                  <div className="form_box">
                    <p className="form-text">Show on Page</p>
                    <select id="items" name="items">
                      <option value="10">10 items</option>
                      <option value="9">9 items</option>
                      <option value="8">8 items</option>
                      <option value="7">7 items</option>
                      <option value="6">6 items</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="widget_search upper">
                    <form action="#" method="get">
                      <input
                        type="text"
                        name="s"
                        placeholder="Search Here"
                        title="Search for:"
                      />
                      <button type="submit" className="icons">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {products.map((product) => (
                  <div className="col-lg-4 col-md-6" key={product.id}>
                    <div className="single-products-box">
                      <div className="products-thumb">
                        <img src={product.image} alt={product.name} />
                        {product.sale && (
                          <div className="product-sale">
                            <span>SALE</span>
                          </div>
                        )}
                        <div className="product-thumb-icon">
                          <Link to="/cart">
                            <i className="bi bi-cart3"></i>
                          </Link>
                          <Link to="/shop-details">
                            <i className="bi bi-suit-heart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-content">
                        <ul className="product-rating">
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-half"></i>
                          </li>
                        </ul>
                        <div className="product-title">
                          <h2>{product.name}</h2>
                        </div>
                        <div className="product-price">
                          <p>{product.price}</p>
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
    </>
  );
};

export default Shop;
