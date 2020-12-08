import React from 'react'
import { withRouter } from 'react-router-dom';

import Description from './Description.js'

class RecipeDetail extends React.Component {

	constructor(props) {
		super(props)

		// binding is very nice and not at all anoing thing you just have to do coz fuck you
		this.onClick = this.onClick.bind(this)

		this.name = props.data.name
		this.desc = props.data.desc
		this.id   = props.data._id

	}

	onClick () {
		this.props.history.push ( `/id/${this.id}` )
	}

	render () {
		return (
			<>
			<div className = "row" onClick = {this.onClick} >
				<img src = "https://i.imgur.com/CUG0Aof.jpeg" alt = "food prewie" width="90" height = "80" />
				<Description 
					name = {this.name}
					desc = {this.desc}
				/>
			</div>
			</>
		)
	}
}

export default withRouter(RecipeDetail);
