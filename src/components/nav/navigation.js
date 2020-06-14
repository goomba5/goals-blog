import React from 'react';
import { Link } from "gatsby"

const Navigation = (props) => {
    const menu = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Projects", path: "/projects" }, { name: "Blog", path: "/blog" }, { name: "Contact", path: "/contact" }];

    return (
        <div className={props.styles.navigation}>
            <ul className={props.styles.navigation__list}>
                {menu.map(option => (
                    <li key={option.name} className={props.styles.navigation__listItem} >
                        <Link to={option.path}>{option.name}</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default Navigation;