const ADD_MASSAGE = 'ADD-MASSAGE';

let InitialState = {
    UserData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Vasa"},
        {id: 3, name: "Petia"},
        {id: 4, name: "Galia"},
    ],
    MessageData: [
        {id: 1, text: "asdas"},
        {id: 2, text: "asdasd"},
        {id: 3, text: "asdasd"},
        {id: 4, text: "Galasdia"},
    ]
};


let DialogPageReducer = (state = InitialState, action) => {


    switch (action.type) {

        case ADD_MASSAGE: {
            return {
                ...state,
                MessageData: [...state.MessageData, {id: 65, text: action.NewMess}]
            }
        }


        default:
            return state;
    }

}
export default DialogPageReducer;

export const AddMassageActionCreator = (NewMess) => ({type: ADD_MASSAGE, NewMess});
