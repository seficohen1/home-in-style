import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...restOfProps }) => (
            <CollectionItem key={id} {...restOfProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;