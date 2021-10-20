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

export default addItemToCart;
