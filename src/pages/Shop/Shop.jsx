import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Image imports
import img2 from "/assets/images/inner-img/img-2.jpg";
import img3 from "/assets/images/inner-img/img-3.jpg";
import img4 from "/assets/images/inner-img/img-4.jpg";
import img5 from "/assets/images/inner-img/img-5.jpg";
import img6 from "/assets/images/inner-img/img-6.jpg";
import img7 from "/assets/images/inner-img/img-7.jpg";
import img8 from "/assets/images/inner-img/img-8.jpg";
import img9 from "/assets/images/inner-img/img-9.jpg";
import img10 from "/assets/images/inner-img/img-10.jpg";
import product4Img from "/assets/images/home-two/product4.png";
import productImg from "/assets/images/home-two/product.png";
import product2Img from "/assets/images/home-two/product2.png";
import product3Img from "/assets/images/home-two/product3.png";
import logoImg from "/assets/images/logo3.png";

const ShopTwo = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const initialCategories = [
    { name: "Accessories", count: 0, checked: false },
    { name: "Batteries", count: 1, checked: false },
    { name: "Bluetooth", count: 8, checked: false },
    { name: "Cable", count: 8, checked: false },
    { name: "Case", count: 15, checked: false },
    { name: "Earphones", count: 11, checked: false },
    { name: "Screen", count: 6, checked: false },
    { name: "Daily Inspiration", count: 10, checked: false },
    { name: "Mobile", count: 5, checked: false },
    { name: "Other", count: 2, checked: false },
    { name: "Uncategorized", count: 1, checked: false },
  ];

  const [categoryOptions, setCategoryOptions] = useState(initialCategories);
  const categories = categoryOptions;

  // Handle sidebar state and body scroll
  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showFilters]);

  // Function to handle filter open
  const handleFilterOpen = () => {
    console.log('Opening filters');
    setShowFilters(true);
  };

  // Function to handle filter close
  const handleFilterClose = () => {
    console.log('Closing filters');
    setShowFilters(false);
  };

  const products = [
    {
      id: 1,
      name: "Electricity Clip",
      category: "Accessories",
      price: "£20.00",
      oldPrice: null,
      image: img2,
      sale: true,
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 2,
      name: "Measure Tape",
      category: "Batteries",
      price: "£30.00",
      oldPrice: "£40.00",
      image: img3,
      sale: false,
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 3,
      name: "Electric Drill Machine",
      category: "Bluetooth",
      price: "£50.00",
      oldPrice: null,
      image: img4,
      sale: true,
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 4,
      name: "Hand Tools Box",
      category: "Case",
      price: "£30.00",
      oldPrice: "£30.00",
      image: img5,
      sale: false,
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 5,
      name: "Voltage Tester",
      category: "Earphones",
      price: "£60.00 - £70.00",
      oldPrice: null,
      image: img6,
      sale: true,
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 6,
      name: "Electric Meter",
      category: "Screen",
      price: "£45.00",
      oldPrice: null,
      image: img7,
      sale: false,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 7,
      name: "Chainsaw Clipart",
      category: "Daily Inspiration",
      price: "£14.00",
      oldPrice: null,
      image: img8,
      sale: true,
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 8,
      name: "Smart Screwdriver",
      category: "Mobile",
      price: "£30.00",
      oldPrice: "£30.00",
      image: img9,
      sale: false,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 9,
      name: "Electric Saw",
      category: "Other",
      price: "£75.00",
      oldPrice: null,
      image: img10,
      sale: true,
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 10,
      name: "Strong Hammer",
      category: "Case",
      price: "£30.00",
      oldPrice: "£30.00",
      image: img6,
      sale: false,
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 11,
      name: "Drill Machine",
      category: "Uncategorized",
      price: "£45.00",
      oldPrice: null,
      image: img3,
      sale: true,
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
    {
      id: 12,
      name: "Yellow Hand Saw",
      category: "Accessories",
      price: "£20.00",
      oldPrice: null,
      image: img4,
      sale: true,
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam.",
    },
  ];

  const listProducts = [
    {
      id: 1,
      name: "Electricity Clip",
      category: "Accessories",
      price: "£20.00",
      oldPrice: "£40.00",
      image: product4Img,
      sale: true,
      rating: 4.5,
      reviews: "10+ Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien. Etiam non augue lacus. Nunc condimentum lacus a molestie vestibulum. In pharetra turpis ut blandit bibendum dictum felis sed lobortis.",
    },
    {
      id: 2,
      name: "Measure Tape",
      category: "Batteries",
      price: "£20.00",
      oldPrice: "£40.00",
      image: productImg,
      sale: false,
      rating: 3.5,
      reviews: "10+ Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien. Etiam non augue lacus. Nunc condimentum lacus a molestie vestibulum. In pharetra turpis ut blandit bibendum dictum felis sed lobortis.",
    },
    {
      id: 3,
      name: "Electric Drill Machine",
      category: "Bluetooth",
      price: "£20.00",
      oldPrice: "£40.00",
      image: product2Img,
      sale: true,
      rating: 4,
      reviews: "10+ Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien. Etiam non augue lacus. Nunc condimentum lacus a molestie vestibulum. In pharetra turpis ut blandit bibendum dictum felis sed lobortis.",
    },
    {
      id: 4,
      name: "Hand Tools Box",
      category: "Case",
      price: "£20.00",
      oldPrice: "£40.00",
      image: product3Img,
      sale: false,
      rating: 4.5,
      reviews: "10+ Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien. Etiam non augue lacus. Nunc condimentum lacus a molestie vestibulum. In pharetra turpis ut blandit bibendum dictum felis sed lobortis.",
    },
    {
      id: 5,
      name: "Voltage Tester",
      category: "Earphones",
      price: "£20.00",
      oldPrice: "£40.00",
      image: product4Img,
      sale: true,
      rating: 3,
      reviews: "10+ Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien. Etiam non augue lacus. Nunc condimentum lacus a molestie vestibulum. In pharetra turpis ut blandit bibendum dictum felis sed lobortis.",
    },
    {
      id: 6,
      category: "Screen",
      name: "Electric Meter",
      price: "£20.00",
      oldPrice: "£40.00",
      image: product3Img,
      sale: false,
      rating: 5,
      reviews: "10+ Reviews",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien. Etiam non augue lacus. Nunc condimentum lacus a molestie vestibulum. In pharetra turpis ut blandit bibendum dictum felis sed lobortis.",
    },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    const checked = categoryOptions.filter((c) => c.checked).map((c) => c.name);
    const matchesCategory = checked.length ? checked.includes(p.category) : true;
    return matchesSearch && matchesCategory;
  });

  const filteredListProducts = listProducts.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    const checked = categoryOptions.filter((c) => c.checked).map((c) => c.name);
    const matchesCategory = checked.length ? checked.includes(p.category) : true;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <li key={i}>
          <i className="bi bi-star-fill"></i>
        </li>,
      );
    }
    if (hasHalf) {
      stars.push(
        <li key="half">
          <i className="bi bi-star-half"></i>
        </li>,
      );
    }
    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <li key={`empty-${i}`}>
          <i className="bi bi-star"></i>
        </li>,
      );
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
                  <h4>Shop Two</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Shop Two</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Filter Overlay */}
       <div
        className={`xs-sidebar-group info-group shop-filter-sidebar style_two ${showFilters ? "isActive" : ""}`}
        data-debug-state={showFilters ? "open" : "closed"}
        data-react-sidebar="true"
      >
        <div
          className="xs-overlay xs-bg-black"
          onClick={() => handleFilterClose()}
        ></div>
        <div className="xs-sidebar-widget style_two">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a
                href="#"
                className="close-side-widget"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClose();
                }}
              >
                <i className="far fa-times-circle"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  {/* Logo */}
                  <div className="nav-logo">
                    <Link className="logo-wrapper" to="/">
                      <img src={logoImg} alt="logo" className="logo-img" />
                      <div className="logo-text">
                        <span className="brand-name text-black">MASHALLAH Computer's</span>
                        <span className="brand-tagline">Photo Studio & Mobile Zone</span>
                      </div>
                    </Link>
                  </div>

                  {/* Search Widget */}
                  <div className="widget-wrapper">
                    <div className="widget-search">
                      <div className="widget">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            // run search (searchQuery is already bound) then close sidebar
                            handleFilterClose();
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="text"
                            name="s"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search Product"
                            title="Search for:"
                          />
                          <button type="submit" className="icon">
                            <i className="bi bi-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* Product Categories */}
                  <div className="product-category">
                    <h3 className="widget-title">Product Categories</h3>
                    <div className="widget-check-box">
                      {categories.map((cat, index) => (
                        <label className="widget-check" key={index} onClick={(e) => e.stopPropagation()}>
                          {cat.name} <span>({cat.count})</span>
                          <input
                            type="checkbox"
                            checked={cat.checked}
                            onChange={(e) => {
                              const newCats = [...categoryOptions];
                              newCats[index] = { ...newCats[index], checked: e.target.checked };
                              setCategoryOptions(newCats);
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Shop Section */}
      <div className="shops-section">
        <div className="container">
          <div className="row products">
            <div className="col-lg-12">
              {/* Tab */}
              <div className="tab">
                <div className="nav-btn">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Filter button clicked, current showFilters:', showFilters);
                      handleFilterOpen();
                    }}
                  >
                    <i className="fas fa-align-left"></i> Show filters
                  </a>
                </div>

                <ul className="tabs">
                  <li className={viewMode === "grid" ? "active" : ""}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setViewMode(viewMode === "grid" ? "list" : "grid");
                      }}
                    >
                      {viewMode === "grid" ? (
                        <i className="bi bi-text-left"></i>
                      ) : (
                        <i className="bi bi-x-diamond"></i>
                      )}
                    </a>
                  </li>
                </ul>

                <div className="tab_content">
                  {/* Grid View */}
                  {viewMode === "grid" && (
                    <div className="tabs_item">
                      <div className="row">
                        {filteredProducts.map((product) => (
                          <div className="col-lg-3 col-md-6" key={product.id}>
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
                                  {renderStars(product.rating)}
                                </ul>
                                <div className="product-title">
                                  <h2>{product.name}</h2>
                                </div>
                                <div className="product-price">
                                  <p>
                                    {product.price}
                                    {product.oldPrice && (
                                      <span> {product.oldPrice}</span>
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* List View */}
                  {viewMode === "list" && (
                    <div className="tabs_item">
                      <div className="row">
                        {filteredListProducts.map((product) => (
                          <div className="col-lg-12" key={product.id}>
                            <div className="single-products-box2">
                              <div className="products-thumb">
                                <img src={product.image} alt={product.name} />
                                {product.sale && (
                                  <div className="product-sale">
                                    <span>SALE</span>
                                  </div>
                                )}
                              </div>
                              <div className="product-content2">
                                <div className="product-title">
                                  <h2>{product.name}</h2>
                                </div>
                                <div className="product-price">
                                  <p>
                                    {product.price}{" "}
                                    <span>{product.oldPrice}</span>
                                  </p>
                                </div>
                                <ul className="product-rating">
                                  {renderStars(product.rating)}
                                  <li className="category-text">
                                    {product.rating}({product.reviews})
                                  </li>
                                </ul>
                                <p className="description">
                                  {product.description}
                                </p>
                                <div className="product-thumb-icon2">
                                  <Link to="/shop-details">
                                    <i className="bi bi-cart3"></i>
                                  </Link>
                                  <Link to="/shop-details">
                                    <i className="bi bi-suit-heart"></i>
                                  </Link>
                                  <Link to="/shop-details">
                                    <i className="bi bi-handbag"></i>
                                  </Link>
                                  <Link to="/shop-details">
                                    <i className="bi bi-search"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopTwo;
