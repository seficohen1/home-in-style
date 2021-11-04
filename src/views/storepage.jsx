import React from 'react';
import CollectionOverview from '../components/collections-overview/collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from './collectionpage';
import { selectIsCollectionFetching } from '../redux/shop/shop.selector';

import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class StorePage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { isCollectionFectching, match } = this.props;
    return (
      <div className="store-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFectching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFectching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFectching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
