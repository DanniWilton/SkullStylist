import React from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path= '/' exact component={Home} />
      {/* <Route path='/shop' component={Shop} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/contact' component={Contact} /> */}
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
