import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import knitimage from '../images/knit.png'

function knitsgenerator(props) {
    var style ={
        backgroundImage: `url(${knitimage})`
    };
    return (
        <div>
            <Navbar />
            <div class="hero-image" style={ style }>
                <div class="hero-text">
                    <h1 id="project-title">Knits Generator</h1>
                </div>
            </div>
            <section class="project-links">
                <a target="_blank" href="https://github.com/nolan-dyke/mod_3_project_frontend">Front End</a>
                <a target="_blank" href="https://github.com/nolan-dyke/mod3_project_backend">Back End</a>
                <a target="_blank" href="https://www.youtube.com/watch?v=MUEmTA7dE8U">Video Demo</a>
            </section>
            <section class="project-description">
                <p class="bolded">
                One size fits all no more. Get a unique knitting pattern generated to fit your exact measurement.
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

export default knitsgenerator;