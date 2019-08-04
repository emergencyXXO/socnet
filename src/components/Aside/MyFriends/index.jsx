import React from 'react';
import cls from './style.module.css';
import Friend from './Friend/';
const MyFriends = (props) => {
    return (

        <div className={cls.friend_list}>
            {props.FriendsData.map((el) => <Friend key={el.id} name={el.name}/>)}
        </div>
    )
}

export default MyFriends;