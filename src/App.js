import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

// import './App.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import  Navigation from './components/Navigation';

import Slide from 'react-reveal/Slide';


function App() {
  return (
    <Slide left>
    <Router>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
    </Slide>
  );
}

export default App;
