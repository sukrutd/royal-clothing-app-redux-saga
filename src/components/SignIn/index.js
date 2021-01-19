import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<p>Sign in with your email and password.</p>
				<form onSubmit={this.handleSubmit}>
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
					<div className='justify-center'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton type='button' className='google-sign-in-button' onClick={googleSignInStart}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
