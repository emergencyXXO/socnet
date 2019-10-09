import React from 'react';
import cls from './style.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../util/validations/validators';
import { Textarea } from '../../FormControl';

const maxLengt10 = maxLengthCreator(10);

let PostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name="textarea" placeholder="type news" validate={[required, maxLengt10]} />
			<button>Send</button>
		</form>
	);
};

const PostReduxForm = reduxForm({
	form: 'newPostForm',
})(PostForm);

let NewPost = React.memo(props => {
	const onSubmit = formData => {
		console.log(formData);
		props.AddPost(formData.textarea);
	};

	return (
		<div className={cls.new__post}>
			<p className="had">My post</p>
			<PostReduxForm onSubmit={onSubmit} />
		</div>
	);
});

export default NewPost;
