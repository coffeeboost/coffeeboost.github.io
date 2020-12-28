import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './components/introduction.js'
import Projects from './components/projects.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    display: 'flex',
    flexDirection:'column',
    height:"100%",
    background: "linear-gradient(#e55d87, #5fc3e4)"
  },
  addColor: {
    background: "linear-gradient(#5fc3e4 90%, #e55d87)"
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.alignItemsAndJustifyContent}>
      <Introduction/>
      <div className={classes.addColor}>
      <About/>
      <Projects/>
      <Contact/>
      </div>
     
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
