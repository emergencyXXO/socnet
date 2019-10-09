import MyFriends from "./index";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        FriendsData: state.Aside.FriendsData
    }

};

let mapDispatchToProps = (dispatch) => {
    return{

    }
};


const MyFriendsCont = connect(mapStateToProps,mapDispatchToProps)(MyFriends);


export default MyFriendsCont;