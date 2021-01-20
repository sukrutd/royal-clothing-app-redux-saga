import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		signUpStart({ email, password, displayName });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I don't have an account</h2>
			<p>Sign up with your email and password.</p>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					label='Display Name'
					handleChange={handleChange}
					required
				/>
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
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					label='Confirm Password'
					handleChange={handleChange}
					required
				/>
				<div className='justify-center'>
					<CustomButton type='submit'>Sign up</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
