import React, { useEffect, useState } from 'react';
import cls from './style.module.scss';

let ProfileStatus = props => {
	// state = {
	//     editMode: false,
	//     status: props.status
	// }
	//
	// componentDidUpdate(prevProps){
	//     if(prevProps.status != props.status){
	//         this.setState({status:props.status})
	//     }
	//
	// }

	let [editMode, SetEditMode] = useState(false);
	let [status, SetStatus] = useState(props.status);

	useEffect(
		() => {
			SetStatus(props.status);
		},
		[props.status],
	);

	return (
		<div className={cls.status}>
			{!editMode && (
				<div
					onDoubleClick={() => {
						SetEditMode(true);
					}}
					className={cls.show}
				>
					<p className={cls.text}>{props.status || '---'}</p>
				</div>
			)}
			{editMode && (
				<div className={cls.edit}>
					<input
						value={status}
						onChange={e => {
							SetStatus(e.currentTarget.value);
						}}
						autoFocus
						onBlur={() => {
							SetEditMode(false);
							props.updateStatus(status);
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default ProfileStatus;
