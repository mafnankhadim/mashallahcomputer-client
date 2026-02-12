import React, { useMemo, useState, useRef } from "react";
import "../Dashboard/Dashboard.css";
import "./Category.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";

const sampleData = [
  { id: 1, category: "Cooking", code: "E23436" },
  { id: 2, category: "Device", code: "E23447" },
  { id: 3, category: "Device", code: "E23485" },
  { id: 4, category: "Device", code: "E23424" },
  { id: 5, category: "Electronic", code: "E23432" },
];

const CategoryPage = () => {
  const [data] = useState(() => sampleData);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowToDelete, setRowToDelete] = useState(null);

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
              onClick={() => alert(`Edit ${row.original.code}`)}
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
          onAdd={() => alert("Add category")}
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
          <ConfirmModal
            title="Delete category"
            message={`Are you sure you want to delete ${rowToDelete.code}?`}
            onCancel={() => setRowToDelete(null)}
            onConfirm={() => {
              alert(`Deleted ${rowToDelete.code}`);
              setRowToDelete(null);
            }}
            confirmLabel="Delete"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
