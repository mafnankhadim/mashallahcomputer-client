import React from 'react';
import './EmptyState.css';
import Image from '../../Assets/entry.svg';

export default function EmptyState({
  title = 'No items',
  subTitle = '',
  children = null,
  imgWidth = 120,
  imgHeight = 120,
}) {
  return (
    <div className="empty-state">
      <div className="empty-visual">
        <img
          src={Image}
          alt="Empty state illustration"
          style={{ width: imgWidth, height: imgHeight, maxWidth: '100%' }}
        />
      </div>

      <h3 className="empty-title">{title}</h3>
      {subTitle ? <p className="empty-desc">{subTitle}</p> : null}

      {children ? <div className="empty-action">{children}</div> : null}
    </div>
  );
}
