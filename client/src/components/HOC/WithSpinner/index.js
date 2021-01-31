import React from 'react';
import Spinner from '../../Spinner';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProperties }) => {
	return isLoading ? <Spinner /> : <WrappedComponent {...otherProperties} />;
};

export default WithSpinner;
