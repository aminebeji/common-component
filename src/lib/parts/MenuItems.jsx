const MenuItems = ({items}) => {
    return items.map((item, key) => {
        return <li key={key} className='menu__item'>
            <a href={item.link} > {item.title} </a>
        </li>
    })
}

export default  MenuItems