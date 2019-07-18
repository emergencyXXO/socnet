import React from 'react';
import cls from './style.module.css';
import {NavLink} from "react-router-dom";
const User = (props) => {
    return (
        <div className={cls.dialog_item}>
            <NavLink to={"/dialog/" + props.id} className={cls.name}>{props.name}</NavLink>
        </div>
    )
}

export default User;