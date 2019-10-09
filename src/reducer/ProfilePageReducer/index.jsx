import { ProfileApi } from '../../api/api';

const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DEL_POST = 'DEL_POST';

let InitialState = {
	PostData: [
		{ id: 1, text: 'asdas', like: 10 },
		{ id: 2, text: 'asdasd', like: 10 },
		{ id: 3, text: 'asdasd', like: 10 },
		{ id: 4, text: 'Galasdia', like: 10 },
	],
	profile: null,
	isFetching: false,
	status: '',
};

let ProfilePageReducer = (state = InitialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				textArea: '',
				PostData: [...state.PostData, { id: 32, like: 10, text: action.NewPost }],
			};
		case DEL_POST:
			return {
				...state,
				PostData: state.PostData.filter(e => e.id !== action.id),
			};
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_USER_STATUS:
			return {
				...state,
				status: action.status,
			};

		default:
			return state;
	}
};
export default ProfilePageReducer;

export const AddPostActionCreator = NewPost => ({ type: ADD_POST, NewPost });
export const DeletePostActionCreator = id => ({ type: DEL_POST, id });
export const SetUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = status => ({ type: SET_USER_STATUS, status });
export const SetIsFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });

export const getUserStatusThunkCreator = userId => async dispatch => {
	let response = await ProfileApi.getStatus(userId);
	if (response.status === 200) {
		dispatch(setUserStatus(response.data));
	}
};

export const updateUserStatusThunkCreator = status => async dispatch => {
	let response = await ProfileApi.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setUserStatus(status));
	}
};

export const getProgileInfoThunkCreator = userId => async dispatch => {
	dispatch(SetIsFetching(true));
	ProfileApi.getProgileInfo(userId).then(response => {
		dispatch(SetUserProfile(response));
		dispatch(SetIsFetching(false));
	});
};

window.DeletePostActionCreator = DeletePostActionCreator;
