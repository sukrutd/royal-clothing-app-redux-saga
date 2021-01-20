import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearCartItem } from '../../redux/cart/cart.actions';
import './styles.scss';

const CheckoutItem = ({ cartItem, clearCartItem, addItem, removeItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;

	return (
		<div className='checkout-item'>
			<div className='image-container cell'>
				<img src={imageUrl} alt='checkout item' />
			</div>
			<div className='cell'>{name}</div>
			<div className='quantity-container cell'>
				<span className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</span>
				<span>{quantity}</span>
				<span className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</span>
			</div>
			<div className='cell'>{price}</div>
			<div className='remove-button' onClick={() => clearCartItem(cartItem)}>
				&#10006;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearCartItem: (item) => dispatch(clearCartItem(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
