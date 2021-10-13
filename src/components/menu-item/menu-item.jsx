import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="menu-item"
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SEE MORE</span>
      </div>
    </div>
  );
};

export default MenuItem;
