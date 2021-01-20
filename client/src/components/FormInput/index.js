import React from 'react';
import './styles.scss';

const FormInput = ({ label, handleChange, ...otherProperties }) => {
	return (
		<div className='form-group'>
			<input className='form-control' onChange={handleChange} {...otherProperties} />
			{label && <label className={`${otherProperties.value.length ? 'shrink' : ''} form-label`}>{label}</label>}
		</div>
	);
};

export default FormInput;
