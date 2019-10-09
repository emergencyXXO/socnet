import React from 'react';
import './style.module.css';
import {NavLink} from "react-router-dom";
import MyFriendsCont from "./MyFriends/container";


const Aside = () => {
    return (

        <aside>

            <div className="menu">
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/dialogs">Message</NavLink>
                <NavLink to="/users">Find friends</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink to="/settings">Setting</NavLink>
            </div>
            <MyFriendsCont />

        </aside>


    )
}

export default Aside;


