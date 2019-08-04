import React from 'react';
import {AddPostActionCreator, TextChangeActionCreator} from "../../../reducer/ProfilePageReducer";
import NewPost from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        textArea: state.ProfilePage.textArea
    }

};

let mapDispatchToProps = (dispatch) => {
    return{
        sub_action : () =>{
            dispatch(AddPostActionCreator())
        },
        text_change : (text) => {
            dispatch(TextChangeActionCreator(text))
        }

    }
};


const NewPostCont = connect(mapStateToProps,mapDispatchToProps)(NewPost);

export default NewPostCont;