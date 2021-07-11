import Title from './title.js'
import { contactMe } from '../assets/content.js'

export default function Contact() {
    return (
        <div>
            <Title title='Get In Touch' accent='red'></Title>
            <p>{contactMe} <a href="mailto:gtcanada0730@gmail.com">gtcanada0730@gmail.com</a></p>
        </div>
    )
}
