import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../MenuItem';
import './styles.scss';

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ id, ...sectionProperties }) => (
			<MenuItem key={id} {...sectionProperties} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export default connect(mapStateToProps)(Directory);
