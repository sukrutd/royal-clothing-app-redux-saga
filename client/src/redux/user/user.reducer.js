import { UserActionTypes } from './user.types';

const initialState = {
	currentUser: null,
	errorMessage: ''
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_IN_SUCCESS:
			return { ...state, currentUser: action.payload, errorMessage: '' };

		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
			return { ...state, currentUser: null, errorMessage: action.payload };

		case UserActionTypes.SIGN_OUT_SUCCESS:
			return { ...state, currentUser: null, errorMessage: '' };

		case UserActionTypes.SIGN_OUT_FAILURE:
			return { ...state, errorMessage: action.payload };

		default:
			return state;
	}
};

export default userReducer;
