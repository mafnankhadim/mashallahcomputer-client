import React, { useMemo, useRef, useState } from "react";
import "../Dashboard/Dashboard.css";
import "../Products/Products.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import ViewModal from "../../../components/Modals/ViewModal";
import ViewDetails from "../../../components/Modals/ViewDetails";

const sampleLowStock = [
  { id: 101, image: "https://picsum.photos/seed/low1/200/200", product: "Smart Lamp", category: "Electronic", price: 34.75, stock: 8 },
  { id: 102, image: "https://picsum.photos/seed/low2/200/200", product: "Blender", category: "Cooking", price: 89.99, stock: 12 },
  { id: 103, image: "https://picsum.photos/seed/low3/200/200", product: "Disposable Plates", category: "Kitchen", price: 4.99, stock: 3 },
];

const LowStock = () => {
  const [data, setData] = useState(() => sampleLowStock);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [showView, setShowView] = useState(false);
  const [viewItem, setViewItem] = useState(null);

  const columns = useMemo(
    () => [
      {
        header: "Image",
        id: "image",
        cell: ({ row }) => (
          <img src={row.original.image} alt={row.original.product} className="product-thumb" />
        ),
      },
      {
        header: "Product",
        accessorKey: "product",
        cell: ({ row, getValue }) => (
          <span className="product-link" onClick={() => { setViewItem(row.original); setShowView(true); }}>{getValue()}</span>
        ),
      },
      { header: "Category", accessorKey: "category" },
      {
        header: "Price",
        accessorKey: "price",
        cell: ({ getValue }) => `$${Number(getValue()).toFixed(2)}`,
      },
      { header: "Stock", accessorKey: "stock" },
      {
        header: "Action",
        id: "actions",
        cell: ({ row }) => (
          <div className="row-action">
            <button
              className="icon-btn"
              onClick={() => {
                setEditingRow(row.original);
                setShowAddEdit(true);
              }}
              title="Edit"
            >
              <i className="bi bi-pencil" aria-hidden="true" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableRef = useRef(null);

  const categories = useMemo(() => {
    const s = new Set(data.map((d) => d.category));
    return ["All", ...Array.from(s)];
  }, [data]);

  const filteredData = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") return data;
    return data.filter((d) => d.category === selectedCategory);
  }, [data, selectedCategory]);

  const exportCSV = null;

  React.useEffect(() => {
    if (tableRef.current && tableRef.current.table) {
      try {
        tableRef.current.table.setPageIndex(0);
      } catch (e) {}
    }
  }, [selectedCategory]);

  // Stock edit modal: edit only the `stock` value for an item
  const StockEditModal = ({ visible, onClose, onSave, initialData }) => {
    const [stock, setStock] = useState(initialData ? initialData.stock : 0);

    React.useEffect(() => {
      setStock(initialData ? initialData.stock : 0);
    }, [initialData, visible]);

    if (!visible) return null;

    return (
      <div className="pm-modal-overlay" onClick={onClose}>
        <div className="pm-modal compact" role="dialog" aria-modal="true" aria-labelledby="pm-stock-title" onClick={(e) => e.stopPropagation()}>
          <div className="pm-modal-header">
            <div>
              <h3 id="pm-stock-title" className="pm-title">Edit Stock</h3>
              <p className="pm-sub">Update stock quantity for the item</p>
            </div>
            <button className="pm-close-btn" aria-label="Close" onClick={onClose}>×</button>
          </div>

          <div className="pm-divider" />

          <div className="pm-modal-body">
            <div className="pm-form-grid">
              <div>
                <label>Stock</label>
                <input type="number" min={0} value={stock} onChange={(e) => setStock(Number(e.target.value))} />
              </div>
            </div>
          </div>

          <div className="pm-modal-footer">
            <button className="btn secondary" onClick={onClose}>Cancel</button>
            <button className="btn primary" onClick={() => { onSave && onSave({ ...initialData, stock }); }}>Save</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="card-header" />

      <div className="card-body">
        <AdminTableHeader
          title="Low Stock"
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          /* No add button for Low Stock */
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

        {/* Delete action removed for Low Stock */}

        <StockEditModal
          visible={showAddEdit}
          initialData={editingRow}
          onClose={() => setShowAddEdit(false)}
          onSave={(payload) => {
            if (payload && payload.id) {
              setData((d) => d.map((r) => (r.id === payload.id ? { ...r, stock: payload.stock } : r)));
            }
            setShowAddEdit(false);
          }}
        />

          <ViewModal visible={showView} title="Product details" onClose={() => setShowView(false)}>
            {viewItem && (
              <ViewDetails
                item={viewItem}
                imageKey="image"
                titleKey="product"
                labels={{ category: 'Category', price: 'Price', stock: 'Stock' }}
              />
            )}
          </ViewModal>
      </div>
    </div>
  );
};

export default LowStock;
