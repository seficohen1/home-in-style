import React from 'react';
import './collection-item.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          {price} <i className="fas fa-euro-sign"></i>
        </span>
        <i className="fas fa-euro-sign"></i>
      </div>
    </div>
  );
};

export default CollectionItem;
