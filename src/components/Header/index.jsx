import React from 'react';
import cls from './style.module.scss';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (

        <header>
            <div className="container">
                <div className={`line ${cls.line}`}>
                    <div className="left">
                        <div className={cls.logo}
                             style={{backgroundImage: 'url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)'}}/>
                        <p className={cls.header}>NoSoc.Net</p>
                    </div>
                    <div className="right">
                        {props.isAuth ? <div className={cls.admin_block}>
                            <p className={cls.login}>
                                <span>Login:</span>
                                <span> {props.login}</span>
                            </p>
                            <p className={cls.logout} onClick={props.logout}>
                                <span>Logout</span>
                            </p>
                        </div> : <NavLink className={cls.login}
                                          to="/login">Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;