import {createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import ProfilePageReducer from "../reducer/ProfilePageReducer";
import DialogPageReducer from "../reducer/DialogPageReducer";
import AsideReducer from "../reducer/AsideReducer";
import FindUserPageReducer from "../reducer/FindUserPageReducer";


let reducers = combineReducers({
    ProfilePage:ProfilePageReducer,
    DialogPage:DialogPageReducer,
    Aside:AsideReducer,
    FindUserPage:FindUserPageReducer
})

let store = createStore(reducers);


export default store;