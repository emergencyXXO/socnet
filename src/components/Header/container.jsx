import React from 'react';
import cls from './style.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (

        <header>
            <div className="container">
                <div className="line">
                    <div className="left">
                        <div className={cls.logo}
                             style={{backgroundImage: 'url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)'}}/>
                        <p className={cls.header}>NoSoc.Net</p>
                    </div>
                    <div className="right">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;