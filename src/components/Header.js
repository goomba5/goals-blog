import React from "react";
import Navigation from "../components/nav/navigation";
import headerStyles from "../components/nav/header.module.css"

const Header = () => {
    return (
        <div className="home-page__header">
            <h1 className="home-page__title">Going For Goal</h1>
            <Navigation styles={headerStyles} />
        </div>
    )
}

export default Header;