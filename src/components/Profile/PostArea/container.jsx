import PostArea from './index';
import { connect } from 'react-redux';
import { DeletePostActionCreator } from '../../../reducer/ProfilePageReducer';

let mapStateToProps = state => {
	return {
		PostData: state.ProfilePage.PostData,
	};
};

const PostAreaCont = connect(
	mapStateToProps,
	{ DeletePostActionCreator },
)(PostArea);

export default PostAreaCont;
