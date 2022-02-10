import React, { Component } from "react";
import Hero from "./components/Hero"
import "./sass/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabPanel from './components/Navigation';
import MenuPopupState from './components/NavigationSmall';
import useWindowSize from "./utils/useWindowSize";

export default function App() {
  const {width} = useWindowSize();
    return (
      <Router>
        {/* {width <800 && (
          <Route exact path="/" component={MenuPopupState}/>
          )} */}
        {/* {width >800 && ( */}
          <Route exact path="/" component={TabPanel}/>
          {/* )} */}

        <Route exact path="/" component={Hero}/>

      </Router>
    );
  
}
