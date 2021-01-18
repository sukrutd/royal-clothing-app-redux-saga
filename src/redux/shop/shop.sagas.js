import { takeLatest, call, put } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
