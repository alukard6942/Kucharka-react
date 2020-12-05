import React from 'react'

class RecipeDetail extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			id : props.match.params.id,
			json : {},
			url : `https://cors-anywhere.herokuapp.com/https://spoonsprint.herokuapp.com/api/${props.match.params.id}`,
		}

		fetch (this.state.url)
			.then( res => res.json())
			.then( out => this.setState({json: out}))
			.catch( err => console.log(err))
	}

	render () {
		return (
			<>
				<h1> {this.state.json.name} </h1>
				<h2> {this.state.json.desc} </h2>
			</>
		)
	}
}

export default RecipeDetail;
