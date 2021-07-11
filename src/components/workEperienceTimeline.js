import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Title from './title.js'
import Tooltip from '@material-ui/core/Tooltip';

const longText = `Managed backend API in Java, Elasticsearch, Kubernetes, AWS`;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function WorkExperienceTimeline() {
  const classes = useStyles();

  return (
    <div>
      <Title title='Work Experience'></Title>
      <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2">
              May 2021 - Sep 2021
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Tooltip title={longText}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Search & Discovery Intern
                </Typography>
                <Typography>@Micro Focus</Typography>
              </Paper>
            </Tooltip>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
          </TimelineContent>
        </TimelineItem>

      </Timeline>

    </div>
  );
}
