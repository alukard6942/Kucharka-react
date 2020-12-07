import React from 'react'
import { withRouter } from 'react-router-dom';

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
			<div onClick = {this.onClick} >
				<b> {this.name} </b>
				<p> {this.desc} </p>
				<hr/>
			</div>
		)
	}
}

export default withRouter(RecipeDetail);
