import {connect} from 'react-redux';
import FindUser from "./index";
import {
   followThunkCreator,
   getUserThunkCreator,
   unfollowThunkCreator
} from "../../reducer/FindUserPageReducer";
import {withAuthRedirect} from "../../hoc/withAuth";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        FindUserData: state.FindUserPage.FindUserData,
        PageSize: state.FindUserPage.PageSize,
        TotalUserCount: state.FindUserPage.TotalUserCount,
        CurrentPage: state.FindUserPage.CurrentPage,
        isFetching: state.FindUserPage.isFetching,
        isFollowProgress: state.FindUserPage.isFollowProgress
    }


}




export default compose(connect(mapStateToProps, {
    getUserThunkCreator, followThunkCreator, unfollowThunkCreator,
}),withAuthRedirect)(FindUser)