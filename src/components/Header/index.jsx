import React from 'react';
import cls from './style.module.css';
function Header() {
    return (

        <header>
            <div className="container">
                <div className={cls.logo} style={{backgroundImage: 'url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)'}}></div>
                <p className={cls.header}>NoSoc.Net</p>
            </div>
        </header>
    )
}

export default Header;