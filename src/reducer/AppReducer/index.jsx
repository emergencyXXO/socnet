import { getMeThunkCreator } from '../AuthReducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let InitialState = {
	initialized: false,
};

let AppReducer = (state = InitialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			};
		default:
			return state;
	}
};

export const setInitialized = () => ({
	type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async dispatch => {
	await dispatch(getMeThunkCreator());

	dispatch(setInitialized());
};

export default AppReducer;
