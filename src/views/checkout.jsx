import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsPrice } from '../redux/cart/cart.selector';
import CheckoutItem from '../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../components/stripe-button/stripe-button';

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
        <span>TOTAL: €{totalPrice}</span>
      </div>
      <div className="warning">
        *Por favor usa el numero siguente - Solo para demostracion* *Please use
        the following test credit card for demonstration purposes*
        <br />
        4242 4242 4242 4242 - Exp(Cad): 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton className="button" price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice,
});

export default connect(mapStateToProps)(Checkout);
