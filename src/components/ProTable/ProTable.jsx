import React, { forwardRef, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import '../../pages/Admin/Category/Category.css';
import './ProTable.css';
import EmptyState from '../EmptyState/EmptyState';

const ProTable = forwardRef(function ProTable(
  {
    data = [],
    columns = [],
    globalFilter = '',
    onGlobalFilterChange = () => {},
    initialPageSize = 10,
    pageSizeOptions = [5, 10, 20],
  },
  ref
) {
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const search = String(filterValue).toLowerCase();
      const deepSearch = (obj) => {
        if (obj == null) return false;
        const t = typeof obj;
        if (t === 'string' || t === 'number' || t === 'boolean') {
          return String(obj).toLowerCase().includes(search);
        }
        if (Array.isArray(obj)) {
          return obj.some((item) => deepSearch(item));
        }
        if (t === 'object') {
          return Object.values(obj).some((val) => deepSearch(val));
        }
        return false;
      };

      // Search across the whole row data (original) recursively
      return deepSearch(row.original);
    },
    initialState: { pagination: { pageIndex: 0, pageSize: initialPageSize } },
  });

  useEffect(() => {
    table.setPageIndex(0);
  }, [globalFilter]);

  // export CSV exposed via ref
  React.useImperativeHandle(ref, () => ({
    exportCSV: (filename = 'export.csv') => {
      const rows = table.getRowModel().rows.map((r) => r.original);
      const headers = columns.filter((c) => c.accessorKey).map((c) => c.accessorKey);
      const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => r[h]).join(','))].join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    },
    // expose table instance if needed
    table,
  }));

  const total = table.getRowModel().rows.length;

  return (
    <div className="table-card pro">
      <div className="table-responsive">
        <table className="pro-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {total === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ padding: 28 }}>
                  <EmptyState title={`No items`} subTitle={`There are no records to show.`} />
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="range-left">
          {(() => {
            const pageIndex = table.getState().pagination.pageIndex;
            const pageSize = table.getState().pagination.pageSize;
            const start = total === 0 ? 0 : pageIndex * pageSize + 1;
            const end = Math.min((pageIndex + 1) * pageSize, total);
            return (
              <span className="range-text">
                {start}-{end} of {total}
              </span>
            );
          })()}
        </div>

        <div className="controls-right">
          <div className="rows-per">
            <span>Rows Per Page:</span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            >
              {pageSizeOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div className="pagination">
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} aria-label="Previous page">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="page-indicator">{table.getState().pagination.pageIndex + 1}/{table.getPageCount()}</div>

            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} aria-label="Next page">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProTable;
