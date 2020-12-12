import React from 'react'

import Ingrediance from './Creator/Ingrediance'
import Instraction  from './Creator/Instruction'

import { initVal, validIngr, validInst } from '../validation';


class Creator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url : `https://spoonsprint.herokuapp.com/api/`,
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

		let targ = event.target
		let iter = 0

		let data = initVal(targ[iter++].value, targ[iter++].value)

		iter = iter +1

		while (targ[iter].id === "ingrediance" ) {

			if (targ[iter].value) 
				data.ingr.push( validIngr(targ[iter++].value, targ[iter++].value, targ[iter++].value));
			else iter+=3
		}

		while (targ[iter].id === "instraction" ) {

			if (targ[iter].value) 
				data.inst.push(validInst(targ[iter++].value, targ[iter++].value, targ[iter++].value, targ[iter++].value));
			else iter+=4
		}

		console.log (data)
		
		const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin' : '*'
			},
			body: JSON.stringify(data)
		};

		fetch(
			this.state.url,
			requestOptions
		).then((res, err)=>(console.log(res + " : " + err)));

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

			<p></p>
	  		<input type="submit" value="Submit" />


	  	</form>
	  );
	}	
}

export default Creator
