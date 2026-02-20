import React, { useMemo, useRef, useState } from "react";
import "../Dashboard/Dashboard.css";
import "../Category/Category.css";
import "./Jobs.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import DeleteConfirmModal from "../../../components/Modals/DeleteConfirmModal";
import AddEditJobModal from "../../../components/Modals/AddEditJobModal";
import ViewModal from "../../../components/Modals/ViewModal";
import ViewDetails from "../../../components/Modals/ViewDetails";

const sampleJobs = [
  {
    id: "J-1001",
    company: "WAPDA",
    title: "Assistant Executive Engineer (WAPDA)",
    image: "https://picsum.photos/seed/job1/200/140",
    lastDate: "15 FEB, 2026",
    location: "Nationwide",
    description:
      "Responsible for maintenance and operations of water & power projects. The role includes supervising contractors, coordinating with regional teams, performing inspections, preparing technical reports and ensuring compliance with safety and environmental standards.",
  },
  {
    id: "J-1002",
    company: "Tech Solutions",
    title: "Frontend Engineer",
    image: "https://picsum.photos/seed/job2/200/140",
    lastDate: "10 FEB, 2026",
    location: "Lahore",
    description:
      "Build and maintain responsive web applications using React. Work with designers and backend engineers to deliver performant user experiences.",
  },
];

const JobsPage = () => {
  const [data, setData] = useState(() => sampleJobs);
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
          <img src={row.original.image} alt={row.original.title} className="product-thumb" />
        ),
      },
      { header: "Job ID", accessorKey: "id" },
      {
        header: "Title",
        accessorKey: "title",
        cell: ({ row, getValue }) => (
          <span
            className="product-link"
            onClick={() => {
              setViewItem(row.original);
              setShowView(true);
            }}
          >
            {getValue()}
          </span>
        ),
      },
      { header: "Company", accessorKey: "company" },
      {
        header: "Description",
        accessorKey: "description",
        cell: ({ getValue }) => {
          const v = String(getValue() || "");
          const preview = v.length > 80 ? v.slice(0, 80) + "..." : v;
          return <span title={v} className="table-desc">{preview}</span>;
        },
      },
      { header: "Location", accessorKey: "location" },
      { header: "Last Date", accessorKey: "lastDate" },
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
    ],
    []
  );

  const tableRef = useRef(null);

  const categories = useMemo(() => {
    const s = new Set(data.map((d) => d.company));
    return ["All", ...Array.from(s)];
  }, [data]);

  const filteredData = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All") return data;
    return data.filter((d) => d.company === selectedCategory);
  }, [data, selectedCategory]);

  const exportCSV = () => {
    if (tableRef.current && typeof tableRef.current.exportCSV === "function") {
      tableRef.current.exportCSV("jobs.csv");
    }
  };

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
          title="Jobs"
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAdd={() => { setEditingRow(null); setShowAddEdit(true); }}
          addLabel="+ Add job"
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
            title="Delete job"
            message={`Are you sure you want to delete ${rowToDelete.title}?`}
            onCancel={() => setRowToDelete(null)}
            onConfirm={() => {
              setData((d) => d.filter((i) => i.id !== rowToDelete.id));
              setRowToDelete(null);
            }}
            confirmLabel="Delete"
          />
        )}

        <AddEditJobModal
          visible={showAddEdit}
          initialData={editingRow}
          onClose={() => setShowAddEdit(false)}
          onSave={(payload) => {
            if (payload && payload.id) {
              setData((d) => d.map((r) => (r.id === payload.id ? { ...r, ...payload } : r)));
            } else {
              const id = `J-${Date.now()}`;
              setData((d) => [{ id, ...payload }, ...d]);
            }
            setShowAddEdit(false);
          }}
        />

        <ViewModal visible={showView} title="Job details" onClose={() => setShowView(false)}>
          {viewItem && (
            <ViewDetails
              item={viewItem}
              imageKey="image"
              titleKey="title"
              labels={{ id: 'ID', company: 'Company', location: 'Location', lastDate: 'Last Date', description: 'Description' }}
            />
          )}
        </ViewModal>
      </div>
    </div>
  );
};

export default JobsPage;
