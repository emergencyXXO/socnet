import React from 'react';
import Header from './index';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../reducer/AuthReducer';

class ContainerHeader extends React.Component {
	logout = () => {
		this.props.logoutThunkCreator();
	};

	render() {
		return <Header logout={this.logout} {...this.props} />;
	}
}

let MapStateToProps = state => {
	return {
		login: state.AuthPage.login,
		isAuth: state.AuthPage.isAuth,
	};
};

export default connect(
	MapStateToProps,
	{ logoutThunkCreator },
)(ContainerHeader);
