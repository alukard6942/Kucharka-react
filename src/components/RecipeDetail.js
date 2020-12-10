import React from 'react'

import Image from './RecipeFeed/Image'

class RecipeDetail extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			id : props.match.params.id,
			json : {},
			url : `https://cors-anywhere.herokuapp.com/https://spoonsprint.herokuapp.com/api/${props.match.params.id}`,
			image : 
			<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>,
		}

		fetch (this.state.url)
			.then( res => res.json())
			.then( out => {
				this.setState({json: out})
				this.setState({image: <Image 
					id = {this.state.id}
					width = '40%'
					height = '40%'
					/>})
			})
			.catch( err => console.log(err))
	}

	render () {
		return (
			<>
				<h1> {this.state.json.name} </h1>
				<p> {this.state.json.desc} </p>
				
				{this.state.image}
				
			</>
		)
	}
}

export default RecipeDetail;
