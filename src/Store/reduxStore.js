import { applyMiddleware, compose, createStore } from 'redux';
import combineReducers from 'redux/src/combineReducers';
import ProfilePageReducer from '../reducer/ProfilePageReducer';
import DialogPageReducer from '../reducer/DialogPageReducer';
import AsideReducer from '../reducer/AsideReducer';
import FindUserPageReducer from '../reducer/FindUserPageReducer';
import AuthReducer from '../reducer/AuthReducer';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import AppReducer from '../reducer/AppReducer';

let reducers = combineReducers({
	ProfilePage: ProfilePageReducer,
	DialogPage: DialogPageReducer,
	Aside: AsideReducer,
	FindUserPage: FindUserPageReducer,
	AuthPage: AuthReducer,
	form: formReducer,
	app: AppReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
