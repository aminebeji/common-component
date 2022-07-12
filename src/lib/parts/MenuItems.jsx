const MenuItems = ({ items }) => {
    return items.map((item, key) => {
        return <li key={key} className='menu__item'>
            <a className='menu__item' href={item.link} > {item.title} </a>
        </li>
    })
}

export default MenuItems