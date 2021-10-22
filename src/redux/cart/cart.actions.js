import CartActionTypes from './cart.types';
import CartAtionTypes from './cart.types';

const toggleCartHidden = () => ({
  type: CartAtionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: CartAtionTypes.ADD_ITEM,
  payload: item,
});

const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

const decreaseItem = (item) => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item,
});

export { toggleCartHidden, addItem, removeItem, decreaseItem };
