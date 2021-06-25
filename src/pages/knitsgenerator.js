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

            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    );
}

export default knitsgenerator;