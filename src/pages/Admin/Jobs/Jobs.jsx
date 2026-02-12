import React, { useMemo, useRef, useState } from "react";
import "../Dashboard/Dashboard.css";
import "../Category/Category.css";
import "./Jobs.css";
import ProTable from "../../../components/ProTable/ProTable";
import AdminTableHeader from "../../../components/AdminTableHeader/AdminTableHeader";
import ConfirmModal from "../../../components/ConfirmModal/ConfirmModal";

const sampleJobs = [
  {
    id: "J-1001",
    company: "WAPDA",
    title: "Assistant Executive Engineer (WAPDA)",
    image: "https://picsum.photos/seed/job1/200/140",
    postDate: "01 FEB, 2026",
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
    postDate: "28 JAN, 2026",
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
  const [showAddModal, setShowAddModal] = useState(false);
  const [newJob, setNewJob] = useState({
    company: "",
    title: "",
    image: "",
    postDate: "",
    lastDate: "",
    location: "",
    description: "",
  });

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
      { header: "Title", accessorKey: "title" },
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
      { header: "Post Date", accessorKey: "postDate" },
      { header: "Last Date", accessorKey: "lastDate" },
      {
        header: "Action",
        id: "actions",
        cell: ({ row }) => (
          <div className="row-action">
            <button
              className="icon-btn"
              onClick={() => alert(`Edit ${row.original.title}`)}
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
          onAdd={() => setShowAddModal(true)}
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
          <ConfirmModal
            title="Delete job"
            message={`Are you sure you want to delete ${rowToDelete.title}?`}
            onCancel={() => setRowToDelete(null)}
            onConfirm={() => {
              alert(`Deleted ${rowToDelete.title}`);
              setRowToDelete(null);
            }}
            confirmLabel="Delete"
          />
        )}

        {showAddModal && (
          <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h4>Add job</h4>

              <div style={{ display: "grid", gap: 8 }}>
                <input
                  placeholder="Company"
                  value={newJob.company}
                  onChange={(e) => setNewJob((s) => ({ ...s, company: e.target.value }))}
                />
                <input
                  placeholder="Title"
                  value={newJob.title}
                  onChange={(e) => setNewJob((s) => ({ ...s, title: e.target.value }))}
                />
                <input
                  placeholder="Image URL"
                  value={newJob.image}
                  onChange={(e) => setNewJob((s) => ({ ...s, image: e.target.value }))}
                />
                <input
                  placeholder="Post Date (e.g. 01 FEB, 2026)"
                  value={newJob.postDate}
                  onChange={(e) => setNewJob((s) => ({ ...s, postDate: e.target.value }))}
                />
                <input
                  placeholder="Last Date (e.g. 15 FEB, 2026)"
                  value={newJob.lastDate}
                  onChange={(e) => setNewJob((s) => ({ ...s, lastDate: e.target.value }))}
                />
                <input
                  placeholder="Location"
                  value={newJob.location}
                  onChange={(e) => setNewJob((s) => ({ ...s, location: e.target.value }))}
                />
                <textarea
                  placeholder="Long description"
                  rows={4}
                  value={newJob.description}
                  onChange={(e) => setNewJob((s) => ({ ...s, description: e.target.value }))}
                />
              </div>

              <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
                <button className="btn" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    if (!newJob.title) {
                      alert("Please enter a job title");
                      return;
                    }
                    const id = `J-${Date.now()}`;
                    const created = {
                      id,
                      ...newJob,
                    };
                    setData((d) => [created, ...d]);
                    setShowAddModal(false);
                    setNewJob({ company: "", title: "", image: "", postDate: "", lastDate: "", location: "", description: "" });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
