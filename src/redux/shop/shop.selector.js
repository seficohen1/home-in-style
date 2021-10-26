import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => {
  return state.shop;
};

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);

export { selectShopCollections, selectCollection, selectCollectionForPreview };
