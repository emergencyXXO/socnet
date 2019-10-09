import React from 'react';
import cls from './style.module.css';
import Post from './Post/';
import { DeletePostActionCreator } from '../../../reducer/ProfilePageReducer';

function PostArea(props) {
	return (
		<div className={cls.post__area}>
			{props.PostData.map(el => (
				<Post delPost={props.DeletePostActionCreator} key={el.id} id={el.id} text={el.text} like={el.like} />
			))}
		</div>
	);
}

export default PostArea;
