import { Link } from "react-router-dom";
import "./CollectionStyleTwo.css";

// Import images from public folder
import collectionThumb from "/assets/images/home_one/collection_thumb.png";
import collectionThumb2 from "/assets/images/home_one/collection_thumb2.png";
import collectionThumb3 from "/assets/images/home_one/collection_thumb3.png";
import collectionThumb4 from "/assets/images/home_one/collection_thumb4.png";

const CollectionStyleTwo = () => {
  return (
    <section className="collection_area style_two">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center">
              <h4>Our Collections</h4>
              <h1>
                See Our Printing Store Latest <br />
                Top Collections
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            {/* Feature Item */}
            <div className="collection_single_box">
              <div className="collection_img">
                <img src={collectionThumb} alt="collection" />
                <div className="collection_contents">
                  <div className="collection_icon_btn">
                    <Link to="/portfolio-details">
                      <i className="bi bi-plus"></i>
                    </Link>
                  </div>
                  <h3>
                    <Link to="/portfolio-details">Gent's Collections</Link>
                  </h3>
                  <p>Up to 30% OFF</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="collection_single_box upper">
                  <div className="collection_img">
                    <img src={collectionThumb2} alt="collection" />
                    <div className="collection_contents second">
                      <h3>
                        <Link to="/portfolio">Kid's Collections</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="collection_single_box upper">
                  <div className="collection_img">
                    <img src={collectionThumb3} alt="collection" />
                    <div className="collection_contents second">
                      <h3>
                        <Link to="/portfolio">Women's Collection</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection_single_box">
              <div className="collection_img">
                <img src={collectionThumb4} alt="collection" />
                <div className="collection_contents style_third">
                  <h3>
                    <Link to="/portfolio">New Collections</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionStyleTwo;
