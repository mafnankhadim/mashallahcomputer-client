import React, { useEffect, useState } from "react";
import "./modals.css";

const AddEditJobModal = ({ visible, onClose, onSave, initialData }) => {
  const [form, setForm] = useState({ company: "", title: "", image: "", postDate: "", lastDate: "", location: "", description: "" });
  useEffect(() => {
    if (initialData) setForm({
      company: initialData.company || "",
      title: initialData.title || "",
      image: initialData.image || "",
      postDate: initialData.postDate || "",
      lastDate: initialData.lastDate || "",
      location: initialData.location || "",
      description: initialData.description || "",
    });
    else setForm({ company: "", title: "", image: "", postDate: "", lastDate: "", location: "", description: "" });
  }, [initialData, visible]);

  

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
              <label>Image URL</label>
              <input placeholder="Image URL" value={form.image} onChange={(e) => setForm((s) => ({ ...s, image: e.target.value }))} />
            </div>
            <div>
              <label>Post Date</label>
              <input placeholder="e.g. 01 FEB, 2026" value={form.postDate} onChange={(e) => setForm((s) => ({ ...s, postDate: e.target.value }))} />
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
            onSave && onSave({ ...initialData, ...form });
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEditJobModal;
