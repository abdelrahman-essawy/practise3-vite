import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="d-flex justify-content-evenly">
            <Link className="text-decoration-none" to='register'>Register</Link>
            <Link className="text-decoration-none" to='login'>Login</Link>
        </nav>
    )
}
