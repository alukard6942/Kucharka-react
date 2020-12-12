import React from 'react'

import Ingrediance from './Creator/Ingrediance'
import Instraction  from './Creator/Instruction'


class Creator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url : `https://cors-anywhere.herokuapp.com/https://spoonsprint.herokuapp.com/api/`,
			//url : `https://spoonsprint.herokuapp.com/api/`,
			title 		: "",
			description : "",
			image 		: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		// edit textfield
		let json = {}
		json[event.target.name] = event.target.value
		this.setState(json)
	}

	handleSubmit(event) {

		// parse form 
		let targ = event.target
		let iter = 0

		let data = {
			title : targ[iter++].value,
			desc  : targ[iter++].value,
			// image : targ[iter++].value,
			ingr  : [],
			inst  : [],
		}

		iter = iter +1

		while (targ[iter].id == "ingrediance" ) {

			if (targ[iter].value) data.ingr.push({
				name   : targ[iter++].value,
				amount : targ[iter++].value,
				unit   : targ[iter++].value,
			})
			else iter+=3
		}

		while (targ[iter].id == "instraction" ) {

			if (targ[iter].value) data.inst.push({
				name   	  : targ[iter++].value,
				desc      : targ[iter++].value,
				startTime : targ[iter++].value,
				duration  : targ[iter++].value,
			})
			else iter+=4
		}

		console.log (data)


		// post data
		let xhr = new XMLHttpRequest(); 
        
        // open a connection 
        xhr.open("POST", this.state.url, true); 
  
        // Set the request header i.e. which type of content you are sending 
        // xhr.setRequestHeader("Content-Type", "application/json"); 
  
        // Create a state change callback 
        xhr.onreadystatechange = function () { 
            if (xhr.readyState === 4 && xhr.status === 200) { 
            } 
        }; 
  
        // Sending data with the request 
        xhr.send(JSON.stringify(data)); 

		event.preventDefault();
	}
	
	render() { return (	
	  	<form onSubmit={this.handleSubmit}>
	  		<div>
	  		<label>
	  			<h6>Title:</h6>
	  			<input name="title" placeholder="Title" type="text" value={this.state.title} onChange={this.handleChange} />       
	  		</label>
	  		</div>
	  		<div>
	  		<label>
	  			<h6>Description:</h6>
	  			<textarea name = "description" placeholder="description" rows="4" cols="50" type="text" value={this.state.description} onChange={this.handleChange} />       
	  		</label>
	  		</div>
	  		<div>
	  		<label>
	  			<h6>Image:</h6>
	  			<input type="text" name="image" placeholder="image" value={this.state.image} onChange={this.handleChange} />       
	  		</label>
	  		</div>
			<div>
				<h6>Ingrediance:</h6>
				<Ingrediance/>
			</div>
			<div>
				<h6>Instractions:</h6>
				<Instraction/>
			</div>

			<h6/>
	  		<input type="submit" value="Submit" />


	  	</form>
	  );
	}	
}

export default Creator
