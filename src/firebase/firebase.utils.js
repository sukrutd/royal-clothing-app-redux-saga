import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAmrhwQzF2DZxrteV71HcO8Cur8xcf2NcI',
	authDomain: 'royal-clothing-db.firebaseapp.com',
	projectId: 'royal-clothing-db',
	storageBucket: 'royal-clothing-db.appspot.com',
	messagingSenderId: '42538911801',
	appId: '1:42538911801:web:d74b818adff0dba5b025e8',
	measurementId: 'G-X6JZ2BHJ47'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('Error occurred while creating a user: ', error.message);
		}
	}

	return userRef;
};

// Function to create a new firestore collection and batch write documents into that collection
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	// Batch write ensures atomicity & consistency in the code
	const batch = firestore.batch();

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collection) => {
	const transformedCollection = collection.docs.map((doc) => {
		const { title, items } = doc.data();
		return { id: doc.id, routeName: encodeURI(title.toLowerCase()), title, items };
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export default firebase;
