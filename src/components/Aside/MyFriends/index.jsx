import React from 'react';
import cls from './style.module.css';
import Friend from './Friend/';
const MyFriends = (props) => {
    return (

        <div className={cls.friend_list}>
            {props.friends.map((el) => <Friend name={el.name}/>)}
        </div>
    )
}

export default MyFriends;