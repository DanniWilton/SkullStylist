import React from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <Navbar />
    <Switch>
      <Route path= '/' exact component={Home} />
      <Route path='/Gallery' component={Gallery} />
      <Route path='/shop' component={Shop} />
      <Route path='/contact' component={Contact} />
    </Switch>
    </Router>    
    </ApolloProvider>
  );
}

export default App;
