import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles'
import './../index.css';
import c4report from './../assets/report.pdf';
import pvzGif from './../assets/pvz.gif';
import portIMG from './../assets/portfolio.png';
import acoIMG from './../assets/aco.png';
import c4IMG from './../assets/c4-1.png';
import dashboardIMG from './../assets/dashboard.png';


export default function Projects(props){
    var items = [
        {
            name: "Ant Colony Optimisation",
            description: "This was a project with Professor Alan Tsang from Carleton University School of Computer Science. The motive was to analyse the behaviour of the ACO algorithim and write a report about my findings. This project is still in the making but a proof-of-concept code has been produced which can be viewed publicly.",
            github:"https://github.com/coffeeboost/ACO",
            demo:"https://coffeeboost.github.io/ACO/",
            image:acoIMG,
            square:true
        },
        {
            name: "Connect 4 web app",
            description: "This was a semester long school project for COMP 2406 with Professor Dave McKenny. I implmented a full stack Connect 4 game where users can play and manage games and make friends. A full description can be viewed in the GitHub repo. We also had to write a project report defending our design choices.",
            github:"https://github.com/coffeeboost/connect4",
            report: c4report,
            image:c4IMG
        },
        {
            name: "Finincial Dashboard",
            description: "I got curious and bored in the summer between first and second year of University so I decided to make a dashboard to display bond yield metrics. I decided to make this because I was interested in (beating) stock markets. Bonds are especially interesting becauase they offer long term expectations of the market as opposed to daily fluctutations of the market.",
            github:"https://github.com/coffeeboost/Bond-Price-Visualization",
            demo:"https://bond-visualization-app.herokuapp.com",
            image:dashboardIMG
        },
        {
            name: "Plant vs Zombie game",
            description: "I collaborated with a friend in Grade 12 to make a PvZ replica. You can say that it was my first \"big\" project.",
            github:"https://github.com/coffeeboost/plantVsZombies",
            gif:pvzGif
        },
        {
            name: "Portfolio website",
            description: "I started making this website during a hackathon. I used React and Materia UI and deployed it with gh pages. I learnt a lot about designing, maintaining and deploying websites. I plan on making version 2 with Gatsby for better load times and SEO.",
            github:"https://github.com/coffeeboost/coffeeboost.github.io",
            image:portIMG
        },
        {
          name: "Smaller Projects",
          description: "Here is a list of smaller projects I played around with.\n- Web Bot (Python, BS4, Selenium)\n- Mobile app (React native, AWS, Firebase)\n- Machine Learning (Python, SciKit-learn)"
        }
        
    ]
    return (
        <Box >
            <h1 className="title">Projects</h1>
            <Carousel animation={"slide"} autoPlay={false} navButtonsAlwaysVisible={true}>
              {items.map( (item, i) => <Item key={i} item={item} />)}
          </Carousel>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    card:{
      padding: '0 60px',
    },
    image:{
        height:'300px',
        width:'500px'
    },
    square:{
        height:'300px',
        width:'300px'
    }
}))

function Item(props){
  const classes = useStyles();

    return (
        <Paper className={classes.card}>
            {"gif" in props.item ? <img className={props.item.square?classes.square:classes.image} src={props.item.gif} alt="loading..." />: null}
            {"image" in props.item ? <img className={props.item.square?classes.square:classes.image} src={props.item.image} alt="loading..." />: null}
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <div> 

              {"github" in props.item ? <Button  variant="outlined" color="secondary"  target="_blank" href={props.item.github}><GitHubIcon/> Repo</Button> : null}
              {"demo" in props.item ? <Button  variant="outlined" color="secondary" target="_blank" href={props.item.demo}><GitHubIcon/> Demo</Button> : null}
              {"report" in props.item ? <Button  variant="outlined"  color="secondary" target="_blank" href={props.item.report}><GitHubIcon/> Report</Button> : null}
            
            </div>
        </Paper>

    )
}
