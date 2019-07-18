import React from 'react';
import './style.module.css';
import {NavLink} from "react-router-dom/umd/react-router-dom";
import MyFrinds from './MyFriends/'

const Aside = (props) => {
    return (

        <aside>
            <div className="menu">
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/dialogs">Message</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink to="/settings">Setting</NavLink>
            </div>
            <MyFrinds friends={props.friends} />
        </aside>


    )
}

export default Aside;


