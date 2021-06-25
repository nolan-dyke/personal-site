import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import dogimage from '../images/dogmatcher.png'

function dogmatcher(props) {
    var style ={
        backgroundImage: `url(${dogimage})`
    };
    return (
        <div>
        <Navbar />
        <div class="hero-image" style={ style }>
            <div class="hero-text">
                <h1 id="project-title">Dog Matcher</h1>
            </div>
        </div>

        <section id="footer-wrapper">
            <Footer />
        </section>
    </div>
    );
}

export default dogmatcher;