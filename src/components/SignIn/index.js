import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [userCredentials, setCredentials] = useState({ email: '', password: '' });
	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<p>Sign in with your email and password.</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={email}
					label='Email Address'
					handleChange={handleChange}
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					label='Password'
					handleChange={handleChange}
					required
				/>
				<div className='justify-center'>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton type='button' className='google-sign-in-button' onClick={googleSignInStart}>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
