const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';

let InitialState = {
    PostData: [
        {id: 1, text: "asdas", like: 10},
        {id: 2, text: "asdasd", like: 10},
        {id: 3, text: "asdasd", like: 10},
        {id: 4, text: "Galasdia", like: 10},
    ],
    textArea: ''
}


let ProfilePageReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT_AREA: {

            return {
                ...state,
                textArea: action.massage
            }
        }


        case ADD_POST:
            let NewPost = state.textArea;

            return {
                ...state,
                textArea: '',
                PostData : [...state.PostData, {id:32, like:10, text: NewPost} ]
            }

        default:
            return state;

    }
}
export default ProfilePageReducer;

export const AddPostActionCreator = () => ({type: ADD_POST});
export const TextChangeActionCreator = (text) => ({type: CHANGE_TEXT_AREA, massage: text});