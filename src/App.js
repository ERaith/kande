import React, { Component } from "react";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import "./App.scss";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <HashRouter basename = "/">
        <Route path="/" component={Navigation}/>
        {/* <Route exact path="/" component={Hero}/> */}
        <Route exact path="/" component={About}/>
        <Route exact path="/" component={Projects}/>
        <Route exact path="/projects/:id" component={Project}/>
        <Route path="/" component={Footer}/>

      </HashRouter>
    );
  }
}
