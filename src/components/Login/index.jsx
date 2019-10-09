import React from 'react';
import cls from './style.module.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../FormControl';
import { required } from '../../util/validations/validators';
import { loginThunkCreator, logoutThunkCreator, setPending } from '../../reducer/AuthReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = props => {
	return (
		<div className={cls.login__block}>
			<form onSubmit={props.handleSubmit}>
				<Field name="email" component={Input} validate={[required]} placeholder="Email" />
				<Field name="password" component={Input} type="password" validate={[required]} placeholder="password" />
				<p className={cls.error}>{props.error}</p>
				<label htmlFor="rem">
					<Field name="rememberMe" component={Input} id="rem" type="checkbox" />
					<p>remember me</p>
				</label>
				<button disabled={props.isPending}>submit</button>
			</form>
		</div>
	);
};

const LoginReduxForm = reduxForm({
	form: 'loginFrom',
})(LoginForm);

const Login = props => {
	const onSubmit = formData => {
		props.setPending(true);
		props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
	};
	if (props.isAuth) {
		return <Redirect to="/profile" />;
	}

	return <LoginReduxForm onSubmit={onSubmit} isPending={props.isPending} />;
};
const mapStateToProps = state => ({
	isAuth: state.AuthPage.isAuth,
	isPending: state.AuthPage.isPending,
});

export default connect(
	mapStateToProps,
	{ loginThunkCreator, logoutThunkCreator, setPending },
)(Login);
