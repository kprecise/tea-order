import React from "react";
import NavItem from "./navItems";
import "./index.scss";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <NavItem 
                    name="Home"
                    href="/"
                    alt="Home"
                />
                <NavItem 
                    name="About"
                    href="/"
                    alt="About"
                />  
            </ul>          
        </nav>
    )
};

export default Nav;