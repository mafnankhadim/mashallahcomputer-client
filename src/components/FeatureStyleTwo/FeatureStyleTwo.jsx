import "./FeatureStyleTwo.css";

// Import images from public folder
import featureIcon2 from "/assets/images/home_one/feature_icon2.png";
import featureIcon3 from "/assets/images/home_one/feature_icon3.png";
import featureIcon4 from "/assets/images/home_one/feature_icon4.png";
import featureShape from "/assets/images/home_one/feature_shape.png";
import shape from "/assets/images/home_one/shape.png";

const FeatureStyleTwo = () => {
  const features = [
    {
      id: 1,
      icon: featureIcon4,
      title: "Quality Standard",
      description:
        "expanded array of schemas without leadership skill effective",
    },
    {
      id: 2,
      icon: featureIcon3,
      title: "Saving Costs",
      description:
        "expanded array of schemas without leadership skill effective",
    },
    {
      id: 3,
      icon: featureIcon2,
      title: "Global Shipping",
      description:
        "expanded array of schemas without leadership skill effective",
    },
    {
      id: 4,
      icon: featureIcon2,
      title: "Global Shipping",
      description:
        "expanded array of schemas without leadership skill effective",
    },
    {
      id: 5,
      icon: featureIcon4,
      title: "Quality Standard",
      description:
        "expanded array of schemas without leadership skill effective",
    },
    {
      id: 6,
      icon: featureIcon3,
      title: "Saving Costs",
      description:
        "expanded array of schemas without leadership skill effective",
    },
  ];

  return (
    <section className="feature_area style_two">
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
          {features.map((feature) => (
            <div className="col-lg-4 col-md-6" key={feature.id}>
              <div className="feature_item style_two">
                <div className="feature_icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature_content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="feature_shape rotate">
        <img src={featureShape} alt="shape" />
      </div>
      <div className="feature_shape2 bounce-animate2">
        <img src={shape} alt="shape" />
      </div>
    </section>
  );
};

export default FeatureStyleTwo;
