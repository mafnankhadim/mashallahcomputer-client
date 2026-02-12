import { useState, useEffect } from "react";
// no routing links needed for in-store-only message
import "./CountdownArea.css";

// Import images from public folder
import countdownImg from "/assets/images/home_one/countdown_img.png";
import countdownImg2 from "/assets/images/home_one/countdown_img2.png";
import countdownShape from "/assets/images/home_one/countdown_shape.png";

const CountdownArea = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 20,
    seconds: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown_area student_discount">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12">
            <div className="countdown_thumbs">
              {/* <img src={countdownImg} alt="countdown" /> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="Countdown_content text-center">
              <div className="section_title">
                <h4>Students Only</h4>
              </div>
              <h2>Student Discount  <br /> — Extra 30% OFF</h2>
              <p className="student_note">
                Students are eligible for an exclusive 30% discount on our services. Simply verify your student status to enjoy quality solutions at a reduced price.
              </p>
              <div className="countdown_item" id="clockdiv">
                <div className="countdown_number">
                  <span className="days">{timeLeft.days}</span>{" "}
                  <strong>:</strong>
                </div>
                <div className="countdown_number">
                  <span className="hours">{timeLeft.hours}</span>
                  <strong>:</strong>
                </div>
                <div className="countdown_number">
                  <span className="minutes">{timeLeft.minutes}</span>
                  <strong>:</strong>
                </div>
                <div className="countdown_number">
                  <span className="seconds">{timeLeft.seconds}</span>
                </div>
              </div>
              {/* In-store offer only — no online booking or shop links */}
              <div className="countdown_shape rotate">
                <img src={countdownShape} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="countdown_thumb">
              {/* <img src={countdownImg2} alt="countdown" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownArea;
