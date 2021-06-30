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
        <section class="project-links">
                <a target="_blank" href="https://github.com/nolan-dyke/mod4_project/tree/master/dogfront">Front End</a>
                <a target="_blank" href="https://github.com/nolan-dyke/mod4_project/tree/master/dog_backend">Back End</a>
                <a target="_blank" href="https://www.youtube.com/watch?v=O6CBbB11tTg">Video Demo</a>
            </section>
            <section class="project-description">
                <p class="bolded">
                Find your next furry friend. All of Colorado's pups in need of a good home displayed in one convenient place.
                </p>
                <p>
                    The Rescue Dog Matcher was built in accordance with the Flatiron School's individual project requirements. It 
                    was built with the idea that the most efficient way for Colorado's dog rescues to reach the many dog-loving residents 
                    of the state would be through one central location on the internet. The site could serve the dogs and dog-lovers better 
                    by allowing users to filter the dogs displayed based on a few critical attributes. Users could then navigate to rescue websites 
                    to pursue adoption, or save a dog's information for later.
                </p>
                <p class="bolded">
                    Technical Design
                </p>
                <p>
                    The Rescue Dog Matcher's front end was built using ReactJS. React was essential in building this project in that its virtual DOM allowed 
                    for dynamic and efficient displays of dog information that was responsive to user filters. The backend was built using Ruby on Rails, which 
                    allowed for an API to interact with a SQL database to create users and save dog profiles. The Rails backend was also utilized to implement 
                    full autentication and authorization.
                </p>
                <p class="bolded">
                    Challenges
                </p>
                <p>
                    The most challenging facet of this project was utilizing react to display dog information dynamically. Fortunately, React makes state management 
                    efficient and allows for user filtering of information. 
                </p>
            </section>
        <section id="footer-wrapper">
            <Footer />
        </section>
    </div>
    );
}

export default dogmatcher;