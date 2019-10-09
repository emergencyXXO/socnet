import { AuthApi } from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_PENNDING = 'TOGGLE_PENNDING';

let InitialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isPending: false,
};

let AuthReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case TOGGLE_PENNDING:
			return {
				...state,
				isPending: action.turn,
			};
		default:
			return state;
	}
};

export const setPending = turn => ({
	type: TOGGLE_PENNDING,
	turn,
});

export const setUserData = (id, email, login, isAuth) => ({
	type: SET_USER_DATA,
	data: {
		id,
		email,
		login,
		isAuth,
	},
});

export const getMeThunkCreator = () => async dispatch => {
	let response = await AuthApi.me();
	if (response.resultCode === 0) {
		let { id, email, login } = response.data;
		dispatch(setUserData(id, email, login, true));
		dispatch(setPending(false));
	}
};

export const loginThunkCreator = (email, password, rememberMe) => async dispatch => {
	let response = await AuthApi.login(email, password, rememberMe).catch(() => {
		dispatch(setPending(false));
	});

	if (response.resultCode === 0) {
		dispatch(getMeThunkCreator());
	} else {
		let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
		dispatch(stopSubmit('loginFrom', { _error: message }));
		dispatch(setPending(false));
	}
};
export const logoutThunkCreator = () => async dispatch => {
	let response = await AuthApi.logout();
	if (response.resultCode === 0) {
		dispatch(setUserData(null, null, null, false));
	}
};

export default AuthReducer;
