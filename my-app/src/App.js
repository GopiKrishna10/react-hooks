import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import User from './pages/user';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname:'/about',
                  state:{
                    from:'root'
                  }
                }
              }> About</Link>
            </li>
            <li>
              <Link to="/user/john"> User</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:name" component={User} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
