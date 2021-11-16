import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';
import WithSpinner from '../components/with-spinner/with-spinner';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../redux/shop/shop.selector';
import CollectionPage from './collectionpage';
import CollectionOverview from '../components/collections-overview/collections-overview';
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../redux/shop/shop.actions';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const StorePage = ({
  match,
  isCollectionLoaded,
  isCollectionFetching,
  fetchCollectionsStart,
}) => {
  useEffect(() => fetchCollectionsStart(), [fetchCollectionsStart]);
  return (
    <div className="store-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isCollectionLoaded} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
