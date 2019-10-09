import {AddPostActionCreator} from "../../../reducer/ProfilePageReducer";
import NewPost from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        textArea: state.ProfilePage.textArea
    }

};

let mapDispatchToProps = (dispatch) => {
    return{
        AddPost : (NewPost) =>{
            dispatch(AddPostActionCreator(NewPost))
        }

    }
};


const NewPostCont = connect(mapStateToProps,mapDispatchToProps)(NewPost);

export default NewPostCont;