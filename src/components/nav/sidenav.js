import React from "react"
import { Link } from "gatsby"

const SideNav = (props) => {
    const menu = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Projects", path: "/projects" }, { name: "Blog", path: "/blog" }, { name: "Contact", path: "/contact" }];

    return (
        <div>
            <ul className={props.style.nav}>
                {menu.map(option => (
                    <li key={option.name}>
                        <Link to={option.path}>{option.name}</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default SideNav;