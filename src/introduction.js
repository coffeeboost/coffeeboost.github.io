import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    screen:{
      display:"flex",
      minHeight: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection:"column"
    }
  }))
export default function Introduction(){
  const classes = useStyles()
  return(
      <div className={classes.screen}>
          <h1>Gordon Tang</h1>
          <div>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gordon-tang-2023/"><LinkedInIcon style={{fill: "green"}}/></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/coffeeboost"><GitHubIcon style={{fill: "green"}}/></a>
          <a href="mailto:gtcanada0730@gmail.com"><MailIcon style={{fill: "green"}}/></a>
          </div>
      </div>
  )
}
