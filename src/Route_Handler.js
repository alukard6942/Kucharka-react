import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RecipeFeed from './components/RecipeFeed'
import RecipeDetail from './components/RecipeDetail'
import About from './components/About.js'

class Route_Handler extends Component {
  render() {
    return (
		<Router>
			<Navbar />
        	<div className="Router">
        		<Route exact path="/" component={RecipeFeed} />
				<Route exact path="/id/:id" component={RecipeDetail} />
				<Route exact path="/about" component={About} />
			</div>
        	<Footer />
		</Router>
    );
  }
}

export default Route_Handler;
