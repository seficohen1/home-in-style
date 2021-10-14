import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, image, size, history, linkUrl }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SEE MORE</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
