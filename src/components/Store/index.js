let RerenderFunc = () => {

}

let Store = {
    getState() {
        return this._state;
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
            ]
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
        RerenderFunc = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let NewPost = {
                id: 5,
                text: this._state.ProfilePage.textArea,
                like: 10
            }
            this._state.ProfilePage.PostData.push(NewPost);
            this._state.ProfilePage.textArea = '';
            RerenderFunc(this._state);

        } else if (action.type === 'CHANGE-TEXT-AREA') {
            this._state.ProfilePage.textArea = action.massage;
            RerenderFunc(this._state);
        }
    }
}


export default Store;