import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import greatwall from '../images/greatwall.png'

function phonomandarin(props) {
    var style ={
        backgroundImage: `url(${greatwall})`
    };
    return (
        <div>
            <Navbar />
            <div class="hero-image" style={ style }>
                <div class="hero-text">
                    <h1 id="project-title">Phono Mandarin</h1>
                </div>
            </div>
            <section class="project-links">
                <a target="_blank" href="https://github.com/nolan-dyke/mod5_project">Front End</a>
                <a target="_blank" href="https://github.com/nolan-dyke/capstone_backend">Back End</a>
                <a target="_blank" href="https://phonomandarin.web.app/login">Live</a>
                <a target="_blank" href="https://www.youtube.com/watch?v=2d-KcMdh9ic&ab_channel=NolanDyke">Video Demo</a>
            </section>
            <section class="project-description">
                <p class="bolded">
                Mandarin pronunciation verifier. Make sure when you say pen in Chinese, you're really saying pen in Chinese.
                </p>
                <p>
                    Phono Mandarin was created to fulfill the capstone requirement for the Denver Flatiron School's Software
                    Engineering program. The full stack web application was inspired by my traveling experience trying to learn Mandarin
                    Chinese while teaching English in Beijing, China. Though I loved the opportunity to immerse myself in the language 
                    and culture, while also learning one of the most difficult languages for English-speakers to learn, I discovered a lack 
                    of resources to practice Chinese pronunciation, particularly the tones. I craved a technology that gave me instant feedback
                    on my tonal pronunciation and, once I was given the opportunity to explore new technologies for my Flatiron program, I had 
                    the idea to use machine learning and web design to create such a technology.
                </p>
                <p>
                    Phono Mandarin uses voice recognition to determine whether a user has pronounced a word or phrase correctly. 
                    Upon signing in, a user is able to choose from a deck of Chinese flashcards. Each flashcard comes from a 
                    set of words for the HSK1, the first level of Chinese language learning as approved by the People's Republich of China.
                    The flashcard contains the Chinese character(s), the romanized pronunciation, along with tonal information, and a definition. 
                    To practice, press ther record button on the flashcard. The web app will then use your computer's microphone to listen 
                    for pronunciation, pass that information to a machine learning service, and compare the results with the information on the flashcard. 
                    If the information matches, the falshcard will turn green. If it does not match, the flashcard will become red. The user then has 
                    the opportunity to save that flashcard and try again later by accessing it from the saved flashcard deck.
                </p>
                <p class="bolded">
                    Technical Design
                </p>
                <p>
                    Phono Mandarin's front end and user interface is built with ReactJS and its backend and API are built using Django. 
                    Voice recognition is powered by Mozilla's open-source Web Speech API. The application makes use of authentication and authorization 
                    by using web tokens. The front end is hosted on Firebase and the back end is currently being hosted by Heroku. 
                </p>
                <p class="bolded">
                    Challenges
                </p>
                <p>
                    The most key feature of this app is its ability to employ voice recognition. This is done throught Mozilla's Web Speech API 
                    and was from the beginning my biggest challenge. The open-source API is designed for very simple use cases and only designed to work 
                    with vanilla JavaScript. Since I was bound to create the user interface with React, finding ways to integrate the API became my 
                    most difficult challenge. I had to understand how React worked on a more fundamental level in order to leverage React's libraries 
                    to be compatible with Mozilla's API. This also took a deep dive into Mozilla's documents to configure the many possible settings to 
                    work for my particular use case.
                </p>
                <p>
                    In addition to the inherent difficulties of using a Web Speech API in React, I also needed access to a library of Chinese characters, 
                    their pronunciations, and definitions. Finding a dataset which only contained language-learning specific terms proved nearly impossible. 
                    Creating such a set by hand would be tedious and difficult to accomplish given my time constraints for the project. I was able to create 
                    a dataset by instead finding an entire Chinese to English dictionary in JSON format and writing logic using the Node.JS file system 
                    to edit it down to a sample size that met my needs. I wrote a blog post on how to use the Node.JS file system for such purposes, 
                    which was published by JavaScript in Plain English and remains my most-read blog post.
                </p>
                <p>
                    My final challenge in creating this app was self-imposed. I challenged myself to learn a new framework and a new programming language 
                    in the three weeks I was given to finish my capstone project. I did this by learning Python and using the Django framework to create my 
                    API to communicate with a PostgreSQL database. Though this was difficult to accomplish given my time constraints I found the experience 
                    rewarding and Python a fantastic language to work in.
                </p>
            </section>
            <section id="footer-wrapper">
                <Footer />
            </section>
        </div>
    );
}

export default phonomandarin;