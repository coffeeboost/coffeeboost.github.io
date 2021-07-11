import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './components/introduction.js'
import Projects from './components/projects.js'
import About from './components/about.js'
import Contact from './components/contact.js'
import './styles/index.css';

function App() {

  return (
    <div>
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
