import ProfilePageReducer from "../reducer/ProfilePageReducer";
import DialogPageReducer from "../reducer/DialogPageReducer";
import AsideReducer from "../reducer/AsideReducer";

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


        this._state.ProfilePage = ProfilePageReducer(this._state.ProfilePage, action);
        this._state.DialogPage = DialogPageReducer(this._state.DialogPage, action);
        this._state.Aside = AsideReducer(this._state.Aside, action);

        this._callSubscriber(this._state);


    }
}





export default Store;