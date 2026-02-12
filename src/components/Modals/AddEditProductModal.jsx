import React, { useEffect, useState, useRef } from "react";
import "./modals.css";

const AddEditProductModal = ({ visible, onClose, onSave, initialData, categories = [] }) => {
  const [form, setForm] = useState({ image: "", barcode: "", product: "", category: "", price: "", stock: "" });
  const firstRef = useRef(null);

  useEffect(() => {
    if (initialData) setForm({
      image: initialData.image || "",
      barcode: initialData.barcode || "",
      product: initialData.product || "",
      category: initialData.category || "",
      price: initialData.price != null ? initialData.price : "",
      stock: initialData.stock != null ? initialData.stock : "",
    });
    else setForm({ image: "", barcode: "", product: "", category: "", price: "", stock: "" });
  }, [initialData, visible]);

  useEffect(() => { if (visible && firstRef.current) try { firstRef.current.focus(); } catch (e) {} }, [visible]);

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
              <label>Image URL</label>
              <input ref={firstRef} placeholder="Image URL" value={form.image} onChange={(e) => setForm((s) => ({ ...s, image: e.target.value }))} />
            </div>
            <div>
              <label>Barcode</label>
              <input placeholder="Barcode" value={form.barcode} onChange={(e) => setForm((s) => ({ ...s, barcode: e.target.value }))} />
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
            const out = { ...initialData, ...form, price: Number(form.price || 0), stock: Number(form.stock || 0) };
            onSave && onSave(out);
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEditProductModal;
