import { Link } from "react-router-dom";
import "./CollectionArea.css";

// Import images from public folder
import collectionImg from "/assets/images/home_one/collection1.png";
import collectionImg2 from "/assets/images/home_one/collection002.png";
import collectionShp2 from "/assets/images/home_one/collection_shp2.png";
import services from "../../data/services";

const CollectionArea = () => {
  // Use central services list and split into two columns
  const iconFor = (title) => {
    const t = title.toLowerCase();
    if (t.includes("photocopy") || t.includes("photocopy")) return "fas fa-copy";
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
    if (t.includes("t-shirt") || t.includes("tshirt")) return "fas fa-tshirt";
    if (t.includes("graphic") || t.includes("design")) return "fas fa-palette";
    return "fas fa-concierge-bell";
  };

  // Categorize services properly
  const mobileServices = services.filter(s => {
    const title = s.title.toLowerCase();
    return title.includes('mobile') || 
           title.includes('phone') || 
           title.includes('computer') ||
           title.includes('online') ||
           title.includes('repair') ||
           title.includes('screen') ||
           title.includes('protector') ||
           title.includes('glass') ||
           title.includes('sale') ||
           title.includes('used') ||
           title.includes('battery') ||
           title.includes('charging') ||
           title.includes('backup') ||
           title.includes('data') ||
           title.includes('unlock') ||
           title.includes('sim') ||
           title.includes('network');
  });

  const printPhotoServices = services.filter(s => {
    const title = s.title.toLowerCase();
    return title.includes('photo') || 
           title.includes('print') || 
           title.includes('copy') ||
           title.includes('scan') ||
           title.includes('laminat') ||
           title.includes('mug') ||
           title.includes('t-shirt') ||
           title.includes('tshirt') ||
           title.includes('graphic') ||
           title.includes('design') ||
           title.includes('duplicate') ||
           title.includes('id');
  });

  return (
    <section className="collection_area" aria-labelledby="collection-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            {/* Mobile & Accessories */}
            <div className="collection_single_item">
              <div className="collection_content">
                <h3 id="collection-heading">Mobile Accessories & Online Services</h3>
                <p>
                  Complete mobile and computer solutions — quality accessories,
                  expert device repairs, and convenient online form filling services
                  to keep you connected and productive.
                </p>
                <ul className="collection_services">
                  {mobileServices.map((s) => (
                    <li key={s.id}>
                      <i className={iconFor(s.title)} aria-hidden="true"></i>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{s.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="collection_btn printmax_btn">
                  <Link
                    to="/shop"
                    aria-label="Shop mobile accessories"
                  >
                    <span></span>
                    Get Started{" "}
                    <i
                      className="flaticon flaticon-right-arrow"
                      aria-hidden="true"
                    ></i>
                    <span className="sr-only">Open mobile accessories</span>
                  </Link>
                </div>
              </div>
              <div className="collection_thumb">
                <img
                  src={collectionImg}
                  alt="mobile accessories showcase"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* Printing & Photography */}
            <div className="collection_single_item second">
              <div className="collection_content">
                <h3>Print & Photo Services</h3>
                <p>
                  Professional printing and creative solutions — from document
                  photocopying, color printing, scanning to custom mug and t-shirt
                  printing, ID duplication, photo studio, and graphic design services.
                </p>
                <ul className="collection_services">
                  {printPhotoServices.map((s) => (
                    <li key={s.id}>
                      <i className={iconFor(s.title)} aria-hidden="true"></i>
                      <div>
                        <strong>{s.title}</strong>
                        <span>{s.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="collection_btn printmax_btn">
                  <Link
                    to="/shop"
                    aria-label="Shop print and photo services"
                  >
                    <span></span>
                    Get Started
                    <i
                      className="flaticon flaticon-right-arrow"
                      aria-hidden="true"
                    ></i>
                    <span className="sr-only">
                      Open print and photo services
                    </span>
                  </Link>
                </div>
              </div>
              <div className="collection_thumb">
                <img
                  src={collectionImg2}
                  alt="cameras and computer accessories"
                  className="collection2"
                  loading="lazy"
                />
              </div>
              <div className="collection_shap">
                <img
                  src={collectionShp2}
                  alt="decorative collection shape"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionArea;
