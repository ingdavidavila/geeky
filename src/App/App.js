import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import Header from '../Components/Header/Header';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Features/Footer/Footer';


function App() {
  return (
    <div className="App">
   <Router >
      <Header />
       <main>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
       </main>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
