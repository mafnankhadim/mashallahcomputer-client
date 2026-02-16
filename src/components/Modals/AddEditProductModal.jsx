import React, { useEffect, useState, useRef } from "react";
import "./modals.css";

const AddEditProductModal = ({ visible, onClose, onSave, initialData, categories = [] }) => {
  const [form, setForm] = useState({ image: "", imageFile: null, imagePreview: "", product: "", category: "", price: "", stock: "" });
  const previewRef = useRef(null);
  useEffect(() => {
    if (initialData) setForm({
      image: initialData.image || "",
      imagePreview: initialData.image || "",
      imageFile: null,
      product: initialData.product || "",
      category: initialData.category || "",
      price: initialData.price != null ? initialData.price : "",
      stock: initialData.stock != null ? initialData.stock : "",
    });
    else setForm({ image: "", imageFile: null, imagePreview: "", product: "", category: "", price: "", stock: "" });
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

  const title = initialData ? "Edit product" : "Add product";

  return (
    <div className="pm-modal-overlay" onClick={onClose}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-product-title" onClick={(e) => e.stopPropagation()}>
        <div className="pm-modal-header">
          <div>
            <h3 id="pm-product-title" className="pm-title">{title}</h3>
            <p className="pm-sub">Fill product information</p>
          </div>
          <button className="pm-close-btn" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="pm-divider" />

        <div className="pm-modal-body">
          <div className="pm-form-grid">
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
              <label>Product</label>
              <input placeholder="Product name" value={form.product} onChange={(e) => setForm((s) => ({ ...s, product: e.target.value }))} />
            </div>
            <div>
              <label>Category</label>
              <select value={form.category} onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}>
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Price</label>
              <input placeholder="Price" type="number" value={form.price} onChange={(e) => setForm((s) => ({ ...s, price: e.target.value }))} />
            </div>
            <div>
              <label>Stock</label>
              <input placeholder="Stock" type="number" value={form.stock} onChange={(e) => setForm((s) => ({ ...s, stock: e.target.value }))} />
            </div>
          </div>
        </div>

        <div className="pm-modal-footer">
          <button className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={() => {
            if (!form.product) { alert("Please enter product name"); return; }
            const out = {
              ...initialData,
              product: form.product,
              category: form.category,
              price: Number(form.price || 0),
              stock: Number(form.stock || 0),
            };
            if (form.imageFile) out.imageFile = form.imageFile;
            else if (form.image) out.image = form.image;
            onSave && onSave(out);
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEditProductModal;
