import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/HOC/WithSpinner';
import CollectionView from './CollectionView';

const mapStateToProps = (state) => ({ isLoading: !selectIsCollectionLoaded(state) });

//Container pattern
const CollectionViewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionView);

export default CollectionViewContainer;
