import React, { useEffect, useState, useRef } from "react";
import "./modals.css";

const AddEditCategoryModal = ({ visible, onClose, onSave, initialData }) => {
  const [form, setForm] = useState({ code: "", category: "" });
  const firstRef = useRef(null);

  useEffect(() => {
    if (initialData) setForm({ code: initialData.code || "", category: initialData.category || "" });
    else setForm({ code: "", category: "" });
  }, [initialData, visible]);

  useEffect(() => { if (visible && firstRef.current) try { firstRef.current.focus(); } catch (e) {} }, [visible]);

  if (!visible) return null;

  const title = initialData ? "Edit category" : "Add category";

  return (
    <div className="pm-modal-overlay" onClick={onClose}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-category-title" onClick={(e) => e.stopPropagation()}>
        <div className="pm-modal-header">
          <div>
            <h3 id="pm-category-title" className="pm-title">{title}</h3>
            <p className="pm-sub">Manage category details</p>
          </div>
          <button className="pm-close-btn" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="pm-divider" />

        <div className="pm-modal-body">
          <div className="pm-form-grid">
            <div>
              <label>Code</label>
              <input ref={firstRef} placeholder="Code" value={form.code} onChange={(e) => setForm((s) => ({ ...s, code: e.target.value }))} />
            </div>
            <div>
              <label>Category</label>
              <input placeholder="Category" value={form.category} onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))} />
            </div>
          </div>
        </div>

        <div className="pm-modal-footer">
          <button className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={() => {
            if (!form.category) { alert("Please enter a category name"); return; }
            onSave && onSave({ ...initialData, ...form });
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEditCategoryModal;
