import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview';

const CollectionsOverview = ({ collections }) => (
	<div className='collection-overview'>
		{collections.map(({ id, ...collectionProperties }) => (
			<CollectionPreview key={id} {...collectionProperties} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({ collections: selectCollectionsForPreview });

export default connect(mapStateToProps)(CollectionsOverview);
