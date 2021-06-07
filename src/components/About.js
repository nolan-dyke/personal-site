import React from 'react'
import SelfImage from '../images/headshot.png'

export default function About() {
    return (
        <div id='about'>
            <container id='index-title'>
                <div id='name-and-title'>
                    <p class="nolan">Nolan Dyke</p>
                    <p>Software Developer</p>
                </div>
                <img id='self-image' src={SelfImage} alt='self-image' />
            </container>
            <p class="bolded"> 
                Welcome to my powder blue corner of the internet.
                I'm a full stack developer, traveler, and nerd 
                based in Denver, CO.
            </p>
            <p>
                I am currently an associate software developer working for Infosys
                and living in Denver, Colorado. I am certified in the full Microsoft stack
                including the Entity Framework, ASP.NET MVC, and Microsoft SQL Server. Additionally, 
                I hold my AZ-900 certification in Microsoft Azure.
            </p>
            <p>
                In addition to working with the Microsoft stack and C#, I have experience working with 
                Java, JavaScript and React, Ruby and Rails, and Python. I have built full stack web applications
                and enterprise applications. I have worked with relational databases and Microsoft cloud services.
            </p>
            <p>
                I'm an avid learner and lover of beautiful design. My
                passions have taken me from studying biochemistry and molecular biology 
                to teaching English in Taiwan & China to developing useful 
                and beautiful apps. 
            </p>
            <p>
                I have a zeal for diving into new technologies, a 
                drive to improve the code that I write, and I care
                deeply about using my skills to make a positive 
                impact.
            </p>
        </div>
    )
}
