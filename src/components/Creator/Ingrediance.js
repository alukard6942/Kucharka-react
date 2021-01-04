import React from 'react'

class Ingrediance extends React.Component {

	constructor (props) {
		super(props)

		this.ingr = props.ingr

		this.handleChange = this.handleChange.bind(this)

		//neviem proste v props je prazdny array :(
		console.log(props)

		this.state = {
			name   : "",
			amount : "",
			unit   : "",
			empty  : true,
			child  : null,
		}


			
	}

	componentDidMount(){

		if (this.ingr){
			if(this.ingr[0]){
				this.setState({
				name   : this.ingr[0].name,
				amount : this.ingr[0].amount,
				unit   : this.ingr[0].unit,  
			})
			}
			

			if (this.ingr.length > 1){
				this.setState({ 
					empty : false,
					child : (<> <hr className = "feedHeader"/> <Ingrediance ingr = {this.ingr.slice(1)}/> </> )
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
				child : (<> <hr className = "feedHeader"/> <Ingrediance/> </> ),
				empty : false,
			})
		}
			
		
	}

	render () { return (<>
		<div>
		<label>
	    	<input name="name" id="ingrediance"  placeholder="name"   type="text" value={this.state.name} onChange={this.handleChange} />       
	   	</label>                         
		<label>                          
	    	<input name="amount" placeholder="amount" size="5" type="text" value={this.state.amount} onChange={this.handleChange} />       
	   	</label>                        
		<label>                         
	    	<input name="unit"   placeholder="unit"   size="5" type="text" value={this.state.unit} onChange={this.handleChange} />       
	   	</label>
		</div>

		{this.state.child}

	</>)}
}

export default Ingrediance
