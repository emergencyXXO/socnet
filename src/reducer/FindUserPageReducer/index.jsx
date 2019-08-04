const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let InitialState = {
    FindUserData: [
        {name: 'Vasa', id: 1, photoUrl:'https://www.meme-arsenal.com/memes/1f8764fe7cc4c78b6986058684fab9a4.jpg', status: 'Play football', location: 'Kyiv, Ukraine', followed: true},
        {name: 'Petia', id: 2, photoUrl:'https://www.meme-arsenal.com/memes/1f8764fe7cc4c78b6986058684fab9a4.jpg', status: 'Learn react', location: 'Odessa, Ukraine', followed: false},
        {name: 'Galia', id: 3, photoUrl:'https://www.meme-arsenal.com/memes/1f8764fe7cc4c78b6986058684fab9a4.jpg', status: 'Kill Moskal', location: 'Lviv, Ukraine', followed: true},
    ]
};

let FindUserPageReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                FindUserData: state.FindUserData.map(el => {

                    if (el.id === action.userId) {
                        return{...el, followed : false}
                    }
                    return el;

                })
            }

        case UNFOLLOW:
            return {
                ...state,
                FindUserData: state.FindUserData.map(el => {

                    if (el.id === action.userId) {
                        return{...el, followed : true}
                    }
                    return el;
                })
            }
        case SET_USERS:
            return{
                ...state,
                FindUserData:[...state.FindUserData, action.users]
            }

        default:
            return state;
    }

}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const SetUsersctionCreator = (users) => ({type: SET_USERS, users});

export default FindUserPageReducer;