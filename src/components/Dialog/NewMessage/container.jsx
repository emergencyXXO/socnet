import {connect} from "react-redux";
import {AddMassageActionCreator} from "../../../reducer/DialogPageReducer";
import NewMessage from "./index";



let mapStateToProps = (state) => {
    return{
        inputArea: state.DialogPage.inputArea
    }

};

let mapDispatchToProps = (dispatch) => {
    return{
        newMess : (NewMess) =>{
            dispatch(AddMassageActionCreator(NewMess))
        }

    }
};



const NewMessageCont = connect(mapStateToProps,mapDispatchToProps)(NewMessage);


export default NewMessageCont;