import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import accountimage from '../images/Accountabilibuddies.png'

function account(props) {
    var style ={
        backgroundImage: `url(${accountimage})`
    };
    return (
        <div>
            <Navbar />
            <div class="hero-image" style={ style }>
                <div class="hero-text">
                    <h1 id="project-title">Accountabilibuddies</h1>
                </div>
            </div>
            <section class="project-links">
                <a target="_blank" href="https://github.com/ljg2gb/Accountabilibuddies">Front End</a>
                <a target="_blank" href="https://github.com/nolan-dyke/mod2_project">Back End</a>
                <a target="_blank" href="https://www.youtube.com/watch?v=ECMCJ1QmmPw&t=1s">Video Demo</a>
            </section>
            <section class="project-description">
                <p class="bolded">
                Having trouble accomplishing your goals in isolation? Join a group of like-minded buddies and keep each other on track.
                </p>
                <p>
        
                </p>
                <p class="bolded">
                    Technical Design
                </p>
                <p>

                </p>
                <p class="bolded">
                    Challenges
                </p>
                <p>

                </p>
            </section>
            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    );
}

export default account;