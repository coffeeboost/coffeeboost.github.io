import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import './../index.css';


const useStyles = makeStyles(theme => ({
    space:{
      padding: "100px 0px 200px"
    }
}))

function contactMe(){
  return `
  Second year computer science student looking for an internship to develop my skills as a software engineer.
  Available for 4 months or 8 months starting May 2021. Contact me via email
  `
}
export default function Contact(){
    const classes = useStyles()
    return(
        <div className={classes.space}>
            <h1 className="title">Get in Touch</h1>
            <p>{contactMe()} <a href="mailto:gtcanada0730@gmail.com">gtcanada0730@gmail.com</a></p>
        </div>
    )
}
