import React from 'react'
import "./../styles/navbar.css"
import MenuItems from './MenuItems'
function NavBar({ logo, title, items }) {

    return (
        <div className='navbar'>
            <div className="navbar__logo_container">
                <img className='navbat__logo' src={logo} alt={title} />
                <h1 className="navbar__title" > {title} </h1>
            </div>
            <ul className='navbar__menu'>
                <MenuItems items={items} />
            </ul>
        </div>
    )
}

export default NavBar