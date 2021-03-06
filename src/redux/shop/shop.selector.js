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
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export {
  selectShopCollections,
  selectCollection,
  selectCollectionForPreview,
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
};
