import React, { Fragment, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../Sidebar/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        console.log('here')
        setIsOpen(!isOpen);
    }
    return (
        <Fragment>
            <NavBar toggleSidebar={toggleSidebar} />
            {isOpen && <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
            <Outlet />
        </Fragment>


    )
}

export default Layout