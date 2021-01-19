import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		signUpStart({ email, password, displayName });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className='sign-in'>
				<h2>I don't have an account</h2>
				<p>Sign up with your email and password.</p>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						label='Display Name'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						label='Email Address'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						label='Password'
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						label='Confirm Password'
						handleChange={this.handleChange}
						required
					/>
					<div className='justify-center'>
						<CustomButton type='submit'>Sign up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
