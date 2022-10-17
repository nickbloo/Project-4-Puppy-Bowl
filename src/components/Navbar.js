import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link className="navbar-element" to="settings">Settings</Link>
            <Link className="navbar-element" to="about">About</Link>
            <Link className="navbar-element" to="puppies">Puppies</Link>
        </nav>
    )
};

export default Navbar;