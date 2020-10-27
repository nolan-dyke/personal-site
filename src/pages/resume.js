import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeImage from '../images/Resume10:26:20.png'

export default function resume() {
    return (
        <div>
            <Navbar />
            <div id="resume-image-section">
                <img id="resume-image" src={ResumeImage} alt="nolan-dyke-resume"/>
            </div>
            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    )
}
