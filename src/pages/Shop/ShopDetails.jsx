import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Image imports
import productImg1 from "/assets/images/home_one/product_img1.png";
import productImg2 from "/assets/images/home_one/product_img2.png";
import productImg3 from "/assets/images/home_one/product_img3.png";
import productImg4 from "/assets/images/home_one/product_img4.png";
import collection1Img from "/assets/images/home_one/collection1.jpg";
import collection2Img from "/assets/images/home_one/collection2.jpg";
import collection3Img from "/assets/images/home_one/collection3.jpg";
import collection4Img from "/assets/images/home_one/collection4.jpg";

const ShopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const productImages = [productImg1, productImg2, productImg3, productImg4];

  const thumbnails = [
    collection1Img,
    collection2Img,
    collection3Img,
    collection4Img,
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Initialize owl carousel for product slider
    if (window.$) {
      const $ = window.$;
      // Product slider initialization
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
                  <h4>Shop Details</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Shop Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Details Section */}
      <div className="shop-detials">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="product-image-gallery">
                <div className="main-image">
                  <img src={productImages[selectedImage]} alt="Product" />
                </div>
                <div className="thumbnail-images">
                  {thumbnails.map((thumb, index) => (
                    <div
                      className={`thumb-item ${selectedImage === index ? "active" : ""}`}
                      key={index}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="shop-dtls-info">
                <div className="category-title">
                  <h2>Measure Tape</h2>
                </div>
                <div className="category-icon-list">
                  <ul>
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
                      <i className="bi bi-star"></i>
                    </li>
                    <li className="category-text">4.5(10+ Reviews)</li>
                  </ul>
                </div>
                <div className="category-price">
                  <h1>
                    £150.98 <span>£190.00</span>
                  </h1>
                </div>
                <div className="category-description">
                  <p>
                    Dramatically reinvent adaptive bandwidth vis reliable
                    infrastructures to progressively iterate distributed
                    interfaces for client-based. Intrinsicly are plagiarize
                    one-to-one value after adaptive initiatives via equity
                    invested manufactured products convergence.
                  </p>
                </div>
                <div className="category-color">
                  <p>
                    Colors <span>Black & Yellow</span>
                  </p>
                </div>
                <div className="category-count-button">
                  <div className="quantity">
                    <div className="cart-plus-minus">
                      <input
                        className="cart-plus-minus-box"
                        value={quantity}
                        type="text"
                        readOnly
                      />
                      <div
                        className="dec ctnbutton"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </div>
                      <div
                        className="inc ctnbutton"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="category-button">
                    <Link to="/cart">
                      Add to Cart <i className="bi bi-cart3"></i>
                    </Link>
                  </div>
                </div>
                <table className="category-table">
                  <tbody>
                    <tr>
                      <td className="table-title">SKU</td>
                      <td className="table-text">Carburetors</td>
                    </tr>
                    <tr>
                      <td className="table-title">Categories</td>
                      <td className="table-text">Decoration, Documents</td>
                    </tr>
                    <tr>
                      <td className="table-title">Tags</td>
                      <td className="table-text">
                        Calendar, Cup, Invitation, Magazine
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="row">
            <div className="col-lg-12">
              <div className="appoinment-tab">
                <div className="tab">
                  <ul className="tabs">
                    <li
                      className={activeTab === 0 ? "active" : ""}
                      onClick={() => setActiveTab(0)}
                    >
                      <a href="#!">Description</a>
                    </li>
                    <li
                      className={activeTab === 1 ? "active" : ""}
                      onClick={() => setActiveTab(1)}
                    >
                      <a href="#!">Additional Info</a>
                    </li>
                    <li
                      className={activeTab === 2 ? "active" : ""}
                      onClick={() => setActiveTab(2)}
                    >
                      <a href="#!">Review (2)</a>
                    </li>
                  </ul>
                  <div className="tab_content">
                    {activeTab === 0 && (
                      <div className="tabs_item">
                        <div className="post-comment-description">
                          <p>
                            Leverage existing competitive e-tailers for
                            clicks-and-mortar materials. Continually pursue
                            long-term high-impact innovation vis-a-vis low
                            high-yield markets. Efficiently incentiv superior
                            infrastructures without future-proof communities.
                            Credibly whiteboard transparent resources before
                            distinctive alignments.
                          </p>
                          <p className="pt-2">
                            Meta-services whereas standardized niches. Globally
                            incentivize effective e-markets via intuitive
                            architectures. Compellingly facilitate
                            next-generation experiences vis-a-vis business core
                            are in competencies.
                          </p>
                        </div>
                      </div>
                    )}
                    {activeTab === 1 && (
                      <div className="tabs_item">
                        <table className="tab-items-table">
                          <tbody>
                            <tr>
                              <td>Weight</td>
                              <td>2.5 kg</td>
                            </tr>
                            <tr>
                              <td>Dimensions</td>
                              <td>10 x 10 x 15 cm</td>
                            </tr>
                            <tr>
                              <td>Material</td>
                              <td>Stainless Steel</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <div className="tabs_item">
                        <div className="review-section">
                          <p>Great product! Highly recommended.</p>
                          <p>Excellent quality and fast delivery.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
