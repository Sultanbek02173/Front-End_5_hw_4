import React from 'react';
import { HeaderComponent } from '../../components';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <HeaderComponent />
            </header>
            <Outlet />
        </>
    );
}

export default Navbar;
