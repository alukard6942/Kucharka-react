import React from 'react'

class RecipeDetail extends React.Component {

	constructor(props) {
		super(props)

		if (props.id) 
			this.id = props.id
		else
			this.id = "default"


		let url = `backend/${this.id}`

		fetch (url)
			.then( res => res.json())
			.then( out => console.log(out))
			.catch( err => console.log(err))
	}

	render () {
		return (
			<>

			<h1> {this.id} </h1>
			<h2> todo </h2>

			</>
		)
	}
}

export default RecipeDetail;
