const ADD_MASSAGE = 'ADD-MASSAGE';
const CHANGE_INPUT_AREA = 'CHANGE-INPUT-AREA';

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
    ],
    inputArea: ""
};


let DialogPageReducer = (state = InitialState, action) => {


    switch (action.type) {
        case  CHANGE_INPUT_AREA:
            return {
                ...state,
                inputArea: action.massage
            }


        case ADD_MASSAGE: {
            let NewMass = state.inputArea;
            return {
                ...state,
                inputArea: '',
                MessageData: [...state.MessageData, {id: 65, text: NewMass}]
            }
        }


        default:
            return state;
    }

}
export default DialogPageReducer;

export const AddMassageActionCreator = () => ({type: ADD_MASSAGE});
export const InputChangeActionCreator = (text) => ({type: CHANGE_INPUT_AREA, massage: text});