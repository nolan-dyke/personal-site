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

            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    );
}

export default account;