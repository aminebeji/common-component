import React from 'react'
import "./../styles/sidebar.css"
import SideBarMenu from './SideBarMenu'
function SideBar({ sideBarMeun, logo, title }) {
    return (
        <div className='sidebar'>
            {/*
            <div className="sidebar__logo_container">
                <img className='navbar__logo' src={logo} alt={title} />
                <h1 className="navbar__title" > {title} </h1>
            </div>
           */}
            {sideBarMeun && <SideBarMenu menu={sideBarMeun} />}
        </div>
    )
}

export default SideBar