import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer.js'
import ContactForm from '../components/ContactForm.js'

export default function contact() {
    return (
        <>
            <Navbar />
            <ContactForm />
            <section id="footer-wrapper">
                <Footer />
            </section>
        </>
    )
}
