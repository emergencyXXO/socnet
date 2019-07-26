import React from 'react';
import cls from './style.module.css';
import Post from './Post/'
import New_post from "./New_post";
import Profile_info from "./Profile_info";

const Profile = (props) => {


    return (

        <div className={cls.content}>
            <div className={cls.background} style={{ backgroundImage: 'url(https://maxcdn.icons8.com/app/uploads/2016/06/zebra-wallpaper-desktop-background-p-o-ibackgroundz.com_1-2-1000x732.jpg)'}}></div>
            <Profile_info />
            <New_post textArea={props.profilePage.textArea} dispatch={props.dispatch}/>
            <div className={cls.post__area}>
                {props.profilePage.PostData.map(el => <Post id={el.id} text={el.text} like={el.like} />)}
            </div>
        </div>
    )
}

export default Profile;


