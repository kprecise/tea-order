import React from "react";

const NavItem = (props) => {
    return (
        <li className="navItem">
            <a href={props.href} name={props.alt}>
                {props.name}
            </a>
        </li>
    )
};

export default NavItem;