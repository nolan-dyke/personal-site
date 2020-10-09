import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <section id='form-section'>
            <form method='POST' action='https://getform.io/f/e4b3ad9b-497a-4ac6-ad9e-7ce5d9db21c6'>
                <label>
                    Name
                    <input type='text' name='name' />
                </label>
                <label>
                    Email
                    <input type='email' name='email'/>
                </label>
                <label>
                    Subject
                    <input type='text' name='subject' />
                </label>
                <label>
                    Message
                    <textarea name='message' rows='5' />
                </label>
                <button type='submit'>
                    Send
                </button>
            </form>
            </section>
        )
    }
}
