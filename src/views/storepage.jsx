import React from 'react';
import CollectionOverview from '../components/collections-overview/collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from './collectionpage';

const StorePage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="store-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default StorePage;
