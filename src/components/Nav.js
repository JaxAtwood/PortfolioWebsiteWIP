import React from "react";

import { NavLink } from "react-router-dom"
import { NavBox } from "../styling/NavStyle";

export default function Nav() {
    return (
        <NavBox>
            <NavLink path to="/">Welcome</NavLink>
            <NavLink path to="/about">About Me</NavLink>
            <NavLink path to="/work">My Work</NavLink>
            <NavLink path to="/hire">Hire Me</NavLink>
            <NavLink path to="/contact">Contact</NavLink>
        </NavBox>
    )
}
