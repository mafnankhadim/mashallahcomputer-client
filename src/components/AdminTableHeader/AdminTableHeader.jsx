import React from "react";
import "./AdminTableHeader.css";

const AdminTableHeader = ({
  title,
  categories,
  selectedCategory,
  onCategoryChange,
  onAdd,
  addLabel,
  onExport,
  globalFilter,
  onGlobalFilterChange,
}) => {
  return (
    <div className="table-heading-wrap">
      <h4 className="table-heading">{title}</h4>

      <div className="heading-controls">
        <div className="controls-actions">
          {onAdd && (
            <div className="printmax_btn">
              <a
                href="#"
                className="add-category"
                onClick={(e) => {
                  e.preventDefault();
                  onAdd();
                }}
              >
                <span />
                {addLabel || "+ Add"}
              </a>
            </div>
          )}

          {onExport && (
            <div className="printmax_btn">
              <a
                href="#"
                className="add-category"
                onClick={(e) => {
                  e.preventDefault();
                  onExport();
                }}
              >
                <span />
                Export CSV
              </a>
            </div>
          )}
        </div>

        <div className="controls-search">
          {categories && categories.length > 0 && (
            <select
              className="category-select"
              value={selectedCategory}
              onChange={(e) => onCategoryChange && onCategoryChange(e.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}

          <input
            className="table-search"
            placeholder={`Search ${title.toLowerCase()}`}
            value={globalFilter}
            onChange={(e) => onGlobalFilterChange && onGlobalFilterChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminTableHeader;
