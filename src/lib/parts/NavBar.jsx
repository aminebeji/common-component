import React from 'react'
import "./../styles/navbar.css"
import MenuItems from './MenuItems'
import MobileNav from './MobileNav'
function NavBar({ logo, title, items, ...rest }) {

    return (
        <div className='navbar'>
            <div className="navbar__logo_container">
                <img className='navbar__logo' src={logo} alt={title} />
                <h1 className="navbar__title" > {title} </h1>
            </div>
            <ul className='navbar__menu'>
                <MenuItems items={items} />
            </ul>
            <MobileNav />
        </div>
    )
}

export default NavBar