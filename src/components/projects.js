import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles'
import { items } from '../assets/content.js'
import Title from './title.js'

const h = '70%'
const w = '100%'
const useStyles = makeStyles(theme => ({
    card: {
        padding: '0 60px',
    },
    image: {
        height: h,
        width: w,
    },
    square: {
        height: h,
        width: h
    }
}))

function Item(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.card}>
            {"gif" in props.item ? <img className={props.item.square ? classes.square : classes.image} src={props.item.gif} alt="loading..." /> : null}
            {"image" in props.item ? <img className={props.item.square ? classes.square : classes.image} src={props.item.image} alt="loading..." /> : null}
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <div>

                {"github" in props.item ? <Button variant="outlined" color="secondary" target="_blank" href={props.item.github}><GitHubIcon /> Repo</Button> : null}
                {"demo" in props.item ? <Button variant="outlined" color="secondary" target="_blank" href={props.item.demo}><GitHubIcon /> Demo</Button> : null}
                {"report" in props.item ? <Button variant="outlined" color="secondary" target="_blank" href={props.item.report}><GitHubIcon /> Report</Button> : null}

            </div>
        </Paper>
    )
}

export default function Projects(props) {
    return (
        <Box >
            <Title title='Projects'></Title>
            <Carousel animation={"slide"} autoPlay={false} navButtonsAlwaysVisible={true}>
                {items.map((item, i) => <Item key={i} item={item} />)}
            </Carousel>
        </Box>
    )
}