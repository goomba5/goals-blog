import React from "react";
import { Link } from "gatsby"

const Footer = () => {
    const siteLinks = [
        { option: "About", path: "/about" },
        { option: "Blog", path: "/blog" },
        { option: "Projects", path: "/projects" },
    ]

    const theLabs = [
        { option: "Codesandbox.io", path: "https://codesandbox.io/u/goomba5" },
        { option: "Repl.it", path: "https://repl.it/@GaryHenderson" },
    ]

    const socialMedia = [
        { option: "GitHub", path: "https://github.com/goomba5" },
        { option: "LinkedIn", path: "/" },
        { option: "Twitter", path: "https://twitter.com/hendo_5" },
    ]

    return (
        <div className="footer">
            <div className="footer__menu-container">
                {/* Section 1 GFG: About, Blog, Contact */}
                <div className="footer__section">
                    <h2 className="footer__section-title">Site Links</h2>
                    <ul className="footer__list">
                        {siteLinks.map((item, index) => {
                            return <li key={index} className="footer__section-list-item"><Link to={item.path}>{item.option}</Link></li>
                        })}
                    </ul>
                </div>
                {/* Section 2 Testing Areas: Codesandbox.io, Repl.it */}
                <div className="footer__section">
                    <h2 className="footer__section-title">Coding Labs</h2>
                    <ul className="footer__list">
                        {theLabs.map((item, index) => {
                            return <li key={index} className="footer__section-list-item"><a href={item.path} target="_blank">{item.option}</a></li>
                        })}
                    </ul>
                </div>
                {/* Section 3 Contact: GitHub, LinkedIn, Twitter */}
                <div className="footer__section">
                    <h2 className="footer__section-title">Social Media</h2>
                    <ul className="footer__list">
                        {socialMedia.map((item, index) => {
                            return <li key={index} className="footer__section-list-item footer__social-list-item"><a href={item.path} target="_blank">{item.option}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;