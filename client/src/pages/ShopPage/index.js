import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import './styles.scss';

const CollectionsOverview = lazy(() => import('../../components/CollectionsOverview'));
const CollectionView = lazy(() => import('../CollectionView'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<Suspense>
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route exact path={`${match.path}/:collectionId`} component={CollectionView} />
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
