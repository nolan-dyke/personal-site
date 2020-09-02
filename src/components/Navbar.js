import React from 'react'
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>ABOUT</Link>
            <Link to='/projects/'>PROJECTS</Link>
            <Link to='/resume/'>RESUME</Link>
            <Link to='/contact/'>CONTACT</Link>
        </nav>
    )
}
