import CartAtionTypes from './cart.types';

const toggleCartHidden = () => ({
  type: CartAtionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: CartAtionTypes.ADD_ITEM,
  payload: item,
});

export { toggleCartHidden, addItem };
