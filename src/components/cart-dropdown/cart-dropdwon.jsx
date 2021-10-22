import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-buttom';
import CartItem from '../cart-item/cart-item.js';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length < 0 ? (
        <span className="empty-message">
          There are no items in the cart yet
        </span>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
