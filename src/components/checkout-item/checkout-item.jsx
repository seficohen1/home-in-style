import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import {
  removeItem,
  addItem,
  decreaseItem,
} from '../../redux/cart/cart.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

const CheckoutItem = ({ cartItem, removeItem, decreaseItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <FontAwesomeIcon icon={faEuroSign} />
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10007;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
