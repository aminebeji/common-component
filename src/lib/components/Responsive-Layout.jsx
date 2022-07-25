import React from 'react'
import NavBar from '../parts/NavBar'
import SideBar from '../parts/SideBar'
import "./../styles/index.css"
import "./../styles/variables.css"

function Layout({ title, items, logo, children, sideBar, sideBarMeun, ...props }) {
    return (
        <div>
            <NavBar
                {...props}
                title={title || "responsive layout"} logo={logo || "JavaScript-logo.png"} items={items || [{ link: "/", title: "home" }]} />
            <div className={sideBar ? "sidbar_layout__container" : ""} >
                {sideBar && <SideBar
                    logo={logo || "JavaScript-logo.png"}
                    title={title || "responsive layout"}
                    sideBarMeun={sideBarMeun || [{
                        link: "/", title: "home",
                        children: [{ link: "/", title: "Home 2" },]
                    }, {
                        link: "/components", title: "Components",
                    }]}
                    {...props} ></SideBar>}
                <div className='container__body'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout