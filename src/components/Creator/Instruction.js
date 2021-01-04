import React from 'react'

class Instraction extends React.Component {

	constructor (props) {
		super(props)


		this.ingr = props.inst

		this.handleChange = this.handleChange.bind(this)

		this.state = {
			name       : '',
			start      : '',
			duration   : '',
			description: '',
			empty      : true,
			child      : null,
		}
	}


	componentDidMount(){

		if (this.ingr){
			this.setState({
				name   		: this.ingr[0].name,
				description : this.ingr[0].desc,
				duration    : this.ingr[0].duration,  
			})

			if (this.ingr.length > 1){
				this.setState({ 
					empty : false,
					child : (<> <hr className = "feedHeader"/> <Instraction inst = {this.ingr.slice(1)}/> </> )
				})
			}
		}
	}


	handleChange (event) {

		// edit textfield
		let json = {}
		json[event.target.name] = event.target.value
		this.setState(json)

		// create new self
		if ( this.state.empty ) {
			this.setState({ 
				child : (<> <hr className = "feedHeader"/> <Instraction/>  </> ),
				empty : false,
			})
		}

	}


	/*
		<label>                          
	    	<input name="start" placeholder="start" size="5" type="text" value={this.state.start} onChange={this.handleChange} />       
		</label>
	*/

	render () { return (<>
		<div>
		<label>
	    	<input name="name" id="instraction"  placeholder="name"   type="text" value={this.state.name} onChange={this.handleChange} />       
	   	</label>                         
		<label>                         
	    	<input name="duration"   placeholder="duration"   size="5" type="text" value={this.state.duration} onChange={this.handleChange} />       
	   	</label>

		</div>
		<div>
			<textarea cols="50" name="description"   placeholder="description"   size="5" type="text" value={this.state.description} onChange={this.handleChange} /> 
		</div>

		{this.state.child}

	</>)}
}

export default Instraction
