import React from 'react';
import { connect } from 'react-redux';
import selectShopCollections from '../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../components/collection-preview/collection-preview';

const StorePage = ({ collections }) => {
  return (
    <div className="store-page">
      {collections.map(({ id, ...restOfProps }) => (
        <CollectionPreview key={id} {...restOfProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(StorePage);
