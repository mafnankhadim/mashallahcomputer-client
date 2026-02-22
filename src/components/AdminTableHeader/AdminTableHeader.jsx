import React from "react";
import "./AdminTableHeader.css";
import CustomSelect from "../CustomSelect/CustomSelect";

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
  // if provided, use this prop to render the custom dropdown
  customSelectOptions,
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
        </div>

        <div className="controls-search">
          {categories && categories.length > 0 && (
            <CustomSelect
              options={
                (customSelectOptions && customSelectOptions.options) ||
                categories.map((c) => ({ value: c, label: c }))
              }
              value={(customSelectOptions && customSelectOptions.value) ?? selectedCategory}
              onChange={(v) => (customSelectOptions && customSelectOptions.onChange) ? customSelectOptions.onChange(v) : onCategoryChange && onCategoryChange(v)}
              placeholder={(customSelectOptions && customSelectOptions.placeholder) || 'Category'}
              className="category-custom"
            />
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
