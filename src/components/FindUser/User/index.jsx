import React from 'react';
import cls from './style.module.scss';
const User = (props) => {
    return (

        <div className={`${cls.user_item} line`}>
            <div className={cls.left}>
                <div className={cls.img}
                     style={{backgroundImage: `url(${props.photoUrl})`}}/>
                {props.followed ?
                    <button onClick={()=>{props.follow(props.id)}} className={cls.follow}>Follow</button> :
                    <button onClick={()=>{props.unfollow(props.id)}} className={cls.unfollow}>Unfollow</button> }

            </div>
            <div className={`${cls.right} line`}>
                <div className={cls.left}>
                    <p className={cls.name}>{props.name}</p>
                    <p className={cls.status}>{props.status}</p>
                </div>
                <div className={cls.right}>
                    <p className={cls.location}>{props.location}</p>
                </div>
            </div>
        </div>
    )
}

export default User;