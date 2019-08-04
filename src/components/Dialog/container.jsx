import {connect} from "react-redux";
import Dialog from "./index";


let mapStateToProps = (state) => {
    return{
        UserData: state.DialogPage.UserData,
        MessageData:state.DialogPage.MessageData,
    }

};

let mapDispatchToProps = (dispatch) => {
    return{

    }
};


const DialogCont = connect(mapStateToProps,mapDispatchToProps)(Dialog);

export default DialogCont;