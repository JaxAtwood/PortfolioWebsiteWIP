import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//page imports
import Home from "./components/Home";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Hire from "./components/Hire";
import Work from "./components/Work";
import About from "./components/About";
// import Cover from "./components/Cover";
import Footer from "./components/Footer";

//global styles set by React
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
         <Nav />
          {/* <Route path="/" component={Nav} /> */}
          {/* <Route exact path="/" component={Cover} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/hire" component={Hire} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/nav" component={Footer} /> */}
          <Footer />
        </Router>
    </div>
  );
}

export default App;
