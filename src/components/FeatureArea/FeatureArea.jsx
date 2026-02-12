import React from "react";

const FeatureArea = ({ items = [] }) => {
  const list = Array.isArray(items) ? items : [];

  return (
    <section className="feature_area style_three">
      <div className="container">
        <div className="row">
          {list.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="feature_item style_three">
                <div className="feature_content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
