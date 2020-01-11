import React, { useState } from 'react';
import { Link } from "gatsby";

import Divider from "@material-ui/core"
import styles from "./navigation.module.css"
import Avatar from '@material-ui/core/Avatar/Avatar';

const Navigation = (props) => {
    const menu = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Projects", path: "/projects" }, { name: "Blog", path: "/blog" }, { name: "Contact", path: "/contact" }];

    return (
        <div>
            <ul className={styles.sidenav}>
                {menu.map(option => (
                    <li key={option.name}>
                        <Link to={option.path}>{option.name}</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default Navigation;
