import React from 'react';
import './../index.css';
import image from './../assets/me.png';
import resume from './../assets/Resume.pdf';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    picture:{
        height:"200px",
        width:"200px",
        borderRadius: "50%",
        [theme.breakpoints.down('sm')]: {
          marginLeft: "auto",
          marginRight: "auto"
        }

    },
    content:{
      display:"flex",
      flexDirection:"column",
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    }
  }))
function aboutMe(){
  return `I am interested in studying Computer Science because I find it
       fascinating. When I was a child, I was absolutely attracted by computer
       games and later it was programming. I also like studying economics and cognitive science,
       but I chose computing as my career because of its opening, modernity and
       lots of challenges...`
}
export default function About(){
    const classes = useStyles()
    return(
        <div className={classes.test}>
            <h1 className="title">About Me</h1>
            <div className={classes.content}>
              <img className={classes.picture} src={image} alt=""/>
                <div>
                  <p>{aboutMe()}</p>
                  <Button variant="contained" color="secondary" href={resume} target="_blank">resume</Button>
                </div>
              </div>
        </div>
    )
}
