import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Aside from './components/Aside/';
import DialogCont from './components/Dialog/container';
import News from './components/News/';
import Music from './components/Music/';
import Settings from './components/Settings/';
import FindUserCont from './components/FindUser/container';
import { Route, withRouter } from 'react-router-dom';
import ContainerProfile from './components/Profile/container';
import ContainerHeader from './components/Header/container';
import Login from './components/Login';
import { initializeApp } from './reducer/AppReducer';
import { compose } from 'redux';
import Preloader from './components/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
		return (
			<div className="App ">
				<ContainerHeader />
				<div className="main__part container">
					{this.props.isAuth && <Aside />}
					<Route path="/dialogs" render={() => <DialogCont />} />
					<Route path="/profile/:userId?" render={() => <ContainerProfile />} />
					<Route path="/" exact render={() => <ContainerProfile />} />
					<Route path="/users" render={() => <FindUserCont />} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/settings" render={() => <Settings />} />
					<Route path="/login" render={() => <Login />} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ isAuth: state.AuthPage.isAuth, initialized: state.app.initialized });

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		{ initializeApp },
	),
)(App);
