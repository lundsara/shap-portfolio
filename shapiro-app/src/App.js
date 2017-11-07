import React, { Component } from 'react';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './App.css';


class App extends Component {
render() {

  return (
    <div className='app'>

    <Router>
     <div>
      <Header />
         <Switch>

          <Route exact path="/" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />


         </Switch>
        <Footer />
      </div>
    </Router>

  </div>
    );
  }

}

export default App;
