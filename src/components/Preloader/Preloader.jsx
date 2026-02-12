import { useState, useEffect, useRef } from "react";
import "./Preloader.css";

// Import logo
import logo from "/assets/images/logo.png";

const Preloader = ({ onComplete }) => {
  const [barWidth, setBarWidth] = useState(50);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const topBarRef = useRef(null);
  const downBarRef = useRef(null);

  useEffect(() => {
    let percentage = 0;

    const loadingCounter = setInterval(() => {
      if (percentage <= 100) {
        // Calculate bar width: starts at 50%, shrinks to 0% (same as HTML)
        const newWidth = (100 - percentage) / 2;
        setBarWidth(newWidth);
        percentage++;
      } else {
        // Fade out like jQuery fadeOut(500)
        setIsFadingOut(true);
        setTimeout(() => {
          setIsRemoved(true);
          if (onComplete) onComplete();
        }, 500);
        clearInterval(loadingCounter);
      }
    }, 10);

    return () => clearInterval(loadingCounter);
  }, [onComplete]);

  // Remove from DOM after fade out (like jQuery .remove())
  if (isRemoved) return null;

  return (
    <div
      className={`loading-screen ${isFadingOut ? "fade-out" : ""}`}
      id="loading-screen"
    >
      <span
        className="bar top-bar"
        ref={topBarRef}
        style={{ width: `${barWidth}%` }}
      ></span>
      <span
        className="bar down-bar"
        ref={downBarRef}
        style={{ width: `${barWidth}%` }}
      ></span>
      <div className="animation-preloader">
        <div className="logo-container">
          <div className="spinner-ring"></div>
          <img src={logo} alt="Mashallah Logo" className="preloader-logo" />
        </div>
        <div className="preloader-text">
          <h1 className="preloader-brand">MASHALLAH</h1>
          <p className="preloader-tagline">Computer's and Photo Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
