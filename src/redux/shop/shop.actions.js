import { ShopActionTyeps } from './shop.types';

export const updateCollection = (collectionsMap) => ({
  type: ShopActionTyeps.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
