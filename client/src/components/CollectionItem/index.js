import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import { addItem } from '../../redux/cart/cart.actions';
import './styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className='collection-item'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>&#8377; {price}</span>
			</div>
			<CustomButton className='inverted' onClick={() => addItem(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
