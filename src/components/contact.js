import React from 'react';
import Title from './title.js'
import { contactMe } from '../assets/content.js'

export default function Contact() {
    return (
        <div style={{ paddingBottom: "50px" }}>
            <Title title='Get In Touch' accent='red'></Title>
            <div>
                <div>{contactMe}</div>
                <a href="mailto:gtcanada0730@gmail.com">gtcanada0730@gmail.com</a>
            </div>
        </div>
    )
}
