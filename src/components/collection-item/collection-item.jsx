import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom-buttom';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          <FontAwesomeIcon icon={faEuroSign} />
          {price}
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
