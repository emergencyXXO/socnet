import React from 'react';
import cls from './style.module.css';

import NewPostCont from './NewPost/container';
import ProfileInfo from './ProfileInfo';
import PostArea from './PostArea/container';
import Preloader from '../Preloader';

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <div className={cls.content}>
                <div className={cls.background}
                     style={{backgroundImage: 'url(https://maxcdn.icons8.com/app/uploads/2016/06/zebra-wallpaper-desktop-background-p-o-ibackgroundz.com_1-2-1000x732.jpg)'}}/>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}/>
                <NewPostCont/>
                <PostArea/>
            </div>
        </>
    )
}

export default Profile;


