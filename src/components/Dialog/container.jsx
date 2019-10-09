import {connect} from "react-redux";
import React from "react";
import Dialog from "./index";
import {withAuthRedirect} from "../../hoc/withAuth";
import {compose} from "redux";


class DialogContainer extends React.Component{


    render() {


        return <Dialog {...this.props} />

    }
}


let mapStateToProps = (state) => {
    return{
        UserData: state.DialogPage.UserData,
        MessageData:state.DialogPage.MessageData,
    }

};




export default compose(connect(mapStateToProps),withAuthRedirect)(DialogContainer);