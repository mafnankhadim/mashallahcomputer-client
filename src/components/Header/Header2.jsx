import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header2.css";

// Import images
import logo from "/assets/images/logo.png";
import logo2 from "/assets/images/logo2.png";
import productImg1 from "/assets/images/home_one/product_img1.png";
import productImg2 from "/assets/images/home_one/product_img2.png";
import productImg3 from "/assets/images/home_one/product_img3.png";
import productImg4 from "/assets/images/home_one/product_img4.png";
import collection1 from "/assets/images/home_one/collection1.jpg";
import collection2 from "/assets/images/home_one/collection2.jpg";
import collection3 from "/assets/images/home_one/collection3.jpg";
import collection4 from "/assets/images/home_one/collection4.jpg";

const Header2 = () => {
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
    {
      title: "Page",
      hasSubmenu: true,
      submenu: [
        { title: "About Us", link: "/about" },
        { title: "Our Service", link: "/service" },
        { title: "Service Details", link: "/service-details" },
        { title: "Our Team", link: "/team" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Portfolio Details", link: "/portfolio-details" },
        { title: "Checkout", link: "/checkout" },
        { title: "Cart", link: "/cart" },
        { title: "Contact", link: "/contact" },
      ],
    },
    {
      title: "Shop",
      hasSubmenu: true,
      submenu: [
        { title: "Shop", link: "/shop" },
        { title: "Shop Two", link: "/shop-two" },
        { title: "Shop Details", link: "/shop-details" },
      ],
    },
    {
      title: "Blog",
      hasSubmenu: true,
      submenu: [
        { title: "Blog", link: "/blog" },
        { title: "Blog Details", link: "/blog-details" },
      ],
    },
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
      {/* Topbar Area */}
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
                <p>The Best Printing Agency in California, USA</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-address-info">
                <p>
                  <i className="bi bi-headset-vr"></i>
                  <span>+123 (4567) 890</span>
                  <i className="bi bi-telephone-fill"></i>
                  <span>example@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Header - Style Two (Center Logo) */}
      <div
        className={`printmax-header-area style_two ${isSticky ? "sticky_nav" : ""}`}
        id="sticky-header"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="header-menu">
                <ul className="nav_scroll">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link || "#"}>
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
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header-logo">
                <Link className="logo-wrapper" to="/">
                  <img src={logo} alt="logo" className="logo-img" />
                  {/* <div className="logo-text">
                    <span className="brand-name">MASHALLAH</span>
                    <span className="brand-tagline">
                      Computer's and Photo Studio
                    </span>
                  </div> */}
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="header_right style_two">
                <div className="search-containers">
                  <form action="#">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <button
                  className="cart_btn headers-button"
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                >
                  <i className="bi bi-cart3"></i>
                  <small className="cart_counter">0</small>
                </button>
                <div className="header-button printmax_btn">
                  <Link to="/contact">
                    Get Started <i className="bi bi-chevron-double-right"></i>
                    <span></span>
                  </Link>
                </div>
                <div className="sidebar-btn">
                  <div
                    className="nav-btn navSidebar-button"
                    data-target=".header-info-sidebar"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                    <span>
                      <i className="bi bi-grid-3x3-gap"></i>
                    </span>
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
                <span className="brand-name">MASHALLAH</span>
                <span className="brand-tagline">
                  Computer's and Photo Studio
                </span>
              </div>
            </Link>
          </div>
          <nav className="header-menu">
            <ul className="nav_scroll">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link || "#"}>{item.title}</Link>
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsSidebarOpen(false);
                }}
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
                        <span className="brand-name">MASHALLAH</span>
                        <span className="brand-tagline">
                          Computer's and Photo Studio
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="row padding-two">
                    <div className="col-lg-6">
                      <div className="content-thumb-box">
                        <img src={productImg1} alt="product" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content-thumb-box">
                        <img src={productImg2} alt="product" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content-thumb-box">
                        <img src={productImg3} alt="product" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content-thumb-box">
                        <img src={productImg4} alt="product" />
                      </div>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <i className="bi bi-envelope"></i>Chicago 12, Melborne
                        City, USA
                      </li>
                      <li>
                        <i className="bi bi-envelope"></i>(+001) 123-456-7890
                      </li>
                      <li>
                        <i className="bi bi-envelope"></i>Example.com
                      </li>
                      <li>
                        <i className="bi bi-envelope"></i>Week Days: 09.00 to
                        18.00 Sunday: Closed
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
      <div className={`sidebar-menu-wrapper ${isCartOpen ? "active" : ""}`}>
        <div className="cart_sidebar">
          <button
            type="button"
            className="close_btn"
            onClick={() => setIsCartOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <h2 className="heading_title text-uppercase">
            Cart Items - <span>{cartItems.length}</span>
          </h2>

          <div className="cart_items_list">
            {cartItems.map((item) => (
              <div className="cart_item" key={item.id}>
                <div className="item_image">
                  <img src={item.image} alt="" />
                </div>
                <div className="item_content">
                  <h4 className="item_title">{item.title}</h4>
                  <span className="item_price">{item.price}</span>
                  <button type="button" className="remove_btn">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="total_price text-uppercase">
            <span>Sub Total:</span>
            <span>$76.00</span>
          </div>
          <ul className="btns_group ul_li">
            <li>
              <Link to="/cart" className="btn btn_primary text-uppercase">
                View Cart
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="btn btn_border border_black text-uppercase"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="cart_sidebar_overlay"
          onClick={() => setIsCartOpen(false)}
        ></div>
      </div>
    </>
  );
};

export default Header2;
