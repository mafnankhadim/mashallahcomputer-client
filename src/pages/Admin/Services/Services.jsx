import React, { useMemo, useRef, useState } from "react";
import "../Dashboard/Dashboard.css";
import "./Services.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import DeleteConfirmModal from "../../../components/Modals/DeleteConfirmModal";
import ViewModal from "../../../components/Modals/ViewModal";
import ViewDetails from "../../../components/Modals/ViewDetails";
import servicesData from "../../../data/services";

const CATEGORY_OPTIONS = [
  "Mobile Accessories & Online Services",
  "Print & Photo Services",
];

const AddEditServiceModal = ({ visible, onClose, onSave, initialData }) => {
  const [form, setForm] = useState({ title: "", category: CATEGORY_OPTIONS[0], description: "" });

  React.useEffect(() => {
    if (initialData)
      setForm({ title: initialData.title || "", category: initialData.category || CATEGORY_OPTIONS[0], description: initialData.description || "" });
    else setForm({ title: "", category: CATEGORY_OPTIONS[0], description: "" });
  }, [initialData, visible]);

  if (!visible) return null;

  const title = initialData ? "Edit service" : "Add service";

  return (
    <div className="pm-modal-overlay" onClick={onClose}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-service-title" onClick={(e) => e.stopPropagation()}>
        <div className="pm-modal-header">
          <div>
            <h3 id="pm-service-title" className="pm-title">{title}</h3>
            <p className="pm-sub">Manage service entry</p>
          </div>
          <button className="pm-close-btn" aria-label="Close" onClick={onClose}>×</button>
        </div>

        <div className="pm-divider" />

        <div className="pm-modal-body">
          <div className="pm-form-grid">
            <div>
              <label>Title</label>
              <input placeholder="Title" value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} />
            </div>
            <div>
              <label>Category</label>
              <select value={form.category} onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label>Description</label>
              <textarea placeholder="Short description" value={form.description} onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))} rows={4} />
            </div>
          </div>
        </div>

        <div className="pm-modal-footer">
          <button className="btn secondary" onClick={onClose}>Cancel</button>
          <button className="btn primary" onClick={() => {
            if (!form.title) { alert("Please enter a title"); return; }
            onSave && onSave({ ...initialData, title: form.title, category: form.category, description: form.description });
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  // helper to guess category for existing services
  const guessCategory = (title = "") => {
    const t = String(title).toLowerCase();
    const mobileKeywords = ["mobile", "phone", "battery", "charger", "accessor", "unlocking", "sim"];
    const printKeywords = ["print", "photo", "scan", "laminat", "photocopy", "studio", "mug", "t-shirt", "graphic"];
    if (mobileKeywords.some((k) => t.includes(k))) return CATEGORY_OPTIONS[0];
    if (printKeywords.some((k) => t.includes(k))) return CATEGORY_OPTIONS[1];
    return CATEGORY_OPTIONS[1];
  };

  const [data, setData] = useState(() => (servicesData || []).map((s) => ({ ...s, category: s.category || guessCategory(s.title) })));
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rowToDelete, setRowToDelete] = useState(null);
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [showView, setShowView] = useState(false);
  const [viewItem, setViewItem] = useState(null);

  const columns = useMemo(() => [
    { header: "ID", accessorKey: "id" },
    {
      header: "Title",
      accessorKey: "title",
      cell: ({ row, getValue }) => (
        <span className="product-link" onClick={() => { setViewItem(row.original); setShowView(true); }}>
          {getValue()}
        </span>
      ),
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: ({ row, getValue }) => {
        const text = String(getValue() || "");
        const short = text.length > 80 ? text.slice(0, 77) + '...' : text;
        return (
          <span className="product-desc" title={text} onClick={() => { setViewItem(row.original); setShowView(true); }}>
            {short}
          </span>
        );
      }
    },
    { header: "Category", accessorKey: "category" },
    {
      header: "Action",
      id: "actions",
      cell: ({ row }) => (
        <div className="row-action">
          <button
            className="icon-btn"
            onClick={() => { setEditingRow(row.original); setShowAddEdit(true); }}
            title="Edit"
          >
            <i className="bi bi-pencil" aria-hidden="true" />
          </button>
          <button
            className="icon-btn"
            onClick={() => setRowToDelete(row.original)}
            title="Delete"
          >
            <i className="bi bi-trash" aria-hidden="true" />
          </button>
        </div>
      ),
    },
  ], []);

  const tableRef = useRef(null);

  const categories = useMemo(() => ["All", ...CATEGORY_OPTIONS], []);

  const filteredData = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") return data;
    return data.filter((d) => d.category === selectedCategory);
  }, [data, selectedCategory]);

  const exportCSV = () => {
    if (tableRef.current && typeof tableRef.current.exportCSV === "function") {
      tableRef.current.exportCSV("services.csv");
    }
  };

  return (
    <div>
      <div className="card-header" />

      <div className="card-body">
        <AdminTableHeader
          title="Services"
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAdd={() => { setEditingRow(null); setShowAddEdit(true); }}
          addLabel="+ Add service"
          onExport={exportCSV}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
        />

        <ProTable
          ref={tableRef}
          data={filteredData}
          columns={columns}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
          initialPageSize={10}
          pageSizeOptions={[5, 10, 20]}
        />

        <DeleteConfirmModal
          visible={!!rowToDelete}
          title={rowToDelete ? `Delete ${rowToDelete.title}` : undefined}
          message={rowToDelete ? `Are you sure you want to delete ${rowToDelete.title}?` : undefined}
          onCancel={() => setRowToDelete(null)}
          onConfirm={() => {
            if (rowToDelete) setData((d) => d.filter((i) => i.id !== rowToDelete.id));
            setRowToDelete(null);
          }}
        />

        <AddEditServiceModal
          visible={showAddEdit}
          initialData={editingRow}
          onClose={() => setShowAddEdit(false)}
          onSave={(payload) => {
            if (payload && payload.id) {
              setData((d) => d.map((r) => (r.id === payload.id ? { ...r, ...payload } : r)));
            } else {
              const id = Date.now();
              setData((d) => [{ id, ...payload }, ...d]);
            }
            setShowAddEdit(false);
          }}
        />

        <ViewModal visible={showView} title="Service details" onClose={() => setShowView(false)}>
          {viewItem && (
            <ViewDetails
              item={viewItem}
              imageKey="image"
              titleKey="title"
              labels={{ id: 'ID', category: 'Category' }}
            />
          )}
        </ViewModal>
      </div>
    </div>
  );
};

export default ServicesPage;
