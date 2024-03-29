import React from 'react'
import { withRouter } from 'react-router-dom';

import Description from './Description.js'
import Image from './Image'
import ViewsF from './ViewsF'

class RecipeDetail extends React.Component {

	constructor(props) {
		super(props)

		// binding is very nice and not at all anoing thing you just have to do coz fuck you
		this.onClick = this.onClick.bind(this)

		this.name = props.data.name
		this.desc = props.data.desc
		this.id   = props.data._id
		this.views = props.data.views
		this.date = props.data.timestamp
		this.fav = props.data.favourite

	}

	onClick () {
		this.props.history.push ( `/id/${this.id}` )
	}

	render () {
		return (
			<>
			<div className = "row ListElement" onClick = {this.onClick} >
				<Image 
					id     = {this.id} 
					width  = "80"
					height = "80"
				/>
				<Description 
					name = {this.name}
					desc = {this.desc}
				/>
				<ViewsF
					views = {this.views}
					fav = {this.fav}
				/>
			</div>
			</>
		)
	}
}

export default withRouter(RecipeDetail);
