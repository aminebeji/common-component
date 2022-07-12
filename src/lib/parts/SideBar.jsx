import React from 'react'
import "./../styles/sidebar.css"
function SideBar({ sideBarMenu, logo, title }) {
    return (
        <div className='sidebar'>
            <div className="sidebar__logo_container">
                <img className='navbar__logo' src={logo} alt={title} />
                <h1 className="navbar__title" > {title} </h1>
            </div>
        </div>
    )
}

export default SideBar