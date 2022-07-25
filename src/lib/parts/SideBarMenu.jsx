import React from 'react'
import { useState } from 'react'


const MenuItem = (item, key) => {
    const [ActiveMenu, setActiveMenu] = useState(false)
    return <li className={`sidebar__meun_item`} key={key} >
        {!item.children
            ? <a href={item.link}> {item.title} </a>
            : <h1 onClick={() => { setActiveMenu(!ActiveMenu) }}> {item.title} </h1>}
        <ul> {item.children && ActiveMenu && item.children.map(MenuItem)}</ul>
    </li>
}

function SideBarMenu({ menu }) {

    return (
        <ul className={`sidebar__menu`}>
            {menu.map(MenuItem)}
        </ul>
    )
}

export default SideBarMenu