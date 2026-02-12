import React from "react";
import "./modals.css";

const DeleteConfirmModal = ({ visible, title, message, onCancel, onConfirm, confirmLabel = "Delete" }) => {
  if (visible === false) return null;
  if (!title && !message) return null;

  return (
    <div className="pm-modal-overlay" onClick={onCancel}>
      <div className="pm-modal compact" role="dialog" aria-modal="true" aria-labelledby="pm-delete-title" onClick={(e) => e.stopPropagation()}>
        <div className="pm-modal-header">
          <div>
            <h3 id="pm-delete-title" className="pm-title">{title}</h3>
            <p className="pm-sub">This action cannot be undone</p>
          </div>
          <button className="pm-close-btn" aria-label="Close" onClick={onCancel}>×</button>
        </div>

        <div className="pm-divider" />

        <div className="pm-modal-body">
          <p>{message}</p>
        </div>

        <div className="pm-modal-footer">
          <button className="btn secondary" onClick={onCancel}>Cancel</button>
          <button className="btn danger" onClick={() => { onConfirm && onConfirm(); }}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
