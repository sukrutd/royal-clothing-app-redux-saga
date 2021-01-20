import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import './styles.scss';

const AuthPage = () => {
	return (
		<div className='auth-container'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default AuthPage;
