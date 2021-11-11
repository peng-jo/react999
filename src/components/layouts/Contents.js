import React from 'react';

function Header({children}){
    window.scrollTo(0, 0);
    return <main id="main">{children}</main>
}

export default Header;