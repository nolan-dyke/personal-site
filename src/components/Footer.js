import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { GrMail } from "react-icons/gr"

export default function Footer() {
    return (
        <footer>
            <a  href="mailto:nolan.g.dyke@gmail.com">
                <GrMail />
            </a> 
            <a href="http://www.linkedin.com/in/nolan-dyke" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/nolan-dyke" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://medium.com/@nolan.g.dyke" target="_blank" rel="noreferrer">
                <FaMedium />
            </a>
        </footer>
    )
}
