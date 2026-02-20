import React, { useMemo, useRef, useState } from "react";
import "../Dashboard/Dashboard.css";
import "../Category/Category.css";
import "./Products.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import DeleteConfirmModal from "../../../components/Modals/DeleteConfirmModal";
import AddEditProductModal from "../../../components/Modals/AddEditProductModal";
import ViewModal from "../../../components/Modals/ViewModal";
import ViewDetails from "../../../components/Modals/ViewDetails";

const sampleProducts = [
  { id: 1, image: "https://picsum.photos/seed/product1/200/200", product: "Kitchen Knife", category: "Cooking", price: 24.99, stock: 32 },
  { id: 2, image: "https://picsum.photos/seed/product2/200/200", product: "Wireless Mouse", category: "Device", price: 19.5, stock: 120 },
  { id: 3, image: "https://picsum.photos/seed/product3/200/200", product: "Headphones", category: "Electronic", price: 49.0, stock: 54 },
  { id: 4, image: "https://picsum.photos/seed/product4/200/200", product: "Blender", category: "Cooking", price: 89.99, stock: 12 },
  { id: 5, image: "https://picsum.photos/seed/product5/200/200", product: "Smart Lamp", category: "Electronic", price: 34.75, stock: 8 },
];

const ProductsPage = () => {
  const [data, setData] = useState(() => sampleProducts);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rowToDelete, setRowToDelete] = useState(null);
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
      // Barcode removed per request
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
                aria-label={`Edit ${row.original.product}`}
            >
              <i className="bi bi-pencil" aria-hidden="true" />
            </button>
            <button
              className="icon-btn"
              onClick={() => setRowToDelete(row.original)}
              title="Delete"
              aria-label={`Delete ${row.original.product}`}
            >
              <i className="bi bi-trash" aria-hidden="true" />
            </button>
          </div>
        ),
      },
    ],
    [setShowAddEdit, setEditingRow, setRowToDelete, setShowView, setViewItem]
  );

  const tableRef = useRef(null);

  // compute category list from data
  const categories = useMemo(() => {
    const s = new Set(data.map((d) => d.category));
    return ["All", ...Array.from(s)];
  }, [data]);

  // filter data by selected category before passing to ProTable
  const filteredData = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") return data;
    return data.filter((d) => d.category === selectedCategory);
  }, [data, selectedCategory]);

  const exportCSV = () => {
    if (tableRef.current && typeof tableRef.current.exportCSV === "function") {
      tableRef.current.exportCSV("products.csv");
    }
  };

  // reset table page to first when category changes
  React.useEffect(() => {
    if (tableRef.current && tableRef.current.table) {
      try {
        tableRef.current.table.setPageIndex(0);
      } catch (e) {}
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className="card-header" />

      <div className="card-body">
        <AdminTableHeader
          title="Products"
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAdd={() => {
            setEditingRow(null);
            setShowAddEdit(true);
          }}
          addLabel="+ Add product"
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

        {rowToDelete && (
          <DeleteConfirmModal
            title="Delete product"
            message={`Are you sure you want to delete ${rowToDelete.product}?`}
            onCancel={() => setRowToDelete(null)}
            onConfirm={() => {
              setData((d) => d.filter((i) => i.id !== rowToDelete.id));
              setRowToDelete(null);
            }}
            confirmLabel="Delete"
          />
        )}

        <AddEditProductModal
          visible={showAddEdit}
          initialData={editingRow}
          categories={categories.filter((c) => c !== "All")}
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

export default ProductsPage;
