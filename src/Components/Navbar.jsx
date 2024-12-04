import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/github">Github</Link>
        </>
    );
}