import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartDropdown from '../CartDropdown';
import CartIcon from '../CartIcon';
import './styles.scss';

const Header = ({ currentUser, cartDropdownHidden, signOutStart }) => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
			ROYAL CLOTHING
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='/contact' className='option'>
				CONTACT
			</Link>
			{currentUser ? (
				<button className='link-button option' onClick={signOutStart}>
					SIGN OUT
				</button>
			) : (
				<Link to='/signin' className='option'>
					SIGN IN
				</Link>
			)}
			<CartIcon className='option' />
		</div>
		{!cartDropdownHidden && <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartDropdownHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
