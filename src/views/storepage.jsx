import React, { Component } from 'react';
import STORE_DATA from '../storedata';
import CollectionPreview from '../components/collection-preview/collection-preview';

class StorePage extends Component {
  constructor() {
    super();
    this.state = {
      collection: STORE_DATA,
    };
  }
  render() {
    return (
      <div className="store-page">
        {this.state.collection.map(({ id, ...restOfProps }) => (
          <CollectionPreview key={id} {...restOfProps} />
        ))}
      </div>
    );
  }
}

export default StorePage;
