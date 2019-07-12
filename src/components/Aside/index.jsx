import React from 'react';
import './style.module.css';
import {NavLink} from "react-router-dom/umd/react-router-dom";

const Aside = () => {
    return (

        <aside>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Message</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/settings">Setting</NavLink>
        </aside>
    )
}

export default Aside;


