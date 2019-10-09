import React from 'react';
import Profile from './index';
import { connect } from 'react-redux';
import {
	getProgileInfoThunkCreator,
	getUserStatusThunkCreator,
	updateUserStatusThunkCreator,
} from '../../reducer/ProfilePageReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuth';
import { compose } from 'redux';
import { getProfilePage } from '../../userSelector';

class ContainerProfile extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.myId;
		}
		this.props.getProgileInfoThunkCreator(userId);
		this.props.getUserStatusThunkCreator(userId);
	}

	render() {
		return (
			<Profile
				profile={this.props.profile}
				isFetching={this.props.isFetching}
				status={this.props.status}
				updateStatus={this.props.updateUserStatusThunkCreator}
			/>
		);
	}
}

let mapStateToProps = state => {
	return {
		profile: getProfilePage(state).profile,
		isFetching: getProfilePage(state).isFetching,
		status: getProfilePage(state).status,
		myId: state.AuthPage.id,
	};
};

export default compose(
	connect(
		mapStateToProps,
		{
			getProgileInfoThunkCreator,
			getUserStatusThunkCreator,
			updateUserStatusThunkCreator,
		},
	),
	withAuthRedirect,
	withRouter,
)(ContainerProfile);
