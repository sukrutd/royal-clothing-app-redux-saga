import React, { memo } from 'react';
import './styles.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
	<div className='cart-item'>
		<img src={imageUrl} alt='Item' />
		<div className='item-details'>
			<span>{name}</span>
			<span>
				{quantity} x &#8377; {price}
			</span>
		</div>
	</div>
);

export default memo(CartItem);
