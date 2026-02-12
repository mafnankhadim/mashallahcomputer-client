import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="nf-simple-area">
      <div className="nf-simple-container">
        <div className="nf-simple-card">
          <div className="nf-simple-404">404</div>
          <h2 className="nf-simple-title">Page not found</h2>
          <p className="nf-simple-desc">
            We can't find the page you were looking for.
          </p>
          <div className="header-button printmax_btn">
            <Link to="/">
              Go to home page <i className="bi bi-chevron-double-right"></i>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
