import React from 'react';

function Header() {
    return (

        <header>
            <div className="container">
                <div className="logo"
                     style={{backgroundImage: 'url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)'}}></div>
                <p className="header">SocNet</p>
            </div>
        </header>
    )
}

export default Header;