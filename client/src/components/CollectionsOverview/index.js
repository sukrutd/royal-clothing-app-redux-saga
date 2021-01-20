import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors';
import CollectionsOverView from './CollectionsOverview';
import WithSpinner from '../HOC/WithSpinner';

const mapStateToProps = createStructuredSelector({ isLoading: selectIsFetchingCollections });

//Container pattern
const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverView);

export default CollectionsOverviewContainer;
