import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsPrice } from '../redux/cart/cart.selector';
import CheckoutItem from '../components/checkout-item/checkout-item';

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Item</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice,
});

export default connect(mapStateToProps)(Checkout);
