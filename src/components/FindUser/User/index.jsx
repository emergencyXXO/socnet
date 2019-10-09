import React from 'react';
import cls from './style.module.scss';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (

        <div className={`${cls.user_item} line`}>
            <div className={cls.left}>
                <NavLink to={`/profile/${props.id}`}>
                    <div className={cls.img}
                         style={{backgroundImage: `url(${ props.photoUrl != null ? props.photoUrl : 'https://www.meme-arsenal.com/memes/1f8764fe7cc4c78b6986058684fab9a4.jpg'})`}}/>
                </NavLink>
                {props.followed ?
                    <button disabled={props.isFollowProgress.some(id => id === props.id)}
                            onClick={() => {props.unfollowThunkCreator(props.id)}}
                            className={cls.unfollow}>Unfollow</button>
                :
                    <button disabled={props.isFollowProgress.some(id => id === props.id)}
                            onClick={() => {props.followThunkCreator(props.id)}}
                            className={cls.follow}>Follow</button>
                }
            </div>
            <div className={`${cls.right} line`}>
                <div className={cls.left}>
                    <p className={cls.name}>{props.name}</p>
                    <p className={cls.status}>{props.status}</p>
                </div>
                <div className={cls.right}>
                    <p className={cls.location}>Kyiv, Ukraina</p>
                </div>
            </div>
        </div>
    )
}

export default Users;