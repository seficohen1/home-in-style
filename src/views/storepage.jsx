import React from 'react';
import CollectionOverview from '../components/collections-overview/collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from './collectionpage';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollection } from '../redux/shop/shop.actions';
import WithSpinner from '../components/with-spinner/with-spinner';

class StorePage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="store-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(StorePage);
