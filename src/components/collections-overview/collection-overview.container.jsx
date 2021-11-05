import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import CollectionOverview from '../collections-overview/collection-overview.container';
import WithSpinner from '../with-spinner/with-spinner.jsx';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview)
);

export default CollectionOverviewContainer;
