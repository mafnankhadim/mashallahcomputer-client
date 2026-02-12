import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// Import images
import logo from "/assets/images/logo3.png";
import productImg1 from "/assets/images/home_one/product_img1.png";
import collection1 from "/assets/images/home_one/collection1.jpg";
import collection2 from "/assets/images/home_one/collection2.jpg";
import collection3 from "/assets/images/home_one/collection3.jpg";
import collection4 from "/assets/images/home_one/collection4.jpg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.jQuery?.fn?.meanmenu) {
      // Only initialize if not already initialized
      if (!window.jQuery(".mobile-menu .mean-bar").length) {
        window.jQuery(".mobile-menu nav").meanmenu({
          meanScreenWidth: "991",
          meanMenuContainer: ".mobile-menu",
          meanMenuOpen: "<span></span> <span></span> <span></span>",
          onePage: false,
        });
      }
    }
  }, []);

  const menuItems = [
    { title: "Home", link: "/", hasSubmenu: false },
    { title: "About", link: "/about", hasSubmenu: false },
    { title: "Services", link: "/service", hasSubmenu: false },
    { title: "Products", link: "/shop", hasSubmenu: false },
    { title: "Jobs", link: "/job", hasSubmenu: false },
    // {
    //   title: "Page",
    //   hasSubmenu: true,
    //   submenu: [
    //     { title: "About Us", link: "/about" },
    //     { title: "Our Service", link: "/service" },
    //     { title: "Service Details", link: "/service-details" },
    //     { title: "Our Team", link: "/team" },
    //     { title: "Portfolio", link: "/portfolio" },
    //     { title: "Portfolio Details", link: "/portfolio-details" },
    //     { title: "Checkout", link: "/checkout" },
    //     { title: "Cart", link: "/cart" },
    //     { title: "Contact", link: "/contact" },
    //   ],
    // },
    // {
    //   title: "Shop",
    //   hasSubmenu: true,
    //   submenu: [
    //     { title: "Shop", link: "/shop" },
    //     { title: "Shop Two", link: "/shop-two" },
    //     { title: "Shop Details", link: "/shop-details" },
    //   ],
    // },
    // {
    //   title: "Blog",
    //   hasSubmenu: true,
    //   submenu: [
    //     { title: "Blog", link: "/blog" },
    //     { title: "Blog Details", link: "/blog-details" },
    //   ],
    // },
    { title: "Contact", link: "/contact", hasSubmenu: false },
  ];

  const cartItems = [
    {
      id: 1,
      image: collection1,
      title: "Rorem ipsum dolor sit amet, sectetur adipisi cingey.",
      price: "$19.00",
    },
    {
      id: 2,
      image: collection2,
      title: "Rorem ipsum dolor sit amet, sectetur adipisi cingey.",
      price: "$19.00",
    },
    {
      id: 3,
      image: collection3,
      title: "Rorem ipsum dolor sit amet, sectetur adipisi cingey.",
      price: "$19.00",
    },
    {
      id: 4,
      image: collection4,
      title: "Rorem ipsum dolor sit amet, sectetur adipisi cingey.",
      price: "$19.00",
    },
  ];

  return (
    <>

     <section className="topber_area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="topber_right_social">
                <h4 className="topber_follow">FOLLOW US :</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="top-social-icon-left" href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="top_print_text">
                <p>Limited Time Offer: 10% OFF on all services & accessories — Visit now!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-address-info">
                <p>
                  <i className="bi bi-telephone-fill"></i>
                  <span>+92 345 4140830</span>
                  <i className="bi bi-envelope"></i>
                  <span>ameer.ottoman@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Desktop Header */}
      <div
        className={`printmax-header-area upper ${isSticky ? "sticky_nav" : ""}`}
        id="sticky-header"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 pt-10">
              <div className="header-logo">
                <Link className="logo-wrapper" to="/">
                  <img src={logo} alt="logo" className="logo-img" />
                  <div className="logo-text">
                    <span className="brand-name">MASHALLAH Computer's</span>
                    <span className="brand-tagline">
                      Photo Studio & Mobile Zone
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="header-menu">
                <ul className="nav_scroll">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link || "/"}>
                        {item.title}
                        {item.hasSubmenu && (
                          <span>
                            <i className="bi bi-chevron-double-right"></i>
                          </span>
                        )}
                      </Link>
                      {item.hasSubmenu && (
                        <ul className="sub_menu">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subItem.link}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="header_right">
                  <button
                    className="cart_btn headers-button"
                    type="button"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <i className="bi bi-cart3"></i>
                    <small className="cart_counter">0</small>
                  </button>
                  {/* <div className="header-button printmax_btn">
                    <Link to="/contact">
                      Get Started <i className="bi bi-chevron-double-right"></i>
                      <span></span>
                    </Link>
                  </div> */}
                  <div className="sidebar-btn">
                    <div
                      className="nav-btn navSidebar-button"
                      data-target=".header-info-sidebar"
                      onClick={() => setIsSidebarOpen(true)}
                    >
                      <span>
                        <i className="bi bi-text-left"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu">
          <div className="mobile-logo">
            <Link className="logo-wrapper" to="/">
              <img src={logo} alt="logo" className="logo-img" />
              <div className="logo-text">
                <span className="brand-name">MASHALLAH Computer's</span>
                <span className="brand-tagline">
                  Photo Studio & Mobile Zone
                </span>
              </div>
            </Link>
          </div>
          <nav className="header-menu">
            <ul className="nav_scroll">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link || "/"}>{item.title}</Link>
                  {item.hasSubmenu && (
                    <ul className="sub_menu">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.link}>{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar Info */}
      <div
        className={`xs-sidebar-group info-group header-info-sidebar ${isSidebarOpen ? "isActive" : ""}`}
      >
        <div
          className="xs-overlay xs-bg-black"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a
                href="#"
                className="close-side-widget"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="far fa-times-circle"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="nav-logo">
                    <Link className="logo-wrapper" to="/">
                      <img src={logo} alt="logo" className="logo-img" />
                      <div className="logo-text">
                        <span className="brand-name">MASHALLAH Computer's</span>
                        <span className="brand-tagline">
                          Photo Studio & Mobile Zone
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="row padding-two">
                    <div className="col-lg-12">
                      <div className="content-thumb-box">
                        <img src={productImg1} alt="product" />
                      </div>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                        <li>
                          <i className="bi bi-geo-alt"></i>Khatam-E-Nabuwat Chowk Main Bazzar Dudhu Chak
                        </li>
                        <li>
                          <i className="bi bi-telephone-outbound"></i>+92 342 6024 404<br /> <i className="bi bi-telephone-outbound"></i>+92 345 4140 830
                        </li>
                        <li>
                          <i className="bi bi-envelope"></i>ameer.ottoman@gmail.com
                        </li>
                        <li>
                          <i className="bi bi-clock"></i>Business hours: Monday–Sunday, 8:00 AM to 9:00 PM. 
                        </li>
                    </ul>
                  </div>
                  <ul className="social-box">
                    <li className="facebook">
                      <a href="#" className="fab fa-facebook-f"></a>
                    </li>
                    <li className="twitter">
                      <a href="#" className="fab fa-instagram"></a>
                    </li>
                    <li className="linkedin">
                      <a href="#" className="fa-brands fa-x-twitter"></a>
                    </li>
                    <li className="instagram">
                      <a href="#" className="fab fa-pinterest-p"></a>
                    </li>
                    <li className="youtube">
                      <a href="#" className="fab fa-linkedin-in"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className={`sidebar-menu-wrapper ${isCartOpen ? "isActive" : ""}`}>
        <div className="cart_sidebar">
          <button
            type="button"
            className="close_btn"
            onClick={() => setIsCartOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="cart_items_list">
            <div className="coming-soon-message" style={{ textAlign: 'center', padding: '40px 20px', fontSize: '18px', fontWeight: '600', color: '#666' }}>
              <p style={{ margin: '0 0 10px 0' }}>Coming Soon</p>
              <p style={{ fontSize: '14px', fontWeight: '400', color: '#999', margin: '0' }}>This feature is currently under development.</p>
            </div>
          </div>
        </div>
        <div
          className="cart_sidebar_overlay"
          onClick={() => setIsCartOpen(false)}
        ></div>
      </div>

      {/* WhatsApp Button and Scroll Up will be added at App level */}
    </>
  );
};

export default Header;
