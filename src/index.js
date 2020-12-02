import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './introduction.js'
import Projects from './projects.js'
import About from './about.js'
import Contact from './contact.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    display: 'flex',
    flexDirection:'column',
    height:"100%",
    background: "linear-gradient(#e55d87, #5fc3e4)"
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.alignItemsAndJustifyContent}>
      <Introduction/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
