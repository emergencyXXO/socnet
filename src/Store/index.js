const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';

const ADD_MASSAGE = 'ADD-MASSAGE';
const CHANGE_INPUT_AREA = 'CHANGE-INPUT-AREA';

let Store = {
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    _state: {
        ProfilePage: {
            PostData: [
                {id: 1, text: "asdas", like: 10},
                {id: 2, text: "asdasd", like: 10},
                {id: 3, text: "asdasd", like: 10},
                {id: 4, text: "Galasdia", like: 10},
            ],
            textArea: ''
        },
        DialogPage: {
            UserData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Vasa"},
                {id: 3, name: "Petia"},
                {id: 4, name: "Galia"},
            ], MessageData: [
                {id: 1, text: "asdas"},
                {id: 2, text: "asdasd"},
                {id: 3, text: "asdasd"},
                {id: 4, text: "Galasdia"},
            ],
            inputArea: ""
        },
        Aside: {
            FriendsData: [
                {name: 'Vasa'},
                {name: 'Petia'},
                {name: 'Galia'},
            ]
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {


        if (action.type === ADD_POST) {
            let NewPost = {
                id: 5,
                text: this._state.ProfilePage.textArea,
                like: 10
            }
            this._state.ProfilePage.PostData.push(NewPost);
            this._state.ProfilePage.textArea = '';
            this._callSubscriber(this._state);

        } else if (action.type === CHANGE_TEXT_AREA) {

            this._state.ProfilePage.textArea = action.massage;
            this._callSubscriber(this._state);

        }  else if (action.type === ADD_MASSAGE) {

            let NewMass = {
                id: 65,
                text: this._state.DialogPage.inputArea,
            }

            this._state.DialogPage.MessageData.push(NewMass);
            this._state.DialogPage.inputArea = '';
            this._callSubscriber(this._state);
            
        }   else if (action.type === CHANGE_INPUT_AREA) {

            this._state.DialogPage.inputArea = action.massage;
            this._callSubscriber(this._state);

        }
    }
}
export const AddPostActionCreator = () => ({type: ADD_POST});
export const TextChangeActionCreator = (text) => ({type: CHANGE_TEXT_AREA, massage: text});


export const AddMassageActionCreator = () => ({type: ADD_MASSAGE});
export const InputChangeActionCreator = (text) => ({type: CHANGE_INPUT_AREA, massage: text});

export default Store;