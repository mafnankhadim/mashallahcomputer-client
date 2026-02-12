import React, { useMemo, useState, useRef } from "react";
import "../Dashboard/Dashboard.css";
import "./Category.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import DeleteConfirmModal from "../../../components/Modals/DeleteConfirmModal";
import AddEditCategoryModal from "../../../components/Modals/AddEditCategoryModal";

const sampleData = [
  { id: 1, category: "Cooking", code: "E23436" },
  { id: 2, category: "Device", code: "E23447" },
  { id: 3, category: "Device", code: "E23485" },
  { id: 4, category: "Device", code: "E23424" },
  { id: 5, category: "Electronic", code: "E23432" },
];

const CategoryPage = () => {
  const [data, setData] = useState(() => sampleData);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowToDelete, setRowToDelete] = useState(null);
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const columns = useMemo(
    () => [
      {
        header: "Code",
        accessorKey: "code",
      },
      {
        header: "Category",
        accessorKey: "category",
      },
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
              aria-label={`Edit ${row.original.code}`}
            >
              <i className="bi bi-pencil" aria-hidden="true" />
            </button>
            <button
              className="icon-btn"
              onClick={() => setRowToDelete(row.original)}
              title="Delete"
              aria-label={`Delete ${row.original.code}`}
            >
              <i className="bi bi-trash" aria-hidden="true" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableRef = useRef(null);

  const exportCSV = () => {
    if (tableRef.current && typeof tableRef.current.exportCSV === 'function') {
      tableRef.current.exportCSV('categories.csv');
    }
  };

  return (
    <div>
      <div className="card-header" />

      <div className="card-body">
        <AdminTableHeader
          title="Category List"
          onAdd={() => {
            setEditingRow(null);
            setShowAddEdit(true);
          }}
          addLabel="+ Add category"
          onExport={exportCSV}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
        />

        <ProTable
          ref={tableRef}
          data={data}
          columns={columns}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
          initialPageSize={10}
          pageSizeOptions={[5, 10, 20]}
        />

        {rowToDelete && (
          <DeleteConfirmModal
            title="Delete category"
            message={`Are you sure you want to delete ${rowToDelete.code}?`}
            onCancel={() => setRowToDelete(null)}
            onConfirm={() => {
              setData((d) => d.filter((i) => i.id !== rowToDelete.id));
              setRowToDelete(null);
            }}
            confirmLabel="Delete"
          />
        )}

        <AddEditCategoryModal
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
      </div>
    </div>
  );
};

export default CategoryPage;
