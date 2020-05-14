import React from 'react';

import MenuList from "./menuList"

import navStyles from "../nav/navigation.module.css"

const Navigation = (props) => {

    return (
        <MenuList style={navStyles} />
    )
}

export default Navigation;