import React from 'react';

import PostArea from "./index";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return{
        PostData: state.ProfilePage.PostData
    }

};

let mapDispatchToProps = (dispatch) => {
    return{

    }
};


const PostAreaCont = connect(mapStateToProps,mapDispatchToProps)(PostArea);

export default PostAreaCont;