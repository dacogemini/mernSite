import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Catalog from './components/pages/Catalog';


class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
          <div className="container-avatar">
          <img className="w-30 ml-auto mr-auto" src="https://lh3.googleusercontent.com/GCjBTEyVyw6qHzPWoSZJZlrU5PtFRmHStrcYc4mj4D1kTRnLm3kK9Ef01JkJZ9bYWsZ7wYAXSJ2YC1rajuYi7XGqUUk8hBiNIelDs83PsVW4mj6WVhZ48yO95_UUt2YqfKVmtFUGVA=w2400" style={{ width: 50 }} alt="avatar" />
          </div>
            {/* when location = { pathname: '/about' } */}
            {/* render <About/> */}
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/catalog'} className="nav-link"> Catalog </Link></li>
            <li><Link to={'/technical'} className="nav-link"> Technical </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          </ul>
          </nav>
          {/* A <Switch> will iterate over all of its children <Route> 
          elements and only render the first one that matches the current location.  */}
          <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route path='/contact' component={Contact} /> */}
              <Route path='/about' component={About} />
              <Route path='/catalog' component={Catalog} />
          </Switch>
      </div>
      </Router>
    );
  }
}
export default App;


