import React from "react";
import "./modals.css";

const ViewModal = ({ visible, onClose, title, children }) => {
  if (!visible) return null;
  return (
    <div className="pm-modal-overlay" onClick={onClose}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-view-title" onClick={(e) => e.stopPropagation()}>
        <div className="pm-modal-header">
          <div>
            <h3 id="pm-view-title" className="pm-title">{title}</h3>
            <p className="pm-sub">Details</p>
          </div>
          <button className="pm-close-btn" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="pm-divider" />

        <div className="pm-modal-body">
          <div style={{ marginTop: 8 }}>{children}</div>
        </div>

        <div className="pm-modal-footer">
          <button className="btn primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
