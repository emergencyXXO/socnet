import React from 'react';
import cls from './style.module.scss';
import User from './User'

const FindUser = (props) => {

    return (
        <div className={cls.user_page}>
            <p className={cls.had}>Users</p>
            <div className={cls.users_list}>
                {props.FindUserData.map(el => <User key={el.id} id={el.id} photoUrl={el.photoUrl} name={el.name} status={el.status}
                                                    location={el.location} followed={el.followed} follow={props.follow}
                                                    unfollow={props.unfollow}/>)}
            </div>
            <button className={cls.show}> Show More</button>
        </div>


    )
}

export default FindUser;


