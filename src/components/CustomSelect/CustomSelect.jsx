import React, { useEffect, useRef, useState } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options = [], value, onChange, placeholder = 'Select', className = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const selected = options.find((o) => (o && (o.value ?? o)) === value);

  return (
    <div className={`pm-custom-select ${className}`} ref={ref}>
      <button
        type="button"
        className="cs-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="cs-value">{selected ? (selected.label ?? selected.value ?? selected) : placeholder}</span>
        <span className={`cs-caret ${open ? 'open' : ''}`} aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open && (
        <ul role="listbox" className="cs-options">
          {options.map((opt) => {
            const val = opt && (opt.value ?? opt);
            const label = opt && (opt.label ?? opt);
            const sel = val === value;
            return (
              <li
                key={String(val)}
                role="option"
                aria-selected={sel}
                className={`cs-option ${sel ? 'selected' : ''}`}
                onClick={() => {
                  onChange && onChange(val);
                  setOpen(false);
                }}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
