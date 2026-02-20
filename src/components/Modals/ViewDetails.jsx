import React from "react";

const capitalize = (s) => String(s).replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

const ViewDetails = ({ item, imageKey = "image", titleKey = "title", labels = {} }) => {
  if (!item) return null;

  const keys = Object.keys(item).filter((k) => k !== imageKey && k !== titleKey);

  return (
    <div className="view-details">
      {item[imageKey] && (
        <div className="view-image">
          <img src={item[imageKey]} alt={item[titleKey] || "item"} />
        </div>
      )}

      <div className="view-meta" style={{ flex: item[imageKey] ? undefined : '1 1 100%' }}>
        <h4 style={{ marginTop: 0 }}>{item[titleKey] || labels[titleKey] || ''}</h4>
        {keys.map((k) => (
          <div className="meta-row" key={k}>
            <strong>{labels[k] || capitalize(k)}:</strong>
            <span style={{ marginLeft: 8 }}>{String(item[k] ?? "")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
