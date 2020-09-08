import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { GrMail } from "react-icons/gr"

export default function Contacts() {
    return (
        <div id="contacts">
            <a href="https://github.com/nolan-dyke" target="_blank">
                <FaGithub />
            </a>
            <a href="http://www.linkedin.com/in/nolan-dyke" target="_blank">
                <FaLinkedin />
            </a>
            <a href="https://medium.com/@nolan.g.dyke" target="_blank">
                <FaMedium />
            </a>
            <a  href="mailto:nolan.g.dyke@gmail.com">
                <GrMail />
            </a> 
        </div>
    )
}
