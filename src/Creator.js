import React from 'react'

class Creator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		console.log (event)
		this.setState({value: event.target.value});  
	}

	handleSubmit(event) {
		console.log (event)
		event.preventDefault();
	}
	
	render() {
	  return (	
	    <form onSubmit={this.handleSubmit}>
		  <div>
	      <label>
	        <h6>Title:</h6>
	        <input type="text" value={this.state.title} onChange={this.handleChange} />       
		  </label>
		  </div>
		  <div>
	      <label>
	        <h6>Description:</h6>
	        <textarea rows="4" cols="50" type="text" value={this.state.desc} onChange={this.handleChange} />       
		  </label>
		  </div>
		  <div>
	      <label>
	        <h6>Image:</h6>
	        <input type="text" value={this.state.desc} onChange={this.handleChange} />       
		  </label>
		  </div>
	      <input type="submit" value="Submit" />
	    </form>
	  );
	}	
}

export default Creator
