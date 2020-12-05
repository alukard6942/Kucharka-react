import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import App from './App'
import Recipe from './Recipe'

class Route_Handler extends Component {
  render() {
    return (
        <Router>
			<Header/>
          <div className="Router">
            <Route exact path="/" component={App} />
			<Route exact path="/id/:id" component={Recipe} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default Route_Handler;
