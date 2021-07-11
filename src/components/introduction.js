import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import resume from './../assets/Resume.pdf';
import Button from '@material-ui/core/Button';
import Title from './title.js'
import styles from '../styles/mystyle.module.css';

export default function Introduction() {
  return (
    <div>
      <Title title='Gordon Tang'></Title>
      <div className={styles.center}>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gordon-tang-2023/"><LinkedInIcon color="secondary" /></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/coffeeboost"><GitHubIcon color="secondary" /></a>
        <a href="mailto:gtcanada0730@gmail.com"><MailIcon color="secondary" /></a>
      </div>
      <div className={styles.center}>
        <Button variant="contained" href={resume} target="_blank" color="secondary" className={styles.badge}>resume</Button>
      </div>
    </div>
  )
}
