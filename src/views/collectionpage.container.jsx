import CollectionPage from './collectionpage';
import { connect } from 'react-redux';
import WithSpinner from '../components/with-spinner/with-spinner';
import { selectIsCollectionLoaded } from '../redux/shop/shop.selector.js';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);

export default CollectionPageContainer;
