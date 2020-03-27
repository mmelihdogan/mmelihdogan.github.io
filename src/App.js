import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/resume" exact component={Resume} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
