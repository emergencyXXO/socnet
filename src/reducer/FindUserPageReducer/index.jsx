import { FollowApi, UserApi } from '../../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let InitialState = {
	FindUserData: [],
	PageSize: 5,
	TotalUserCount: 0,
	CurrentPage: 1,
	isFetching: false,
	isFollowProgress: [],
};

let FindUserPageReducer = (state = InitialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				FindUserData: state.FindUserData.map(el => {
					if (el.id === action.userId) {
						return { ...el, followed: true };
					}
					return el;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				FindUserData: state.FindUserData.map(el => {
					if (el.id === action.userId) {
						return { ...el, followed: false };
					}
					return el;
				}),
			};
		case SET_USERS:
			return {
				...state,
				FindUserData: action.users,
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				CurrentPage: action.currentPage,
			};
		case SET_TOTAL_COUNT:
			return {
				...state,
				TotalUserCount: action.TotalUserCount,
			};
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case TOGGLE_FOLLOWING:
			return {
				...state,
				isFollowProgress: action.isFollowProgress
					? [...state.isFollowProgress, action.userId]
					: state.isFollowProgress.filter(id => id !== action.userId),
			};

		default:
			return state;
	}
};

export const Follow = userId => ({ type: FOLLOW, userId });
export const Unfollow = userId => ({ type: UNFOLLOW, userId });
export const SetUsers = users => ({ type: SET_USERS, users });
export const SetCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const SetTotalCount = TotalUserCount => ({ type: SET_TOTAL_COUNT, TotalUserCount });
export const SetIsFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });
export const SetIsFollowProgress = (isFollowProgress, userId) => ({ type: TOGGLE_FOLLOWING, isFollowProgress, userId });

export const getUserThunkCreator = (CurrentPage, PageSize) => async dispatch => {
	dispatch(SetIsFetching(true));
	dispatch(SetCurrentPage(CurrentPage));
	let response = await UserApi.getUsers(CurrentPage, PageSize);

	if (response.status === 200) {
		dispatch(SetUsers(response.data.items));
		dispatch(SetTotalCount(response.data.totalCount));
		dispatch(SetIsFetching(false));
	}
};

export const followThunkCreator = id => async dispatch => {
	dispatch(SetIsFollowProgress(true, id));
	let response = await FollowApi.follow(id);
	if (response.resultCode === 0) {
		dispatch(Follow(id));
		dispatch(SetIsFollowProgress(false, id));
	}
};

export const unfollowThunkCreator = id => async dispatch => {
	dispatch(SetIsFollowProgress(true, id));
	let response = await FollowApi.unfollow(id);
	if (response.resultCode === 0) {
		dispatch(Unfollow(id));
		dispatch(SetIsFollowProgress(false, id));
	}
};

export default FindUserPageReducer;
