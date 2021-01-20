import React from 'react';
import './styles.scss';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProperties }) => {
	return isLoading ? (
		<div className='spinner-overlay'>
			<div className='spinner-container'></div>
		</div>
	) : (
		<WrappedComponent {...otherProperties} />
	);
};

export default WithSpinner;
