import "./MarqueeArea.css";

// Import images from public folder
import marqueeImg from "/assets/images/home_one/marquee_img.png";
import services from "../../data/services";

const MarqueeArea = () => {
  // use titles from central services list
  const titles = services.map((s) => s.title);

  return (
    <div className="marquee_area">
      <div className="marquee_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="marquee">
                <div className="marquee-block">
                  {titles.map((item, index) => (
                    <h3 key={index}>
                      <span>
                        <img src={marqueeImg} className="rotates" alt="icon" />
                      </span>
                      {item}
                    </h3>
                  ))}
                </div>
                <div className="marquee-block">
                  {titles.map((item, index) => (
                    <h3 key={`repeat-${index}`}>
                      <span>
                        <img src={marqueeImg} className="rotates" alt="icon" />
                      </span>
                      {item}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeArea;
