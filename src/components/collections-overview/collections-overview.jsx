import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.scss';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...restOfProps }) => (
        <CollectionPreview key={id} {...restOfProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
