const addItemToCart = (cartItemsArray, cartItemToAdd) => {
  const exsitingCartItem = cartItemsArray.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (exsitingCartItem) {
    return cartItemsArray.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItemsArray, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItem = (cartItemsArray, itemToDecrease) => {
  const exsistingCartItem = cartItemsArray.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );

  if (exsistingCartItem.quantity === 1) {
    return cartItemsArray.filter(
      (cartItem) => cartItem.id !== itemToDecrease.id
    );
  }
  return cartItemsArray.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export default addItemToCart;
