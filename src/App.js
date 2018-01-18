import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import ReportList from "./components/mainPage/ReportList";
import Report from "./components/report/Report";

import Header from "./components/common/Header";


export default class App extends Component {
  render() {
    return (

      <div className="container-fluid main-page">
        <Header />
        <Switch>
          <Route exact path="/" component={ReportList} />
          <Route path="/create" component={Report} />
        </Switch>
      </div>

    );
  }
}

