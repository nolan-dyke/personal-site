import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import phonoimage from '../images/phonomandarin.png'
import dogimage from '../images/dogmatcher.png'
import accountimage from '../images/Accountabilibuddies.png'
import knitimage from '../images/knit.png'
import greatwall from '../images/greatwall.png'
import cutedog from '../images/cute-dog.png'
import yarn from '../images/yarn.png'
import goals from '../images/goals.png'

const projectInfo = [
    {
        "name": "PhonoMandarin",
        "image": phonoimage,
        "frontend": "https://github.com/nolan-dyke/mod5_project",
        "backend": "https://github.com/nolan-dyke/capstone_backend",
        "hook": "Mandarin pronunciation verifier. Make sure when you say pen in Chinese, you're really saying pen in Chinese.",
        "description": "Utilizes Mozilla's Web Speech API  to implement Mandarin Chinese voice recognition. Implements ReactJS to provide user interface on the frontend, and a Django backend to create fully authencicated user profiles.",
        "link": "https://phonomandarin.web.app/login"
    },
    {
        "name": "Dog Matcher",
        "image": dogimage,
        "frontend": "https://github.com/nolan-dyke/mod4_project/tree/master/dogfront",
        "backend": "https://github.com/nolan-dyke/mod4_project/tree/master/dog_backend",
        "hook": "Find your next furry friend. All of Colorado's pups in need of a good home displayed in one convenient place.",
        "description": "Utilizes a ReactJS frontend to create a user interface that displayed, filtered, and linked dog profiles from multiple existing sites. Employed JWT and JSON Web Tokens to store encrypted user information client-side. Implemented a Rails backend to store user profiles and saved dog profiles.",
        "link": "https://www.youtube.com/watch?v=O6CBbB11tTg"
    },
    {
        "name": "Knits Generator",
        "image": knitimage,
        "frontend": "https://github.com/nolan-dyke/mod_3_project_frontend",
        "backend": "https://github.com/nolan-dyke/mod3_project_backend",
        "hook": "One size fits all no more. Get a unique knitting pattern generated to fit your exact measurement.",
        "description": "Utilizes vannila JavaScript to create a single page web application with the ability to create unique, line-by-line knitting patterns to exact specifications. Implemented HTML/CSS to create an optimized user interface. Implemented a Rails backend to authenticate users and save generated patterns.",
        "link": "https://www.youtube.com/watch?v=MUEmTA7dE8U"
    },
    {
        "name": "Accountabilibudies",
        "image": accountimage,
        "frontend": "https://github.com/ljg2gb/Accountabilibuddies",
        "backend": "https://github.com/nolan-dyke/mod2_project",
        "hook": "Having trouble accomplishing your goals in isolation? Join a group of like-minded buddies and keep each other on track.",
        "description": "Pair-programming project that uses a Vanilla ES6 Javascript frontend. Implements a Rails backend with custom routes. Deploys full CRUD actions on a complex relational database.",
        "link": "https://www.youtube.com/watch?v=ECMCJ1QmmPw&t=1s"
    },
]
const simpleProjectCards = [
    {
        "name": "PhonoMandarin",
        "subName": "汉语",
        "link": "https://phonomandarin.web.app/login",
        "page": "phonomandarin",
        "image": greatwall
    }, 
    {
        "name": "Dog Matcher",
        "link": "https://www.youtube.com/watch?v=O6CBbB11tTg",
        "page": "dogmatcher",
        "image": cutedog
    },
    {
        "name": "Knits Generator",
        "link": "https://www.youtube.com/watch?v=MUEmTA7dE8U",
        "page": "knitsgenerator",
        "image": yarn
    },
    {
        "name": "Accountabilibudies",
        "link": "https://www.youtube.com/watch?v=ECMCJ1QmmPw&t=1s",
        "page": "account",
        "image": goals
    }
]

export default function projects() {
    const projectCardsDisplayed = simpleProjectCards.map(project => <ProjectCard project={project} />)

    return (
        <div>
            <Navbar />
            <h1 id="project-title">Personal Projects</h1>
            <div id="project-container">
                {projectCardsDisplayed}
            </div>
            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    )
}
