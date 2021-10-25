import STORE_DATA from '../../storedata';

const INITIAL_STATE = {
  collections: STORE_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
