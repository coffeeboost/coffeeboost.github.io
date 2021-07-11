import styles from '../styles/mystyle.module.css';

export default function Title(props) {
    return (
        <h1 className={props.accent == 'red' ? styles.red : styles.blue}>{props.title}</h1>
    )
}