import image from './../assets/me.png';
import { aboutMe } from '../assets/content.js'
import styles from '../styles/mystyle.module.css';
import Title from './title.js'

export default function About() {
  return (
    <div >
      <Title title='About Me' accent='red'></Title>
      <div className={styles.center}>
        <img className={styles.picture} src={image} alt="" />
        <p>{aboutMe}</p>
      </div>
    </div>
  )
}
