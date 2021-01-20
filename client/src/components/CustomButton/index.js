import React from 'react';
import './styles.scss';

const CustomButton = ({ children, className, ...otherProperties }) => {
	const customClassName = `${className || ''} custom-button`.trim();

	return (
		<button className={customClassName} {...otherProperties}>
			{children}
		</button>
	);
};

export default CustomButton;
