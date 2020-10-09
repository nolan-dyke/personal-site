import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projectInfo = [
    {
        "name": "PhonoMandarin",
        "image": "https://i9.ytimg.com/vi_webp/2d-KcMdh9ic/mq1.webp?sqp=CPjB_vsF&rs=AOn4CLAZsb7Knhk-1oYScD9HOAf2C1L4TQ",
        "frontend": "https://github.com/nolan-dyke/mod5_project",
        "backend": "https://github.com/nolan-dyke/capstone_backend",
        "hook": "Mandarin pronunciation verifier. Make sure when you say pen in Chinese, you're really saying pen in Chinese.",
        "description": "Utilizes Mozilla's Web Speech API  to implement Mandarin Chinese voice recognition. Implements ReactJS to provide user interface on the frontend, and a Django backend to create fully authencicated user profiles.",
        "link": "https://phonomandarin.web.app/login"
    },
    {
        "name": "Rescue Dog Matcher",
        "image": "https://i9.ytimg.com/vi_webp/O6CBbB11tTg/mq2.webp?sqp=CKTE_vsF&rs=AOn4CLDsLyWDBPwszq_TPgj2DatigYMyxw",
        "frontend": "https://github.com/nolan-dyke/mod4_project/tree/master/dogfront",
        "backend": "https://github.com/nolan-dyke/mod4_project/tree/master/dog_backend",
        "hook": "Find your next furry friend. All of Colorado's pups in need of a good home displayed in one convenient place.",
        "description": "Utilizes a ReactJS frontend to create a user interface that displayed, filtered, and linked dog profiles from multiple existing sites. Employed JWT and JSON Web Tokens to store encrypted user information client-side. Implemented a Rails backend to store user profiles and saved dog profiles.",
        "link": "https://www.youtube.com/watch?v=O6CBbB11tTg"
    },
    {
        "name": "Knits Generator",
        "image": "https://i9.ytimg.com/vi_webp/MUEmTA7dE8U/mq1.webp?sqp=CKTE_vsF&rs=AOn4CLBjqDoIHEMuWd4W337YvdA_k5sRzg",
        "frontend": "https://github.com/nolan-dyke/mod_3_project_frontend",
        "backend": "https://github.com/nolan-dyke/mod3_project_backend",
        "hook": "One size fits all no more. Get a unique knitting pattern generated to fit your exact measurement.",
        "description": "Utilizes vannila JavaScript to create a single page web application with the ability to create unique, line-by-line knitting patterns to exact specifications. Implemented HTML/CSS to create an optimized user interface. Implemented a Rails backend to authenticate users and save generated patterns.",
        "link": "https://www.youtube.com/watch?v=MUEmTA7dE8U"
    }
]

export default function projects() {
    const projectCardsDisplayed = projectInfo.map(project => <ProjectCard project={project} />)

    return (
        <div>
            <Navbar />
            <div id="project-container">
                {projectCardsDisplayed}
            </div>
            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    )
}
