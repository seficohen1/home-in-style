import { takeEvery, call, put } from 'redux-saga/effects';
import { ShopActionTyeps } from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';

export function* fetchCollectionAsync() {
  yield console.log('i am fired');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTyeps.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
