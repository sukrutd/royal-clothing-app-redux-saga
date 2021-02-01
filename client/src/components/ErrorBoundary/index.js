import React, { Component } from 'react';
import './styles.scss';

class ErrorBoundary extends Component {
	state = {
		hasError: false
	};

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='error-image-overlay'>
					<div className='error-image-container'></div>
					<h2 className='error-image-text'>Sorry, this page is broken</h2>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
