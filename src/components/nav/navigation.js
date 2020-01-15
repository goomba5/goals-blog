import React from 'react';

import TopNav from "./topnav"
import SideNav from "./sidenav"

import navStyles from "../nav/navigation.module.css"
import sidenavStyles from "../nav/sidenav.module.css"

const Navigation = (props) => {
    let width = window.innerWidth < 450;

    if (width) {
        return <TopNav style={sidenavStyles} />
    }

    return <TopNav style={navStyles} />
}

export default Navigation;