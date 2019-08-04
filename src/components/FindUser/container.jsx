
import {connect} from 'react-redux';
import FindUser from "./index";
import {followActionCreator, SetUsersctionCreator, unfollowActionCreator} from "../../reducer/FindUserPageReducer";



let mapStateToProps = (state) => {

    return{
        FindUserData : state.FindUserPage.FindUserData
    }


}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow : (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId)=> {

            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) =>{
            dispatch(SetUsersctionCreator(users))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(FindUser);


