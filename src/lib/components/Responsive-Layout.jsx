import React from 'react'
import NavBar from '../parts/NavBar'

function Layout({ title, items, logo }) {
    return (
        <div>
            <NavBar title={title || "responsive layout"} logo={logo || ""} items={items || [{ link: "/", title: "home" }]} />
        </div>
    )
}

export default Layout