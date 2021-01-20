import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './styles.scss';

const cartIcon = ({ className, itemCount, toggleCartHidden }) => (
	<div className={className ? `${className} cart-icon` : 'cart-icon'} onClick={toggleCartHidden}>
		<ShoppingBag className='shopping-bag' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapStateToProps = (state) => ({ itemCount: selectCartItemsCount(state) });

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
