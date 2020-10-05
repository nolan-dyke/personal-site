import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <section id='form-section'>
            <form method='POST' action='#'>
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
                {/* <input type='reset' value='Clear' /> */}
            </form>
            </section>
        )
    }
}
