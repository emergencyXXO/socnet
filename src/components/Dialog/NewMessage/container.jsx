import React from 'react';
import {connect} from "react-redux";
import {AddMassageActionCreator, InputChangeActionCreator} from "../../../reducer/DialogPageReducer";
import NewMessage from "./index";



let mapStateToProps = (state) => {
    return{
        inputArea: state.DialogPage.inputArea
    }

};

let mapDispatchToProps = (dispatch) => {
    return{
        newMess : () =>{
            dispatch(AddMassageActionCreator())
        },
        text_change: (text) => {
            dispatch(InputChangeActionCreator(text))
        }

    }
};



const NewMessageCont = connect(mapStateToProps,mapDispatchToProps)(NewMessage);


export default NewMessageCont;