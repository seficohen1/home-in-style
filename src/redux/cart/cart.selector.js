import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantatiy, cartItem) =>
        accumulatedQuantatiy + cartItem.quantity,
      0
    )
);

export const selectCartItemsPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantatiy, cartItem) =>
        accumulatedQuantatiy + cartItem.quantity * Math.floor(cartItem.price),
      0
    )
);
