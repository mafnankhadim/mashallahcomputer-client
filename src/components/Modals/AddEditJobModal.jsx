import React, { useEffect, useState, useRef } from "react";
import "./modals.css";

const AddEditJobModal = ({ visible, onClose, onSave, initialData }) => {
  const [form, setForm] = useState({ company: "", title: "", image: "", imageFile: null, imagePreview: "", lastDate: "", location: "", description: "" });
  const previewRef = useRef(null);
  useEffect(() => {
    if (initialData) setForm({
      company: initialData.company || "",
      title: initialData.title || "",
      image: initialData.image || "",
      imagePreview: initialData.image || "",
      imageFile: null,
      lastDate: initialData.lastDate || "",
      location: initialData.location || "",
      description: initialData.description || "",
    });
    else setForm({ company: "", title: "", image: "", imageFile: null, imagePreview: "", lastDate: "", location: "", description: "" });
  }, [initialData, visible]);

  useEffect(() => {
    return () => {
      if (previewRef.current) {
        try { URL.revokeObjectURL(previewRef.current); } catch (e) { }
        previewRef.current = null;
      }
    };
  }, []);

  

  if (!visible) return null;

  const title = initialData ? "Edit job" : "Add job";

  return (
    <div className="pm-modal-overlay" onClick={onClose}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-job-title" onClick={(e) => e.stopPropagation()}>
        <div className="pm-modal-header">
          <div>
            <h3 id="pm-job-title" className="pm-title">{title}</h3>
            <p className="pm-sub">Post and manage job listings</p>
          </div>
          <button className="pm-close-btn" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="pm-divider" />

        <div className="pm-modal-body">
          <div className="pm-form-grid">
            <div>
              <label>Company</label>
              <input placeholder="Company" value={form.company} onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))} />
            </div>
            <div>
              <label>Title</label>
              <input placeholder="Title" value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} />
            </div>
            <div className="full">
              <label>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0];
                  if (!file) return;
                  if (!file.type.startsWith("image/")) { alert("Please select an image file (png, jpg, gif, etc.)"); return; }
                  if (previewRef.current) {
                    try { URL.revokeObjectURL(previewRef.current); } catch (err) { }
                  }
                  const preview = URL.createObjectURL(file);
                  previewRef.current = preview;
                  setForm((s) => ({ ...s, imageFile: file, imagePreview: preview, image: "" }));
                }}
              />
              {form.imagePreview ? (
                <div style={{ marginTop: 8 }}>
                  <img src={form.imagePreview} alt="preview" style={{ maxWidth: "100%", maxHeight: 180, objectFit: "contain" }} />
                </div>
              ) : null}
            </div>
            <div>
              <label>Last Date</label>
              <input placeholder="e.g. 15 FEB, 2026" value={form.lastDate} onChange={(e) => setForm((s) => ({ ...s, lastDate: e.target.value }))} />
            </div>
            <div>
              <label>Location</label>
              <input placeholder="Location" value={form.location} onChange={(e) => setForm((s) => ({ ...s, location: e.target.value }))} />
            </div>
            <div className="full">
              <label>Description</label>
              <textarea placeholder="Long description" rows={5} value={form.description} onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))} />
            </div>
          </div>
        </div>

        <div className="pm-modal-footer">
          <button className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={() => {
            if (!form.title) { alert("Please enter a job title"); return; }
            const out = { ...initialData, company: form.company, title: form.title, lastDate: form.lastDate, location: form.location, description: form.description };
            if (form.imageFile) out.imageFile = form.imageFile;
            else if (form.image) out.image = form.image;
            onSave && onSave(out);
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEditJobModal;
