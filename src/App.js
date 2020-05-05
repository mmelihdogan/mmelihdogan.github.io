import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

import Slide from 'react-reveal/Slide';


function App() {
  return (
    <Slide left>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={ContactForm} />
        </Switch>
      </Router>
    </Slide>
  );
}

export default App;
