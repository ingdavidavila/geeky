import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavScrollExample from '../NavBar/NavBar';
import '../Home' 
import Header from '../Header/Header';


function App() {
  return (
    <Router>
    <div className="App">
      <NavScrollExample />
      <Header />
        
        <Switch>
            <Route exact path="./home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
      <footer>
        <h4>Copyright 2023 </h4>
        <h4 className='brand'>Geeks & Jocks a Geeky Brand</h4>
      </footer>
    </div>
    </Router>
  );
}

export default App;
