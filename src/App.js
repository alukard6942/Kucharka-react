import logo from './logo.svg';
import './App.css';
import Footer from './Footer'

import React  from 'react';
import { useHistory } from "react-router-dom";

// wherever class or function this is a componet
class App extends React.Component{

	constuctor() {
		console.log("hello word")
    	this.routeChange = this.routeChange.bind(this)
		this.constructList("https://api.jsonbin.io/b/5fba52b090e7c66167f5678b/1")
		this.json = {}
  	}

  	routeChange( id ) {
		// handles redirectin to new page based on id
    	this.props.history.push("element")
  	}	
	// omitting the rest of the render function for brevity
	render() {

		// i dont get how this is not a string but no matter
		return (
		    <div className="row" onClick={this.routeChange}>
				<p> hello word </p>
			</div>
		);
	}

	constructList (url){
		console.log("hi")
		// download json from backend
		fetch(url)
		.then(res => res.json())
		.then((out) => {
		  	console.log('Checkout this JSON! ', out)
			this.json = out
			
			var l = this.json.length
			for (var j = 0; j < l; j ++){
				console.log(this.json[j])
			}
		})
		.catch(err => { throw err })
		}
}


export default App;
