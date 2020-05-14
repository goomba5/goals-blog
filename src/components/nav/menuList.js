import React from "react"
import { Link } from "gatsby"

const MenuList = (props) => {
    const menu = [
        { name: "Home", path: "/" }, 
        { name: "About", path: "/about" }, 
        { name: "Projects", path: "/projects" }, 
        { name: "Blog", path: "/blog" }, 
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div>
            <h1 className={props.style.banner}>Going For Goal</h1>
            <ul className={props.style.nav}>
                {menu.map(option => (
                    <li key={option.name}>
                        <Link to={option.path}>{option.name}</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default MenuList;