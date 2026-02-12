import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

// Import images from public folder using absolute paths
import heroShpe1 from "/assets/images/home_one/hero_shpe1.png";
import shape2 from "/assets/images/home_one/shape2.png";
import bannerDote from "/assets/images/home_one/banner_dote.png";
import settingIcon from "/assets/images/home_one/setting_icon.png";
import rotateImg from "/assets/images/home_one/rotate.png";
import headphonesImg from "/assets/images/home_one/headphones.png";
import laptopImg from "/assets/images/home_one/laptop.png";
import iphoneImg from "/assets/images/home_one/iphone_14.png";
import cameraImg from "/assets/images/home_one/camera.png";
import printerImg from "/assets/images/home_one/printer.png";
import cameraLensImg from "/assets/images/home_one/cameralens.png";

const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      image: iphoneImg,
      category: "Mobile Devices",
      title: "Latest Smartphones & Accessories",
      desc: "Shop the newest smartphones, protective cases, fast chargers, and certified screen protectors.",
      price: "Rs. 199",
    },
    {
      id: 2,
      image: headphonesImg,
      category: "Audio & Accessories",
      title: "Wireless Earbuds & Headphones",
      desc: "Noise-cancelling earbuds, over-ear headphones, and compact Bluetooth speakers for clear, powerful sound on the go.",
      price: "Rs. 49",
    },
    {
      id: 3,
      image: laptopImg,
      category: "Computers",
      title: "Laptops & Workstations",
      desc: "Lightweight ultrabooks, gaming laptops, and business workstations with the latest processors and long battery life.",
      price: "Rs. 499",
    },
    {
      id: 4,
      image: cameraImg,
      category: "Cameras",
      title: "Mirrorless & DSLR Cameras",
      desc: "High-resolution mirrorless and DSLR cameras for hobbyists and professionals, plus starter bundles and kits.",
      price: "Rs. 349",
    },
    {
      id: 5,
      image: cameraLensImg,
      category: "Photography Lenses",
      title: "Professional Camera Lenses",
      desc: "Prime, zoom and macro lenses from top brands — ideal for portraits, landscapes, and studio work.",
      price: "Rs. 199",
    },
    {
      id: 6,
      image: printerImg,
      category: "Office Equipment",
      title: "Printers & Photo Printers",
      desc: "Compact photo printers, ink and premium paper for studio-quality prints at home or in the studio.",
      price: "Rs. 79",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero_area d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            {/* Hero Content */}
            <div className="hero_content">
              {/* Dynamic Content */}
              <div
                key={current}
                className="animate__animated animate__fadeInLeft"
              >
                <h4>{sliderData[current].category}</h4>
                <h1>{sliderData[current].title}</h1>
                <p>{sliderData[current].desc}</p>
              </div>

              {/* Slider Button */}
              <div className="slider_button">
                <div className="banner_btn printmax_btn">
                  <Link to="/shop" aria-label="Shop now">
                    Get Started{" "}
                    <i className="flaticon flaticon-right-arrow"></i>
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-thumb">
              <div className="carousel">
                {sliderData.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`carousel-slide${idx === current ? " active" : ""}`}
                  >
                    <img src={slide.image} alt={slide.title} />
                  </div>
                ))}
              </div>

              <div className="hero_container_shape2 bounce-animate2">
                <img src={shape2} alt="shape" />
              </div>
              <div className="hero_container_shape3 bounce-animate4">
                <img src={heroShpe1} alt="shape" />
              </div>
              <div className="hero_container_shape4 bounce-animate-3">
                <img src={bannerDote} alt="dots" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_container">
        <div className="hero_cotaner_social">
          <div className="hero_follow">
            <h3>Follow Us</h3>
          </div>
          <div className="hero_social">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hero_rotate rotate">
        <img src={rotateImg} alt="rotate" />
      </div>
    </section>
  );
};

export default HeroSection;
