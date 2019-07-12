import React from 'react';
import cls from './style.module.css';
const User = (props) => {
    return (
        <div className={cls.dialog_item}>
            <p className={cls.name}>{props.name}</p>
        </div>
    )
}

export default User;